<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // Validate request
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => [
                'required',
                'string',
                'min:8',
                'max:30',
                'regex:/[A-Z]/', // Uppercase
                'regex:/[a-z]/', // Lowercase
                'regex:/[0-9]/', // Number
                'regex:/[^A-Za-z0-9]/', // Special char
            ],
        ], [
            'password.regex' => 'Password must include uppercase, lowercase, number, and special character.'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'fail',
                'errors' => $validator->errors()
            ], 422);
        }

        // Create user
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // 2) Generate OTP
        $otp = rand(100000, 999999);  // 6-digit OTP
        $user->email_otp = $otp;
        $user->email_otp_expires_at = now()->addMinutes(10);
        $user->save();

        // 3) Send OTP email
        Mail::raw("Your verification OTP is $otp", function ($message) use ($user) {
            $message->to($user->email)
                ->subject('Verify Your Email');
        });

        return response()->json([
            'status' => 'success',
            'message' => 'OTP sent to your email. Please verify to complete registration.',
            'user_id' => $user->id
        ], 201);

    }


    public function verifyEmailOtp(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'otp' => 'required'
        ]);

        $user = User::find($request->user_id);

        if ($user->email_otp == $request->otp && now()->lt($user->email_otp_expires_at)) {
            $user->is_email_verified = true;
            $user->email_otp = null;
            $user->email_otp_expires_at = null;
            $user->save();

            return response()->json(['status' => 'success', 'message' => 'Email verified successfully.']);
        }

        return response()->json(['status' => 'fail', 'message' => 'Invalid or expired OTP'], 400);
    }

}


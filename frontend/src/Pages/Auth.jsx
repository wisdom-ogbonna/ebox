import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

export default function Auth() {
    const [isSignup, setIsSignup] = useState(false);

    return (
        <div className="bg-gray-200 h-[100vh] m-0 flex flex-col gap-7 justify-center p-0 text-center items-center box-border w-full select-none">
                <h1 className="font-extrabold text-black text-4xl backdrop-blur-3xl rounded-2xl p-5">E-BOX</h1>
            <div className="bg-white w-fit p-8 m-2 flex flex-col gap-3 border-black border-1 shadow-md shadow-black text-center items-center rounded-2xl">
                {isSignup ? <Signup /> : <Login />}

                <div>
                    {isSignup ? (
                        <p>
                            Already have an account?{" "}
                            <Link
                                className="text-black hover:underline cursor-pointer"
                                onClick={() => setIsSignup(false)}
                            >
                                Log In
                            </Link>
                        </p>
                    ) : (
                        <p>
                            Don't have an account?{" "}
                            <Link
                                className="text-black hover:underline cursor-pointer"
                                onClick={() => setIsSignup(true)}
                            >
                                Sign Up
                            </Link>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
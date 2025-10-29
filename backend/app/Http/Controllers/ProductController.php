<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ProductController extends Controller
{
public function store(Request $request)
{
    $validated = $request->validate([
        'name'           => 'required|string|max:255',
        'description'    => 'nullable|string',
        'type'           => 'required|in:physical,digital',
        'price'          => 'required|numeric|min:0',
        'stock_quantity' => 'required|integer|min:0',
        'image'          => 'nullable|image|mimes:jpg,jpeg,png|max:2048', // ✅ image validation
    ]);

    if ($request->hasFile('image')) {
        // Save in storage/app/public/products
        $path = $request->file('image')->store('products', 'public');
        $validated['image'] = $path;
    }

    $product = Product::create($validated);

    return response()->json([
        'message' => 'Product created successfully',
        'data'    => [
            'id'            => $product->id,
            'name'          => $product->name,
            'description'   => $product->description,
            'type'          => $product->type,
            'price'         => $product->price,
            'stock_quantity'=> $product->stock_quantity,
            'image'         => $product->image ? asset('storage/' . $product->image) : null, // ✅ full URL
        ],
        'buy_link' => url('/api/products/' . $product->id . '/buy') 
    ], 201);
}


// helper for full image URLs
private function formatProduct($product)
{
    return [
        'id'            => $product->id,
        'name'          => $product->name,
        'description'   => $product->description,
        'type'          => $product->type,
        'price'         => $product->price,
        'stock_quantity'=> $product->stock_quantity,
        'image'         => $product->image ? asset('storage/' . $product->image) : null,
        'created_at'    => $product->created_at,
        'updated_at'    => $product->updated_at,
         'buy_link'      => url('/api/products/' . $product->id . '/buy'),
    ];
}

        // Get all products
public function index()
{
    $products = Product::all()->map(fn($p) => $this->formatProduct($p));
    return response()->json($products);
}

    // Get a single product by ID
public function show($id)
{
    $product = Product::findOrFail($id);
    return response()->json($this->formatProduct($product));
}

public function buy($id)
{
    $product = Product::findOrFail($id);

    $customerEmail = 'customer@example.com'; // replace with real user email

    // Initialize Paystack transaction
    $response = Http::withHeaders([
        'Authorization' => 'Bearer ' . env('PAYSTACK_SECRET'),
        'Content-Type'  => 'application/json'
    ])->post(env('PAYSTACK_BASE') . '/transaction/initialize', [
        'email'        => $customerEmail,
        'amount'       => $product->price * 100, // Paystack expects kobo
        'currency'     => 'NGN',
        'callback_url' => url('/api/products/' . $product->id . '/callback'),
        'metadata'     => [
            'product_id'   => $product->id,
            'product_name' => $product->name,
        ],
    ]);

    $data = $response->json();

    if (!$data['status']) {
        return response()->json([
            'message' => 'Payment initialization failed',
            'error'   => $data['message']
        ], 500);
    }

    return response()->json([
        'message'      => 'Proceed to purchase',
        'product'      => $product,
        'payment_link' => $data['data']['authorization_url'] // ✅ real Paystack link
    ]);
}

}

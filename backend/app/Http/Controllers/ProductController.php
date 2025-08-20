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
        ]);

        $product = Product::create($validated);

     return response()->json([
        'message' => 'Product created successfully',
        'data'    => $product,
        'buy_link' => url('/api/products/' . $product->id . '/buy') 
    ], 201);
    }

        // Get all products
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    // Get a single product by ID
    public function show($id)
    {
        $product = Product::findOrFail($id);
        return response()->json($product);
    }

    public function buy($id)
{
    $product = Product::findOrFail($id);

    // For now, just return a dummy payment link
    return response()->json([
        'message' => 'Proceed to purchase',
        'product' => $product,
        'payment_link' => 'https://paystack.com/pay/dummy-' . $product->id
    ]);
}
}

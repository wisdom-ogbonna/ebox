<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Purchase {{ $product->name }}</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 min-h-screen flex items-center justify-center">
  <div class="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full">
    <h1 class="text-2xl font-bold mb-4 text-center">{{ $product->name }}</h1>
    
    <div class="flex flex-col md:flex-row gap-6">
      @if($product->image)
        <img src="{{ asset('storage/'.$product->image) }}" alt="{{ $product->name }}" class="w-48 h-48 object-cover rounded" />
      @endif

      <div class="flex-1">
        <p class="mb-2"><strong>Description:</strong> {{ $product->description }}</p>
        <p class="mb-2"><strong>Type:</strong> 
          <span class="px-2 py-1 text-xs rounded-full {{ $product->type=='physical' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800' }}">
            {{ $product->type }}
          </span>
        </p>
        <p class="mb-2"><strong>Price:</strong> ${{ $product->price }}</p>
        <p class="mb-2"><strong>Stock:</strong> {{ $product->stock_quantity }}</p>
        <p class="mb-2"><strong>Added:</strong> {{ date('F j, Y', strtotime($product->created_at)) }}</p>

        <a href="{{ $payment_link }}" class="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition">
          Pay Now
        </a>
      </div>
    </div>
  </div>
</body>
</html>

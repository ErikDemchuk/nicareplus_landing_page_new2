'use client';

import { useState } from 'react';

interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  price: string;
  currency: string;
  images: string[];
  variantId: string | null;
  available: boolean;
}

export default function ProductLanding({ product }: { product: Product }) {
  const [question, setQuestion] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  const handleAskQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    try {
      const response = await fetch('/api/test-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `Regarding ${product.title}: ${question}`,
          type: 'recommendation',
        }),
      });

      const data = await response.json();
      setAiResponse(data.response || 'No response received');
    } catch (error) {
      setAiResponse('Error getting AI response');
    } finally {
      setLoading(false);
    }
  };

  const handleCheckout = async () => {
    if (!product.variantId || !product.available) return;

    setCheckoutLoading(true);
    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ variantId: product.variantId }),
      });

      const data = await response.json();
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      alert('Error creating checkout. Please try again.');
      setCheckoutLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              {product.images[0] && (
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full rounded-lg"
                />
              )}
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <p className="text-2xl font-semibold mb-6">
                {product.currency} {product.price}
              </p>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={!product.available || checkoutLoading}
                className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {checkoutLoading
                  ? 'Creating Checkout...'
                  : product.available
                  ? 'Buy Now'
                  : 'Out of Stock'}
              </button>
            </div>
          </div>
        </div>

        {/* AI Question Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Ask About This Product</h2>
          <form onSubmit={handleAskQuestion} className="space-y-4">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask a question about this product..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !question.trim()}
              className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? 'Asking...' : 'Get AI Recommendation'}
            </button>
          </form>

          {/* AI Response */}
          {aiResponse && (
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <h3 className="font-semibold mb-2">AI Response:</h3>
              <p className="text-gray-700">{aiResponse}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 
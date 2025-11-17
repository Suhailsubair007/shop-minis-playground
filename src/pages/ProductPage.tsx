import { ProductLink, Touchable } from "@shopify/shop-minis-react";
import { useNavigateWithTransition } from "@shopify/shop-minis-react";
import { usePopularProducts } from "@shopify/shop-minis-react";

export default function ProductPage() {
  const navigate = useNavigateWithTransition();

  const { products, loading, error } = usePopularProducts({
    first: 20,
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="flex items-center px-4 py-3">
          <Touchable
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-10 h-10 -ml-2 rounded-lg hover:bg-gray-100 transition-colors"
            style={{ minHeight: "48px", minWidth: "48px" }}
          >
            <span className="text-2xl font-light text-gray-700">←</span>
          </Touchable>

          <div className="flex-1 ml-2">
            <h1 className="text-xl font-bold text-gray-900">Products</h1>
            {!loading && products && (
              <p className="text-sm text-gray-500">{products.length} items</p>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
            <p className="text-red-600 font-medium">Error loading products</p>
            <p className="text-red-500 text-sm mt-1">{error.message}</p>
          </div>
        )}

        {/* Product Grid - Using ProductLink */}
        {!loading && !error && products && (
          <div className="grid grid-cols-1 gap-4">
            {products.map((product) => (
              <ProductLink key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && (!products || products.length === 0) && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No products available</p>
          </div>
        )}
      </div>
    </div>
  );
}

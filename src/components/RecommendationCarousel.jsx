import {
  useRecentProducts,
  useRecommendedProducts,
} from "@shopify/shop-minis-react";

export default function RecommendationCarousel({ productId }) {
  // Fetch recent products
  const { recentProducts, loading: loadingRecent } = useRecentProducts({
    // optionally pass product ID to exclude current

    excludeIds: [productId],
    limit: 5,
  });

 const {products, loading, error} = useRecommendedProducts()

  console.log({products, loading, error})
  if (loadingRecent || loadingRecommended) {
    return <div>Loading recommendations…</div>;
  }

  const items = recommendedProducts?.length
    ? recommendedProducts
    : recentProducts;

  if (!items || items.length === 0) {
    return null; 
  }

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">You might like</h3>
      <div className="flex overflow-x-auto gap-4">
        {items.map((prod) => (
          <div key={prod.id} className="min-w-[140px]">
            <img
              src={prod.thumbnailUrl}
              alt={prod.title}
              className="w-full h-auto rounded-md"
            />
            <div className="mt-1 text-sm font-medium">{prod.title}</div>
            <div className="text-xs text-gray-600">${prod.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

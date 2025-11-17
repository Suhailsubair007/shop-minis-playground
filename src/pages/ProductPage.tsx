import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  usePopularProducts,
  ProductCard,
  List,
} from "@shopify/shop-minis-react";

export function ProductPage() {
  const { products, fetchMore } = usePopularProducts();

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: "start",
    },
    [AutoScroll({ speed: 0.8, stopOnInteraction: false })]
  );

  const gridProducts = products?.slice(6) || [];
  const productRows = gridProducts
    ? Array.from({ length: Math.ceil(gridProducts.length / 2) }, (_, i) =>
        gridProducts.slice(i * 2, i * 2 + 2)
      )
    : [];

  const carouselProducts = products?.slice(0, 6) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-pink-50 to-blue-100 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

      {/* Hero Header with Glassmorphism */}
      <div className="relative pt-12 pb-10 px-6">
        <div className="backdrop-blur-xl bg-white/40 rounded-3xl border border-white/50 shadow-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
            <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
              Premium Collection
            </span>
          </div>
          <h1 className="text-4xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-3 leading-tight">
            Discover Amazing Products
          </h1>
          <p className="text-base text-gray-700 flex items-center gap-2">
            <span className="text-xl">✨</span>
            Handpicked luxury items curated for you
          </p>
        </div>
      </div>

      {/* Trending Carousel Section */}
      {carouselProducts.length > 0 && (
        <div className="py-10 relative">
          <div className="px-6 mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse animation-delay-200" />
                <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse animation-delay-400" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 flex items-center gap-2">
                🔥 Trending Now
              </h2>
            </div>
            <p className="text-sm text-gray-600 ml-7">
              Limited edition picks selling fast
            </p>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 px-6">
              {[...carouselProducts, ...carouselProducts].map(
                (product, index) => (
                  <div
                    key={`${product.id}-${index}`}
                    className="flex-[0_0_80%] min-w-0 relative group"
                  >
                    {/* Glassmorphic Card */}
                    <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/70 to-white/40 rounded-3xl border-2 border-white/60 shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-purple-300/50">
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-full" />
                      
                      {/* Premium Badge */}
                      <div className="absolute top-4 right-4 z-20">
                        <div className="backdrop-blur-md bg-gradient-to-r from-purple-600/90 to-pink-600/90 text-white text-xs font-black px-4 py-2 rounded-full shadow-lg border border-white/30 animate-pulse">
                          ⚡ HOT
                        </div>
                      </div>

                      {/* Floating Gradient Orb */}
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full filter blur-2xl opacity-40" />
                      
                      <ProductCard
                        badgeVariant="secondary"
                        variant="default"
                        product={product}
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* Popular Products Section */}
      <div className="px-6 py-10">
        {/* Glassmorphic Section Header */}
        <div className="backdrop-blur-xl bg-white/50 rounded-3xl border border-white/60 shadow-2xl p-8 mb-8 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-1 w-8 bg-gradient-to-r from-transparent via-blue-500 to-cyan-500 rounded-full" />
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Best Sellers
            </span>
            <div className="h-1 w-8 bg-gradient-to-l from-transparent via-blue-500 to-cyan-500 rounded-full" />
          </div>
          
          <h2 className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
            Popular Products
          </h2>
          
          <p className="text-base text-gray-700 font-medium">
            Top picks flying off the shelves this week
          </p>
        </div>

        <List
          items={productRows}
          height={600}
          showScrollbar={false}
          fetchMore={fetchMore}
          renderItem={(productRow) => (
            <div className="grid grid-cols-2 gap-5 mb-5">
              {productRow.map((product) => (
                <div
                  key={product.id}
                  className="group relative"
                >
                  {/* Glassmorphic Product Card */}
                  <div className="backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/50 rounded-2xl border-2 border-white/60 shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-300/40 hover:rotate-1">
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                    
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-400/30 to-transparent rounded-bl-3xl" />
                    
                    <ProductCard product={product} />
                  </div>
                </div>
              ))}
            </div>
          )}
        />
      </div>

      {/* Animated Floating CTA */}
      <div className="fixed bottom-8 left-1/2 w-64 transform -translate-x-1/2 z-50 pointer-events-none">
        <div className="backdrop-blur-xl bg-gradient-to-r from-purple-600/90 via-pink-600/90 to-blue-600/90 text-white text-sm font-black px-6 py-3 rounded-full shadow-2xl border-2 border-white/40 animate-bounce flex items-center gap-2">
          <span className="animate-pulse">↓</span>
          Scroll to explore more
          <span className="animate-pulse">↓</span>
        </div>
      </div>
    </div>
  );
}


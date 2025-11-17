import {
  useCuratedProducts,
  usePopularProducts,
} from "@shopify/shop-minis-react";
import { useState } from "react";
import { Touchable } from "@shopify/shop-minis-react";
import { useNavigateWithTransition } from "@shopify/shop-minis-react";

export default function ProductRecommendationsDebug() {
  const { products , loading } = useCuratedProducts({handle: "ar-models", requiredTags: ["furniture"]});
  const { products: popular, loading: loadingPopular } = usePopularProducts({first: 5
  });
  const [copied, setCopied] = useState(null);
  const navigate = useNavigateWithTransition();

  if (loading || loadingPopular) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-pulse text-gray-500">Loading products...</div>
      </div>
    );
  }
//@ts-expect-error
  const copyToClipboard = async (text, type) => {
    try {
      // Try modern API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // iOS fallback - create temporary textarea
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.left = "-999999px";
        textarea.style.top = "-999999px";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
      }

      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
      alert("Failed to copy to clipboard");
    }
  };
//@ts-expect-error

  const ProductSection = ({ title, products, type }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 mb-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 mt-0.5">
            {products?.length || 0} products found
          </p>
        </div>
        <Touchable
          onClick={() =>
            copyToClipboard(JSON.stringify(products, null, 2), type)
          }
          className={`
            px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200
            ${
              copied === type
                ? "bg-green-500 text-white"
                : "bg-blue-600 text-white hover:bg-blue-700 active:scale-95"
            }
          `}
        >
          {copied === type ? "✓ Copied!" : "Copy JSON"}
        </Touchable>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
        <pre className="text-xs font-mono text-gray-800 whitespace-pre-wrap break-words">
          {JSON.stringify(products, null, 2)}
        </pre>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      <Touchable
        onClick={() => navigate(-1)}
        className="flex items-center justify-center w-10 h-10 -ml-2 rounded-lg"
        style={{ minHeight: "48px", minWidth: "48px" }}
      >
        <span className="text-xl">←</span>
      </Touchable>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Product Debug Console
          </h2>
          <p className="text-gray-600">
            Inspect and copy product data from Shopify hooks
          </p>
        </div>

        <ProductSection
          title="Curated Products"
          products={products}
          type="curated"
        />
        <ProductSection
          title="Popular Products"
          products={popular}
          type="popular"
        />
      </div>
    </div>
  );
}

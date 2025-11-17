import SizeGuide from "../components/SizeGuide";
import { Touchable } from "@shopify/shop-minis-react";
import { useNavigateWithTransition } from "@shopify/shop-minis-react";

export default function SizeGuidePage() {
  const navigate = useNavigateWithTransition();

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center px-4 py-3">
        <Touchable
          onClick={() => navigate(-1)}
          className="flex items-center justify-center w-10 h-10 -ml-2 rounded-lg"
          style={{ minHeight: "48px", minWidth: "48px" }}
        >
          <span className="text-xl">←</span>
        </Touchable>

        <div className="flex-1 ml-2">
          <h1 className="text-lg font-bold text-gray-900">Product Page</h1>
          <p className="text-xs text-gray-600">
            Shop Minis SDK Components & Hooks
          </p>
        </div>
      </div>

      {/* Centered Size Guide */}
      <div className="mt-10 flex flex-col justify-center items-center px-4 h-[500px]">
        <h1 className="text-xl font-bold mb-4">Size Guide</h1>

        <div className="w-full flex justify-center">
          <SizeGuide />
        </div>
      </div>
    </div>
  );
}

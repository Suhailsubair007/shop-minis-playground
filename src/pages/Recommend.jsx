import RecommendationCarousel from "../components/RecommendationCarousel";
import SizeGuide from "../components/SizeGuide";

export default function ProductPage() {
  const { id } = useParams();

  return (
    <div className="p-4">
      {/* your existing product UI */}
      <h1 className="text-xl font-bold mb-4">Product Details</h1>

      {/* existing Size Guide button */}
      <SizeGuide />

      {/* Recommendation carousel */}
      <RecommendationCarousel productId={id} />
    </div>
  );
}

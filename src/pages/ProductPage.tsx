import SizeGuide from "../components/SizeGuide";

export default function ProductPage() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Product Details</h1>
      {/* Size Guide Component */}
      <SizeGuide />
    </div>
  );
}

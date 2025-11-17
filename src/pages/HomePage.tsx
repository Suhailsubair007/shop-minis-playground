import {
  useNavigateWithTransition,
  Touchable,
} from "@shopify/shop-minis-react";

export function HomePage() {
  const navigate = useNavigateWithTransition();

  const navigationItems = [
    {
      title: "Size Guide Component",
      description: "Test the Size Guide modal component in a product page.",
      path: "/size-guide",
    },
    {
      title: "Test Components",
      description: "Test the responce from the shopify minis sdk.",
      path: "/test",
    },
    {
      title: "Product Page",
      description: "Product Listing page with size guide component.",
      path: "/product",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-6 justify-center items-center flex flex-col">
        <h1 className="text-3xl font-bold text-gray-900">Testing Features</h1>
        <p className="text-gray-600 mt-2">Shop Minis SDK Testing </p>
      </div>

      {/* Navigation Cards */}
      <div className="flex-1 p-4 space-y-4">
        {navigationItems.map((item) => (
          <Touchable
            key={item.path}
            onClick={() => navigate(item.path)}
            className="bg-white rounded-lg border border-gray-200 p-6"
            style={{ minHeight: "48px" }} // Ensure touch target compliance
          >
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <span className="text-gray-400 mt-1">→</span>
            </div>
          </Touchable>
        ))}
      </div>
    </div>
  );
}

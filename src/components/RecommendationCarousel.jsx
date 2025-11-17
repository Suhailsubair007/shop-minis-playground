import {
  Touchable,
  useNavigateWithTransition,
  Search,
} from "@shopify/shop-minis-react";

const SearchProducts = () => {
  const navigate = useNavigateWithTransition();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 px-4 mt-3 overflow-hidden">
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
          <div className="flex items-center px-4 py-3">
            <Touchable
              onClick={() => navigate(-1)}
              className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
              style={{ minHeight: "48px", minWidth: "48px" }}
            >
              <span className="text-2xl font-light text-gray-700">←</span>
            </Touchable>
          </div>
        </div>
        <div className="h-full">
          <Search
            placeholder="Search products"
            initialQuery=""
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchProducts;

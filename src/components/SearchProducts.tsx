import {
  Touchable,
  useNavigateWithTransition,
  Search,
} from "@shopify/shop-minis-react";

const SearchProducts = () => {
  const navigate = useNavigateWithTransition();
  return (
    <div className="flex flex-col min-h-screen bg-white mt-14">
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="flex items-center px-4 py-3">
          <Touchable
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-10 h-10 -ml-2 rounded-lg hover:bg-gray-100 transition-colors"
            style={{ minHeight: "48px", minWidth: "48px" }}
          >
            <span className="text-2xl font-light text-gray-700">←</span>
          </Touchable>
          <h1 className="ml-2 text-lg font-medium text-gray-900">Search</h1>
        </div>
      </div>

      <div className="flex-1">
        <Search
        
          showScrollbar={true}
          placeholder="Search products"
          initialQuery=""
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default SearchProducts;

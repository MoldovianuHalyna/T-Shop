import FilterSideBar from "../../components/FilterSideBar/FilterSideBar";
import Logo from "../../components/Logo/Logo";
import ProductCatalog from "../../components/ProductCatalog/ProductCatalog";
import SearchBar from "../../components/SearchBar/SearchBar";

const Homepage = () => {
  return (
    <div className="flex items-center ">
      <div className="bg-secondaryBg border flex flex-col items-start h-[100vh]  w-[20vw]">
        <Logo />
        <FilterSideBar />
      </div>
      <div>
        <SearchBar />
        <ProductCatalog />
      </div>
    </div>
  );
};

export default Homepage;

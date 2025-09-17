import FilterSideBar from "../../components/FilterSideBar/FilterSideBar";
import Logo from "../../components/Logo/Logo";
import ProductCatalog from "../../components/ProductCatalog/ProductCatalog";
import SearchBar from "../../components/SearchBar/SearchBar";

const Homepage = () => {
  return (
    <div className="flex items-center bc-background ">
      <Logo />
      <FilterSideBar />
      <SearchBar />
      <ProductCatalog />
    </div>
  );
};

export default Homepage;

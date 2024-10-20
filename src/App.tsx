import { Toaster } from "react-hot-toast";
import Product from "./components/Product";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <SearchBar />
      <Product />
      <Toaster />
    </>
  );
}

export default App;

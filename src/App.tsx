import "./App.css";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import { MealForYou } from "./components/MealForYou";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
function App() {


  return (
    <>
    <Intro />
      <MealForYou />
      <SearchBar />
      {/* <SearchResult meals={meals.meals} /> */}
      <Footer />
    </>
  );
}

export default App;

import LayoutDefault from "./layouts";
import HomePageIndex from "./pages/home";
import "../src/accessts/style/reset.css"
import "../src/accessts/style/common.css"



function App() {
  return (
    <div className="App">
      <LayoutDefault>
    <HomePageIndex/>
      </LayoutDefault>
    </div>
  );
}

export default App;

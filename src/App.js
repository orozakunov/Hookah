import CreateMix from "./components/CreateMix/CreateMix";
import Main from "./components/Main/Main";
import PopularMix from "./components/PopularMix/PopularMix";
import PopularTabacco from "./components/PopularTabacco/PopularTabacco";

function App() {
  return (
    <div className="App">
      <Main />
      <PopularTabacco />
      <CreateMix />
      <PopularMix />
    </div>
  );
}

export default App;

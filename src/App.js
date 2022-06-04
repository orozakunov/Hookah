import CreateMix from "./components/CreateMix/CreateMix";
import Main from "./components/Main/Main";
import Popularlaunge from "./components/Popularlaunge/Popularlaunge";
import PopularMix from "./components/PopularMix/PopularMix";
import PopularTabacco from "./components/PopularTabacco/PopularTabacco";

function App() {
  return (
    <div className="App">
      <Main />
      <PopularTabacco />
      <CreateMix />
      <PopularMix />
      <Popularlaunge />
    </div>
  );
}

export default App;

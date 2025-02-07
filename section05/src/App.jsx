import "./App.css";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";
import Register from "./components/register";

function App() {
  return (
    <>
      <Register />
    </>
  );
}

export default App;

// useState 가변적인 값을 관리할 때 화면에 랜더링 시키고 싶다면
// state를 이용해서 처리해야함

import "./App.css";
import Balance from "./components/Balance";
import Connect from "./components/Connect";
import Transfer from "./components/Transfer";
import Withdraw from "./components/Withdraw";

function App() {
  return (
    <>
      Fund Me App
      <Connect />
      <Balance />
      <Withdraw />
      {/* <!-- form --> */}
      <Transfer />
      {/* <!-- form --> */}
    </>
  );
}

export default App;

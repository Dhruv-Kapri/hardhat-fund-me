import { BackgroundImage, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./App.css";
import Balance from "./components/Balance";
import Connect from "./components/Connect";
import Transfer from "./components/Transfer";
import Withdraw from "./components/Withdraw";
import bgImage from "./assets/fundraising-background.png";

function App() {
  return (
    <>
      <MantineProvider>
        <BackgroundImage src={bgImage}>
          <div className="app">
            <div className="container">
              {/* Fund Me App */}
              <Connect />
              <Balance />
              {/* <!-- form --> */}
              <Transfer />
              {/* <!-- form --> */}
              <Withdraw />
            </div>
          </div>
        </BackgroundImage>
      </MantineProvider>
    </>
  );
}

export default App;

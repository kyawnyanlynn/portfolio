import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Education,
  Profile,
  Navbar,
  Works,
  StarsCanvas,
} from "./components";
const App = () => {
  if (process.env.NODE_ENV === "development") {
    console.warn = () => {};
  }

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <div className="relative z-0">
            <StarsCanvas />
            <Profile />
          </div>
        </div>
        <About />
        <Education />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

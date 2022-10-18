import Home from "./Home";
//import Nav from "./Nav";
import Project from "./Project";
import Skill from "./Skill";
import Contact from "./Contact";
import Services from "./Services";

export default function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Home />
      <Services />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
};

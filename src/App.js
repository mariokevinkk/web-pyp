import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Bayar from "./pages/Bayar";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Design from "./helpers/Design";
import Program from "./helpers/Program";
import Marketing from "./helpers/Marketing";
import freelance from "./pages/freelance";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/order" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/login" exact component={Contact} />
          <Route path="/order/design" exact component={Design} />
          <Route path="/order/program" exact component={Program} />
          <Route path="/order/marketing" exact component={Marketing} />
          <Route path="/pembayaran" exact component={Bayar} />
          <Route path="/freelance" exact component={freelance} />
        </Switch> 
        <Footer />
      </Router>
    </div>
  );
}

export default App;

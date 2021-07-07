import { Component } from "react";
import "./App.css";

import Routes from "./routes/Routes";
import Footer from "./layout/Footer/Footer";
import Navigation from "./layout/Navigation/Navigation";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Navigation />
        <main>
          <Routes />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;

import Container from "../Container/Container";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Stage1 from "../Stage1/Stage1";
import Stage2 from "../Stage2/Stage2";
import Stage3 from "../Stage3/Stage3";

import "./App.css";

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header className="app__header" />

        <Container className="app__container" Tag="main">
          <Switch>
            <Route path="/stage-1">
              <Stage1 />
            </Route>
            <Route path="/stage-2">
              <Stage2 />
            </Route>
            <Route path="/stage-3">
              <Stage3 />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
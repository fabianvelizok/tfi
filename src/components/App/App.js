import Container from "../Container/Container";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Stage1 from "../Stage1/Stage1";
import Stage2 from "../Stage2/Stage2";
import Stage3 from "../Stage3/Stage3";
import Annexes from "../Annexes/Annexes";

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
              <Stage1 title="Etapa 1" />
            </Route>
            <Route path="/stage-2">
              <Stage2 title="Etapa 2" />
            </Route>
            <Route path="/stage-3">
              <Stage3 title="Etapa 3" />
            </Route>
            <Route path="/annexes">
              <Annexes title="Anexos" />
            </Route>
            <Route path="/">
              <Home title="Inicio" />
            </Route>
          </Switch>
        </Container>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

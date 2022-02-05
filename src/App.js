import { BrowserRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Category from "./pages/Home/Category/Category";
import Header from "./pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">

      {/* <Header></Header> */}

      {/* react router dom */}

      {/* <BrowserRouter>
        <Switch>
          <Route path="/">
            <Header></Header>
          </Route>

          <Route path="/home">

          </Route>

        </Switch>
      </BrowserRouter> */}

      <Category></Category>

    </div >
  );
}

export default App;

import "@material-tailwind/react/tailwind.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./pages/Shared/Header/Header";
import Monitor from "./pages/components/monitor/monitor/Monitor";
import Home from "./pages/Home/Home/Home";
import NotFound from "./pages/Shared/NotFound/NotFound";
import Footer from "./pages/Shared/Footer/Footer";
import MonitorDetails from "./pages/components/monitor/MonitorDetails/MonitorDetails";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Tablet from "./pages/components/tablet/tablet/Tablet";
import TabletDetails from "./pages/components/tablet/TabletDetails/TabletDetails";
import Speaker from "./pages/components/speaker/speaker/Speaker";
import SpeakerDetails from "./pages/components/speaker/speakerDetails/SpeakerDetails";
import "@material-tailwind/react/tailwind.css";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";

function App() {
  return (
    <div className="App">


      {/* react router dom */}
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/monitor">
              <Monitor></Monitor>
            </Route>
            <PrivateRoute exact path="/details/:id">
              <MonitorDetails></MonitorDetails>
            </PrivateRoute>


            <Route exact path="/tablet">
              <Tablet></Tablet>
            </Route>
            <PrivateRoute exact path="/tabletDetails/:id">
              <TabletDetails></TabletDetails>
            </PrivateRoute>

            <Route exact path="/speaker">
              <Speaker></Speaker>
            </Route>
            <Route exact path="/speakerDetails/:id">
              <SpeakerDetails></SpeakerDetails>
            </Route>


            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route exact path="/register">
              <Register></Register>
            </Route>



            <Route exact path="*">
              <NotFound></NotFound>
            </Route>



          </Switch>
          <Footer></Footer>
        </BrowserRouter>

      </AuthProvider>

    </div >
  );
}

export default App;

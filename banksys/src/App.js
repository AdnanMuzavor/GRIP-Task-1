import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Home from "./screens/Home";
import TransferScreen from "./screens/Transferscreen";
import AllUserScreen from "./screens/AllUserScreen";
import OnlyUserScreen from "./screens/OnlyUserScreen";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer";
function App() {
  useEffect(() => {
    const { data } = axios.get("/api/user/allusers");
    console.log(data);
  }, []);
  return (
    <>
    <Navbar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/transfer" component={TransferScreen} />
      <Route exact path="/allusers" component={AllUserScreen} />
      <Route exact path="/onlyuser/:id" component={OnlyUserScreen} />
      {/* <Footer/> */}
    </>
  );
}

export default App;

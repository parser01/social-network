import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import MyProfile from "./components/MyProfile/MyProfile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
      <BrowserRouter>
          <div className="appWrapper">
              <Header />
              <NavBar />
              <div className="content">
                  <Route path="/profile" component={MyProfile} />
                  <Route path="/messages" component={Messages} />
                  <Route exact path="/news" component={News} />
                  <Route exact path="/music" component={Music} />
                  <Route path="/settings" component={Settings} />
              </div>
              <Footer />
          </div>
      </BrowserRouter>
  );
};

export default App;

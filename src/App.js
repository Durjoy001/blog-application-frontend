import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Footer from './components/footer';
import Header from './components/navbar';
import Blogs from './pages/blogs';
import SignUp from "./pages/signUp";
import LogIn from "./pages/logIn";


function App() {
  return (
      <Router>
          <Header />
          {/* <SignIn /> */}
          <Switch>
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/" component={Blogs} />
          </Switch>
      </Router>
  );
}
export default App;

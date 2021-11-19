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
import CreateBlog from "./pages/createBlog";
import BlogExpander from "./components/blog/blogExpander";


function App() {
  return (
      <Router>
          <Header />
          {/* <SignIn /> */}
          <Switch>
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/" component={Blogs} />
              <Route exact path="/createBlog" component={CreateBlog} />
              <Route exact path="/blogExpander" component={BlogExpander}/>
          </Switch>
          <Footer />
      </Router>
  );
}
export default App;

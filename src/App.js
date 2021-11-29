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
import UpdateBlog from "./pages/updateBlog";


function App() {
  return (
      <Router>
          <Header />
          <Switch>
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/" component={Blogs} />
              <Route exact path="/blogs" component={CreateBlog} />
              <Route exact path="/blogs/view/:id" component={BlogExpander}/>
              <Route exact path="/blogs/:id" component={UpdateBlog}/>
          </Switch>
          {/* <Footer /> */}
      </Router>
  );
}
export default App;

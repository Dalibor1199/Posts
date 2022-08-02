import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { PostDetail } from "./PostDetail";
import { PostList } from "./PostList";

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<PostList />}/>
          <Route path="/post/:id" element={<PostDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;

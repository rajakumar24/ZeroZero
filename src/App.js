import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import GlobalPage from './GlobalPage';

function App() {

  return (
    <>
    <Router>
    <Routes>
          <Route path="/" element={<GlobalPage/>} />
          <Route path="/home" element={<GlobalPage />} />
          <Route path="/product" element={<GlobalPage/>} />
          <Route path="/productdetails" element={<GlobalPage/>} />
    </Routes>
    </Router>
  </>
  );
}

export default App;

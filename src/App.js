import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';
// import AddProduct from './components/AddProduct/AddProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LeftSideBar></LeftSideBar>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/addproducts" element={<AddProduct />} /> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

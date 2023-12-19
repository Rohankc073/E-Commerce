
import './App.css';
import HomePage from "./pages/home";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/login";
import ViewPage from "./pages/viewpage";

const App = () => {
  return (
      <div className="">
          <Routes>
              <Route path='/homepage' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/view' element={<ViewPage />} />
          </Routes>
      </div>
  );
}
export default App;

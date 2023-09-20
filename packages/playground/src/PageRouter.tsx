import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Result from "./pages/Result";


const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  )
};

export default PageRouter;
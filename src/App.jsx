import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DetailsPage from "./Pages/DetailsPage";
import ByCategory from "./Pages/ByCategory";


const App = () => {
  return (
    <>
     <BrowserRouter >
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detailsPage/:postID" element={<DetailsPage />} />
      <Route path="/byCategory/:categoryID" element={<ByCategory />} />
     </Routes>
     </BrowserRouter> 
    </>
  );
};

export default App;
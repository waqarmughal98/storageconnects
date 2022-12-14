import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ActiveListing from "./components/ActiveListing";
import SellStorage from "./components/SellStorage";
import Evaluation from "./components/Evaluation";
import Learn from "./components/Learn";
import DetailPage from "./components/DetailPage";
import Inquirysent from "./components/Inquirysent";
import Post from "./components/Post";
import ActiveListingList from "./components/ActiveListingComponents/ActiveListingList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/active-listings" element={<ActiveListing />} />
          <Route path="/active-grid-listings" element={<ActiveListingList />} />
          <Route path="/sell-storage" element={<SellStorage />} />
          <Route path="/free-evaluation" element={<Evaluation />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/post" element={<Post />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail-page" element={<DetailPage />} />
          <Route path="/enquiry-sent" element={<Inquirysent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

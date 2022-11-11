import Info from "Pages/Info";
import InfoJS from "Pages/Info copy";
import NotFound from "Pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RemoveTrailingSlash } from "./RemoveTrailingSlash";
import ScrollToTop from "./ScrollToTop";

function Routers() {
  return (
    <Router>
      <RemoveTrailingSlash />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Info />}></Route>
        <Route path="/test" element={<InfoJS />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default Routers;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/index.ts";
import "./animations.css";
import UnderConstruction from "./components/UnderConstruction.tsx";
import MainLayout from "./layouts/Main.Layout.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<UnderConstruction />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

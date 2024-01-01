import { MemoryRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import ResultsPage from "./pages/Results";
import TestPage from "./pages/Test";

function App() {
  return (
    <>
      <MemoryRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </MemoryRouter>
    </>
  );
}

export default App;

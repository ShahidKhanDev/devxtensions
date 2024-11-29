import { Routes, Route, Navigate } from "react-router-dom";
import { Category, Home, Themes } from "./pages";
const App = () => {
  return (
    <main className="min-h-screen bg-gray-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/extensions/:slug" element={<Category />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/*" element={<h1>No route found</h1>} />
      </Routes>
    </main>
  );
};

export default App;

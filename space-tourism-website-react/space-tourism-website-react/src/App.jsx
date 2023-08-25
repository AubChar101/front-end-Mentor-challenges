import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <body className="home">
              <Home />
            </body>
          }
        />
        <Route
          path="/destination"
          element={
            <body className="destination">
              <Destination />
            </body>
          }
        />
        <Route
          path="/crew"
          element={
            <body className="crew">
              <Crew />
            </body>
          }
        />
        <Route
          path="/technology"
          element={
            <body className="technology">
              <Technology />
            </body>
          }
        />
      </Routes>
    </>
  );
}

export default App;

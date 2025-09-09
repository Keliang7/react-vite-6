import { Outlet } from "react-router-dom";
import "./assets/style/App.css";

function App() {
  return (
    <div className="app-layout">
      <header>
        <h1>My App Layout</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;

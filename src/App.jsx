import { Outlet } from "react-router";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <main className="min-h-[calc(100vh-136px)]">
          <Outlet />
        </main>

        <p>Footer</p>
      </div>
    </>
  );
}

export default App;

import { Outlet } from "react-router";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <main className="min-h-[calc(100vh-136px)] py-20 container mx-auto sm:px-6 lg:px-8">
          <Outlet />
        </main>

        <p>Footer</p>
      </div>
    </>
  );
}

export default App;

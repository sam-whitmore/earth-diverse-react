import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app h-screen w-screen bg-pale-yellow">
      <NavigationBar />
      <Outlet />
    </div>
  )
}

export default App

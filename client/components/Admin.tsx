import AdminSidebar from "./AdminSidebar"
import AdminDashboard from "./AdminDashboard"

export default function Admin() {
  return (
    <div className="w-screen h-[90%] flex">
      <AdminSidebar />
      <AdminDashboard />
    </div>
  )
}
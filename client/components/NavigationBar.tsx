export default function NavigationBar() {
  return (
    <div className="w-full h-[10%] p-2 flex justify-between border-b-2 border-soft-blue">
      <div className="h-full">
        <img src="./earth-diverse-logo-500-px.png" alt="Earth Diverse Logo" className="h-full"></img>
      </div>
      <div className="h-full">

      </div>
      <div className="h-full">
        <button className="border-2 border-orange-400 h-full px-4 rounded-xl">Sign In</button>
      </div>
    </div>
  )
}
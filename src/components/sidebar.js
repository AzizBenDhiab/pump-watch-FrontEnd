import Logo from "../assets/Logo.png";

const Sidebar = () => (
  <div className="bg-gradient-to-r from-[#84A1EC] to-[#2A478F] text-white w-72 h-full flex flex-col p-6">
    <nav className="flex-1 space-y-6">
      <h2 className="text-sm uppercase tracking-wide">Manage</h2>
      <a
        href="#"
        className="flex items-center space-x-3 text-white bg-white/20 rounded-lg px-3 py-2 hover:bg-white/30"
      >
        <span>🏠</span>
        <span>Home</span>
      </a>
      <a href="#" className="flex items-center space-x-3 hover:text-blue-300">
        <span>📊</span>
        <span>Analytics</span>
      </a>
      <a href="#" className="flex items-center space-x-3 hover:text-blue-300">
        <span>💬</span>
        <span>Monitoring</span>
      </a>
      <a href="#" className="flex items-center space-x-3 hover:text-blue-300">
        <span>⚠️</span>
        <span>Alerts</span>
      </a>
      <h2 className="text-sm uppercase mt-8 tracking-wide">Preferences</h2>
      <a href="#" className="flex items-center space-x-3 hover:text-blue-300">
        <span>⚙️</span>
        <span>Settings</span>
      </a>
      <a href="#" className="flex items-center space-x-3 hover:text-blue-300">
        <span>❓</span>
        <span>Help</span>
      </a>
    </nav>
    <a
      href="#"
      className="mt-8 flex items-center space-x-3 text-white hover:text-gray-300"
    >
      <span>🔓</span>
      <span>Log Out</span>
    </a>
    <p className="mt-auto text-xs text-center">
      PumpWatch all rights reserved 2024
    </p>
  </div>
);

export default Sidebar;

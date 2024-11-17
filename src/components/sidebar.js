import { NavLink } from "react-router-dom"; // Import NavLink for active link styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faChartSimple,
  faTv,
  faTriangleExclamation,
  faGear,
  faCircleQuestion,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => (
  <div className="bg-gradient-to-br from-[#84A1EC] to-[#2A478F] text-white w-72 h-full flex flex-col p-6">
    <nav className="flex-1 space-y-6">
      <h2 className="text-sm uppercase tracking-wide">Manage</h2>

      {/* Home */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center space-x-3 text-white ${
            isActive
              ? "bg-white/20 rounded-lg px-3 py-2 hover:bg-white/30"
              : "hover:text-blue-300"
          } `
        }
      >
        <FontAwesomeIcon icon={faHouse} />
        <span>Home</span>
      </NavLink>

      {/* Analytics */}
      <NavLink
        to="/analytics"
        className={({ isActive }) =>
          `flex items-center space-x-3 text-white ${
            isActive
              ? "bg-white/20 rounded-lg px-3 py-2 hover:bg-white/30"
              : "hover:text-blue-300"
          } `
        }
      >
        <FontAwesomeIcon icon={faChartSimple} />
        <span>Analytics</span>
      </NavLink>

      {/* Monitoring */}
      <NavLink
        to="/monitoring"
        className={({ isActive }) =>
          `flex items-center space-x-3 text-white ${
            isActive
              ? "bg-white/20 rounded-lg px-3 py-2 hover:bg-white/30"
              : "hover:text-blue-300"
          } `
        }
      >
        <FontAwesomeIcon icon={faTv} />
        <span>Monitoring</span>
      </NavLink>

      {/* Alerts */}
      <NavLink
        to="/alerts"
        className={({ isActive }) =>
          `flex items-center space-x-3 text-white ${
            isActive
              ? "bg-white/20 rounded-lg px-3 py-2 hover:bg-white/30"
              : "hover:text-blue-300"
          } `
        }
      >
        <FontAwesomeIcon icon={faTriangleExclamation} />
        <span>Alerts</span>
      </NavLink>

      <h2 className="text-sm uppercase mt-8 tracking-wide">Preferences</h2>

      {/* Settings */}
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          `flex items-center space-x-3 text-white ${
            isActive
              ? "bg-white/20 rounded-lg px-3 py-2 hover:bg-white/30"
              : "hover:text-blue-300"
          } `
        }
      >
        <FontAwesomeIcon icon={faGear} />
        <span>Settings</span>
      </NavLink>

      {/* Help */}
      <NavLink
        to="/help"
        className={({ isActive }) =>
          `flex items-center space-x-3 text-white ${
            isActive
              ? "bg-white/20 rounded-lg px-3 py-2 hover:bg-white/30"
              : "hover:text-blue-300"
          } `
        }
      >
        <FontAwesomeIcon icon={faCircleQuestion} />
        <span>Help</span>
      </NavLink>
    </nav>

    {/* Log Out */}
    <a
      href="#"
      className="mt-8 flex items-center space-x-3 text-white hover:text-gray-300"
    >
      <FontAwesomeIcon icon={faArrowRightFromBracket} />
      <span>Log Out</span>
    </a>

    <p className="mt-auto text-xs text-center">
      PumpWatch all rights reserved 2024
    </p>
  </div>
);

export default Sidebar;

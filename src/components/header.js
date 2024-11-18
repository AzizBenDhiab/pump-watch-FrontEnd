import userProfile from "../assets/UserProfile.png"; // User profile image path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; // Adjust faTv import if using Pro

const Header = () => (
  <header className="flex items-center justify-between p-4 bg-white shadow-md border-b h-24">
    <div className="flex items-center space-x-4">
      <h2 className="text-2xl font-semibold">Welcome Back, Ammar!</h2>
      <p className="text-sm text-gray-500">
        Here’s what’s happening with your pumps!
      </p>
    </div>
    <div className="flex items-center space-x-6">
      <button className="p-2 text-gray-600 hover:text-gray-800 text-xl">
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#00000" }} />
      </button>
      <button className="p-2 text-gray-600 hover:text-gray-800 text-xl">
        <FontAwesomeIcon icon={faBell} style={{ color: "#00000" }} />
      </button>
      <div className="flex items-center space-x-3">
        <img
          src={userProfile} // Ensure the correct path to the user image
          alt="User"
          className="w-12 h-12 rounded-full"
        />
        <div className="text-right">
          <p className="text-lg font-medium">Ammar Sassi</p>
          <p className="text-sm text-gray-500">ID 02943</p>
        </div>
      </div>
    </div>
  </header>
);

export default Header;

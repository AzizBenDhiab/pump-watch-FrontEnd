import Logo from "../assets/Logo.png";

const LogoFrame = () => (
  <div className="flex items-center  justify-center w-72 h-24 bg-white shadow-md border-b">
    <img src={Logo} alt="Logo" className="w-32" />
  </div>
);

export default LogoFrame;

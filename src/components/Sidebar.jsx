import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
  const Logout = () => {
    Cookies.remove("user");
    window.location.href = "/";
  };
  return (
    <div className="w-fit min-h-screen px-2 flex bg-blue-800">
      <div className="w-full flex flex-col justify-between py-6">
        <div className="w-full flex flex-col gap-6">
          <a className="text-blue-900 text-2xl font-extrabold bg-white rounded px-2 py-2 flex items-center gap-3">
            <p>Fraud</p>
            <ion-icon name="albums-outline"></ion-icon>
          </a>
          <li className="list-none flex gap-3 flex-col text-white text-lg">
            <Link
              to="/home"
              className="py-2 px-2 hover:bg-slate-100 hover:text-blue-900 rounded cursor-pointer flex gap-3 items-center"
            >
              <ion-icon name="newspaper-outline"></ion-icon>
              <p>Alert</p>
            </Link>
            <Link
              to="/transactions"
              className="py-2 px-2 hover:bg-slate-100 hover:text-blue-900 rounded cursor-pointer flex gap-3 items-center"
            >
              <ion-icon name="wallet-outline"></ion-icon>
              <p>Transactions</p>
            </Link>
            <Link
              to="/history"
              className="py-2 px-2 hover:bg-slate-100 hover:text-blue-900 rounded cursor-pointer flex gap-3 items-center"
            >
              <ion-icon name="book-outline"></ion-icon>
              <p>History</p>
            </Link>
            <Link
              to="/home"
              className="py-2 px-2 hover:bg-slate-100 hover:text-blue-900 rounded cursor-pointer flex gap-3 items-center"
            >
              <ion-icon name="newspaper-outline"></ion-icon>
              <p>Monitor</p>
            </Link>
            <Link
              to="/transactions"
              className="py-2 px-2 hover:bg-slate-100 hover:text-blue-900 rounded cursor-pointer flex gap-3 items-center"
            >
              <ion-icon name="wallet-outline"></ion-icon>
              <p>Report</p>
            </Link>
          </li>
        </div>
        <button
          onClick={Logout}
          className="py-2 px-2 text-white rounded cursor-pointer flex gap-3 items-center"
        >
          <ion-icon size="large" name="log-in-outline"></ion-icon>
          <p className="text-lg">Logout</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

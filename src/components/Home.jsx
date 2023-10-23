import Cookies from "js-cookie";
import BarChart from "./BarChart";
import Sidebar from "./Sidebar";

const Home = () => {
  const user = JSON.parse(Cookies.get("user"));
  console.log(user.username);
  return (
    <div className="w-full min-h-screen justify-center flex">
      <Sidebar />
      <div className=" flex-1">
        <div className="flex gap-3 w-full justify-end shadow-md items-center py-2 px-8">
          <div className=" rounded-full w-12 h-12 shadow-md hover:scale-95 duration-300">
            <img src={user.image} alt="user" className=" rounded-full" />
          </div>
          <div className="grid">
            <span className="capitalize font-semibold">{user.username}</span>
            <span className="text-gray-600">{user.email}</span>
          </div>
        </div>
        <BarChart />
        <div>fl</div>
      </div>
    </div>
  );
};

export default Home;

import BarChart from "./BarChart";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className="w-full h-screen justify-center flex">
      <Sidebar />
      <div className=" flex-1">
        <p>Home</p>
        <BarChart />
      </div>
    </div>
  );
};

export default Home;

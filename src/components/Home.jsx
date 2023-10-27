import Cookies from "js-cookie";
import BarChart from "./BarChart";
import Sidebar from "./Sidebar";
import FraudChart from "./FraudChart";

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
        <div className=" text-center w-full my-12 gap-4 flex items-center justify-center flex-col">
          <h1 className=" text-5xl font-bold">Fraud detection system</h1>
          <p className=" lg:max-w-2xl md:max-w-lg w-full">
            Welcome to the future of safeguarding your financial world with our
            cutting-edge fraud detection web app. In an ever-evolving digital
            landscape, security is paramount. Our solution is your vigilant
            partner, tirelessly monitoring every transaction to ensure your
            peace of mind. With state-of-the-art machine learning algorithms and
            real-time alerts, we stay one step ahead of the fraudsters, so you
            can continue to thrive and prosper, knowing your assets are
            protected by the industry&#39;s best. Say goodbye to sleepless
            nights and hello to a brighter, more secure financial future. Join
            us today in the fight against financial fraud!
          </p>
        </div>
        <BarChart />
        <FraudChart/>
      </div>
    </div>
  );
};

export default Home;

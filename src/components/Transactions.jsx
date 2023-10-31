import Sidebar from "./Sidebar";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
const Transactions = () => {
  const [receiverAccountNumber, setReceiverAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [onSubmit, setOnSubmit] = useState(false);
  const user = JSON.parse(Cookies.get("user"));
  const [data, setData] = useState([]);
  const userId = user.user._id;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://192.168.2.109:9000/transaction/add/6540ebe5f93719786449184c`,
        {
          receiver_number: receiverAccountNumber,
          amount:parseInt(amount),
        }
      );

      if (response.status === 201) {
        setData(response.data);
        setOnSubmit(true);
      } else {
        alert("Transaction failed");
        setOnSubmit(false);
      }
    } catch (error) {
      alert("Transaction failed");
      console.log(error);
      setOnSubmit(false);
    }
  };
  return (
    <div className="w-full h-screen justify-center flex">
      <Sidebar />
      <div className="w-full">
        <form onSubmit={(e)=>handleSubmit(e)}>
          <input
            type="text"
            placeholder="Receiver account number"
            value={receiverAccountNumber}
            onChange={(event) => setReceiverAccountNumber(event.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
          <button type="submit">Create transaction</button>
        </form>
      </div>
      {onSubmit ? <div>Transaction complete</div> : null}
    </div>
  );
};

export default Transactions;

import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import ImgSet from "../componenets/ImageSet";
import MiniUserCard from "../componenets/MiniUserCard";

const TransferScreen = () => {
    //States
  const [amt, setamt] = useState(0);
  const [users, setusers] = useState([]);
  const [admin, setadmin] = useState({});
  const [loading, setloading] = useState(false);
  const [paying, setpaying] = useState(false);
  const [payingto, setpayingto] = useState("");

  //To fetch Admin data(Admin is current user and user-1 in  DB)
  const Getdata = async () => {
    setloading(true);
    const { data } = await axios.get("/api/user/allusers");
    setusers(data);
    setadmin(data[0]);
    console.log(data);
    setloading(false);
  };
  useEffect(() => {
    Getdata();
  }, []);

  const paymentHandler = (id2) => {
    //If no amount entered
    if (amt <= 0) {
      alert("Enter Valid amount");
      return;
    }
    //If admin doesnt has suffiecient
    if (amt > admin.accbal) {
      alert("You don't have sufficient balance");
      setamt(0);
      return;
    }
    setpaying(true);
    setpayingto(id2);
    alert(`paying to: ${id2}`);
    var id = admin._id;
    var newbal = admin.accbal - amt;

    //Deduct data from sender
    const { data1 } = axios.put("/api/user/updatebal", { id, newbal });

    //Update in DB using this API
    //Set time out used as yime is required to combule "newbal"
    setTimeout(() => {
      
      console.log(newbal);
      //Add amount to receiver
      newbal = users.find((e) => e._id === id2).accbal + Number(amt);
      //Update interface
      var user = users.find((e) => e._id === id2);
      user.accbal = user.accbal + Number(amt);
      setusers((prev) => prev.map((e) => (e._id === id2 ? (e = user) : e)));
      //interface update
      setadmin({ ...admin, accbal: admin.accbal - amt });
      setpaying(false);
      setamt(0);
      setpayingto("");
      const { data2 } = axios.put("/api/user/updatebal", { id: id2, newbal });
      console.log(data2);
    }, 3000);
  };
  return loading ? (
    <h1>Loading</h1>
  ) : (
    <>
      <section className="container mb-5">
        <ImgSet header="Welcome to Transfer Panel" />
        <div className=" d-flex justufy-content-center flexer  ">
          <h4 className="adminbal row">
            Your Account Balance: {admin ? admin.accbal : null} /-
          </h4>
          <div className="amtinput row">
            <h4 className="col-md-6 col-lg-6 col-6">Enter amount: </h4>
            <input
              className="col-md-6 col-lg-6 col-6"
              type="number"
              name="amt"
              value={amt}
              onChange={(e) => setamt(e.target.value)}
            ></input>
            {paying ? (
              <>
                <p>Paying to: {payingto} </p>
                <div className="payload">
                  <p className="loader">paying</p>
                </div>
              </>
            ) : null}
          </div>
          <div className="selectuser row d-flex justify-content-center">
            {users.map((e, i) => {
              return i >= 1 ? (
                <>
                  <MiniUserCard
                    key={Math.random() * 100000 * Math.random()}
                    name={e.name}
                    email={e.email}
                    _id={e._id}
                    accbal={e.accbal}
                    PayFn={paymentHandler}
                  />
                </>
              ) : null;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TransferScreen;

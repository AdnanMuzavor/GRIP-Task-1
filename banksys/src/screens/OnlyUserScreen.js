import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const OnlyUserScreen = (props) => {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(false);
  const [id, setid] = useState("");
  //Get details of user to show
  const Getdata = async () => {
    setloading(true);
    const { data } = await axios.get("/api/user/allusers");
    setusers(data);
    console.log(data);
    setloading(false);
  };
  useEffect(() => {
    Getdata();
    setid(window.location.href.substring(31, 200));
  }, []);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <>
      <div className="usrwrapper row flexer">
        <h2 className="text-center">User Details</h2>
        {users
          .filter((e) => e._id === id)
          .map((e) => {
            return (
              <>
                <div className="userpaycard col-md-4 col-lg-4 col-11">
                  <div className="textwrap">
                    <h6>Name: </h6>
                    <h6>{e.name}</h6>
                  </div>
                  <div className="textwrap">
                    <h6>Email: </h6>
                    <h6>{e.email}</h6>
                  </div>
                  <div className="textwrap">
                    <h6>Payment Id: </h6>
                    <h6>{e._id.substring(0, 10)}</h6>
                  </div>
                  <div className="textwrap">
                    <h6>Account Balance: </h6>
                    <h6>{e.accbal}</h6>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default OnlyUserScreen;

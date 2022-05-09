import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserCard from "../componenets/UserCard";

const AllUserScreen = () => {
  const history = useHistory();
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(false);
  const Getdata = async () => {
    setloading(true);
    const { data } = await axios.get("/api/user/allusers");
    setusers(data);
    console.log(data);
    setloading(false);
  };
  useEffect(() => {
    Getdata();
  }, []);
  const ShowUser = (id) => {
    history.push(`/onlyuser/${id}`);
  };
  return loading ? (
    <h1>Loading</h1>
  ) : (
    <>
      <div className="mainwrap">
        <div className="txtwrap">
          <h2 className="text-center">All users</h2>
        </div>
        <div className=" row d-flex justify-content-center">
          {users.map((e) => {
            return (
              <UserCard
                key={Math.random() * 100000 * Math.random()}
                name={e.name}
                email={e.email}
                accbal={e.accbal}
                _id={e._id}
                ViewFn={ShowUser}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllUserScreen;

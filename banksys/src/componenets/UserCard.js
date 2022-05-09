import React from "react";

const UserCard = ({ name, email, accbal, _id, ViewFn }) => {
  return (
    <>
      <>
        <div className="userwrap col-md-3 col-lg-3 col-10">
          <h5> Name: {name}</h5>
          <h5> Email: {email}</h5>
          <h6 className="balhighlight"> Balance: {accbal}</h6>
          <h6> Userid: {_id}</h6>
          <p className="viewbtn text-center" onClick={() => ViewFn(_id)}>
            View
          </p>
        </div>
      </>
    </>
  );
};

export default UserCard;

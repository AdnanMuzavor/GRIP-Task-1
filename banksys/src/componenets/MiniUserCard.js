import React from "react";

const MiniUserCard = ({ name, accbal, _id, PayFn }) => {
  return (
    <>
      <>
        <div className=" userwrap col-md-5 col-lg-5 col-10 m-1">
          <h2>Name: {name}</h2>
          <h2>Bal: {accbal} /-</h2>
          <button className="viewbtn" onClick={() => PayFn(_id)}>
            Pay
          </button>
        </div>
      </>
    </>
  );
};

export default MiniUserCard;

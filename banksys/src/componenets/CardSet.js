import React from "react";

const Cardset = ({l1,l2,l3}) => {
  return (
    <>
      <div className="features  flexer">
        <div className="row flexer2">
          <div className="fwrap col-md-3 col-lg-3 col-10">
            <img
              src={l1?l1:"https://tse3.mm.bing.net/th?id=OIP.kFfv9NZUBnzizEpIIK_j_QHaD8&pid=Api&P=0&w=331&h=176"}
              alt="Secure transfer"
              className="img-fluid"
            />
            <h6>Pay to anyone you want</h6>
          </div>
          <div className="fwrap col-md-3 col-lg-3 col-10">
            <img
              src={l2?l2:"https://tse3.mm.bing.net/th?id=OIP.rRrNLKySREHkJT289mATugAAAA&pid=Api&P=0&w=230&h=184"}
              alt="Secure transfer"
              className="img-fluid"
            />
            <h6>Pay Faster</h6>
          </div>
          <div className="fwrap col-md-3 col-lg-3 col-10">
            <img
              src={l3?l3:"https://tse4.mm.bing.net/th?id=OIP.8ZnS1pd7ri4jI00ZliambgHaHa&pid=Api&P=0&w=158&h=158"}
              alt="Secure transfer"
              className="img-fluid"
            />
            <h6>Used by many users</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardset;

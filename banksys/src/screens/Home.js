import React from "react";
import Cardset from "../componenets/CardSet";
import ImgSet from "../componenets/ImageSet";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();
  return (
    <>
      <ImgSet />
      <Cardset />
      <section className="flexer mb-4">
        <div className=" container whatyoucan row">
          <h2 className="text-center col-md-6 col-lg-6 col-12 flexer">
            What all you can do?
          </h2>
          <div className="col-md-6 col-lg-6 col-6 ">
            <button
              className="homebtn "
              onClick={() => history.push("/allusers")}
            >
              View Users
            </button>
            <button
              className="homebtn"
              onClick={() => history.push("/transfer")}
            >
              Make Payment
            </button>
          </div>
        </div>
      </section>
      <Cardset
        l1="https://tse3.mm.bing.net/th?id=OIP.YOIOZMKignAoRbA2U1x-bwHaDt&pid=Api&P=0&w=408&h=204"
        l2="https://tse4.mm.bing.net/th?id=OIP.yQ2A21b1UflZYCbaiqJcFQHaHa&pid=Api&P=0&w=163&h=163"
        l3="https://thumbs.dreamstime.com/b/preferred-gold-sign-mounted-glossy-marble-wall-d-rendered-royalty-free-stock-illustration-image-can-be-used-online-86484486.jpg"
      />
      <ImgSet />
    </>
  );
};

export default Home;

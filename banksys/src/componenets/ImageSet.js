import React from "react";

const ImgSet = ({header}) => {
  return <><div className="transferpanel row">
  <h4 className="text-center col-12 col-md-12 col-lg-12">
    {header?header:"Welcome to TSF-BANK"}
  </h4>
  <div className="imgwrap col-md-4 col-lg-4 col-4 flexer">
    <img
      src="https://d33wubrfki0l68.cloudfront.net/89dc74051fed624c6960b0bacbe4a2b6e58bd0eb/35c21/images/orphan/secure-file-transfer-1.jpg"
      alt="Secure transfer"
      className="img-fluid"
    />
  </div>
  <div className="imgwrap col-md-4 col-lg-4 col-4 flexer">
    <img
      src="https://tse3.mm.bing.net/th?id=OIP.88_VazG8NV6EkGG0CC-QwQHaEK&pid=Api&P=0&w=274&h=154"
      alt="faster transfer"
      className="img-fluid"
    />
  </div>
  <div className="imgwrap col-md-4 col-lg-4 col-4 flexer">
    <img
      src="https://clipground.com/images/preferred-clipart-17.jpg"
      alt="prefer transfer"
      className="img-fluid"
    />
  </div>
</div></>;
};

export default ImgSet;

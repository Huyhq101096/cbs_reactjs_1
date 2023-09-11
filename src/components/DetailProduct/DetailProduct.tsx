import React from "react";
import { DetailModel } from "../../models/interface/DetailModel";

type Props = {
    detail?: DetailModel
};

const DetailProduct = ({detail}: Props) => {
  return (
    <div>
      <h3>Name</h3>
      <div className="w-25 mt-2">
        <img
          src={require("../../assets/imgRedCar.jpg")}
          alt="..."
          className="w-100"
        />
      </div>
      <div className="card-body">
        <i
          className="fa fa-heart display-4 text-danger"
          style={{ cursor: "pointer" }}
        >{detail?.number}</i>
      </div>
    </div>
  );
};

export default DetailProduct;

import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import { DetailModel } from "../../models/interface/DetailModel";

/*
  B1: Xây dựng giao diện (dàn layour chia component)
  B2: Xác định dữ liệu thay đổi (state) => object, array, number, string...
  B3: Binding state lên giao diện (keets nối với redux lấy state về và hiển thị lên giao diện)
  B4: Thay đổi state (xử lí thông qua các sự kiên onclik , onchange, blur ...) => đưa dữ liệu lên redux xử lý

  */

// export interface DetailProduct {
//   number: number;
// }

const initialState = {};

type Props = {
  detail1?: DetailModel;
};

const Detail = ({props}: Props) => {
  console.log(props);
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
        >
          {detail1.name}
        </i>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    like: state.likeReducer || 0,
  };
};

// dùng thư viên connect để tạo ra nội dung component mới có kết nối dữ liệu với redux
const ComponentWithRedux = connect(mapStateToProps)(Detail);

export default ComponentWithRedux;

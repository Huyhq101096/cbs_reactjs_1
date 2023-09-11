import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/store";
import DetailProduct from "../../components/DetailProduct/DetailProduct";
import { getDetailApi, DetailItem } from "../../redux/reducers/detailReducer";
import { useParams } from "react-router-dom";

/*
  B1: Xây dựng giao diện (dàn layour chia component)
  B2: Xác định dữ liệu thay đổi (state) => object, array, number, string...
  B3: Binding state lên giao diện (keets nối với redux lấy state về và hiển thị lên giao diện)
  B4: Thay đổi state (xử lí thông qua các sự kiên onclik , onchange, blur ...) => đưa dữ liệu lên redux xử lý
  */


type Props = {};

const DetailPage = (props: Props) => {
  console.log(props);
  // Sử dụng useParams để lấy tham số từ đường dẫn
  const { id } = useParams<{ id: string }>();

  const details = useSelector(
    (state: RootState) => state.detailReducer
  );
  const dispatch: DispatchType = useDispatch();

  const getApiDetail = () => {
    const actionAsync = getDetailApi(id);
    dispatch(actionAsync);
  }

  useEffect(() => {
    getApiDetail();
  }, [id]);

  return (
    <div>
      <DetailProduct />
    </div>
  );
};

// const mapStateToProps = (state: RootState) => {
//   return {
//     like: state || 0,
//   };
// };

// dùng thư viên connect để tạo ra nội dung component mới có kết nối dữ liệu với redux


export default DetailPage;

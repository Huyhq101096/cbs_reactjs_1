import React from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'

/*
  B1: Xây dựng giao diện (dàn layour chia component)
  B2: Xác định dữ liệu thay đổi (state) => object, array, number, string...
  B3: Binding state lên giao diện (keets nối với redux lấy state về và hiển thị lên giao diện)
  B4: Thay đổi state (xử lí thông qua các sự kiên onclik , onchange, blur ...) => đưa dữ liệu lên redux xử lý

  */

type Props = {}

const Detail = (props: Props) => {
  console.log(props)
  return (
    <div>
      <h3>Name</h3>
      <div className="w-25 mt-2">
        <img src="https://i.pravatar.cc/150?img=3" alt="..." />
      </div>
      <div className="card-body">
        <i className='fa fa-heart display-4 text-danger' style={{cursor: 'pointer'}}> 100</i>
      </div>
    </div>
  )
}

const mapStateToProps = (state:RootState) => state.likeReducer;

// dùng thư viên connect để tạo ra nội dung component mới có kết nối dữ liệu với redux
const ComponentWithRedux = connect(mapStateToProps)(Detail)

export default ComponentWithRedux
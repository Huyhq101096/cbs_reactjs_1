import React from 'react'
import imgRedCar from '../../assets/imgRedCar.jpg';

/*
  B1: Xây dựng giao diện (dàn layour chia component)
  B2: Xác định dữ liệu thay đổi (state) => object, array, number, string...
  B3: Binding state lên giao diện (keets nối với redux lấy state về và hiển thị lên giao diện)
  B4: Thay đổi state (xử lí thông qua các sự kiên onclik , onchange, blur ...) => đưa dữ liệu lên redux xử lý

  */

type Props = {}

const Detail = (props: Props) => {
  return (
    <div>
      <h3>Name</h3>
      <div className="w-25 mt-2">
        <img src={imgRedCar} alt="..." />
      </div>
      <div className="card-body">
        <i className='fa fa-heart display-4 text-danger' style={{cursor: 'pointer'}}></i>
      </div>
    </div>
  )
}

export default Detail
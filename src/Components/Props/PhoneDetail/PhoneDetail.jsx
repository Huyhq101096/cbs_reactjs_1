import React, { Component } from "react";
import PhoneCard from "./PhoneCard";

const dataPhone = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

export default class PhoneDetail extends Component {
  state = {
    prodDetail: {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  };

  renderPhone = () => {
    return dataPhone.map((phone) => {
      return (
        <div className="col-4" key={phone.maSP}>
          <PhoneCard phone={phone} viewDetail={this.viewDetail} />
        </div>
      );
    });
  };

  viewDetail = (prodClick) => {
    this.setState({
      prodDetail: prodClick,
    });
  };

  render() {
    const {
      maSP,
      tenSP,
      manHinh,
      heDieuHanh,
      cameraSau,
      cameraTruoc,
      rom,
      giaBan,
      hinhAnh,
      ram,
    } = this.state.prodDetail;

    return (
      <div className="container">
        <h3>Phone List</h3>
        <div className="row">{this.renderPhone()}</div>
        <div className="md-5">
          <div className="row">
            <div className="col-4 text-center">
              <h3>Iphone</h3>
              <img src={hinhAnh} alt="..." height={400} />
            </div>
            <div className="col-8">
              <h3>Product Detail</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Màn Hình</td>
                    <td>{manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera Sau</td>
                    <td>{cameraSau}</td>
                  </tr>
                  <tr>
                    <td>Ram</td>
                    <td>{ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

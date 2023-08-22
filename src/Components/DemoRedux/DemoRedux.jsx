import React, { Component } from "react";
import { connect } from "react-redux";

class DemoRedux extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="container">
        <h3>Ví dụ 1: like ảnh</h3>
        <div className="w-25 mt-2 card">
          <img src={this.props.img} alt="..." className="w-100" />
        </div>
        <div className="card-body">
          100{" "}
          <i
            className="fa fa-heart display-4 text-danger m-2"
            style={{ cursor: "pointer" }}
            onClick={() => {
                // Gửi dữ liệu lên redux
                const action = {
                    type: 'increaseLike', // Nhãn của action
                     payload: 1
                }
                // Dùng this.props.dispatch để đưa dữ liệu lên reducer
                this.props.dispatch(action);

            }}
          /> {this.props.likeReducer}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        likeReducer: state.likeReducer,
        img: state.imgReducer
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         dispatch1: () => {

//         }
//     }
// }

// dùng thư viện connect để tạo ra nội dung component mới có kêt nối dữ liệu với redux
const ComponentWithRedux = connect(mapStateToProps)(DemoRedux);

export default ComponentWithRedux;

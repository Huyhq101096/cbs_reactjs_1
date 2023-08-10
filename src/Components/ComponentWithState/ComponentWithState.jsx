import React, { Component } from 'react';

export default class ComponentWithState extends Component {
    // state là một thuộc tính có sẵn của Componet 
    // Dùng để quản lí dữ liệu thay đổi trên giao diện

    state = {
        color : 'green',
        like : 1,
        size: 30
    }

    // handleChangeColor = async () => {
    //     // setState là phương thức mặc định của react
    //     // dùng để thay đổi giá trị this.state đồng thời render lại giao diện
    //     // Lưu ý : phương thức setState là phương thức bất đồng bộ.
    //     await this.setState({
    //         color: 'red'
    //     }, () => {
    //         // Hàm này sẽ tự gọi sau khi thay đổi state và render lại giao diện.
    //         console.log(this.state)
    //     })

    //     console.log(this.state)
    // }

    handleChangeColor = () => {
        // setState là phương thức mặc định của react
        // dùng để thay đổi giá trị this.state đồng thời render lại giao diện
        // Lưu ý : phương thức setState là phương thức bất đồng bộ.
        this.setState({
            color: 'red'
        }, () => {
            // Hàm này sẽ tự gọi sau khi thay đổi state và render lại giao diện.
            console.log(this.state)
        })
    }

    onhandleChangeSize = () => {
        this.setState({
            size: this.state.size + 1
        })
    }
    

    render() {
        return (
            <div className='container'>
                <p>Thay đổi màu sắc</p>
                <p style={{color:this.state.color}}>Lorem ipsum dolor sit amet.</p>
                <button className='btn btn-danger' onClick={() => {
                    this.handleChangeColor()
                }}>Change Color</button>
                <hr />
                <h3>Tăng giảm số lượng</h3>
                <p>{this.state.like} <i className='fa fa-heart text-danger'></i></p>
                <i 
                className='fa fa-heart text-danger fs-3' 
                style={{cursor: 'pointer'}}
                onClick={() => {
                    this.setState({
                        like: this.state.like + 1
                    })
                }}
                ></i>
                <hr />
                <h3>Ví dụ 3: Tăng giảm fontsize</h3>
                <p style={{fontSize: this.state.size}}>Lorem ipsum dolor sit amet.</p>
                <button className='btn btn-dark mx-2' 
                onClick={() => {this.onhandleChangeSize()}}
                // onClick = {this.onhandleChangeSize}
                >+</button>
                <button className='btn btn-dark mx-2'>-</button>
            </div>
        );
    }
}


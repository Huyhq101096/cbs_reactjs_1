import React, { Component } from "react";

export default class FormProduct extends Component {
  state = {
    values: {
      id: "",
      name: "",
      image: "",
      price: 0,
      description: "",
      type: "phone",
    },
    errors: {
      id: '(*)',
      name: '(*)',
      image: '(*)',
      price: '(*)',
      description: '(*)',
    },
  };

  handelChangeInput = (e) => {
    const { id, value } = e.target;

    // xử lí values
    let newValues = {...this.state.values}
    newValues[id] = value

    // xử lí errors
    let newErrors = {...this.state.errors}
    newErrors[id] = value

    // xử lí state
    this.setState({
      values: newValues,
      errors: {}
    })

  
  };

  handleSubmit = (e) => {
    const { id, value } = e.target;
    e.preventDefault(); // chặn sự kiện reload browser
    // console.log(e.target);
    // console.log(this.state);
    // this.setState({
    //   [id]:value
    // })
  };

  render() {
    // console.log(this.state)
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <div className="card-header bg-dark text-white">
          <h3>Product Info</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p>id</p>
                <input
                  className="form-control"
                  id="id"
                  name="id"
                  onInput={this.handelChangeInput}
                />
                <p className="text text-danger">{this.state.errors.id}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>name</p>
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  onInput={this.handelChangeInput}
                />
                <p className="text text-danger">{this.state.errors.name}</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p>image</p>
                <input
                  className="form-control"
                  id="image"
                  name="image"
                  onInput={this.handelChangeInput}
                />
                <p className="text text-danger">{this.state.errors.image}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>price</p>
                <input
                  className="form-control"
                  id="price"
                  name="price"
                  onInput={this.handelChangeInput}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p>description</p>
                <input
                  className="form-control"
                  id="description"
                  name="description"
                  onInput={this.handelChangeInput}
                />
                <p className="text text-danger">{this.state.errors.description}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>type</p>
                <select
                  id="type"
                  name="type"
                  className="form-control"
                  onInput={this.handelChangeInput}
                >
                  <option value="phone">Phone</option>
                  <option value="laptop">Laptop</option>
                  <option value="tablet">Tablet</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-success nx-2" type="submit">
            Create
          </button>

          <button className="btn btn-primary mx-2" type="button">
            Update
          </button>
        </div>
      </form>
    );
  }
}

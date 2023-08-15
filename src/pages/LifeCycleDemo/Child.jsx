import React, { Component } from 'react'

export default class Child extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }

        console.log('constructor child')
    }

    static getDerivedStateFromProps(newState, newProps) {
        console.log('getDerivedStateFromProps Child')
        return null;
    }

    shouldComponentUpdate(newProps,newState) {
        console.log('shouldComponentUpdate child')
        return false;
    }


  render() {
    console.log('render child')
    return (
      <div>Child</div>
    )
  }

  componentDidMount() {
    console.log('componentDidMount child')
  }



}

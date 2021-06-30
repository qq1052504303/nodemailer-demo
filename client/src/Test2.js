import React, { Component } from "react";
import Test from "./Test";

export default class Test2 extends Test {
  // state = {
  //     name: 'test2'
  // }

  componentDidMount() {
      console.log('did2');
  }
  render() {
    // console.log(this);
    // return 'test2'
    // return super.render()
    const elementsTree = super.render();
    console.log(elementsTree);
    let newProps = {};
    if (elementsTree && elementsTree.type === "input") {
      newProps = { value: "may the force be with you" };
    } else {
        newProps = {value: '我没有'}
    }
    const props = Object.assign({}, elementsTree.props, newProps);
    const newElementsTree = React.cloneElement(
      elementsTree,
      props,
      elementsTree.props.children
    );
    console.log(newElementsTree);
    return newElementsTree;
  }
}

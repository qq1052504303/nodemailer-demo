import React, { Component } from 'react'

export default class Test extends Component {

    state = {
        name: 'test'
    }

    componentDidMount(){
        console.log('did');
    }

    func() {
        console.log('func');
    }

    render() {
        console.log(this);
        return (
            // <input type="text" value="default" onChange={e => {}}/>
            // <div>父级<div>子级</div></div>
            <div>
                parent
                <div test="1111">123</div>
                <input type="text" onChange={e => {}}/>
            </div>
        )
    }
}

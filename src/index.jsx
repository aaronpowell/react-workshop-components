import React, { Component } from 'react';
import { render } from 'react-dom';

class HelloWorldComponent extends Component {
    render () {
        return <h1>Welcome!</h1>;
    }
}

render(<HelloWorldComponent />, document.getElementById('container'));

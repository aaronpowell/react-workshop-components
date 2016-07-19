import React from 'react';
import { render } from 'react-dom';

let HelloWorld = () => <h1>Hello World!</h1>;

render(<HelloWorld />, document.getElementById('container'));

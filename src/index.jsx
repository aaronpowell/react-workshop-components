import React, {Component} from 'react';
import { render } from 'react-dom';


class LifeCycledComponent extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

render(<LifeCycledComponent />, document.getElementById('container'));

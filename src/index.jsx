import React, {Component, PropTypes} from 'react';
import { render } from 'react-dom';

class FormItemComponent extends Component {
    render () {
        return (
            <fieldset>
                <label htmlFor={this.props.id}>{this.props.label}: </label>
                <input type={this.props.type} id={this.props.id} value={this.props.value} onChange={(e) => this.props.change(e.target.value)} />
            </fieldset>
        );
    }
}

FormItemComponent.defaultProps = {
    type: 'text',
    value: ''
};

FormItemComponent.propTypes = {
    type: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string
};

class LifeCycledComponent extends Component {
    constructor (props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }


    componentWillMount () {
        fetch('http://httpstat.us/200')
            .then((res) => this.setState({ status: res.status }));
    }


    render () {
        var formProps = {};

        if (this.state.status !== 200) {
            formProps.disabled = true;
        }

        return (
            <form {...formProps}>
                <FormItemComponent label="Username" id="username" value={this.state.username} change={(value) => this.change('username', value)} />
                <FormItemComponent label="Password" id="password" type="password" value={this.state.password} change={(value) => this.change('password', value)} />

                <fieldset>
                    <button type="submit">Login</button>
                </fieldset>
            </form>
        );
    }

    change (target, value) {
        this.setState({ [target]: value });
    }
}

render(<LifeCycledComponent />, document.getElementById('container'));

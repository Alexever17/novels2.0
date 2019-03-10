import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.determineOnclick = this.determineOnclick.bind(this);
    }

    determineOnclick(input) {
        if (input === "close") {return (e) => this.props.toggle(e)}
        if (input === null) {return null}
        if (typeof (input) === "object") {return (e) => this.props.toggle(e, input)}
    }

    render() {
            return (
                <button className={this.props.classname} onClick={this.determineOnclick(this.props.onclick)}>{this.props.text}</button>
            );
        } 
}

export default Button;
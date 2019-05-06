import React from "react";

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value.toUpperCase()})
    }

    handleSubmit = (event) => {
        alert('A name was submitted: ' + this.input.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    name:
                    <input type="text" ref={(input) => this.input = input} />
                </label>
                <input type="submit" value="submit" />
            </form>
        )
    }
}

export default NameForm;
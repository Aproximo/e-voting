import React, {Component} from 'react';

class Enter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.showForm = this.showForm.bind(this);
    }

    showForm() {
        this.setState(
            {
                isOpened: !this.state.isOpened
            }
        )
    }

    render() {
        let form;
        if (this.state.isOpened) {
            form = <div>FORM</div>
        }
        return (
            <div onClick={this.showForm}>
                ShowForm
                {form}
            </div>
        )
    }
}

export default Enter;
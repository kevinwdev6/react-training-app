import React from 'react';

const validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export class AddUserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            nameHasError: false,
            email: '',
            emailHasError: false,
            phone: '',
            website: '',
            formSubmitted: false
        };
        
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleWebsiteChange = this.handleWebsiteChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleNameChange(e) {
        const name = e.target.value;
        this.setState({name});
    }

    handleEmailChange(e) {
        const email = e.target.value;
        this.setState({email});
    }

    handlePhoneChange(e) {
        const phone = e.target.value;
        this.setState({phone});
    }

    handleWebsiteChange(e) {
        const website = e.target.value;
        this.setState({website});
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            website: 'https://' + this.state.website,
        };
        if (!!this.props.whenFormSubmitted && typeof this.props.whenFormSubmitted === 'function') {
            this.props.whenFormSubmitted(user);
            this.resetForm();
        };
    }

    resetForm() {
        this.setState({
            name: '',
            nameHasError: false,
            email: '',
            emailHasError: false,
            phone: '',
            website: '',
            formSubmitted: false
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} onReset={this.resetForm} className="add-user">
                <div className="field-group">
                    <label>Name: </label>
                    <input type="text" onChange={this.handleNameChange} value={this.state.name} />
                </div>
                <div className="field-group">
                    <label>Email: </label>
                    <input type="text" onChange={this.handleEmailChange} value={this.state.email} />
                </div>
                <div className="field-group">
                    <label>Phone: </label>
                    <input type="text" onChange={this.handlePhoneChange} value={this.state.phone} />
                </div>
                <div className="field-group">
                    <label>Website: https://</label>
                    <input type="text" onChange={this.handleWebsiteChange} value={this.state.website} />
                </div>
                <div className="actions">
                    <button type="reset">Clear</button>
                    <button type="submit">Add User</button>
                </div>
            </form>
        );
    }
}
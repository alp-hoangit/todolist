import React, { Component } from 'react'
import './UserProfile.css'

export default class UserProfile extends Component {

    state = {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        passwordConfirm: ""
    };

    handleChangeValue = (event) => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className='container-fluid' style={{ backgroundColor: '#EEEEEE', display: "flex", alignItems: "center", justifyContent: "center" }}>
                <form style={{ width: "600px" }} className='bg-white p-5 m-5'>
                    <h1 className='text-center mt-0'>User Profile</h1>
                    <div className="row">
                        <div className="col-6">
                            <div className="group">
                                <input name='firstName' type="text" required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>First Name</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="group">
                                <input name='lastName' type="text" required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Last Name</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="group">
                                <input name='userName' type="text" required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Username</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="group">
                                <input name='email' type="text" required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Email</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="group">
                                <input name='password' type="password" required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Password</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="group">
                                <input name='passwordConfirm' type="password" required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Password Confirm</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <button className='btn bg-dark text-white col-12' style={{ fontSize: "20px" }}>Submit</button>
                    </div>

                </form>
            </div>
        )
    }
}

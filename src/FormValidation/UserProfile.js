import React, { Component } from 'react'
import './UserProfile.css'
import Swal from 'sweetalert2'

export default class UserProfile extends Component {

    state = {
        values: {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
            passwordConfirm: ""
        },
        errors: {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
            passwordConfirm: ""
        }
    };

    handleChangeValue = (event) => {
        let { name, value, type } = event.target;

        let newValue = { ...this.state.values, [name]: value };
        let newError = { ...this.state.errors };
        if (value.trim() === "") {
            newError[name] = `${name} is required!`;
        } else {
            newError[name] = "";
        }

        if (type === "email") {
            const re =
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!re.test(value)) {
                newError[name] = name + " is invalid!";
            } else {
                newError[name] = "";
            }
        }

        if (name === "passwordConfirm") {
            if (value === newValue['password']) {
                newError[name] = "";
            } else {
                newError[name] = name + " is invalid!"
            }
        }

        this.setState({
            values: newValue,
            errors: newError
        })
    }

    handleSubmit = (event) => {
        event.preventDefault(); // ngăn trình duyệt tự load lại trang
        // xét điều kiện khi submit
        let { values, errors } = this.state;
        let valid = true; // biến xác định cờ hiệu
        let profileContent = "";
        let errorsContent = "";
        for (let key in values) {
            if (values[key] === "") {
                valid = false;
            }
            profileContent += `<p className='text-left'><b>${key}:</b> ${values[key]}</p>`;
        }
        for (let key in errors) {
            if (errors[key] !== "") {
                valid = false;
                errorsContent += `<p className='text-left text-danger'>${key} is invalid</p>`
            }
        }
        if (!valid) {
            Swal.fire({
                title: 'Đăng ký thất bại!',
                text: 'Dữ liệu của bạn nhập vào chưa hợp lệ!',
                icon: 'error',
                html: errorsContent,
                confirmButtonText: 'Cool'
            })
            return;
        }
        // alert("Đăng ký thành công!");
        Swal.fire({
            title: 'Đăng ký thành công!',
            text: 'Hồ sơ của bạn',
            icon: 'success',
            html: profileContent,
            confirmButtonText: 'Cool'
        })
    }

    render() {
        return (


            <div className='container-fluid' style={{ height: "100vh", backgroundColor: '#EEEEEE', display: "flex", alignItems: "center", justifyContent: "center" }}>
                <form onSubmit={this.handleSubmit} style={{ width: "600px" }} className='bg-white p-5 m-5'>
                    <h1 className='text-center mt-0 mb-4'>User Profile</h1>
                    <div className="row">
                        <div className="col-6">
                            <div className="group">
                                <input value={this.state.values.firstName} name='firstName' type="text" required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>First Name</label>
                                <span className='text text-danger'>{this.state.errors.firstName}</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="group">
                                <input value={this.state.values.lastName} name='lastName' type="text" required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Last Name</label>
                                <span className='text text-danger'>{this.state.errors.lastName}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="group">
                                <input value={this.state.values.userName} name='userName' type="text" required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Username</label>
                                <span className='text text-danger'>{this.state.errors.userName}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="group">
                                <input value={this.state.values.email} name='email' type="email" required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Email</label>
                                <span className='text text-danger'>{this.state.errors.email}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="group">
                                <input value={this.state.values.password} name='password' type="password" required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Password</label>
                                <span className='text text-danger'>{this.state.errors.password}</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="group">
                                <input value={this.state.values.passwordConfirm} name='passwordConfirm' type="password" required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Password Confirm</label>
                                <span className='text text-danger'>{this.state.errors.passwordConfirm}</span>
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

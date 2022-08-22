import React, { Component } from 'react'
import Navber from '../Navber/Navber';
import axios from 'axios';

class AdministratorLogin extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  } 

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    axios.post('/admin/login', {
      email: user.email,
      password: user.password
    }).then(response => {
      if(response.data === "Email not found") {
        alert("Email not found");
        return false;
      }
      if(response.data === "Password incorrect") {
        alert("Password incorrect");
        return false;
      }
      sessionStorage.setItem('usertoken', response.data);
      alert("Admin logged in Successfully");
      return true;
    }).then(res => {
      if(res) {
        console.log("Success!");
        sessionStorage.setItem('userData', JSON.stringify(user));
        this.props.history.push('/administrator/login/admin_home');
      } else {
        console.log("Failure!");
      }
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="body">
      <Navber/>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit} >
              <h1 className="h3 mb-3 mt-5 font-weight-normal btn-rg">Please sign in as Admin</h1>
              <div className="form-group btn-rg">
                <label htmlFor="email" >Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group btn-rg">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                 value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block mb-5"
              >
                Sign in
              </button>
           </form>
          </div>
        </div>
      </div>
      
      <div className="mb-5 mt-5">v</div>
      
      </div>  
    )
  }
}
export default AdministratorLogin;
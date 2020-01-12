import React, { Component } from 'react';
import axios from 'axios';
import './login.css';

class Login extends Component {
  
    state = {
        _id: '',
        email: '',
        password: '',
        token: '',
    }

    postDataHandler = (event) => {
        event.preventDefault();
            const data = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:3001/api/login', data)
        .then(response => {
            console.log(response);
            // console.log(response.data.user.token);
            this.setState({_id: response.data.user._id})
            this.setState({token: response.data.user.token})
        }).catch((err) => {
            console.log(err);
            console.log("Incorrect email or password");
        })
    }

        componentDidUpdate() {
            // console.log(this.state.token + " test");
            // console.log(this.state._id)
            const newData = {
                _id: this.state._id,
                email: this.state.email,
                password: this.state.password,
                token: this.state.token
            }
            // console.log(newData._id + "new data test")
            const tokenHolder = newData.token
            // console.log(newData.token + 'token test')
            axios.get('http://localhost:3001/api/current', {
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded',
                    'Authorization' : `Token ${newData.token}`
                    }
             }
            )
            .then(response => {
                // console.log(response.data.user._id);
                // this.setState({loggedIn: true})
                this.props.handleUpdateLogin()
            }).catch((err) => {
                console.log(err);
            })
        }

    render() {
        return (
             <div className="login-page">
                <h1 className="login-title">Login</h1>
                <form className="form-styles">
                <label>Email</label>
                <input type="text" value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} />
                <label>Password</label>
                <input type="password" value={this.state.password} onChange={(event) => this.setState({password: event.target.value})} />
                <button className="btn btn-info" onClick={this.postDataHandler}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;
import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    postDataHandler = () => {
        const data = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:3001/api/login', data)
        .then(response => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        })
    }

    
    render() {
        return (
             <div className="login-page">
                <h1>Login</h1>
                <label>Email</label>
                <input type="text" value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} />
                <label>Password</label>
                <input type="password" value={this.state.password} onChange={(event) => this.setState({password: event.target.value})} />
                <button onClick={this.postDataHandler}>Submit</button>
            </div>
        )
    }
}

export default Login;
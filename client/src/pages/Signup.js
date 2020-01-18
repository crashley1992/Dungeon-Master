import React, {Component} from 'react';
import axios from 'axios';
import './sign-up.css';

class Signup extends Component {
    state = {
        id: '',
        username: '',
        email: '',
        password: ''
    }

    postDataHandler = () => {
        const data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:3001/api/signup', data)
        .then(response => {
            console.log(response);
            this.props.handleSignup()
        }).catch((err) => {
            console.log(err);
        }) 
        
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
             <div className="signup-page">
                <h1 className="signup-title">Sign up</h1>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={(event) => this.setState({username: event.target.value})} />
                <label>Email</label>
                <input type="text" value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} />
                <label>Password</label>
                <input type="password" value={this.state.password} onChange={(event) => this.setState({password: event.target.value})} />
                <p className="info-text">After creating an account you'll be asked to login</p>
                <button className="btn btn-info" onClick={this.postDataHandler}>Submit</button>
            </div>
        )
    }
}

export default Signup;
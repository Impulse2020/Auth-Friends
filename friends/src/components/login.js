import React from 'react';
import axios from 'axios';


class Login extends React.Component{
    constructor(){
    super();
        this.state ={
            username: "",
            password: "",
            isLoading:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event){
        event.preventDefault();
        this.setState({ ...this.state, [event.target.name]: event.target.value });
    }
    handleSubmit(event){
        event.preventDefault();
        this.setState({
            username:"",
            password:""
        })
        axios.post("http://localhost:5000/api/login", this.state)
            .then(res =>{ localStorage.setItem('token', res.data.payload)
                window.location.replace("/dashboard")
                })
            .catch(err => {console.log(err)})
    }


    render() {
        return(
        <div>
            <form className="LoginForm" onSubmit={this.handleSubmit}>
                <label>Username:
                <input 
                    name="username"
                    value={this.state.username} 
                    onChange={this.handleChange} 
                />
                </label>
                <label>Password:
                <input 
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                />
                </label>
                <button type="submit">Log in</button>
            </form>
        </div>
        )
    }
}

export default Login;
import React from 'react';

class Login extends React.Component{
    constructor(){
    super();
        this.state ={
            username: "",
            password: ""
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
    }


    render() {
        return(
        <div>
            <form onSubmit="">
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
                    onChange={this.handleSubmit}
                    type="password"
                />
                </label>
                <button>Log in</button>
            </form>
        </div>
        )
    }
}

export default Login;
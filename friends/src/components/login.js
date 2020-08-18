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
        this.setState({
            username:"",
            password:""
        })
    }
    render() {
        return(
            <Form onSubmit="">
                <input 
                    value="" 
                    onChange="" 
                />
                <input 
                    value=""
                    onchange=""
                    type="password"
                />
                <button>Log in</button>
            </Form>
        )
    }
}
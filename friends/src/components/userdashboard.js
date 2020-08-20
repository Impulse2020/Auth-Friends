import React, {useState, useEffect} from 'react';
import FriendsList from './friendslist';
import axiosWithAuth from '../utils/axiosWithAuth';





export default function UserDashBoard(props){
    const [formValues, setFormValues] = useState({
        name:"",
        age:"",
        email:""
    })
    const handleChange = e =>{
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
    }
    
    const handleSubmit = e =>{
        e.preventDefault();

        axiosWithAuth().post('//')
    }
    useEffect(() => {
        axiosWithAuth().get("/api/friends")
            .then(res=>{console.log(res)})
            .catch(err=>{console.log(err)})
    },[])
    return(
        <div>
            <h1>DashBoard</h1>
            <form>
                <input 
                    type="text"
                    placeholder="name"
                    name="name" 
                />
                <input
                    type="text"
                    placeholder="age"
                    name="age"
                />
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                />
            <button onClick={handleSubmit}>Add friend</button>
            </form>
            <FriendsList />
        </div>
    )

}
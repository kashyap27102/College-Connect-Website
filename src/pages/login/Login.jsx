import React from 'react';
import './login.css'
import { Link,Navigate } from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            enrollmentNo: '',
            password: '',
            loggedIn : false,
            data : [],
            person : {}
        }
    }
    submitHandler = (e) => {
        e.preventDefault();
        this.setState({
            enrollmentNo: '',
            password: ''
        })
        this.state.person = this.state.data.filter((user) => user.enrollmentNo==this.state.enrollmentNo)[0];
        if(this.state.password==this.state.person.password)
            this.state.loggedIn = true
        
    }
    componentDidMount(){
        axios.get('http://localhost:3006/users').then(response =>{
            this.state.data = response.data;
            // console.log(this.state.data);
        })  
    }
    render() {
        const { enrollmentNo, password } = this.state;
        if(this.state.loggedIn==true){
            return(
                <>
                <Navigate to="/home"/>
                </>
            )
        }
        return (
            <div className="login">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className='loginLogo'>COLLEGE CONNECT</h3>
                        <span className='loginDesc'>Connect with your College friends and Explore college journy</span>
                    </div>
                    <div className="loginRight">
                        <form className="loginBox" onSubmit={this.submitHandler}>
                            <input placeholder='Enrollment No' className='loginInput' name="enrollmentNo" value={enrollmentNo} onChange={(e) => { this.setState({ enrollmentNo: e.target.value }) }} />
                            <input type='password' placeholder='Password' className='loginInput' name="password" value={password} onChange={(e) => { this.setState({ password: e.target.value }) }} />
                            <button type='submit' className="loginButton" onClick={this.authenticate}>LOG IN</button>
                            <span className='signupClick'>if you don't have an Account  <Link to={'/signup'}>
                            <a href="#" className='signupClickbutton' >Click Here</a></Link>
                            </span>

                    </form>
                </div>

            </div>
            </div >
        )
    }
}

export default Login;

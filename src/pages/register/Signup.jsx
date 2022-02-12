import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import Login from '../login/Login';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                id: uuid(),
                enrollmentNo: '',
                name: '',
                currentYear: '',
                department: '',
                mobileNo: '',
                emailId: '',
                password: ''
        }
    }
    submitHandler = (e) => {
        e.preventDefault();
        const data = JSON.stringify(this.state);
        axios.post('http://localhost:3006/users',data).then(response =>{
            console.log(response);
        })
    }
    render() {
        const { enrollmentNo, name, currentYear, department, mobileNo, emailId, password } = this.state;
        return (
            <div className="signUp">
                <div className="signUpWrapper">
                    <div className="signUpLeft">
                        <h3 className='signUpLogo'>COLLEGE CONNECT</h3>
                        <span className='signUpDesc'>Connect with your College friends and Explore college journy</span>
                    </div>
                    <div className="signUpRight">
                        <form className="signUpBox" onSubmit={this.submitHandler}>
                            <input placeholder='Enrollment No' className='signUpInput' name='enrollmentNo' value={enrollmentNo} onChange={(e) => this.setState({ enrollmentNo: e.target.value })} />

                            <input placeholder='Name (First Name - Last Name)' className='signUpInput' name='name' value={name} onChange={(e) => this.setState({ name: e.target.value })} />

                            <input placeholder='Current Year' className='signUpInput' name='currentYear' value={currentYear} onChange={(e) => this.setState({ currentYear: e.target.value })} />

                            <input placeholder='Department' className='signUpInput' name='department' value={department} onChange={(e) => this.setState({ department: e.target.value })} />

                            <input placeholder='Mobile No' className='signUpInput' name='mobileNo' value={mobileNo} onChange={(e) => this.setState({ mobileNo: e.target.value })} />

                            <input placeholder='Email Id' className='signUpInput' name='emailId' value={emailId} onChange={(e) => this.setState({ emailId: e.target.value })} />

                            <input type='password' placeholder='Creat Password' className='signUpInput' name='password' value={password} onChange={(e) => this.setState({ password: e.target.value })} />
                            <button type="submit" className="signUpButton">SIGN UP</button>
                            <span className='logInClick'>Already have an Account
                                    <Link to={'/login'}>
                                    <a href="#" className='loginClickbutton'>Click Here</a></Link></span>
                        </form>
                    </div>

                </div>
            </div>
        )
    }
}

export default Signup;

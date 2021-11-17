import React from 'react';
import './CSS/login.css';
import dot from './images/logo.png';
import index from './images/index.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component{
	constructor(props){
		super(props);
	//	this.addFormData = this.addFormData.bind(this);
		this.onChangeName= this.onChangeName.bind(this);
		this.onChangePassword=this.onChangePassword.bind(this);
		this.state={
			Aname:'',
			Apassword:''
		}
	}
	onChangeName(e){
		this.setState({Aname: e.target.value});
	};
	onChangePassword(e){
		this.setState({Apassword: e.target.value});
	};
	onSubmit =(e) =>{
		e.preventDefault();
		let obj= {name:this.state.Aname,
					password:this.state.Apassword
		};
		
		axios.post('http://localhost/test.php',obj)
		.then(function(response){
			console.log(response);
	  }).catch(function (error) {
			console.log(error);
	  });  
	};
	
render(){
return <div>
 <header className="header">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="header_content">
						<a href="/#" className="dot">
							<div className="logo"><img  style={{height:"60px"}} src={dot} alt="" /><div>Flow<span>fitness</span></div></div>
                            </a>
						<nav className="main_nav">
							<ul className="">
							<li><Link to="/">Home</Link></li>
								<li><Link to="About">About us</Link></li>
								<li><Link to="Contact">Contact</Link></li>
								<li className="active"><Link to="Login">Login</Link></li><li><a onClick={() =>  {window.open('http://localhost/gym/');}}>Login</a></li>
							</ul>
						</nav>
						
					</div>
				</div>
			</div>
		</div>
	</header>

    <div className="home">
		<div className="background_image"><img src={index} alt="" /></div> 
         <div className="home_container">	
            <div className="container">
				<div className="row">
					<div className="col">
						<div className="home_content">
							<div className="homee_title">Login here</div>
							<div className="homee_subtitle">Pilates, Yoga, Fitness, Spinning & many more</div>
						</div>
					</div>
				</div>
                <div className="login" >
               <form  onSubmit={this.onSubmit}>
				   <div>
                   <label>Username</label>
                   <input className="uname" name="aname" onChange={this.onChangeName} type="text" placeholder="Enter username" required></input><br></br>
				   </div>
				   <div>
                   <label>Password</label>
                   <input className="psw" name="apassword" onChange={this.onChangePassword} type="password" placeholder="Enter password" required></input><br></br>
                   <button className="login" type="submit" onClick={() =>  {window.open('http://localhost/gym/dashboard/admin/');}} >Login</button>
				   </div>
				   </form>
           </div>
			</div>
		</div>
	</div>





</div>

}
}
export default Login;
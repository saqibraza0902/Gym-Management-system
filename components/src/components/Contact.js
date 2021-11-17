import React from 'react';
import './CSS/contact.css';
import dot from './images/logo.png';
import index from './images/index.jpg';
import { Link } from 'react-router-dom';

const Contact = (props) =>{
return <div>
	<header className="header">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="header_content">
						<a href="/#">
							<div className="logo "><img  style={{height:"60px"}} src={dot} alt="dot"/><div>Flow<span>fitness</span></div></div>
						</a>
						<nav className="main_nav">
							<ul>
							<li><Link to="/">Home</Link></li>
								<li><Link to="About">About us</Link></li>
								<li  className="active"><Link to="Contact">Contact</Link></li>
								<li><a style={{cursor:"pointer"}} onClick={() =>  {window.open('http://localhost/gym/');}}>Login</a></li>
								<li><a style={{cursor:"pointer"}} onClick={() =>  {window.open('http://localhost/gym/admin_reg.php');}}>Singup</a></li>
							</ul>
						</nav>

					</div>
				</div>
			</div>
		</div>
	</header>


	<div className="home">
		<div className="background_image"><img src={index} alt="index"></img></div>
		  <div className="home_container">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="home_coontent">
							<div className="home_tiitle">Contact</div>
							<div className="home_subtiitle">Pilates, Yoga, Fitness, Spinning & many more</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>



     

<div className="contact">
    <div className="containerr">
        <div className="row">
             <div className="col-lg-4">
					<div className="contact_content">
						<div className="contact_logo">
							<div className="logo"><img src={dot} alt="dot" /><div>Flow<span>fitness</span></div></div>
                        </div>
                        <div className="contact_text">
							<p>We are never given a lot of hatred of the porch is a great effect. You should have to sit on earth despite to do nothing.</p>
						</div>
                        <div className="contact_list">
							<ul>
								<li>A:&nbsp;&nbsp;Canal road Faisalabad</li>
								<li>P:&nbsp;&nbsp;+92 335 72 75 136</li>
								<li>M:&nbsp;&nbsp;yourmail@gmail.com</li>
							</ul>

                    </div>
                </div>
            </div>

           
				<div className="col-lg-8 contact_col">
					<div className="contact_title">Get in touch</div>
					<div className="contact_form_container">
						<form action="/#" className="contact_form">
							<div className="row">
								<div className="col-lg-6">
									<div className="input_item"><input type="text" className="contaact_input" placeholder="Name" required="required" /></div>
								</div>
								<div className="col-lg-6">
									<div className="input_item"><input type="email" className="contaact_input" placeholder="E-mail" required="required" /></div>
								</div>
							</div>
							<div className="input_iteem"><textarea className="contaact_input contact_textarea " placeholder="Message" required="required" ></textarea></div>
							<button className="contact_button button">Send<span></span></button>
						</form>
					</div>
				</div>

			</div>
		</div>
        </div>

</div>
}
export default Contact;
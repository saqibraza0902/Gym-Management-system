import React from 'react';
import './CSS/about.css';
import dot from './images/logo.png';
import a2 from './images/a2.png';
import index from './images/index.jpg';
import { Link } from 'react-router-dom';
const About = (props) => {
return  <div>
<header className="header">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="header_content">
						<a href="/#" className="dot">
							<div className="logo"><img style={{height:"60px"}}  src={dot} alt="" /><div>Flow<span>fitness</span></div></div>
							</a>
						<nav className="main_nav">
							<ul>
							    <li><Link to="/">Home</Link></li>
								<li className="active"><Link to="About">About us</Link></li>
								<li><Link to="Contact">Contact</Link></li>
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
			<div className="contaainer">
				<div className="row">
					<div className="col">
						<div className="home_content">
							<div className="home_title">About us</div>
							<div className="home_subtitle">Pilates, Yoga, Fitness, Spinning & many more</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>



    <div className="about">
		<div className="about_container">
			<div className="row">
				<div className="col-lg-6">
					<div className="about_content">
						<div className="section_title_container">
							<div className="section_subtitle">welcome to flowfitness</div>
							<div className="section_title">About <span>Flowfitness</span></div>
						</div>
						<div className="text_highlight">If you want to get fit just do some exercises with us. You will get great care until you are here.</div>
						<div className="about_text">
							<p>We want to help you live a fit and healthy lifestyle! We do this by helping you find the most suitable equipment for your home gym, studio or commercial gym, keeping your budget, lifestyle and fitness goals in mind. We stock a wide range of gym equipment, with strength equipment, cardio, cross training and so much more. Our awesome team is always keen to help, so please call us to discuss your needs.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="about_background">
			<div className="about_image"><img src={a2} alt="" /></div>
        </div>
	</div>





</div>
}

export default About;
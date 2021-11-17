import React from 'react';
import './CSS/home.css';
import icon_1 from './images/icon_1.png';
import icon_2 from './images/icon_2.png';
import icon_3 from './images/icon_3.png';
import dot from './images/logo.png';
import index from './images/index.jpg';
import { Link } from 'react-router-dom';

const Home = (props) => { 
      return <div>
	<header className="header">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="header_content">
						<a className="dot" href="/#">
							<div className="logo"><img  style={{height:"60px"}} src={dot} alt="" /><div>Flow<span>Fitness</span></div></div>
						</a>
						<nav className="main_nav">
							<ul>
								<li className="active"><Link to="/">Home</Link></li>
								<li><Link to="About">About us</Link></li>
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
		<div className="overlay"></div>
		<div className="home_container">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="home_content text-center">
							<div className="home_title">Get fit with us</div>
							<div className="home_subtitle">Pilates, Yoga, Fitness, Spinning & many more</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	

	<div className="boxes">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="boxes_container d-flex ">
						<div className="box">
							<div className="box_icon"><img src={icon_1} alt="" /></div>
							<div className="box_title">Pilates with trainer</div>
							<div className="box_text">
								<p>If you want to get fit just do some exercises with us. You will get great care until you are here.</p>
							</div>
							<div className="box_link_container">
								<a href="/#"><div className="box_link "><div>+</div></div></a>
							</div>
						</div>

						  
						<div className="box">
							<div className="box_icon"><img src={icon_2} alt="" /></div>
							<div className="box_title">Swimming Pool</div>
							<div className="box_text">
								<p> You will get great care until you are here. What is more than laughter and smile in your life when you get bothered in your bed.</p>
							</div>
							<div className="box_link_container">
								<a href="/#"><div className="box_link"><div>+</div></div></a>
							</div>
						</div>

						
						<div className="box">
							<div className="box_icon"><img src={icon_3} alt="" /></div>
							<div className="box_title">Healthy diet plan</div>
							<div className="box_text">
								<p>There are several important nutrients & natural ways to boost immune system with good food.</p>
							</div>
							<div className="box_link_container">
								<a href="/#"><div className="box_link"><div>+</div></div></a>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>

	<div className="abouut">
		<div className="abouut_container">
			<div className="row">
				<div className="col-lg-6">
					<div className="abouut_content">
						<div className="section_title_container">
							<div className="section_subtitlee">welcome to flowfitness</div>
							<div className="section_titlee">About <span>Flowfitness</span></div>
						</div>
						<div className="text_highlight">If you want to get fit just do some exercises with us. You will get great care until you are here.</div>
						<div className="about_text">
							<p>We want to help you live a fit and healthy lifestyle! We do this by helping you find the most suitable equipment for your home gym, studio or commercial gym, keeping your budget, lifestyle and fitness goals in mind. We stock a wide range of gym equipment, with strength equipment, cardio, cross training and so much more. Our awesome team is always keen to help, so please call us to discuss your needs</p>
						</div>
						<div className="button about_button"><a href="/#">Join Now</a></div>
					</div>
				</div>
			</div>
		</div>
		
	</div>


	</div>
}
export default Home;                    
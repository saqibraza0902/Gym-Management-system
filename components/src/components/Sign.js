/*import React from 'react';
import dot from './images/dot.png';
import index from './images/index.jpg';
import './CSS/sign.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Sign extends React.Component{
       constructor(props){
          super(props);
          this.addFormData = this.addFormData.bind(this);
      }
      addFormData(evt){
          evt.preventDefault();
          const fd = new FormData();
          fd.append('myFirstname',this.refs.myFirstname.value);
          fd.append('myLastname',this.refs.myLastname.value);
          fd.append('myFathername',this.refs.myFathername.value);
          fd.append('myEmail',this.refs.myEmail.value);
          fd.append('myPassword',this.refs.myPassword.value);
          fd.append('myPhoneno',this.refs.myPhoneno.value);
          fd.append('myAddress',this.refs.myAddress.value);
  
          var headers = {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*"
          }
          axios.post('http://localhost/api/regff.php',fd,headers).then(res=>
          {
              alert(res.data.data);
          });
      } 

      render(){
        return( <div>
        <header className = "header_1">
            <div className = "container_1">
                <div className = "row_1">
                    <div className = "col_1">
                        <div className = "header_contant_1">
                            <a href = "/#">
                                <div className = "logo_1"><img src={dot} alt="dot"></img><div>Flow<span>fitness</span></div></div>
                            </a>
                            <nav className = "main_nav_1">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="About">About us</Link></li>
                                    <li><Link to="Contact">Contact</Link></li>
                                    <li><Link to="Login">Login</Link></li>
                                    <li className="active"><Link to="Sign">Sign up</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div className="home_1">
        <div className="background_image_1"><img src={index} alt="index"></img></div>
               <div className="home_container_1">
                   <div className="container_1">
                       <div className="row_1">
                           <div className="col_1">
                               <div className="home_contant_1">
                                   <div className="home_title_1">Sign up here</div>
                                   <div className="home_subtitle_1">Pilates, Yoga, Fitness, Spinning & many more</div>
                               </div>
                           </div>
                       </div>

                       <div className="sign" method="POST">
                           <form>
               <div>
               <label>Firstname</label>
               <input type="text" placeholder="Enter firstname" ref="myFirstname" required></input><br></br>
               </div>
               <div>
               <label>Lastname</label>
               <input type="text" placeholder="Enter lastname" ref="myLastname" required></input><br></br>
               </div>
               <div>
               <label>Fathername</label>
               &nbsp;&nbsp;
               <input type="text" placeholder="Enter fathername" ref="myFathername" required></input><br></br>
               </div>
               <div>
               <label>Email</label>
               <input type="email" className="abb" placeholder="Enter email" ref="myEmail" required></input><br></br>
               </div>
               <div>
               <label>Password</label>
               <input type="password" placeholder="Enter password" ref="myPassword" required></input><br></br>
               </div>
               <div>
               <label>Phone no</label>
               <input type="text" placeholder="Enter phone no" ref="myPhoneno" required></input><br></br>
               </div>
               <div>
               <label>Address</label>
               <input type="text" placeholder="Enter address" ref="myAddress" required></input><br></br>
               </div>
               <div>
               <label className="select">Gender</label>
               <input type="radio" id="male" ></input>
               <label className="radio">Male</label>
               <input type="radio" id="female" ></input>
               <label className="radio">Female</label><br></br>
               </div>
               <div>
               <label className="select">Catagory</label>
               <input type="radio"  id="trainer" ></input>
               <label className="radio">Trainer</label>
               <input type="radio" id="manager" ></input>
               <label className="radio">Manager</label><br></br>
               </div>
               <div>
               <label className="cv">CV</label>
               <input type="file" className="cv1" ></input><br></br>
               </div>
               <button onClick={this.addFormData}>Sign up</button>
               </form>
       </div>
                   </div>
               </div>
        </div>


    </div>
);
}
}
export default Sign;*/
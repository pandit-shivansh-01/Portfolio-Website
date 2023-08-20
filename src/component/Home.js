import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
        <header className="header" id="home">
        <div className="container">
            <div className="infos">
                <h6 className="subtitle">hello,I'm</h6>
                <h6 className="title">Shivansh pandey</h6>
                <p>Front-End Degisner/ Developer</p>

                     

                <div className="socials mt-4">
                    <Link  className="social-item" to="https://www.linkedin.com/in/shivansh-pandey001/"><i className="fa-brands fa-linkedin fa-xl"></i></Link>
                    <Link className="social-item" to="mailto:shivanshpandey506@gmail.com"><i className="fa-brands fa-google-plus-g fa-xl"></i></Link>
                    <Link className="social-item" to="https://github.com/pandit-shivansh-01"><i class="fa-brands fa-github fa-xl"></i></Link>
                    <Link className="social-item" to="https://www.facebook.com/shivansh.pandey.77715869"><i class="fa-brands fa-facebook fa-xl"></i></Link>
                </div>
            </div>              
            <div className="img-holder">
                <img src="/imgs/avatars.png" alt=""/>
            </div>      
        </div>  

        
    </header>
   
    <section  className="section mt-3">
        <div className="container mt-5" id="about">
            <div className="row text-center text-md-left">
                <div className="col-md-3">
                    <img src="/imgs/photo2.jpeg" alt="" className="img-thumbnail mb-4" />
                </div>
                <div className="pl-md-4 col-md-9">
                    <h6 className="title">Shivansh pandey</h6>
                    <p className="subtitle">Front-End Degisner/ Developer</p>
                    <p>I am a dedicated, organized and methodical individual. I have good interpersonal skills, am an excellent team worker and am keen and very willing to learn and develop new skills. I am reliable <br/> and dependable and often seek new responsibilities within Linkwide range of employment areas. I <br/> have an active and dynamic approach to work and getting things done. I am determined and decisive. I identify and develop opportunities.</p>
                                      
                </div>
            </div>
        </div>
    </section>

  
    <section id="service" className="section">
        <div className="container text-center">
            <h6 className="subtitle">Service</h6>
            <h6 className="section-title mb-4">What I Do</h6>
            <p className="mb-5 pb-4">These are the services that i provide which consists of frontend degising<br/> Web development and also creating responsive websites. </p>

            <div className="row">
                <div className="col-sm-6 col-md-4 mb-4">
                    <div className="custom-card card border">
                        <div className="card-body">
                            <i class="fa-solid fa-crown fa-xl"></i>
                            <br/>
                            <h5>FontEnd Design</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-4">
                    <div className="custom-card card border">
                        <div className="card-body">
                            <i class="fa-solid fa-desktop fa-xl"></i>
                            <br/>
                            <h5>Web Development</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-4">
                    <div className="custom-card card border">
                        <div className="card-body">
                            <i class="fa-solid fa-mobile fa-xl"></i>
                            <br/>
                            <h5>Responsive Website</h5>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>

    <section className="section">
        <div className="container text-center">
            <h6 className="subtitle">Skills</h6>
            <h6 className="section-title mb-4">Why Choose me</h6>
            <p className="mb-5 pb-4">A skill is the learned ability to act with determined results with good execution often within<br/> Linkgiven amount of time, energy, or both.</p>

            <div className="row text-left">
                <div className="col-sm-6">
                    <h6 className="mb-3">photoshop</h6>
                    <div className="progress">
                        <div className="progress-bar bg-primary a" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>89%</span></div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <h6 className="mb-3">Web Design</h6>
                    <div className="progress">
                        <div className="progress-bar bg-primary b" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>83%</span></div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <h6 className="mb-3">App Design</h6>
                    <div className="progress">
                        <div className="progress-bar bg-primary c" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>95%</span></div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <h6 className="mb-3">SEO</h6>
                    <div className="progress">
                        <div className="progress-bar bg-primary d" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>90%</span></div>
                    </div>
                </div>
            </div>  
        </div>
    </section>

    <section id="portfolio" className="section">
        <div className="container text-center">
            <h1 className="subtitle">hobbies</h1>
            <p className="mb-5 pb-4">Works that i really admire to do in my leisure time... <br/>These things give me immense pleasure. </p>

            <div className="row">
                <div className="col-sm-4">
                    <div className="img-wrapper g">
                        <img src="/imgs/hobbies1.svg" alt=""/>
                        <div className="overlay">
                            <div className="overlay-infos">
                                <h5>Wanderlust</h5>
                            </div>  
                        </div>
                    </div>
                    <div className="img-wrapper g">
                        <img src="/imgs/hobbies2.svg" alt=""/>
                        <div className="overlay">
                            <div className="overlay-infos">
                                <h5>Hungry Head</h5>
                            </div>                              
                        </div>
                    </div>                  
                </div>
                <div className="col-sm-4">
                    <div className="img-wrapper g">
                        <img src="/imgs/hobbies3.svg" alt=""/>
                        <div className="overlay">
                            <div className="overlay-infos">
                                <h5>Fitness Freak</h5>
                            </div>  
                        </div>
                    </div>
                    <div className="img-wrapper g">
                        <img src="/imgs/hobbies4.png.svg" alt=""/>
                        <div className="overlay">
                            <div className="overlay-infos">
                                <h5>Listening Music</h5>
                            </div>                              
                        </div>
                    </div>                  
                </div>
                <div className="col-sm-4">
                    <div className="img-wrapper g">
                        <img src="/imgs/hobbies5.svg" alt=""/>
                        <div className="overlay">
                            <div className="overlay-infos">
                                <h5>Tech Buddy</h5>
                            </div>  
                        </div>
                    </div>
                    <div className="img-wrapper g">
                        <img src="/imgs/hobbies6.svg" alt=""/>
                        <div className="overlay">
                            <div className="overlay-infos">
                                <h5>Dog Lover</h5>
                               
                            </div>                              
                        </div>
                    </div>                  
                </div>
            </div>

        </div>
    </section>
   
    <section id="resume" className="section">
        <h1 className="text-center">My Resume</h1><br/><br/>
        <div className="container ">
            <div className="container-fluid">
                <div className="row">
                    
                    <div className="col-md-4">
                        <h4>Expertise</h4>
                       
                        <p>Front-End Developer</p>
                        <p className="subtitle">Front end development is the areLinkof web development that focuses on the user interface. It is all about converting the backend code into Linkgraphical interface. The front end makes the datLinkeasy to read and understand. </p>
                        <hr/>
                
                        <p>Responsive websites</p>
                        <p className="subtitle">Responsive web design, or RWD, is Linkdesign approach that addresses the range of devices and device sizes, enabling automatic adaption to the screen, whether the content is viewed on Linktablet, phone, television, or watch.</p>
                        <hr/>
                        
                        <p>MERN-STACK Developer</p>
                        <p className="subtitle">MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.
    
                            MongoDB — document database
                            Express(.js) — Node.js web framework
                            React(.js) — Linkclient-side JavaScript framework
                            Node(.js) — the premier JavaScript web server</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Education</h4>
                        <span className="line"></span> 
                    <h6 className="title text-danger">2020 - present</h6>
                    <p>B.E Computer Engineering</p>
                    <p className="subtitle">I am currently pursing my btech from Itm Gwalior. My branch is computer science and Engineering. My cgpLinkis 8.2 (currently)</p>
                    <hr/><br/>
                    <h6 className="title text-danger">2019 - 2020</h6>
                    <p>Senior Secondary School Degree</p>
                    <p className="subtitle">I completed my 10+2 in the year 2020 from pragti VidyLinkpeeth (CBSE) Gwalior. i scored 76 percent in my 10+2</p>
                    <hr/><br/>
                    <h6 className="title text-danger">2017 - 2018</h6>
                    <p>Secondary School Degree</p>
                    <p className="subtitle">I completed my 10th boards in the year 2018 from Sacred Heart High School (ICSE) BalodLinkBazar Chattisgarh. I scored 75% in my 10th boards</p>
                    </div>
                    <div className="col-md-4">
                        <h4 className="mt-2">Skills</h4><br/>
                        <span className="line"></span>  
                        <h6>hTML</h6>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-danger d" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div><br/>
                        <h6>CSS</h6>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-danger d" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div><br/>
                        <h6>Mern</h6>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-danger e" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div><br/>
                        <h6>JavaScript</h6>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-danger e" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div><br/>
                        <h6>C</h6>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-danger e" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div><br/>
                        <h6>C++</h6>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-danger d" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div><br/>
                        <h6>python</h6>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-danger d" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div><br/>
                        <h6>Database(SQL)</h6>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-danger f" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        
                    </div>
    
                </div>
            </div>
        </div>
    </section>
    
    <section id="blog" className="section">
        <div className="container text-center">
            <h2 className="subtitle">My projects</h2>
            <br/><br/><br/>
            <div className="row text-left">
                <div className="col-md-4">
                    <div className="card border mb-4">
                        <img src="/imgs/project1.png" alt="" className="card-img-top w-100"/>
                        <div className="card-body">
                        <br/><br/>
                            <h5 className="card-title">Admission portal</h5>
                            
                            <p>This project is also based on mern in this project there is Linkuser who can enter his details login,logout and register for any course and there is Linkadmin module in which all the datLinkis displayed.<br/><br/></p>
                            <center><Link className='btn btn-primary' to="https://admission-portal-zxrd.onrender.com/">Admission Portal</Link></center>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border mb-4">
                        <img src="/imgs/project2.png" alt="" className="card-img-top w-100"/>
                        <div className="card-body">
                        <br/><br/>
                            <h5 className="card-title">Blog project</h5>
                            
                            <p>My Blog-project was made using mern stack.This is Linkfully dynamic website which basically has 2 modules one is the user and second is the admin side.we can add delete and update blogs. </p>
                            <center><Link className='btn btn-primary' to="https://blogs-ix7d.onrender.com/">Blog Project</Link></center>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border mb-4">
                        <img src="/imgs/project3.png" alt="" className="card-img-top w-100"/>
                        <div className="card-body">
                            <h5 className="card-title">Gwalior University</h5>
                            
                            <p>The Gwalior University Static React Base project aims to create a modern and user-friendly web interface for Gwalior University's online presence using a combination of static site generation and the React JavaScript library.</p>
                            <center><Link className='btn btn-primary' to="https://gwalior-university01.netlify.app/">Gwalior University</Link></center>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="bg-gray p-0 section">
        <div className="container">
            <div className="card bg-primary">
                <div className="card-body text-light">
                    <div className="row align-items-center">
                        <div className="col-sm-9 text-center text-sm-left">
                            <h5 className="mt-3">Hire Me For Your project</h5>
                            <p className="mb-3">For further details contact me ...</p>
                        </div>
                        <div className="col-sm-3 text-center text-sm-right">
                            <button className="btn btn-light rounded">Hire Me!</button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </section>      

    <section id="contact" className="position-relative section">
        <div className="container text-center">
            <h6 className="subtitle">Contact</h6>
            <h6 className="section-title mb-4">Get In Touch With Me</h6>
            <p className="mb-5 pb-4">Hey folks! we're always available for you to provide you our services!  <br/> for further queries contact us..</p>

            <div className="contact text-left">
                <div className="form">
                    <h6 className="subtitle">Available 24/7</h6>
                    <h6 className="section-title mb-4">Get In Touch</h6>
                    <form>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="exampleInputpassword1" placeholder="password" required/>
                        </div>
                        <div className="form-group">
                            <textarea name="contact-message" id="" cols="30" rows="5" className="form-control" placeholder="Message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block rounded w-lg">Send Message</button>
                    </form>
                </div>
                <div className="contact-infos">
                    <div className="item">
                        <i class="fa-solid fa-location-dot fa-xl"></i>
                        <div className="">
                            <h5>Location</h5>
                            <p> 84-kotwali santar Morar Gwalior(Mp)</p>
                        </div>                          
                    </div>
                    <div className="item">
                        <i class="fa-solid fa-mobile fa-xl"></i>
                        <div>
                            <h5>phone Number</h5>
                            <p>6264286283</p>
                        </div>                          
                    </div>
                    <div className="item">
                        <i class="fa-brands fa-google fa-xl"></i>
                        <div className="mb-0">
                            <h5>Email Address</h5>
                            <p>shivanshpandey506@gmail.com</p>
                        </div>
                    </div>
                </div>                  
            </div>
        </div>  
        <div id="map">
            <iframe src="https://snazzymaps.com/embed/61257"></iframe>
        </div>      
    </section>
    </>
  )
}

export default Home
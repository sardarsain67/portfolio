import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import myImage from './imgs/sardar.jpeg';
import getfile from './imgs/getfile.jpeg';
import emailtool from './imgs/email.jpeg';
import iNotebook from './imgs/inotebook.jpeg';
import './home.css';
// Import the entire images folder
const importAll = (r) => {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
};

// Import all images from the images folder
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

const Home = () => {
    /////////////
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
    ////////////////////////
    const backgroundStyle = {
        backgroundImage: `url('https://media.istockphoto.com/id/1475344702/photo/background-image-of-computers-and-laptops-with-green-code-lines.webp?b=1&s=170667a&w=0&k=20&c=8911R9u7RIm3tk9SGKUhDmrA6ci8GJ5Cj9-Rc0gLUJ8=')`, // Replace with your desired background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    React.useEffect(() => {
        scrollSpy.update();
    }, []);

    const scrollTo = (elementName) => {
        scroller.scrollTo(elementName, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Perform form validation here
    
        // Send form data to the server or perform any necessary actions
    
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    
        // Display alert message
        alert('Thank you! We will connect with you soon.');
      };
    return (
        <div>
            <header className="bg-primary text-white text-center py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <Element name="photo">
                                <img
                                    src={myImage}
                                    className="img-fluid rounded-circle animate__animated animate__fadeInLeft"
                                    alt="Your Photo"
                                />
                            </Element>
                        </div>
                        <div className="col-md-5">
                            <h1 className="display-4 animate__animated animate__fadeInRight">
                                Welcome to My Portfolio
                            </h1>
                            <p className="lead animated-text animate__animated animate__fadeInRight">
                                I'm a passionate developer
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <Element name="about">
                                <h2 className="animate__animated animate__fadeInLeft">About Me</h2>
                                <p className="animate__animated animate__fadeInLeft">
                                    I strive for a growth-oriented and challenging career where I can contribute my knowledge and skills to an organization. Continuous learning and teamwork are essential to my professional development. I am driven to excel, embrace challenges, and turn them into opportunities for personal growth. I am eager to work with a visionary team that shares my passion for innovation and achieving remarkable outcomes. Together, we can create a future filled with success and continuous growth.
                                </p>
                                <Link
                                    to="/about"
                                    className="btn btn-primary animate__animated animate__fadeInLeft"
                                    onClick={() => scrollTo('about')}
                                >
                                    Learn More
                                </Link>
                            </Element>
                        </div>
                        <div className="col-md-5">
                            <Element name="skills">
                                <h2 className="animate__animated animate__fadeInRight">My Skills</h2>
                                <ul className="animate__animated animate__fadeInRight">
                                    <li>C Programming - Intermediate</li>
                                    <li>Java - Intermediate</li>
                                    <li>Data Structures - Intermediate</li>
                                    <li>Algorithms - Intermediate</li>
                                    <li>Database Management System (DBMS) - Intermediate</li>
                                    <li>MySQL - Advanced</li>
                                    <li>HTML - Advanced</li>
                                    <li>JavaScript - Intermediate</li>
                                    <li>PHP - Advanced</li>
                                    <li>CSS - Intermediate</li>
                                    <li>React.js - Intermediate</li>
                                    <li>Node.js - Intermediate</li>
                                </ul>
                                <Link
                                    to="/about"
                                    className="btn btn-primary animate__animated animate__fadeInRight"
                                    onClick={() => scrollTo('skills')}
                                >
                                    Learn More
                                </Link>
                            </Element>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-light py-3" style={backgroundStyle}>
                <div className="container">
                    <h2 className="project">My Projects</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <Element name="project1">
                                <div className="card animate__animated animate__fadeInUp">
                                    <img src={getfile} className="card-img-top p-3" alt="Project 1" />
                                    <div className="card-body">
                                        <h5 className="card-title">Book Cloud Tool</h5>
                                        <p className="card-text">Book Cloud Tool: Effortlessly upload/download files in guest &
                                            user modes. Guest mode for search-based file handling. User
                                            mode adds upload, download, self-delete. Seamless
                                            experience, error handling. User-friendly file sharing solution.</p>
                                    </div>
                                </div>
                            </Element>
                        </div>
                        <div className="col-md-4 mb-4">
                            <Element name="project2">
                                <div className="card animate__animated animate__fadeInUp">
                                    <img src={emailtool} className="card-img-top p-3 border-3" alt="Project 2" />
                                    <div className="card-body">
                                        <h5 className="card-title">Email Marketing Tool </h5>
                                        <p className="card-text">Secure & user-friendly, the Email Marketing Tool offers
                                            personalized subject lines, testing, Excel integration for
                                            recipient management, performance evaluation, scheduled
                                            campaigns, & flexibility to delete. Optimize email marketing
                                            with ease.
                                        </p>
                                    </div>
                                </div>
                            </Element>
                        </div>
                        <div className="col-md-4 mb-4">
                            <Element name="project3">
                                <div className="card animate__animated animate__fadeInUp">
                                    <img src={iNotebook} className="card-img-top p-3" alt="Project 3" />
                                    <div className="card-body">
                                        <h5 className="card-title">iNotebook
                                        </h5>
                                        <p className="card-text">iNotebook: User-friendly note management project with
                                            React.js & Node.js. Features include sign-in, login, note
                                            creation/editing/deletion, profile customization. Secure login
                                            ensures data protection. Seamlessly organize and manage
                                            notes.
                                        </p>
                                    </div>
                                </div>
                            </Element>
                        </div>
                    </div>
                    <Link
                        to="/projects"
                        className="btn btn-primary animate__animated animate__fadeIn"
                        onClick={() => scrollTo('projects')}
                    >
                        Visit More Projects
                    </Link>
                </div>
            </section>


            {/* '''''''''''''' */}
            <section className="py-4">
                <div className="container">
                    <Element name="contact">
                        <h2 className="text-center animate__animated animate__fadeIn">Contact Me</h2>
                        <div className="row">
                            <div className="col-md-5 border-end">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" required value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea className="form-control" id="message" rows="3" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary animate__animated animate__fadeIn">Submit</button>
                                </form>
                            </div>
                            <div class="col-md-5">
                                <div class="animated-component">
                                    <div class="photo-collage1">
                                        <img src="https://picsum.photos/id/1/200/200" alt="Photo 1" />
                                        <img src="https://picsum.photos/id/2/200/200" alt="Photo 2" />
                                        <img src="https://picsum.photos/id/3/200/200" alt="Photo 3" />
                                        <img src="https://picsum.photos/id/4/200/200" alt="Photo 4" />
                                        <img src="https://picsum.photos/id/5/200/200" alt="Photo 5" />
                                        <img src="https://picsum.photos/id/6/200/200" alt="Photo 6" />
                                        <img src="https://picsum.photos/id/7/200/200" alt="Photo 7" />
                                        <img src="https://picsum.photos/id/8/200/200" alt="Photo 8" />
                                        <img src="https://picsum.photos/id/9/200/200" alt="Photo 9" />
                                        <img src="https://picsum.photos/id/10/200/200" alt="Photo 10" />
                                        <img src="https://picsum.photos/id/11/200/200" alt="Photo 11" />
                                        <img src="https://picsum.photos/id/12/200/200" alt="Photo 12" />
                                        <img src="https://picsum.photos/id/13/200/200" alt="Photo 13" />
                                        <img src="https://picsum.photos/id/14/200/200" alt="Photo 14" />
                                        <img src="https://picsum.photos/id/15/200/200" alt="Photo 15" />
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <Link
                                    to="/contact"
                                    className="btn btn-primary mx-2 animate__animated animate__fadeIn my-2"
                                    onClick={() => scrollTo('contact')}
                                >
                                    Get More Info
                                </Link>
                            </div>
                        </div>
                    </Element>
                </div>
            </section>


            <footer className="bg-dark text-white text-center py-3">
                <p>&copy; 2023 My Portfolio. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;

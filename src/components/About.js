import React, { useState } from 'react';
import myImage from './imgs/sardar.jpeg';
import resume from './imgs/SardarSain_resumerRJAJ.pdf';
import './about.css';


const About = () => {
    const [showResume, setShowResume] = useState(false);

    const handleViewResume = () => {
        setShowResume(true);
    };

    return (
        <section className="bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="image-container" style={{ backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20201026/pngtree-futuristic-shape-abstract-background-chemistry-technology-concept-for-website-image_438818.jpg')` }}>
                            <img src={myImage} className="img-fluid rounded-circle mb-6" alt="Your Photo" />
                            <div className="image-overlay">
                                <button onClick={handleViewResume} className="btn btn-primary mx-3 my-1">View Resume</button>
                                <a href={resume} download className="btn btn-primary mx-5">Download Resume</a>
                            </div>
                            {showResume && (
                    <div className="row mt-4">
                        <div className="col-md-12">
                            <iframe
                                src={resume}
                                title="Resume"
                                width="100%"
                                height="500px"
                            ></iframe>
                        </div>
                    </div>
                )}
                        </div>

                        <div class="col-md-6">
                            <div class="animated-component">
                                <div class="photo-collage1 mx-2 my-2">
                                    <img src="https://picsum.photos/id/1/200/200" alt="Photo 1" />
                                    <img src="https://picsum.photos/id/2/200/200" alt="Photo 2" />
                                    <img src="https://picsum.photos/id/3/200/200" alt="Photo 3" />
                                    <img src="https://picsum.photos/id/4/200/200" alt="Photo 4" />
                                    <img src="https://picsum.photos/id/5/200/200" alt="Photo 5" />
                                    <img src="https://picsum.photos/id/6/200/200" alt="Photo 6" />
                                    <img src="https://picsum.photos/id/7/200/200" alt="Photo 7" />
                                    <img src="https://picsum.photos/id/8/200/200" alt="Photo 8" />
                                    <img src="https://picsum.photos/id/1/200/200" alt="Photo 1" />
                                    <img src="https://picsum.photos/id/2/200/200" alt="Photo 2" />
                                    <img src="https://picsum.photos/id/3/200/200" alt="Photo 3" />
                                    <img src="https://picsum.photos/id/4/200/200" alt="Photo 4" />
                                    <img src="https://picsum.photos/id/5/200/200" alt="Photo 5" />
                                    <img src="https://picsum.photos/id/6/200/200" alt="Photo 6" />
                                    <img src="https://picsum.photos/id/7/200/200" alt="Photo 7" />
                                    <img src="https://picsum.photos/id/8/200/200" alt="Photo 8" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2>About Me</h2>
                        <p className="highlight-text">
                            I strive for a growth-oriented and challenging career where I can contribute my knowledge and skills to an organization. Continuous learning and teamwork are essential to my professional development. I am driven to excel, embrace challenges, and turn them into opportunities for personal growth. I believe that honesty is the best policy, and I value integrity and transparency in all my interactions.

                            I am eager to work with a visionary team that shares my passion for innovation and achieving remarkable outcomes. I believe that collaboration and diverse perspectives are the driving forces behind successful projects. By fostering an environment that encourages open communication and idea-sharing, we can create groundbreaking solutions that have a positive impact.

                            I am committed to lifelong learning and staying up-to-date with the latest industry trends and technologies. I am always ready to take on new challenges and adapt to rapidly changing environments. I believe in taking calculated risks and pushing the boundaries of what is possible.

                            Above all, I believe in the power of perseverance and maintaining a positive attitude. I am not afraid of failure, as I see it as an opportunity to learn and grow. With determination and a growth mindset, I am confident that together, we can create a future filled with success and continuous growth. </p>
                        <h3>Education</h3>
                        <ul className="list-unstyled">
                            <li>
                                <h4>Secondary School</h4>
                                <p>M.R.G. Sr. sec. school Arain</p>
                            </li>
                            <li>
                                <h4>Senior Secondary School</h4>
                                <p>High Sr. Sec. school kishangarh</p>
                            </li>
                            <li>
                                <h4>B.Tech. in Computer Science And Engineering</h4>
                                <p>Central University of Rajasthan</p>
                            </li>
                        </ul>
                    </div>
                </div>
               
            </div>
            <footer className="bg-dark text-white text-center py-3">
                <p>&copy; 2023 My Portfolio. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default About;

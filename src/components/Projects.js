import React from 'react';
import './Projects.css';
import getfile from './imgs/getfile.jpeg';
import gupload from './imgs/gupload.jpeg';
const Projects = () => {
    return (
        <section className="projects-section">
            <div className="container">
            <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="search-bar">
              <input
                type="text"
                className="form-control"
                placeholder="Search projects..."
               
              />
            </div>
          </div>
        </div>
                <h2 className="section-title">My Projects</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="project-card">
                            <div className="project-image">
                                <img src={getfile} alt="Project 1" />
                            </div>
                            <div className="project-details">
                                <h3 className="project-title">Project 1</h3>
                                <p className="project-description">The Book Cloud Tool project is a web-based file management system that allows users to upload and download files in two different modes: guest mode and user mode. In guest mode, users can upload files but cannot delete them. They can only download files uploaded by others. However, in user mode, after logging in, users have additional functionalities. They can upload files, delete their own uploaded files, change their passwords, and search for files by name, type, and size. The project has been developed using HTML, CSS, Bootstrap, and PHP.

                                    Overall, the Book Cloud Tool provides a convenient platform for file sharing and management. It offers flexibility for users to securely upload and download files, ensuring their privacy and control. The guest mode enables users to access files uploaded by others, while the user mode empowers individuals with additional administrative capabilities such as file deletion and password management. The search functionality enhances user convenience by allowing them to find specific files based on different criteria. With its user-friendly interface and robust features, the Book Cloud Tool project demonstrates effective utilization of HTML, CSS, Bootstrap, and PHP to create a practical and efficient file management system.</p>
                                <div className="project-info">
                                    <h4 className="info-title">Tools:</h4>
                                    <ul className="info-list">
                                        <li>HTML/CSS</li>
                                        <li>JavaScript</li>
                                        <li>PHP</li>
                                    </ul>
                                </div>
                                <div className="project-images">
                                    <img src={gupload} alt="Project 1 Image 1" />
                                    <img src={getfile} alt="Project 1 Image 2" />
                                    <img src={getfile} alt="Project 1 Image 3" />
                                    {/* Add more images here */}
                                </div>
                                <a href="http://get-your-file.rf.gd/index.php" target='next' download className="btn btn-primary">Visit Project</a>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-card">
                            <div className="project-image">
                                <img src="project2.jpg" alt="Project 2" />
                            </div>
                            <div className="project-details">
                                <h3 className="project-title">Project 2</h3>
                                <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className="project-info">
                                    <h4 className="info-title">Tools:</h4>
                                    <ul className="info-list">
                                        <li>HTML/CSS</li>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                    </ul>
                                </div>
                                <div className="project-images">
                                    <img src={gupload} alt="Project 1 Image 1" />
                                    <img src={getfile} alt="Project 1 Image 2" />
                                    <img src={getfile} alt="Project 1 Image 3" />
                                    {/* Add more images here */}
                                </div>
                                <a href="http://get-your-file.rf.gd/index.php" target='next' download className="btn btn-primary">Visit Project</a>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-card">
                            <div className="project-image">
                                <img src="project3.jpg" alt="Project 3" />
                            </div>
                            <div className="project-details">
                                <h3 className="project-title">Project 3</h3>
                                <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className="project-info">
                                    <h4 className="info-title">Tools:</h4>
                                    <ul className="info-list">
                                        <li>HTML/CSS</li>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                    </ul>
                                </div>
                                <div className="project-images">
                                    <img src={gupload} alt="Project 1 Image 1" />
                                    <img src={getfile} alt="Project 1 Image 2" />
                                    <img src={getfile} alt="Project 1 Image 3" />
                                    {/* Add more images here */}
                                </div>
                                <a href="http://get-your-file.rf.gd/index.php" target='next' download className="btn btn-primary">Visit Project</a>

                            </div>
                           
                        </div>
                    </div>
                </div>

            </div>
            <footer className="bg-dark text-white text-center py-3">
                <p>&copy; 2023 My Portfolio. All rights reserved.</p>
            </footer>
        </section>

    );
};

export default Projects;

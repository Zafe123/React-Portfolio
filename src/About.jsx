import profile from './images/profile.webp';
import resume from './resume/resume.pdf';

function About() {
  return (

    <center>
      <div className="container p-3 border border-1 rounded-3 shadow">
        <h1 className="mb-4">ABOUT ME</h1>
        <div className="row">
          <div className="col-md-6 about">
            <p>My name is Joshua Zafe, and I'm a graduate of Bachelor of Science in Information Technology.
              After completing my degree, I worked in the call center industry for 2.5 years, where I
              honed my communication and problem-solving skills. However, I knew that my true passion lies
              in the field of web development, which is why I decided to enroll in the Kodego Fullstack
              web development bootcamp.
            </p>

            <p>During my time at Kodego, I was able to develop my skills in graphics design and web user
              interface and user experience design, which are my specialties. I am passionate about
              creating beautiful and intuitive user interfaces that provide a seamless user experience.
              With my technical background and creativity, I'm confident in my ability to bring ideas to
              life and contribute to the success of any project I work on.</p>

            <p> Thank you for taking the time to get to know me, and I look forward to the opportunity to
              work with you.</p>

          </div>
          <div className="col-md-6 ">
            <img src={profile} className="profile rounded-4" />
          </div>
        </div>
      </div>
      <div className="container p-3 border border-1 rounded-3 shadow">
        <h1>Working Experience</h1>
        <div className="row">
          <div className="col-md-6">



            <a href={resume} class="text-white" target="_blank">VIEW CV</a>
          </div>
        </div>
      </div>
    </center>
  );
}

export default About;

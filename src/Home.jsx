import { NavLink } from 'react-router-dom';


function Home() {

  return (
    <div className="div">
      <div className="container mx-auto shadow border border-2 rounded-2 p-5">
        <h3 className="text-center">Hi I'm</h3>
        <div className="d-flex justify-content-center">
          <h1 className="name">Joshua Zafe</h1>
        </div>
        <h2 className="text-center">Web Developer</h2>
      </div>

      <div className="d-flex justify-content-center">
        <NavLink to="/about" className={({ isActive }) => (isActive ? "link-active" : "link")}>
          <h4 className="getstarted" style={{ textDecoration: 'none' }}>Get Started</h4>
        </NavLink>
      </div>
    </div>

  );
}

export default Home;
import { Link } from "react-router-dom";

function Nopage() {

  return (
    <div className="d-grid justify-content-center text-center p-5 m-5">
      <h5 className="pt-5 mt-5">Page not found</h5>
      <p className="pb-5 mb-5"><Link to="/" className="text-decoration-none">Back to Home ↩</Link></p>
    </div>
  );
}

export default Nopage;
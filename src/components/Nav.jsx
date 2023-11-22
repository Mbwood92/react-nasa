import { Link } from "react-router-dom";
//nav bar at top of screen for each link 
export default function Nav (props){
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/Nasalist">
        <div>NASA list</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
    </div>
  );
};
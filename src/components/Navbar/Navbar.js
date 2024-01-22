import { Link } from "react-router-dom";
import './Navbar.css'
import newsify_icon from '../../newsify_icon-nobg.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top">
      <div className="container-fluid">
        <img src={newsify_icon} alt="" width={45} height={45}/>
        <Link className="navbar-brand nav-link" to="/">Newsify</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link " aria-current="page" to="/">Home</Link>
            <Link className="nav-link" to="/entertainment">Entertainment</Link>
            <Link className="nav-link" to="/health">Health</Link>
            <Link className="nav-link" to="/science">Science</Link>
            <Link className="nav-link" to="/sports">Sports</Link>
            <Link className="nav-link" to="/business">Business</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

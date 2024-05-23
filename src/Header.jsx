import { Link } from 'react-router-dom';
import logo from './assets/Designer.png'



function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-light sticky-top nav-bar" id='nav'>
      <div className="container d-flex flex-row">
        <img src={logo} className="rounded float-start" id='logo'></img>
        <span className="mx-auto fs-1 fw-bold" id='kitchen'>Kumar's Kosmic Kitchen</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className='navbar-nav'>
         <Link to='/Home' className="nav-item nav-link" id='navitem'>Home</Link>
         <Link to='/' className="nav-item nav-link" id='navitem'>Menu</Link>
         <Link to='/About' className="nav-item nav-link" id='navitem'>About</Link>
         <Link to='/cart' className='nav-item nav-link' id='navitem'>Cart</Link>
         </div>
      </div>
    </nav>
  )
}

export default Header
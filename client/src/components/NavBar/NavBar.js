import {Link} from 'react-router-dom'
import './nav_bar.css'
// import hospital from '../../images/hospital.png'
import hospital from '../../images/hos3.png'



function NavBar(){
    return (
        <div className="Navbar">
            <Link className='logoImage' to="/">
                <img src={hospital} alt="logo"></img>
            </Link>
            <Link className="logoText" to="/">
                <div>Hospital</div>
            </Link>
                <div className='pl-10 nav-links'> <Link className='link' to='/'>Home</Link></div>
                <div className='pl-10 nav-links'> <Link className='link' to='/login'>login</Link></div>

        </div>
    )
}
export default NavBar
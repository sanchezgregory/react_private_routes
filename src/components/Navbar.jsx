
import {Link} from 'react-router-dom'
import { ADMIN, HOME, LOGIN, WEATHER, REGISTER } from '../config/routes/routes'
import { useAuthContext } from '../contexts/authContext'
import { useState } from 'react'

export const Navbar = () => {

    const {isAuthenticated, logout} = useAuthContext()
    const [display, setDisplay] = useState(false)
    const [displayFlex, setDisplayFlex] = useState('')

    const showSidebar = () => {
        setDisplay(!display)
        const show = display ? "flex":"none"
        setDisplayFlex(show)
    }

    const handleLogout = () => {
        logout();
    }

  return (
    <nav>
        <ul className='sidebar' style={{ display: displayFlex}}>
            <li onClick={showSidebar} ><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" fill="#ffffff"/></svg></a></li>            
            {isAuthenticated ? 
            <>
                <li><Link to={ADMIN}> Main menu</Link></li>
                <li onClick={handleLogout}> Logout </li>
            </>
            : 
            <>
                <li><Link to={LOGIN}> Login </Link> </li>
                <li><Link to={REGISTER}> Register </Link></li>
            </>
            }
        </ul>
        <ul>
            <li>
                <Link to={HOME}> <h2>LOGO</h2> </Link>
            </li>
            {isAuthenticated ? 
            <>
                <li className='hideOnMobile'><Link to={ADMIN} > Main menu</Link></li>
                <li className='hideOnMobile'><Link to={WEATHER} > Ver el clima</Link></li>
                <li className='hideOnMobile' onClick={handleLogout} > <a href="#">Logout</a></li>
            </>
            : 
            <>
                <li className='hideOnMobile'><Link to={LOGIN}> Login </Link> </li>
                <li className='hideOnMobile'><Link to={REGISTER}> Register </Link></li>
            </>
            }
            <li onClick={showSidebar} className='menu-button' ><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="25"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" fill="#fff"/></svg></a></li>
        </ul>
    </nav>
    
  )
}

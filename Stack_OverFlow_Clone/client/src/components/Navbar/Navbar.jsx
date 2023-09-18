import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.png'
import search from '../../assets/magnifying-glass-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
import Button from '../../components/Button/Button'
import './Navbar.css'

const Navbar = () => {
  console.log(123)

  const User = null
  return (
    <nav>
      <div className='navbar'>
            <Link to='/' className='nav-item nav-logo'>
          
              <img src={logo} alt="Logo" />
            </Link>
            <Link to = '/' className='nav-item nav-btn'>About</Link>
            
            <Link to = '/' className='nav-item nav-btn'>Products</Link>
            
            <Link to = '/' className='nav-item nav-btn'>For Teams</Link>

            <form>
              <input type="text" placeholder='Search...'/>
              <img src={search} alt="search" width="18" className='search-icon'/>
            </form>
            { User === null ? 
              <Link to='/Auth' className='nav-item nav-links'>Log in</Link>:
              <>
                <Link to='/'><Avatar>M</Avatar></Link>
                <Button>Log out</Button>
              </>
            }
          
      </div>
    </nav>
  )
}

export default Navbar

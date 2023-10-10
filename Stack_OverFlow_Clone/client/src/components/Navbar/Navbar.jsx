import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import logo from '../../assets/Logo.png'
import search from '../../assets/magnifying-glass-solid.svg'
import Avatar from '../../components/Avatar/Avatar'

import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'

const Navbar = () => {
  console.log(123)

  var User = useSelector((state) => (state.currentUserReducer))
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))
  }, [dispatch])
  return (
    <nav className='main-nav'>
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
                <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'><Link to='/User' style={{color: "white", textDecoration:'none'}}>M</Link></Avatar>
                <button className='nav-item nav-link'>Log out</button>
              </>
            }
          
      </div>
    </nav>
  )
}

export default Navbar

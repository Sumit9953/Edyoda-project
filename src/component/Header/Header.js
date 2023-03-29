import React from 'react'
import './style.css'

const Header = () => {
  return (
    <div>
        <div className='navbar'>
            <h1 className='nav_logo'>EDYODA</h1>
            <div className='nav_profile'>
                <p>Hi Test Leraner !</p>
                <img className='profile_img' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" />
            </div>
        </div>
        <div className='program'>
            <h2>DS031221</h2>
            <h1 className='program_type'>Data Scientist Program</h1>
        </div>
    </div>
  )
}

export default Header
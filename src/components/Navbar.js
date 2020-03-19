import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


const NavBar = () => {
  return ( 
    <ThemeContext.Consumer>
      {value => { 
        console.log('navbar', value);
        const { purple, dark, toggleTheme} = value
        return (
          <div className='navbar' style={{
            background: purple.ui,
            color: purple.mainColor
          }}>
            <h1>Reach contexts Reading List</h1>
            <button onClick={value.toggleTheme}>Click</button>
            <ul>
              <li>test 1</li>
              <li>test 1</li>
              <li>test 1</li>
            </ul>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  );
}

export default NavBar;
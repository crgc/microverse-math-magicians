import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calc',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/about',
      text: 'About',
    },
  ];

  return (
    <nav className="navBar">
      
      <ul /* className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}*/>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              /* activeClassName="active-link" */
              exact
            >
              {link.text} |
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
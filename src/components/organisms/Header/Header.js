import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <header className='header'>
        <nav className='navigation'>
          <Link to='/' className='navigation__logo'>
            Technicolor.
          </Link>
          <input type='text' className='navigation__search' />
          <ul className='navigation__links'>
            <li>
              <Link to='movies'>Movies</Link>
            </li>
            <li>
              <Link to='series'>Series</Link>
            </li>
            <li>
              <Link to='actors'>Actors</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

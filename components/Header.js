import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Icon, InlineIcon } from '@iconify/react';
import menuAlt from '@iconify/icons-dashicons/menu-alt';

export default function Header({ title }) {
  const [menuVisible, setVisibility] = useState(false);
  return (
    <>
      {menuVisible && (
        <div
          className='mobile-menu-overlay'
          onClick={() => setVisibility(false)}
        >
          <div className='header-mobile-menu'>
            <ul className='menu-inner'>
              <li>Home</li>
              <li>FAQ</li>
              <li>Log In</li>
            </ul>
          </div>
        </div>
      )}
      <header className='header' role='banner'>
        <div className='header-inner'>
          <img
            className='header-branding-logo'
            src='../images/logos/appamondo-logo-w.png'
          />
          {isMobile ? (
            <Icon
              icon={menuAlt}
              style={{ fontSize: '44px' }}
              color='#00b3c8'
              onClick={() => setVisibility(!menuVisible)}
            />
          ) : (
            <div className='header-navigation-wrapper'>
              <span>Home</span>
              <span className='active-navigation-item'>FAQ</span>
              <button>Login</button>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

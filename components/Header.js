import { isMobile } from 'react-device-detect';
import { slide as Menu } from 'react-burger-menu';

export default function Header({ title }) {
  const showSettings = (event) => {
    event.preventDefault();
  };

  return (
    <header className='header' role='banner'>
      <div className='header-inner'>
        <img
          className='header-branding-logo'
          src='../images/logos/appamondo-logo-w.png'
        />
      </div>
      {isMobile ? (
        <Menu right>
          <a id='home' className='bm-item' href='/'>
            Home
          </a>
          <a id='about' className='bm-item active' href='/about'>
            FAQ
          </a>
          <a id='contact' className='bm-item' href='/contact'>
            Login
          </a>
        </Menu>
      ) : (
        <div className='header-navigation-wrapper'>
          <span>Home</span>
          <span className='active-navigation-item'>FAQ</span>
          <button>Login</button>
        </div>
      )}
    </header>
  );
}

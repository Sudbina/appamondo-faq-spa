export default function Header({ title }) {
  return (
    <header className='header' role='banner'>
      <div className='header-inner'>
        <img
          className='header-branding-logo'
          src='../images/logos/appamondo-logo-w.png'
        />
        <div className='header-navigation-wrapper'>
          <span>Home</span>
          <span className='active-navigation-item'>FAQ</span>
          <button>Login</button>
        </div>
      </div>
    </header>
  );
}

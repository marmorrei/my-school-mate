const Header = () => {
  return (
    <header>
      <div className='logo'>
        <img src='/assets/images/my-school-mate-logo.svg' alt='MSM-logo' />
      </div>
      <div className='features-links'>
        <a href=''>
          <h2>SCHOOLS</h2>
        </a>
        <a href=''>
          <h2>FAMILIES</h2>
        </a>
      </div>
      <div className='languages'>
        <button className='language-btn'>
          <img src='/assets/images/united-kingdom.png' alt='eng' />
        </button>
        <button className='language-btn'>
          <img src='/assets/images/spain.png' alt='esp' />
        </button>
        <button className='language-btn'>
          <img src='/assets/images/catalonia.png' alt='cat' />
        </button>
      </div>
      <div className='login-register'>
        <button>Login</button>
        <button>Register</button>
      </div>
    </header>
  );
};

export default Header;

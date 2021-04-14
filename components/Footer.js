export default function Footer() {
  return (
    <>
      <footer className='site-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-6 col-md-3'>
              <img
                style={{ width: '200px' }}
                src='/images/logos/appamondo-txt-w.png'
              />
            </div>
            <div className='col-sm-12 col-md-6'>
              <h6>About</h6>
              <p className='text-justify'>
                Great customer relations today builds competitive advantage
                tomorrow, at Appamondo we create a personalised help desk
                perfectly tailored to your business. We connect every channel of
                communication into an efficient and highly effective response
                service.
              </p>
            </div>
            <div className='col-xs-6 col-md-3'>
              <h6>Quick Links</h6>
              <ul className='footer-links'>
                <li>
                  <a href='#'>Main Site</a>
                </li>
                <li>
                  <a href='#'>API</a>
                </li>
                <li>
                  <a href='#'>Careers</a>
                </li>
                <li>
                  <a href='#'>Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 col-sm-6 col-xs-12'>
              <p className='copyright-text'>
                Copyright &copy; 2021 All Rights Reserved by
                <a href='#'> Appamondo</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

import React ,{Fragment}from 'react'

function Header() {
    return (
        <Fragment>
  <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
    <div className="container-fluid">
      <div className="d-flex align-items-center">
        <div className="site-logo mr-auto w-25"><a href="/btl_CloudImage"><span style={{color:"white"}}>CloudImage
          </span></a></div>
        <div className="mx-auto text-center">
          <nav className="site-navigation position-relative text-right" role="navigation">
            <ul className="site-menu main-menu js-clone-nav mx-auto d-none d-lg-block  m-0 p-0">
              <li><a href="#home-section" className="nav-link">Trang chủ</a></li>
              <li><a href="#courses-section" className="nav-link">Thông tin</a></li>
              <li><a href="#programs-section" className="nav-link">Gói dịch vụ</a></li>
              <li><a href="#teachers-section" className="nav-link">Thành viên phát triển</a></li>
            </ul>
          </nav>
        </div>
        <div className="ml-auto w-25">
          <nav className="site-navigation position-relative text-right" role="navigation">
            <ul className="site-menu main-menu site-menu-dark js-clone-nav mr-auto d-none d-lg-block m-0 p-0">
              <li className="cta"><a href="#contact-section" className="nav-link"><span>Contact Us</span></a></li>
            </ul>
          </nav>
          <a href="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right"
          ><span className="icon-menu h1" style={{color:"white"}}/></a>
        </div>
      </div>
    </div>
  </header>

        </Fragment>
    )
}

export default Header

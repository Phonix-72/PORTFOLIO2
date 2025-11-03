function Header(){
    return(
        <>
        <div className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid px-4">
          <a className="navbar-brand" href="#home">Portfolio</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navContent">
            <ul className="navbar-nav ms-auto text-light">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
      </>
    );
}
export default Header;
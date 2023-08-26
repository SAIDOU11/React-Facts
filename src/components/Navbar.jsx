import img from '../assets/react-icon-small.png';

const Navbar = (props) => {
  return (
    <nav className={props.darkMode ? 'dark' : ''}>
      <img className="nav--logo_icon" src={img} alt="React logo" />
      <h2 className="nav--logo_text">ReactFacts</h2>

      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
};

export default Navbar;

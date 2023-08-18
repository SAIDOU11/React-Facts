import img from '../assets/react-icon-small.png';

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <img style={{ width: '50px' }} src={img} alt="React logo" />
        <h2 style={{ fontWeight: 'bold' }}>ReactFacts</h2>
      </div>
      <div className="nav-course">
        <h3>React Course - Project 1</h3>
      </div>
    </nav>
  );
};

export default Navbar;

type NavBarProps = {
  className?: string;
};

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  return (
    <nav className={className}>
      <a href="#">How it Works</a>
      <a href="#">Pricing</a>
      <a href="#">Use Case</a>
      <a href="#">FAQ</a>
    </nav>
  );
};

export default NavBar;

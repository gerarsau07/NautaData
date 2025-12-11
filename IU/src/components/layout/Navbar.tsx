import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  const navLinkCLasses = ({ isActive }: { isActive: boolean }) =>
      isActive
      ? "text-blue-400 font-semibold transition-colors duration-200"
      : "text-slate-400 hover:text-white transition-colors duration-200";

  return (
    
    <nav className=''>
      
      <div>
        <NavLink to='/' className={navLinkCLasses}>
          Home  
        </NavLink>
         
        <NavLink to='/about' className={navLinkCLasses}>  
          About
        </NavLink>
        <NavLink to='/contact' className={navLinkCLasses}>  
          Contact
        </NavLink>
        
        
      </div>
    </nav>
  );
}   
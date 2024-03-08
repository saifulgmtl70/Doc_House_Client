import { useContext, useEffect, useState } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { CSSTransition } from 'react-transition-group';
import './Header.css';
import useAdmin from '../../Hooks/useAdmin';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const [isAdmin] = useAdmin();
  // console.log(isAdmin);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldHaveShadow = scrollTop > 0;
      setHasShadow(shouldHaveShadow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogOut = () =>{
    logOut()
    .then(() =>{
        toast.success("Account Created Successfully", {
          position: "top-center",
          autoClose: 1000, // এক সেকেন্ডের মধ্যে বন্ধ হবে
          onClose: () =>  navigate('/login')// টোস্ট বন্ধ হওয়ার পরে নেভিগেট করুন
        });
    })

    .catch(() =>{
      toast.error("Something went wrong",{
        position: "top-center"
      });
    })
  }


  return (
    <header className={`font_source py-2 header fixed z-40 top-0 w-full ${hasShadow ? 'shadow-lg z-40 bg-[#07332F]' : ''}`}>
      <ToastContainer/>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="flex items-center gap-2 text-teal-600" to="/">
              <img src="https://i.ibb.co/MG4MNKP/Logo.png" alt="" className='w-[55px] h-[50px]'/>
              <p className='text-[30px] font-[700] text-[#F7A582]'>Doc <span className='text-[#fff]'>House</span> </p>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex gap-5 text-sm">
                <li>
                  <NavLink to="/" className='text-[#F3F3F3] text-[18px] font-[600]'>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about" className='text-[#F3F3F3] text-[18px] font-[600]'>About</NavLink>
                </li>
                <li>
                  <NavLink to="/appointment" className='text-[#F3F3F3] text-[18px] font-[600]'>Appointment</NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className='text-[#F3F3F3] text-[18px] font-[600]'>Contact</NavLink>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {user ? (
                <div className="relative">
                  <button onClick={toggleDropdown} className="focus:outline-none flex items-center gap-2">
                    <h2 className='text-[#F7A582] hidden lg:inline-block text-[18px] font-[700]'>{user.displayName}</h2>
                    <img src={user.photoURL} alt="User" className="w-8 h-8 rounded-full" />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white border rounded shadow-lg">
                      <h2 className='text-[#F7A582] px-4 py-2 block lg:hidden text-[18px] font-[700]'>{user.displayName}</h2>
                      <h2 className='text-[#F7A582] px-4 py-2 text-[18px] font-[700]'>{user.email}</h2>
                      <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</Link>

                      {
                        isAdmin ? <Link to="/dashboard/dashboardhome" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Dashboard</Link>
                        : <Link to="/userdashboard/myappointment" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">My Appointment</Link>
                      }

                      <Link to="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Settings</Link>
                      <button onClick={handleLogOut} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200" >Logout</button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="sm:flex sm:gap-4">
                  <Link className="rounded-[3px] bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow" to="/login"> Login</Link>
                </div>
              )}

              <div className="block md:hidden">
                <button onClick={toggleMenu} className="rounded  p-2 text-[#fff] ">
                  {isMenuOpen ? <AiOutlineClose className='w-[20px] h-[23px] rounded-[3px]'/> : <CgMenuRight className='w-[20px]  h-[23px] rounded-[3px]'/>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <CSSTransition
        in={isMenuOpen}
        timeout={300}
        classNames="menu"
        unmountOnExit
      >
        <nav className={`md:hidden w-auto  absolute top-[70px] left-0 right-0 dark:bg-[#1E293B] ${hasShadow ? "shadow-lg bg-[#07332F] " : "bg-[#07332F] shadow-2xl text-[#fff]"}`}>
          <ul className="flex flex-col items-center border-0 px-20 py-4 my-1 gap-5 text-sm">
            <li onClick={handleMenuItemClick}><NavLink to="/" className='text-[#1BAA80] dark:text-[#fcfcfc] text-[18px] font-[600]'>Home</NavLink></li>
            <li onClick={handleMenuItemClick}><NavLink to="/about" className='text-[#1BAA80] dark:text-[#fcfcfc] text-[18px] font-[600]'>About</NavLink></li>
            <li onClick={handleMenuItemClick}><NavLink to="/appointment" className='text-[#1BAA80] dark:text-[#fcfcfc] text-[18px] font-[600]'>Appointment</NavLink></li>
            <li onClick={handleMenuItemClick}><NavLink to="/contact" className='text-[#1BAA80] dark:text-[#fcfcfc] text-[18px] font-[600]'>Contact</NavLink></li>
          </ul>
        </nav>
      </CSSTransition>


    </header>
  );
};

export default Header;

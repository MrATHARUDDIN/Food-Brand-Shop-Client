import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png"
import Pic from "../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../authentication/Private";

const Navbar = () => {
  const {user ,LogOut} = useContext(AuthContext);
  const handlelogout = () => {
      LogOut();
  }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <img src={Logo} alt="" className="w-72" />
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       
        <li>
        <NavLink to="/" className='mr-2'>Home</NavLink>
          <ul className="p-2">
            <li><NavLink to="/about" className='mr-2'>About</NavLink></li>
            <li><NavLink to='/Contact'>Contact</NavLink></li>
          </ul>
          
        </li>
        { user && <>
          <li><NavLink to="/order" className='ml-2'>My Cart</NavLink></li>
          <li><NavLink to="/addproduct" className='ml-2'>Add Product</NavLink></li>
          <li><NavLink to="/community" className='ml-2'>Community</NavLink></li>
        </>
          }
          <li><NavLink to="/Service" className='ml-2'>Service</NavLink></li>
      </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
      <li tabIndex={0}>
        <details>
          <summary><NavLink to="/" className='mr-2'>Home</NavLink></summary>
          <ul className="p-2">
            <li><NavLink to="/about" className='mr-2'>About</NavLink></li>
            <li><NavLink to='/Contact'>Contact</NavLink></li>
          </ul>
        </details>
      </li>
      { user && <>
          <li><NavLink to="/order" className='ml-2'>My Cart</NavLink></li>
          <li><NavLink to="/addproduct" className='ml-2'>Add Product</NavLink></li>
          <li><NavLink to="/community" className='ml-2'>Community</NavLink></li>
        </>
          }
          <li><NavLink to="/Service" className='ml-2'>Service</NavLink></li>
      </ul>
            </div>
            <div className="navbar-end items-end">
                        {
                          !user &&
                          <div className="w-10 mr-5 rounded-full">
                               <img src={Pic} alt="" />
                            </div>
}
                        { user && 
                            <div className="w-10 ">
                              <img src={user.photoURL} className="rounded-full" alt="" />
                            </div>
                        }
                        {
                                user && <h1 className="text-xl mb-2 mr-4 font-bold">{user.displayName}</h1>
                            }
                        { user ?
                           <div>
                               <button className="bg-green-400 text-white px-4 py-3  rounded-lg" onClick={handlelogout}>Log out</button>
                           </div>
                       
                        :
                    <div>
                        
                        <Link to="/Login">
                        <button className="bg-green-400 text-white px-4 py-3  rounded-lg">Login</button>
                        </Link>
                    </div>
                        }

                    </div>
        </div>
    );
};

export default Navbar;
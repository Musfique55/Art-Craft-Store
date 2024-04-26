import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    // const [over,setOver] = useState(false);
    
    const handleEnter = () => {
        const parent = document.getElementById('dropdown-contents');
        parent.classList.remove('hidden');
    }
    const handleLeave = () => {
        const parent = document.getElementById('dropdown-contents');
        parent.classList.add('hidden');
    }
    return (
        <div>
            <div className='mx-5 py-7 md:mx-12 lg:mx-20'>
            <div className="navbar p-0">
                <div className="flex justify-between flex-1  lg:flex-none lg:justify-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost pl-0 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 z-50">
                        <NavLink to="/" className={({isActive}) => isActive ? 'text-[#CA9C6A] font-semibold ' : 'text-base font-medium'}>Home</NavLink>
                        <NavLink to="/allitems" className={({isActive}) => isActive ? 'text-[#CA9C6A] font-semibold ' : 'text-base font-medium'}>All Art & craft Items</NavLink>
                        {
                             
                            <NavLink to='/add-items' className={({isActive}) => isActive ? 'text-[#CA9C6A] font-semibold text-base' : 'font-medium text-base'} >Add Craft Item</NavLink>
                        }
                        {
                            
                            <NavLink to='/mylist' className={({isActive}) => isActive ? 'text-[#CA9C6A] font-semibold text-base' : 'font-medium text-base'} >My Art&Craft List</NavLink>
                        }
                        
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-[rgb(19,19,19)] font-bold text-3xl pl-0">Handmade Crafts</a>
                </div>
                <div className=" hidden lg:flex lg:flex-1 lg:justify-center lg:items-center">
                    <ul className="flex items-center justify-center flex-1 gap-4 text-base menu menu-horizontal px-1">
                    <NavLink to="/" className={({isActive}) => isActive ? 'text-[#CA9C6A] font-semibold ' : 'text-base font-medium'}>Home</NavLink>
                        <NavLink to="/allitems" className={({isActive}) => isActive ? 'text-[#CA9C6A] font-semibold ' : 'text-base font-medium'}>All Art & craft Items</NavLink>
                        {
                             
                            <NavLink to='/add-items' className={({isActive}) => isActive ? 'text-[#CA9C6A] font-semibold text-base' : 'font-medium text-base'} >Add Craft Item</NavLink>
                        }
                        {
                            
                            <NavLink to='/mylist' className={({isActive}) => isActive ? 'text-[#CA9C6A] font-semibold text-base' : 'font-medium text-base'} >My Art&Craft List</NavLink>
                        }
                        
                    </ul>
                </div>
                {
                    !user ?
                    <div className="flex gap-6">
                    <Link to='/register'>
                        <button  className= 'text-[#CA9C6A] font-semibold text-base btn btn-primary'>Register</button>      
                    </Link>
                    <Link to='/login'>
                        <button  className= 'text-[#CA9C6A] font-semibold text-base btn btn-primary'>Login</button>      
                    </Link>
                    </div> :
                    <div className="flex-none gap-2" onMouseOver={() => handleEnter()} onMouseOut={() => handleLeave()}>
                        <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button"  className="btn btn-ghost btn-circle avatar" >
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} alt="" />
                            </div>
                        </div>
                        <ul id="dropdown-contents"  className={`mt-3 profile p-2 shadow menu menu-sm  bg-base-100 rounded-box w-52 hidden absolute right-0 top-9 z-50`}>
                            <li>
                            <a className="justify-between">
                                {user.displayName}
                            </a>
                            </li>
                            <li>
                            <a className="justify-between" onClick={logOut}>
                                Logout
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div> 
                }
                
            </div>
        </div>
        </div>
    );
};

export default Header;
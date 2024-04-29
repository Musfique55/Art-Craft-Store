import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import logo from '../../public/logo.png'
import { Tooltip } from "react-tooltip";
const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    
    const handleEnter = () => {
        const parent = document.getElementById('dropdown-contents');
        parent.classList.remove('hidden');
    }
    const handleLeave = () => {
        const parent = document.getElementById('dropdown-contents');
        parent.classList.add('hidden');
    }

    const [theme,setTheme] = useState(localStorage.getItem('theme'));


    useEffect(() => {
       localStorage.setItem('theme',theme);
        
        document.querySelector('html').setAttribute('data-theme',theme);
    },[theme])


 const handleTheme = (e) => {
  if(e.target.checked){
    setTheme('dracula')
  }else{
    setTheme('light')
  }
 
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
                    <NavLink to="/" className={({isActive}) => isActive ? 'text-[#F52449] font-semibold toolhome' : 'text-base font-medium toolhome'}>Home</NavLink>
                        <NavLink to="/allitems" className={({isActive}) => isActive ? 'text-[#F52449] font-semibold toolall' : 'text-base font-medium toolall'}>All Art & Craft Items</NavLink>
                        {
                             user &&
                            <NavLink to='/add-items' className={({isActive}) => isActive ? 'text-[#F52449] font-semibold text-base tooladd' : 'font-medium text-base tooladd'} >Add Craft Item</NavLink>
                        }
                        {
                            user &&
                            <NavLink to='/mylist' className={({isActive}) => isActive ? 'text-[#F52449] font-semibold text-base toollist' : 'font-medium text-base toollist'} >My Art & Craft List</NavLink>
                        }
                        {
                            !user && <Link to='/register' className="">
                            <button  className= 'text-white font-semibold text-base py-2 px-4 bg-[#F52449] lg:px-6 lg:py-3 rounded-full'>Register</button>      
                            </Link>
                        }
                        <Tooltip anchorSelect=".toolhome" content="Home" className="-mt-2"/>
                        <Tooltip anchorSelect=".toolall" content="All Art & craft Items" className="-mt-2"/>
                        <Tooltip anchorSelect=".tooladd" content="Add Craft Item" className="-mt-2"/>
                        <Tooltip anchorSelect=".toollist" content="My Art & Craft List" className="-mt-2"/>
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-[rgb(19,19,19)] font-bold text-3xl pl-0"><img src={logo} alt="" className="h-[30px]"/></a>
                </div>
                <div className=" hidden lg:flex lg:flex-1 lg:justify-center lg:items-center">
                    <ul className="flex items-center justify-center flex-1 gap-4 text-base menu menu-horizontal px-1">
                    <NavLink to="/" className={({isActive}) => isActive ? 'text-[#F52449] font-semibold toolhome' : 'text-base font-medium toolhome'}>Home</NavLink>
                        <NavLink to="/allitems" className={({isActive}) => isActive ? 'text-[#F52449] font-semibold toolall' : 'text-base font-medium toolall'}>All Art & Craft Items</NavLink>
                        {
                             user &&
                            <NavLink to='/add-items' className={({isActive}) => isActive ? 'text-[#F52449] font-semibold text-base tooladd' : 'font-medium text-base tooladd'} >Add Craft Item</NavLink>
                        }
                        {
                            user &&
                            <NavLink to='/mylist' className={({isActive}) => isActive ? 'text-[#F52449] font-semibold text-base toollist' : 'font-medium text-base toollist'} >My Art & Craft List</NavLink>
                        }
                        <Tooltip anchorSelect=".toolhome" content="Home" className="-mt-2"/>
                        <Tooltip anchorSelect=".toolall" content="All Art & Craft Items" className="-mt-2"/>
                        <Tooltip anchorSelect=".tooladd" content="Add Craft Item" className="-mt-2"/>
                        <Tooltip anchorSelect=".toollist" content="My Art & Craft List" className="-mt-2"/>
                    </ul>
                </div>
                <label className="swap swap-rotate mr-3">

                {/* this hidden checkbox controls the state */}
                <input type="checkbox" className="theme-controller" onChange={handleTheme} />
                
                {/* sun icon */}
                {/* {
                    theme === 'light' && 
                
                } */}
                
                {/* moon icon */}
                {theme === 'dracula' ?
                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg> :
                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                }
                
                </label>
                {
                    !user ?
                    <div className="flex gap-2 md:gap-4 lg:gap-6">
                    <Link to='/register' className="hidden md:inline lg:inline">
                        <button  className= 'text-white font-semibold text-base py-2 px-4 bg-[#F52449] md:px-6 md:py-3  lg:px-6 lg:py-3 rounded-full'>Register</button>      
                    </Link>
                    <Link to='/login'>
                        <button  className= 'text-white font-semibold text-base bg-[#A1BE95] py-2 px-4 md:px-6 md:py-3 lg:px-6 lg:py-3 rounded-full'>Login</button>      
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
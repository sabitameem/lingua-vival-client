import { Link } from "react-router-dom";
import logo from '../../assets/download.png'

const Navbar = () => {
//    const {user,logOut}= useContext(AuthContext)
//   console.log(user)
//   const handleLogOut = () => {
//     logOut()
//       .then()
//       .catch((error) => console.log(error));
//   };
const user = false;

  return (
    <div className="navbar">
      <div className="flex-1">
      <Link to="/" ><img className="w-12 lg:w-20 lg:h-20 h-12" src={logo} alt="" /></Link>
        <Link to="/" className=" hidden lg:block text-color-one text-4xl font-bold">
          <span className="text-color-three">Lingua</span>Viva
        </Link>
      </div>
      <div className="flex-none">
        
          <div className="md:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link to="/">Home</Link>
            <Link to="/instructors">Instructors</Link>
            <Link to="/classes">Classes</Link>
            
            
            {(user) &&
            <div className=""><Link to="/dashboard">Dashboard</Link><br />
            <button  className="btn btn-sm btn-ghost hover:text-color-two hover:bg-color-three mt-4">Log Out</button></div>}

          </ul>
          </div>
   
   { user?
       <>
         <div className="dropdown dropdown-end lg:block hidden text-lg mr-3">
         <Link className="font-semibold mr-4"  to="/">Home</Link>
            <Link className="font-semibold mr-4"  to="/instructors">Instructors</Link>
            <Link className="font-semibold mr-4"  to="/classes">Classes</Link>
            
        <Link className="font-semibold m-4" to="/dashboard">Dashboard</Link>
            <button  className="btn btn-sm btn-ghost hover:text-color-two hover:bg-color-three">Log Out</button>
          
        </div>
        <div className="dropdown dropdown-end flex">
           <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full btn btn-ghost btn-circle avatar">
              <img  src="" />
            </div>
          </label> 
        </div>
        
    </>
        :
        <>
        <Link className="font-semibold hidden lg:inline mr-4" to="/">Home</Link>
        <Link className="font-semibold hidden lg:inline mr-4"  to="/instructors">Instructors</Link>
            <Link className="font-semibold hidden lg:inline mr-4"  to="/classes">Classes</Link>
       <Link to='/login'><button className="btn btn-sm bg-color-four text-color-two hover:bg-color-two hover:text-color-three mr-3 ">LogIn</button></Link>
        </>
}


      </div>
    </div>
  );
};

export default Navbar;
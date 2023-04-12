import {useState} from 'react'
// import './header.css'
import { BsFillPatchCheckFill } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";
import {Link , useParams , useNavigate, useLocation} from 'react-router-dom';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux';
// import { logut_action } from '../../action/user_action';

const Header = () => {
  const [show_nav , set_show_nav] =useState(false)

//   const dispatch = useDispatch()

  const users_information = true
  
//   const {users_information} = useSelector(state => state.userLogin)
//   const {cartItems} = useSelector(state => state.cart)

//   const location = useLocation()
  return (
    <div className="header">
       <Link className='logo' to={`/`} >                    
            <BsFillPatchCheckFill/>     
        </Link>
      <div className='nav_action'>
        
        <nav onClick={() =>{set_show_nav(state=>!state)}}>menu <BsChevronDown />
        </nav>
        {show_nav&&
        <div className="nav_detail">
          <ul>
            <li>
               <Link  to={`/`} >                    
                Home
               </Link>
            </li>
          
            {users_information?
             <>
             <li>
              <Link  to={`/tasks`} onClick={()=>{set_show_nav(false)}}>                    
                 Tasks 
               </Link>
              </li>
             <li>                 
                <Link  to={`/login`} onClick={()=>{set_show_nav(false)}}>                    
                    sign out 
               </Link>
            </li>
              </>
            : 
            <li>                 
                <Link className='sign_button' to={`/login`} onClick={()=>{set_show_nav(false)}}>                    
                sign in 
               </Link>
            </li>
            }
          </ul>
        </div>
        }
      </div>

    </div>
  )
}

export default Header

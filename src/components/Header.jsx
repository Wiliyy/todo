import {useState} from 'react'
import { BsFillPatchCheckFill } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";
import {Link , useParams , useNavigate, useLocation} from 'react-router-dom';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import { MenuList } from './MenuList';

const Header = () => {
  const [show_nav , set_show_nav] =useState(false)
  const users_information = false

  return (
    <div className="header">

       <Link className='logo' to={`/`} >                    
            <BsFillPatchCheckFill/>     
        </Link>

        <MenuList title={"Menu"} class_name={"nav_action"}>
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
        </MenuList>
        
      </div>
  )
}

export default Header

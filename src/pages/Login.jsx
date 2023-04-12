import {useEffect, useState} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

// import { useDispatch, useSelector } from 'react-redux';
// import { login_action } from '../../action/user_action';

const Login = () => {

    const [user_info , set_user_info] = useState({email:'', password:''})

    // const dispatch = useDispatch()
    // useSelector(
    //     state => console.log(state)
    // )
    // const { loading , error ,users_information} = useSelector(state => state.userLogin)

    // const location = useLocation()
    // const navigate = useNavigate()

    // const redirect = location.search ? location.search.split("=")[1] : "/"
    // useEffect(()=>{
    //     if(users_information){
    //         navigate(redirect)   
    //     }
    // },[users_information , navigate , redirect])


    const handlelogin =(e)=>{
        e.preventDefault();
        // dispatch(login_action(user_info.email , user_info.password))
    }

  return (
    <div className='login_form'>
        <form  onSubmit={handlelogin}>
        <h1 style={{textAlign: 'center' , fontSize:"3rem",margin:"0"}}>Sign in</h1>            
        {/* {error && error } */}
        {/* {loading && "loading..."} */}
            <div className='form_inputs'>
                <input onChange={ (e)=>set_user_info( {...user_info , email:e.target.value} ) } type="email" placeholder='Email'/>
                <input onChange={ (e)=>set_user_info( {...user_info , password:e.target.value} ) } type="password" placeholder='Password'/>
            </div>
            <button type="submit">Login </button>
            <p style={{fontSize:"1.1rem"}}>
            Dont hava an account ? 
            {/* <Link to={redirect ? `/register?redirect=${redirect}` :"/register"}> register  </Link> */}
            <Link to={"/register"}> register  </Link>
            </p>
        </form>
    </div>
  )
}

export default Login
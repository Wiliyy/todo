import {useEffect, useState} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

// import { useDispatch, useSelector } from 'react-redux';
// import { register_action } from '../../action/user_action';

const Register = () => {
    const [user_info , set_user_info] = useState({name :'' , email:'', password:'' , confirmPassword:'' , message:''})

    // const dispatch = useDispatch()
    // const { loading , error ,user_register} = useSelector(state => state.userRegister)

    // const location = useLocation()
    // const navigate = useNavigate()

    // const redirect = location.search ? location.search.split("=")[1] : "/"
    // useEffect(()=>{
    //     if(user_register){
    //         navigate(redirect)   
    //     }
    // },[user_register , navigate , redirect])


    const handleRegister =(e)=>{
        e.preventDefault();
        // if(user_info.password !== user_info.confirmPassword){
        //     set_user_info({...user_info , message: "password not match"})
        // }else{
        //     dispatch(register_action(user_info.name , user_info.email , user_info.password))
        //     set_user_info({...user_info , message: ""})
        // }

    }

  return (
    <div className='login_form'>
        <form  onSubmit={handleRegister}>
        <h1 style={{textAlign: 'center' , fontSize:"3rem",margin:"0"}}>Sign up</h1>            
        {/* {loading && "loading..."} */}
            <div className='form_inputs'>
                <input onChange={ (e)=>set_user_info( {...user_info , name:e.target.value} ) } type="name" placeholder='name'/>
                <input onChange={ (e)=>set_user_info( {...user_info , phone:e.target.value} ) } type="name" placeholder='phone number'/>
                <input onChange={ (e)=>set_user_info( {...user_info , email:e.target.value} ) } type="email" placeholder='Email'/>
                <input onChange={ (e)=>set_user_info( {...user_info , password:e.target.value} ) } type="password" placeholder='Password'/>
                <input onChange={ (e)=>set_user_info( {...user_info , confirmPassword:e.target.value} ) } type="confirmPassword" placeholder='confirm Password'/>
            </div>
            {/* <p style={{ fontSize:"1rem", color:"#ec7979" }}>
                {error && "- " + error.substring(error.indexOf(":")+1).split("Path") }<br></br>
                {user_info.message && "- " + user_info.message}
            </p> */}
            <button type="submit">signup </button>
            <p style={{fontSize:"1.1rem"}}>
            already have account ? 
            {/* <Link to={redirect ? `/login?redirect=${redirect}` :"/login"}> login  </Link> */}
            <Link to={"/login"}> login  </Link>
            </p>
        </form>
    </div>
  )
}

export default Register
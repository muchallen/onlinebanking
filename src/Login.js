import {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import { useHistory } from "react-router-dom";
import { checkAuth, createUserAccount } from './reducers/actions/createUserAccount';


function Login(props) {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const  {signInUser,checkUser,user,error} = props
    let history = useHistory();
    console.log(user.user)
   
   useEffect(() => {
    checkUser()
     if(user && user.user!=null){
      history.push("/");
    }
   },[user])
    if(error){
      console.log("error is there");
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        signInUser({email,password})
    };
  return (
    <div className="login">
    <div className="page-header min-vh-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
            <div className="card card-plain">
              <div className="card-header pb-0 text-left">
                <h4 className="font-weight-bolder">Sign In</h4>
                <p className="mb-0">Enter your email and password to sign in</p>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit} role="form">
                  <div className="mb-3">
                    <input type="email" id="email" className="form-control form-control-lg" onChange={(e)=>(setEmail(e.target.value))}  placeholder="Email" aria-label="Email" aria-describedby="email-addon"/>
                  </div>
                  <div className="mb-3">
                    <input type="password" id="password" className="form-control form-control-lg"   onChange={(e)=>(setPassword(e.target.value))}  placeholder="Password" aria-label="Password" aria-describedby="password-addon"/>
                  </div>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="rememberMe"/>
                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Sign in</button>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center pt-0 px-lg-2 px-1">
                <p className="mb-4 text-sm mx-auto">
                  Don't have an account?
                  <a href="javascript:;" className="text-primary text-gradient font-weight-bold">Sign up</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
            <div className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center">
              <img src="../assets/img/shapes/pattern-lines.svg" alt="pattern-lines" className="position-absolute opacity-4 start-0"/>
              <div className="position-relative">
                <img className="max-width-500 w-100 position-relative z-index-2" src="/assets/img/illustrations/chat.png"/>
              </div>
              <h4 className="mt-5 text-white font-weight-bolder">"Attention is the new currency"</h4>
              <p className="text-white">The more effortless the writing looks, the more effort the writer actually put into the process.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

const mapStateToProps =(state)=>{
    return {
        user: state.authReducer
    }
}

const mapDispatchToProps = (dispatch)=>{

  return {
      signInUser: (credentials)=>dispatch(createUserAccount(credentials)),
      checkUser : ()=>dispatch(checkAuth())

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);

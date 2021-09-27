import {useState} from 'react'
import {connect} from 'react-redux'
import { createUserAccount } from './reducers/actions/createUserAccount';


function SignUp(props) {

  const[email, setEmail] = useState('');
  const[firstName , setfirstName] = useState('')
  const [lastName , setLastName] = useState('')
  const [confirmPassword , setConfirmPassword] = useState('')
  const[password, setPassword] = useState('');

const { createUser } = props;
  

  const handleSubmit = (e)=>{
      e.preventDefault();
      
      createUser({firstName,lastName,email})
  };
    return (
      <div className="signup">
      <div className="page-header min-vh-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
              <div className="card card-plain">
                <div className="card-header pb-0 text-left">
                  <h4 className="font-weight-bolder">Sign up</h4>
                  <p className="mb-0">Enter your details to sign create your account</p>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit} role="form">
                  <div className="mb-3">
                      <input type="text" id="first-name" className="form-control form-control-lg" onChange={(e)=>(setfirstName(e.target.value))}  placeholder="First Name" aria-label="First Name" aria-describedby="first-name-addon"/>
                    </div>
                    <div className="mb-3">
                      <input type="text" id="last-name" className="form-control form-control-lg" onChange={(e)=>(setLastName(e.target.value))}  placeholder="Last Name" aria-label="Last Name" aria-describedby="last-name-addon"/>
                    </div>
                    <div className="mb-3">
                      <input type="email" id="email" className="form-control form-control-lg" onChange={(e)=>(setEmail(e.target.value))}  placeholder="Email" aria-label="Email" aria-describedby="email-addon"/>
                    </div>
                    <div className="mb-3">
                      <input type="password" id="password" className="form-control form-control-lg"   onChange={(e)=>(setPassword(e.target.value))}  placeholder="Password" aria-label="Password" aria-describedby="password-addon"/>
                    </div>
                    <div className="mb-3">
                      <input type="password" id="confirm-password" className="form-control form-control-lg"   onChange={(e)=>(setConfirmPassword(e.target.value))}  placeholder="Confirm Password" aria-label="Confirm Password" aria-describedby="conrfim-password-addon"/>
                    </div>
                    
                    <div className="text-center">
                      <button type="submit" className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Sign up</button>
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
  
  const mapStateToProps = (state) =>{
    return{
      users : state.authReducer.users
    }
  }
  const mapDispatchTpProps = (dispatch)=>{
    return {
      createUser: (userdetails) => dispatch(createUserAccount(userdetails))
    }
  }
  export default connect(mapStateToProps,mapDispatchTpProps)(SignUp);
  
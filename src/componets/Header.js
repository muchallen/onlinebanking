import React,{useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import {connect} from 'react-redux'

 function Header(props) {
     const history = useHistory();
     const {user} =props
     useEffect(() => {
        // if(!user||user.user==null){
        //     history.push("/login")
        //    }
     }, [])
     
    return (
        <div className="p-4 header bg-light m-2 d-flex justify-content-around align-items-top">
           <div  className=" mr-auto  my-0 ">
           <img className="" style={{width:"30px"}} src="assets/icons/bank.png" />
           </div>
            <ul className="d-flex justify-content-end main-nav pr-5">    
                <li className="nav-item active">Home</li>
                <li className="nav-item">Account</li>
                <li className="nav-item">Settings</li>
                
            </ul>
            <div className="dropdown show">
            <img className="rounded-circle dropdown-toggle"  id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{width:"50px"}} src="assets/icons/user.png" />
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
            </div>
  </div>
        </div>
    )
}

const mapStateToProps =(state)=>{
    return {
        user: state.authReducer
    }
}

export default connect(mapStateToProps) (Header)

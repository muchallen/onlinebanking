import React from 'react'
import Header from './componets/Header'
import {useState , useEffect} from 'react'
import { connect } from 'react-redux';
import {compose} from 'redux'
import { firestoreConnect} from 'react-redux-firebase'
import { transfare } from './reducers/actions/transfare';



  
  const  Transfares = (props) => {
        
  const senderAccount = 5586648908
  const currency = 'RTGS'
  const[recieverAccount , setRecieverAccount] = useState('');
  const [recieverBank , setRecieverBank] = useState('')
  const [recieverName , setRecieverName] = useState('')
  const [senderID, setSenderID] = useState('');
  const [amount, setAmount] = useState(0);
  const [phone, setPhone] = useState('');
  const {makeTranfare,transfares} = props

    
    
    useEffect(()=>{
      
    },[props])

    console.log(props)

    

  const handleSubmit = (e)=>{
      e.preventDefault();
      makeTranfare({
          senderAccount,
          recieverAccount,
          recieverName,
          recieverBank,
          currency,
          amount,
          senderID,
          phone
          
      })
      
     
  };
    return (
        <div>
        <Header />
        <div className="row">
            <div className="col-md-4 p-4 ">
                <div className="card d-flex flex-column  justify-content-center">
                    <h5 className="text-center mt-3">Most Recent Transfares</h5>
                    
                </div>

                {transfares && transfares.map((transfare)=>{
                    return (<div className="card d-flex flex-column mt-3 justify-content-center">
                    <p className="text-center mt-5">Account : {transfare.recieverBank}</p>
                    <p className="text-center">Account Holder: {transfare.recieverName}</p>
                    <p className="text-center">Amount: {transfare.amount}</p>
                    <p className="text-center">Date: {Date(transfare.date).substring(0,15)}</p>
                    
                </div>)
                }) }

<div className="text-center">
                      <a  className="btn btn-lg btn-success btn-lg w-100 mt-4 mb-0">View More</a>
                    </div>
            </div>
            <div className="col-md-7">
                <div className="card m-1 ">
                <div className="signup">
      <div className="page-header min-vh-100">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column mx-lg-0 mx-auto">
              <div className="card card-plain">
                <div className="card-header pb-0 text-left">
                  <h4 className="font-weight-bolder text-center mb-4"> Transfare</h4>
                  <label className="" >Your Account </label>
                  <select  className="form-control form-control-lg"  disabled id="account">
                      <option>Rudo Maseka-00559599550</option>
                  
                  </select>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit} role="form">
                  <label className="" >Transfare to </label>

                  <select  className="form-control form-control-lg mb-3"  onChange={(e)=>(setRecieverBank(e.target.value))} id="account">
                      <option>Select Bank</option>
                      <option>First Capital Bank</option>
                      <option>Steward Bank</option>
                      <option>BancABC Bank</option>
                      <option>NMB Bank</option>
                  
                  </select>

                  
                    <div className="mb-3">
                    <label className="" >Recipient Account </label>
                      <input type="text" id="r-account-number" className="form-control form-control-lg" onChange={(e)=>(setRecieverAccount(e.target.value))}  placeholder="Recipient Account Number" aria-label="account-number" aria-describedby="account-number-addon"/>
                    </div>
                    <div className="mb-3">
                    <label className="" >Recipient Name </label>
                      <input type="text" id="r-account-name" className="form-control form-control-lg" onChange={(e)=>(setRecieverName(e.target.value))}  placeholder="Recipient Name" aria-label="account-name" aria-describedby="account-number-addon"/>
                    </div>
                    <div className="mb-3">
                    <label className="" > Amount </label>
                      <input type="number" id="amount" className="form-control form-control-lg" onChange={(e)=>(setAmount(e.target.value))}  placeholder="Amount" aria-label="account-name" aria-describedby="account-number-addon"/>
                    </div>
                    <div className="mb-3">
                    <label className="" >Currency</label>

                    <select  className="form-control form-control-lg mb-3" disabled  id="account">
                        <option>Zimbabwe - RTGS</option>
                    </select>
                    </div>
                    <div className="mb-3">
                    <label className="" > Phone </label>
                      <input type="text" id="amount" className="form-control form-control-lg" onChange={(e)=>(setPhone(e.target.value))}  placeholder="Cell" aria-label="account-name" aria-describedby="account-number-addon"/>
                    </div>

                    <div className="mb-3">
                    <label className="" > ID Number </label>
                      <input type="text" id="amount" className="form-control form-control-lg" onChange={(e)=>(setSenderID(e.target.value))}  placeholder="ID Number" aria-label="account-name" aria-describedby="account-number-addon"/>
                    </div>
                    
                    
                    <div className="text-center">
                      <button type="submit" className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Transfare</button>
                    </div>
                  </form>
                </div>
                
              </div>
            </div>

        </div>
      </div>
      </div>
                </div>
            


            </div>

        </div>
        
  </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return {
        makeTranfare :(data)=>dispatch(transfare(data))
    }
}
const mapStateToProps = (state)=>{
    // console.log(state)
    return{ transfares : state.firestoreReducer.ordered.transfares }
    
}

export default compose(
    firestoreConnect([{ collection : 'transfares',limit :3}]),
    connect(mapStateToProps,mapDispatchToProps)
) (Transfares);
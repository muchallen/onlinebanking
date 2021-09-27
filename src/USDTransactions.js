import React from 'react'
import Header from './componets/Header'

export default function USDTransactions() {
    return (
        <div className="">
             <Header />
             

             <div class="row w-30 mx-auto mt-4">
    <div className="col-md-5 mx-2 trans-action active card">
        
        <p className="text-center">Sent</p>
    </div>

    <div className="col-md-5 trans-action d-flex card">
       
        <p className="align-self-center">Recieved</p>
    </div>
</div>
              <div className="card mt-5 text-center w-80 m-auto">
              <div className="table table-resonsive">
        <thead>
            <th>Account</th>
            <th>Recipient Bank</th>
            <th>Recipients Account</th>
            <th>Recipient Name</th>
            <th>Amount $USD</th>
            <th>Date</th>
        </thead>
        <tbody>
            <tr>
                <td>0017188128278</td>
                <td>FBC Bank</td>
                <td>0447848440404</td>
                <td>Marisa Chamunorwa</td>
                <td>56 000</td>
                <td>02/04/2021</td>
            </tr>
            <tr>
                <td>0017188128278</td>
                <td>FBC Bank</td>
                <td>0447848440404</td>
                <td>Marisa Chamunorwa</td>
                <td>56 000</td>
                <td>02/04/2021</td>
            </tr>
            <tr>
                <td>0017188128278</td>
                <td>FBC Bank</td>
                <td>0447848440404</td>
                <td>Marisa Chamunorwa</td>
                <td>56 000</td>
                <td>02/04/2021</td>
            </tr>
            <tr>
                <td>0017188128278</td>
                <td>FBC Bank</td>
                <td>0447848440404</td>
                <td>Marisa Chamunorwa</td>
                <td>56 000</td>
                <td>02/04/2021</td>
            </tr>
            
        </tbody>

    </div>
    </div>        
    </div>
    )
}

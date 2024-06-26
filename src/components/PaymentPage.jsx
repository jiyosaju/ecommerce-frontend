import React from 'react'
import '../styles/PaymentPage.css'
const PaymentPage = () => {

  const myComponent=()=>{
    alert("payment successfully ")
  }
  return (
    

<div className="containerr">
  <form action>
    <div className="row">
      <div className="col">
        <h3 className="title">billing address</h3>
        <div className="inputBox">
          <span>full name :</span>
          <input type="text" placeholder="johan" />
        </div>
        <div className="inputBox">
          <span>email :</span>
          <input type="email" placeholder="example@example.com" />
        </div>
        <div className="inputBox">
          <span>address :</span>
          <input type="text" placeholder="room - street - locality" />
        </div>
        <div className="inputBox">
          <span>city :</span>
          <input type="text" placeholder="mumbai" />
        </div>
        <div className="flex">
          <div className="inputBox">
            <span>state :</span>
            <input type="text" placeholder="india" />
          </div>
          <div className="inputBox">
            <span>zip code :</span>
            <input type="text" placeholder="123 456" />
          </div>
        </div>
      </div>
      <div className="col">
        <h3 className="title">payment</h3>
        <div className="inputBox">
          <span>name on card :</span>
          <input type="text" placeholder="mr. johan" />
        </div>
        <div className="inputBox">
          <span>credit card number :</span>
          <input type="number" placeholder="1111-2222-3333-4444" />
        </div>
        <div className="inputBox">
          <span>exp month :</span>
          <input type="text" placeholder="january" />
        </div>
        <div className="flex">
          <div className="inputBox">
            <span>exp year :</span>
            <input type="number" placeholder={2021} />
          </div>
          <div className="inputBox">
            <span>CVV :</span>
            <input type="text" placeholder={1234} />
          </div>
        </div>
      </div>
    </div>
    <input onClick={myComponent} type="submit" defaultValue="proceed to checkout" className="submit-btn" />
  </form>
</div>

    

  )
}

export default PaymentPage
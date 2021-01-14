import React from "react";
import axios from "axios";
import Router from "next/router";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { resetCart } from "../../store/actions/actions";

import CoinbaseCommerceButton from "react-coinbase-commerce";
import { Button } from "@material-ui/core";

class Payments extends React.Component {
  handleClick = () => {
    alert("succes");
    axios.get(`http://localhost:3000/checkout?amount=50`).then(res => {
        this.redirect(res.data)
    });
    alert("succes");
    this.props.resetCart();
    toast.success("Order has been confirmed", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    setTimeout(function () {
      Router.push("/thankyou");
    }, 3000);
  };
  render() {
    let { amount } = this.props;
    const checkoutId = async (checkoutId) => {
      alert("start")
      const body = {
        amount: amount,
      };
      await axios.get(`http://localhost:3000/checkout?amount=${amount}`).then(res => {
        this.redirect(res.data)
    })
    alert("succes")
    };

    console.log("checkoutId");
    return (
      <React.Fragment>
        <div className="order-btn">
         

            <button onClick={this.handleClick}>
        Submit
      </button>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetCart: () => {
      dispatch(resetCart());
    },
  };
};

export default connect(null, mapDispatchToProps)(Payments);

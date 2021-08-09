import React from "react";
import "../css/Cart.css";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

class Cart extends React.Component {

  //untuk memberi titik di price
  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  
  render() {
    const notif = this.props.dataCart.length
    let total = this.props.dataCart.map((e)=> e.price * e.qty).reduce((prev, current)=> {
        return prev + current
    }, 0)
    if (this.props.dataCart.length === 0) {
      return (
        <div className="contain">
          <div className="nav">
            <nav className="navbar navbar-light">
              <div className="container-fluid">
                <h1 className="navbar-brand title" href="#">
                  Cart
                  <span
                    id="notif"
                    className="badge bg-info rounded-circle"
                  >{notif}</span>
                </h1>
              </div>
            </nav>
          </div>
          <div className="containEmpty">
            <img
              src="https://s3-alpha-sig.figma.com/img/6e65/ccd2/e51f1c23495bbcef6c222a1bc2540a8a?Expires=1629072000&Signature=AOpb3WRUuNE84SBJcw8-GZl0Q5pL7FHCf23~BsWtMPzD1gcjR~yPe~WsswmQ2Kj2nIf-Sbmm98r-Y4K7p4wdm-i-9PtclV-cMNk-wPOgitp4p3u7317~Ct7eg7IN1tHuUtZYV0k7Wh8e1vBqIw8sn1XcrmySAf4HjMA7DgghtpQEdL0cBDS3My6I2EGEC9NCQ7Nt5H6kpRKhom5hP2wDqqf3l5uzxLQWI5a3M-wpTdAgK47yhlx~0YnZqkckPkT3DVzf~MbBg3xDHHgO~uUhFvo8Vjt~hRPFUaO-Tif0Qb~817NhA~HZ65gn3QkQ1S60xmDx~egQjL6GgVtUSeLQrw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt="Empty"
            />
            <h4>Your cart is empty</h4>
            <p>Please add some items from the menu</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="contain">
          <div className="nav">
            <nav className="navbar navbar-light">
              <div className="container-fluid">
                <h1 className="navbar-brand title">
                  Cart
                  <span
                    id="notif"
                    className="badge bg-info rounded-circle"
                  >{notif}</span>
                </h1>
              </div>
            </nav>
          </div>
          <div className="Cart">
            {this.props.dataCart.map((e) => (
              <div id={e.id} className="d-flex mb-3">
                <div className="flex-shrink-0">
                  <img src={e.picture} alt="img" />
                </div>
                <div className="flex-grow-1 ms-2 mt-2 nam">
                  <h4>
                    <b>{e.name}</b>
                  </h4>
                  <div
                    className="btn-group me-2 mt-5 justify-content-center align-items-center"
                    role="group"
                    aria-label="First group"
                  >
                    <Button
                      variant="outline-success"
                      size="sm"
                      className="mr-2"
                      onClick={() => this.props.actionDec(e.id)}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </Button>

                    <strong>{e.qty}</strong>

                    <Button
                      variant="outline-success"
                      size="sm"
                      className="ml-2"
                      onClick={() => this.props.actionAdd(e.id)}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </Button>
                  </div>
                </div>
                <div id="price">
                  <p>
                    <b>Rp. {this.numberWithCommas(e.price * e.qty)}</b>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="position-fixed bottom-0 bg-white divCheckout">
                <div className="row ms-2 d-flex flex-row align-item-center checkTotal">
                    <p className="col-6 fw-bold price">Total</p>
                    <p className="col-5 d-flex justify-content-center align-items-center fw-bold price">Rp. {this.numberWithCommas(total)}*</p> 
                    <p className="fw-normal fs-15 mb-2 mt-1 note">*Belum Termasuk ppn</p>
                </div>
                <div className="d-flex flex-column checkout ms-2">
                    <button onClick="" className="mb-3 p-2 checkoutBtn" data-bs-toggle="modal">CheckOut</button>
                    <button onClick={this.props.actCancel} className="p-2 mb-3 cancel">Cancel</button>
                </div>
            </div>
        </div>
      );
    }
  }
}

export default Cart;

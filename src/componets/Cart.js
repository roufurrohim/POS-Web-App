import React from "react";
import "../css/Cart.css";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal } from "react-bootstrap";

class Cart extends React.Component {
  //untuk memberi titik di price
  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  render() {
    let total = this.props.dataCart
      .map((e) => e.price * e.qty)
      .reduce((prev, current) => {
        return prev + current;
      }, 0);
    return (
      <div>
        <nav className="navbar navbar-light navCart">
          <h1 className="navbar-brand title">
            Cart
            <small id="notif" className="badge bg-info rounded-circle">
              {this.props.dataCart.length}
            </small>
          </h1>
        </nav>
        {this.props.dataCart.length === 0 ? (
          <div className="contain">
            {/* <div className="nav"> */}

            {/* </div> */}
            <div className="containEmpty">
              <img
                src="https://s3-alpha-sig.figma.com/img/6e65/ccd2/e51f1c23495bbcef6c222a1bc2540a8a?Expires=1638748800&Signature=hPe3NCTk5UXcoWk2RNhNKNYjXAcSndVwu8gtkIv~CpZUr13uN4Fb2dViGAn~CKw9DXounuK~OGOVeVDmOwwNgs0gFwf7H7FXihqFU4yqMW6s-JTIq7fmeKMRGG2QTHIbOdSLAdJqGEwKXEEqyQhdHctopoHP-OoOVDlvK7JbnS8G97PRCm4MfUtTQNzvtHTRdE3AEJoYRiWmTYDB41469ccp8TAx-MfNt2jIB-FRjHV3adWshzl7EcyiEwu8cezoPjgGq56SfjHYlc2CgX2mYMgKZryY7u2xslOw1KxwTaQSp1WRhxRJkpyjouv~kTvGRnc5IizPsz1~h4bSvPPfFw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="Empty"
              />
              <h4>Your cart is empty</h4>
              <p className="note">Please add some items from the menu</p>
            </div>
          </div>
        ) : (
          <div className="contain">
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
                        // variant="outline-success"
                        size="sm"
                        className="mr-2 btnAdd"
                        onClick={() => this.props.actionDec(e.id)}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </Button>

                      <div className="qty">
                        <strong>{e.qty}</strong>
                      </div>

                      <Button
                        variant="outline-success"
                        size="sm"
                        className="ml-2 btnDec"
                        onClick={() => this.props.actionAdd(e.id)}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </Button>
                    </div>
                  </div>
                  <div id="price">
                    <p className="total">
                      <b>Rp. {this.numberWithCommas(e.price * e.qty)}</b>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="position-fixed bottom-0 bg-white divCheckout">
              <div className="row ms-2 d-flex flex-row align-item-center checkTotal">
                <p className="col-6 fw-bold price">Total</p>
                <p className="col-5 d-flex justify-content-end align-items-center fw-bold price">
                  Rp. {this.numberWithCommas(total)}*
                </p>
                <p className="fw-normal fs-15 mb-2 mt-1 note">
                  *Belum Termasuk ppn
                </p>
              </div>
              <div className="d-flex flex-column checkout ms-2">
                <button
                  onClick={this.props.showModal}
                  className="mb-3 p-2 checkoutBtn"
                  data-bs-toggle="modal"
                >
                  CheckOut
                </button>
                <button
                  onClick={this.props.actCancel}
                  className="p-2 mb-3 cancel"
                >
                  Cancel
                </button>
              </div>
            </div>
            {/* <div id="modalOut" className="position-absolute"> */}
            <Modal
              {...this.props}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                  <div className="row">
                    <div className="col-5">
                      <h5
                        className="modal-title fw-bold titleCek"
                        id="exampleModalLabel"
                      >
                        Checkout
                      </h5>
                    </div>
                    <div className="col-7">
                      <h5 className="fw-bold text-end titleCek">
                        Receipt no: #010410919
                      </h5>
                    </div>
                    <div className="col-12">
                      <small className="fw-bold ">Cashier: Pevita Pearce</small>
                    </div>
                  </div>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {this.props.dataCart.map((e) => (
                  <div
                    id={e.id}
                    className="d-flex justify-content-between align-items-center mb-3"
                  >
                    <div className="d-flex flex-column nam">
                      <p>
                        <b>
                          {e.name} <span>{e.qty}x</span>
                        </b>
                      </p>
                    </div>
                    <div id="priceQty" className="d-flex flex-column">
                      <p class="price ">
                        <b>Rp. {this.numberWithCommas(e.price * e.qty)}</b>
                      </p>
                    </div>
                  </div>
                ))}
              </Modal.Body>
              <Modal.Footer>
                <div className=" d-flex flex-column checkout ms-2 border-0 align-items-center justify-content-center">
                  <button
                    type="button"
                    onClick={this.props.showModal}
                    className="btn w-100 p-2 mb-2 cancel "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Print
                  </button>
                  <small className="fw-bold">Or</small>
                  <button
                    onClick={this.props.showModal}
                    className="btn w-100 p-2 mt-2 checkoutBtn"
                  >
                    Send Email
                  </button>
                </div>
              </Modal.Footer>
            </Modal>
            {/* </div> */}
          </div>
        )}
      </div>
    );
  }
}

export default Cart;

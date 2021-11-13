import React from "react";
// import Sidebar from "./Sidebar";
import Fork from "../img/fork.svg";
import Clipboard from "../img/clipboard.svg";
import Add from "../img/add.svg";
import AddProducts from "./ModulAdd";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showSide: false,
      name: "",
      picture: "",
      price: "",
      category: "category",
    };
  }
  resetInput = () => {
    this.setState({
      showModal: false,
      showSide: false,
      name: "",
      picture: "",
      price: "",
      category: "category",
    });
  };

  // handle show sidebar
  handleOn = () => {
      this.setState({ showSide: true})
      console.log("sidebar muncul");
  }

  handleOff = () => {
      this.setState({ showSide: false})
  }

  //untuk handle show modal
  handleShow = () => {
    this.setState({
      showModal: true,
    });
  };
  //untuk handle close modal
  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  //untuk update state
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //untuk mengirim data ke state product di home
  handleSubmit = (e) => {
    e.preventDefault(); //untuk tidak ngereload ulang

    this.handleClose();

    const addProducts = {
      name: this.state.name,
      picture: this.state.picture,
      price: this.state.price,
      category: this.state.category,
    };
    this.addProd(addProducts);
    this.resetInput();
  };

  addProd = (addProducts) => {
    this.props.addData(addProducts);
  };

  render() {
    return (
      <div>
        {/* <div className={th}>
          
        </div> */}
        <nav className="navbar navbar-light">
          <div className="container-fluid">
            <button
              onclick={() => this.handleOn()}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <h1 className="navbar-brand brand-centered">Food Items</h1>
            <button type="button" class="btn ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>
        </nav>
        <div className="collapse" id="navbarToggleExternalContent">
           {/* <Sidebar /> */}
          <div className="row">
            <div className="icon1">
              <Link to="/">
                <img src={Fork} className="items" alt="fork" />
              </Link>
            </div>

            <div className="icon2">
              <Link to="/history">
                <img src={Clipboard} className="history" alt="clipboard" />
              </Link>
            </div>

            <div className="icon3">
              <button
                type="button"
                // className="btn"
                onClick={() => this.handleShow()}
              >
                <img src={Add} className="add" alt="add" />
              </button>
            </div>
            <AddProducts
              handleClose={this.handleClose}
              {...this.state}
              handleSubmit={this.handleSubmit}
              changeHandler={this.changeHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

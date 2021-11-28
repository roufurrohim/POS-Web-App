import React from "react";
import Fork from "../img/fork.svg";
import Clipboard from "../img/clipboard.svg";
import Add from "../img/add.svg";
import AddProducts from "./ModulAdd";
import { Link } from "react-router-dom";
import "../css/Sidebar.css";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      name: "",
      picture: "",
      price: "",
      category: "category",
    };
  }
  resetInput = () => {
    this.setState({
      showModal: false,
      name: "",
      picture: "",
      price: "",
      category: "category",
    });
  };
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
    e.preventDefault();

    this.handleClose();

    const addDataProducts = {
      name: this.state.name,
      picture: this.state.picture,
      price: this.state.price,
      category: this.state.category,
    };
    this.props.addProduct(addDataProducts);
    this.resetInput();
  };

  // addProd = (addProducts) => {
  //   this.props.addData(addProducts);
  // };

  render() {
    return (
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
            className="btn"
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
    );
  }
}

export default Sidebar;

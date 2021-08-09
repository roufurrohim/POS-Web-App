import React from "react";
import Navbar from "../componets/Navbar";
import Sidebar from "../componets/Sidebar";
import Items from "../componets/Items";
import Cart from "../componets/Cart";
import "../css/Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          picture:
            "https://images.unsplash.com/photo-1611689245341-399d7c35e401?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          name: "Espresso",
          price: 10000,
        },
        {
          id: 2,
          picture:
            "https://images.unsplash.com/photo-1509895468733-11b816ae3a7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
          name: "Cofee Latte",
          price: 15000,
        },
        {
          id: 3,
          picture:
            "https://images.unsplash.com/photo-1611564494260-6f21b80af7ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
          name: "Cappucino",
          price: 5000,
        },
        {
          id: 4,
          picture:
            "https://images.unsplash.com/photo-1461010083959-8a5727311252?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1011&q=80",
          name: "Red Velvet Latte",
          price: 33000,
        },
        {
          id: 5,
          picture:
            "https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hvY28lMjByaHVtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          name: "Choco Rhum",
          price: 28000,
        },
        {
          id: 6,
          picture:
            "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBmb3Jlc3QlMjBjYWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          name: "Black Forest",
          price: 30000,
        },
        {
          id: 7,
          picture:
            "https://images.unsplash.com/photo-1606502973842-f64bc2785fe5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          name: "Chicken Katsu Dabu-Dabu",
          price: 60000,
        },
        {
          id: 8,
          picture:
            "https://images.unsplash.com/photo-1557499305-87bd9049ec2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2FsbW9uJTIwdHJ1ZmZsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          name: "Salmon Truffle Teriyaki",
          price: 60000,
        },
        {
          id: 9,
          picture:
            "https://images.unsplash.com/photo-1599921841143-819065a55cc6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2llbmVyJTIwc2Nobml0emVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          name: "Wiener Schnitzel",
          price: 69000,
        },
      ],
      cart: [],
    };
  }
    cancel = () => {
      this.setState({
        cart : []
      })
      console.log("cancel")
    }
  render() {
    const add = (data) => {
      this.setState({
        products: [...this.state.products, data],
      });
    };

    // // check id cart
    let checkCart = (id) => {
      // eslint-disable-next-line array-callback-return
      const findData = this.state.cart.find((e) => {
        if (e.id === id) {
          return e;
        }
      });
      return findData;
    };

    const addqty = (id) =>{
      const index = this.state.cart.findIndex((x=> x.id === id))
      const newItem = [...this.state.cart]
      newItem[index].qty++
      this.setState({
        cart: [...newItem]
      })
    }

    const decqty = (id) =>{
      const index = this.state.cart.findIndex((x=> x.id === id))
      // eslint-disable-next-line react/no-direct-mutation-state
      const newItem = [...this.state.cart]
      if (newItem[index].qty !== 1) {
        newItem[index].qty--
        this.setState({
          cart: [...newItem]
        }) 
      }
       else {
        newItem.splice([index],1)
        this.setState({
          cart:[...newItem]
        })
      }
    }

    let idFromItem = (id) => {
      // eslint-disable-next-line array-callback-return
      this.state.products.filter((e) => {
        if (e.id === id) {
          const newCart = {
            ...e,
            qty: 1
          };
          // console.log(newCart);
          const check = checkCart(id);
          if (check === undefined) {
            this.setState({
              cart: [...this.state.cart, newCart],
            });
          } else {
            addqty(id)
          }
        }
      });
    };

    
    return (
      <div className="container-fluid">
        <div className="rowLeft">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="content">
            <div className="menu">
              <Sidebar addData={add} />
            </div>
            <div className="item">
              <Items data={this.state.products} action={idFromItem} />
            </div>
          </div>
        </div>
        <div className="rowRight">
          <Cart dataCart={this.state.cart} actionAdd={addqty} actionDec={decqty} actCancel={this.cancel}/>
        </div>
      </div>
    );
  }
}

export default Home;

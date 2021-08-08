import React from 'react'
import Sidebar from '../componets/Sidebar'
import '../css/History.css'
import Revenue from '../img/revenue.png'

class History extends React.Component{
    constructor(props){
        super(props)
        this.state={
            history: [
                {
                   invoice: "#10928",
                   cashier: "Cashier 1",
                   date: "06 OCtober 2019",
                   orders: "Ice Tea, Salad With Peanut",
                   amount: 120000 
                },
                {
                   invoice: "#10929",
                   cashier: "Cashier 2",
                   date: "08 OCtober 2019",
                   orders: "Espresso, Wiener Schnitzel",
                   amount: 150000 
                },
                {
                   invoice: "#10930",
                   cashier: "Cashier 3",
                   date: "12 OCtober 2019",
                   orders: "Chicken Katsu Dabu-Dabu, Cappucino",
                   amount: 100000 
                },
            ]
        }
    }
    render(){
        return(
            <div className="jumbotron">
                <nav id="navbarHistory" className="navbarHistory navbar-light">
                    <div className="container-fluid">
                        <button onclick="navbarLeft()" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <h1 className="navbar-brand brand-centered">History</h1>
                    </div>
                </nav>
                <div className="content">
                    <div className="menuHistory">
                        <Sidebar />
                    </div>
                    <div className="right">
                        <div className="row">
                            <div className="col-4">
                                <div className="card card1">
                                    <div className="card-body">
                                        <h6>Today’s Income</h6>
                                        <h3>Rp. 1.000.000</h3>
                                        <p>+2% Yesterday</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card card2">
                                    <div className="card-body">
                                        <h6>Orders</h6>
                                        <h3>3.270</h3>
                                        <p>+5% Last Week</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card card3">
                                    <div className="card-body">
                                        <h6>This Year’s Income</h6>
                                        <h3>Rp. 100.000.000.000</h3>
                                        <p>+10% Last Year</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card card4">
                                    <div className="card-header">
                                        <h2>Revenue</h2>
                                        <img src={Revenue} alt="revenue" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card card5">
                                    <div className="card-header">
                                        <h2>Recent Order</h2>
                                    </div>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">INVOICES</th>
                                                <th scope="col">CASHIER</th>
                                                <th scope="col">DATE</th>
                                                <th scope="col">ORDERS</th>
                                                <th scope="col">AMOUNT</th>
                                            </tr>
                                        </thead>
                                        <tbody id="body">
                                            {
                                                this.state.history.map((e)=>(
                                                <tr>
                                                    <th scope="row">{e.invoice}</th>
                                                    <td>{e.cashier}</td>
                                                    <td>{e.date}</td>
                                                    <td>{e.orders}</td>
                                                    <td>Rp. {e.amount}</td>
                                                </tr>
                                                ))
                                            }
                                        </tbody>
                                        </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default History
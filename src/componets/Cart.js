import React from 'react'
import '../css/Cart.css'

class Cart extends React.Component{
    render(){
        if (this.props.dataCart.length === 0) {
            return (
                <div className="contain">
               <div className="nav">
                    <nav className="navbar navbar-light">
                        <div className="container-fluid">
                            <h1 className="navbar-brand title" href="#">Cart
                                <span id="notif" className="badge bg-info rounded-circle"></span>
                            </h1>
                        </div>
                    </nav>
                </div>
                <div className="containEmpty">
                    <img src="https://s3-alpha-sig.figma.com/img/6e65/ccd2/e51f1c23495bbcef6c222a1bc2540a8a?Expires=1629072000&Signature=AOpb3WRUuNE84SBJcw8-GZl0Q5pL7FHCf23~BsWtMPzD1gcjR~yPe~WsswmQ2Kj2nIf-Sbmm98r-Y4K7p4wdm-i-9PtclV-cMNk-wPOgitp4p3u7317~Ct7eg7IN1tHuUtZYV0k7Wh8e1vBqIw8sn1XcrmySAf4HjMA7DgghtpQEdL0cBDS3My6I2EGEC9NCQ7Nt5H6kpRKhom5hP2wDqqf3l5uzxLQWI5a3M-wpTdAgK47yhlx~0YnZqkckPkT3DVzf~MbBg3xDHHgO~uUhFvo8Vjt~hRPFUaO-Tif0Qb~817NhA~HZ65gn3QkQ1S60xmDx~egQjL6GgVtUSeLQrw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="Empty"/>
                    <h4>Your cart is empty</h4>
                    <p>Please add some items from the menu</p>
                </div>
            </div>
            )
        } else {
        return(
            <div className="contain">
               <div className="nav">
                    <nav className="navbar navbar-light">
                        <div className="container-fluid">
                            <h1 className="navbar-brand title" href="#">Cart
                                <span id="notif" className="badge bg-info rounded-circle"></span>
                            </h1>
                        </div>
                    </nav>
                </div>
                <div className="Cart">
                    {
                        this.props.dataCart.map((e) => (
                            <div id={e.id} className="d-flex mb-3">
                                <div className="flex-shrink-0">
                                    <img src={e.picture} alt="img" />
                                </div>
                                <div className="flex-grow-1 ms-2 mt-2 nam">
                                    <h4><b>{e.name}</b></h4>
                                    {/* <div className="btn-group me-2 mt-5" role="group" aria-label="First group">
                                        <button type="button" className="btn">-</button>
                                        <input type="output" id="input" value="1">
                                            <span>1</span>
                                        <button type="button" className="btn">+</button>
                                    </div> */}
                                </div>
                                <div id="price">
                                    <p><b>Rp. {e.price}</b></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
    }
}

export default Cart
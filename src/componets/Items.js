import React from 'react'
import '../css/Items.css'


class Items extends React.Component{
    render(){
        const addToCart = (id) => {
            this.props.action(id)
        }
        return(
                <div className="products">
                    {
                        this.props.data.map((e) => (
                            <div id={e.id} className="col-3 cardMenu">
                                <img src={e.picture} onClick={() => addToCart(e.id)} alt="img1" />
                                <p className="name">{e.name}</p>
                                <p className="price"><b>Rp. {e.price}</b></p>
                            </div>
                        ))
                    }
                </div>
        )
    }
}

export default Items
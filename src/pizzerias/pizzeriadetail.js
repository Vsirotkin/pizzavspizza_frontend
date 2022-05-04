import React, {Component} from 'react';


class PizzaDetail extends Component {
    render() {
        const p = this.props.p
        return (
            <div>
                <h6>{p.id}</h6>
                <h3>{p.pizzeria}</h3>
                <h5>{p.city}</h5>
                <hr></hr>
            </div>
        )
    }
}

export default PizzaDetail;

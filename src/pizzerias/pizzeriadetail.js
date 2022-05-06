import React, {Component} from 'react';


class PizzaDetail extends Component {
    render() {
        const obj = this.props.pizzariaDetail;

        return (
            <div style={{ color: "yellow", border: "1px solid yellow" }}>
                <h4 style={{ color: 'red' }}>{obj.pizzeria_name}</h4>
                <h5>
                    Address: {obj.street}, {obj.city}, {obj.state} 
                </h5>
                <h6>Phone: {obj.phone_number}</h6>
                <p style={{ color: 'blueviolet' }}>{obj.description}</p>
            </div>
        );
    }
}

export default PizzaDetail;

import React, { Component } from 'react';
// import PizzaDetail from './pizzeriadetail';
import axios from 'axios';

class PizzaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pizzeriasData: [],
            pizzeria: " ",
            showComponent: false,
        };

        this.getPizzaDetail=this.getPizzaDetail.bind(this);
        this.showPizzeriaDetails=this.showPizzeriaDetails.bind(this);

    }

    componentDidMount(){
        axios.get("http://127.0.0.1:8000/")
            .then((response) => {
                this.setState({pizzeriasData: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        return (
            <div>
                {this.state.pizzeriasData.map( item => {
                    return <h3 key={item.id} >{item.pizzeria_name}, {item.city}</h3>
                    })
                }
            </div>
        )
    }
}

export default PizzaList;

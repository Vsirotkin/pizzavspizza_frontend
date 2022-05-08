import React, { Component} from "react"
import axios from "axios"


class PizzaUpdate extends Component{
    constructor(props) {
        super(props);
        this.state = {
            obj_to_update:  this.props.pizzeriaUpdate,
            value:          this.props.pizzeriaUpdate.description,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.state({ value: event.target.value });
        }
        handleSubmit(event) {

        }

}

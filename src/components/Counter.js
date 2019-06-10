import React, {Component} from 'react'
import { bindActionCreators} from "redux";
import {connect } from 'react-redux'
import {actionCreators} from "../store/reducer";

class Counter extends Component {
    render() {
        return (
            <div>
                <p><span>{this.props.value}</span></p>
                <button onClick={this.props.increment}>Increment</button>
                <button onClick={this.props.decrement}>Decrement</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        value: state.value
    };
};

const mapDispatchToProps=dispatch=>{
    return{
        increment:()=>dispatch({type:'INCREMENT', value:1})
    }
};

export default connect(
    state=>state.counter,
    dispatch=>bindActionCreators(actionCreators,dispatch)

   // mapStateToProps,
    //mapDispatchToProps,
)(Counter)
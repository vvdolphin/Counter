
import React from 'react'
import store from '../../redux/store/configStore';
import {increaseCount} from "../../redux/action/count"
import {decreaseCount} from "../../redux/action/count"

class Count extends React.Component {
    constructor(props){
        super(props);
        this.state ={value:0}
    }

   static getDerivedStateFromProps(props, state){
        if(props.count !== state.count){
            state.value =0;
            state.count = props.count;    
        }
        return null;
    }

    onDecrease = ()=>{
        this.setState((prevState) =>({
            value: prevState.value - 1
        }))
        store.dispatch(decreaseCount());
    }

    onIncrease = ()=>{
        this.setState((prevState) =>({
            value: prevState.value + 1
        }))
        store.dispatch(increaseCount());
    }

    render() {
        return <div>
                <button onClick= {this.onDecrease}>-</button>
                <mark>{this.state.value}</mark>
                <button onClick={this.onIncrease}>+</button>
            </div>;
    }
 
}
export default Count;

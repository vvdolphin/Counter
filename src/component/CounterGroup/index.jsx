import React from 'react'
import Counter from '../Counter'
import store from "../../redux/store/configStore"
import {increaseCount, init} from "../../redux/action/count"
import {decreaseCount} from "../../redux/action/count"


class CounterGroup extends React.Component{
    constructor(props){
        super(props);
        this.state ={value:store.getState(),size:0}
    }


    // handleIncrease = (count) =>{
    //     console.log("handleIncrease"+count);
    //     this.setState((prevState) =>({
    //         totalCount: prevState.totalCount + 1
    //     }))
    //     store.dispatch(increaseCount(count));

    //     let num = store.getState();
    //     console.log("num "+num);

    // }

    // handleDecrease = (count) =>{
    //     console.log("handleDecrease"+count);
    //     this.setState((prevState) =>({
    //         totalCount: prevState.totalCount - 1
    //     }))
    //     store.dispatch(decreaseCount(count));
    //     let num = store.getState();
    //     console.log("num "+num);

    // }

    updateSize= (event) => {
        this.setState({
            size: event.target.value? parseInt(event.target.value) :0,
            value:0,
        });
        store.dispatch(init());
    }

    render(){
        store.subscribe(() =>{
            this.setState({
                value:store.getState()
            })
        })

        const initArray = [...Array(this.state.size).keys()];
        return <div>
            <div>
                <label>
                    GropuSize:
                    <input onChange={this.updateSize} defaultValue ={0}/>
                </label>
            </div>
           <div>
               <label>
                   totalCount {this.state.value}
               </label>
           </div>
             {
                 initArray.map(key =><Counter count={this.state.size}   key={key}/>)
             }  
        </div>

        // return <div>
        //     <Counter />

        // </div>
    }

}

export default CounterGroup;
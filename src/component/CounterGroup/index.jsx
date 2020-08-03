import React from 'react'
import Counter from '../Counter'
import store from "../../redux/store/configStore"
import {init} from "../../redux/action/count"

class CounterGroup extends React.Component{
    constructor(props){
        super(props);
        this.state ={value:store.getState(),size:0}
    }

    updateSize= (event) => {
        this.setState({
            size: event.target.value? parseInt(event.target.value) :0,
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
                 initArray.map(key =><Counter count={this.state.size}  key={key}/>)
             }  
        </div>

    }

}

export default CounterGroup;
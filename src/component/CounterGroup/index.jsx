import React from 'react'
import Counter from '../Counter'

class CounterGroup extends React.Component{
    constructor(props){
        super(props);
        this.state ={size : 0,totalCount:0};
    }


    handleIncrease = () =>{
        this.setState((prevState) =>({
            totalCount: prevState.totalCount + 1
        }))
    }

    handleDecrease = () =>{
        this.setState((prevState) =>({
            totalCount: prevState.totalCount - 1
        }))
    }

    updateSize= (event) => {
        this.setState({
            size: event.target.value? parseInt(event.target.value) :0,
            totalCount:0
        });
    }

    render(){
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
                   totalCount {this.state.totalCount}
               </label>
           </div>
             {
                 initArray.map(key =><Counter count={this.state.size}  handleIncrease={this.handleIncrease} handleDecrease = {this.handleDecrease} key={key}/>)
             }  
        </div>
    }

}

export default CounterGroup;
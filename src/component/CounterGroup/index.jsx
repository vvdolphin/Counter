import React from 'react'
import Counter from '../Counter'

class CounterGroup extends React.Component{
    constructor(props){
        super(props);
        this.state ={size : 0};
    }

    updateSize= (event) => {
        this.setState({
            size: event.target.value? parseInt(event.target.value) :0
        });
    }

    render(){
        const initArray = [...Array(this.state.size).keys()];

        return <div>
            <label>
                GropuSize:
                <input onChange={this.updateSize} defaultValue ={0}/>
            </label>

             {
                 initArray.map(key =><Counter key={key}/>)
             }  
        </div>
    }

}

export default CounterGroup;
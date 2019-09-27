import React from 'react'
import { Task1B } from './Task1B'
import { Input } from 'semantic-ui-react';

class Task1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: '',
            initial:'3B 4B 5B 6B'
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.changeInitial = this.changeInitial.bind(this);
    }
    timer;


    componentDidMount() {
        this.timer = null;
    }

    handleInputChange(event) {
        clearTimeout(this.timer);
        this.setState({
            ...this.state,
            inputVal: event.target.value
        },()=>{
            this.timer = setTimeout(() => {
               this.changeInitial(this.state.inputVal);
            }, 2000);
        })   
    }

    changeInitial(str){
        this.setState({
            ...this.state,
            initial: str
        })
    }

    render() {
        const task1ASolution = Task1B(this.state.initial);
        return <div id='task1' className='task-container'>
            <div className='task-header'>
                TASK 1
        </div>
            <ol>
                {
                    JSON.parse(task1ASolution).map(el => {
                        return <li>{el[0] + ' ' + el[1] + '-->' + el[2]}</li>
                    })
                }
            </ol>
            <Input placeholder='3B 4B 5B 6B' label='Enter initial state' onChange={this.handleInputChange} />
        </div>
    }
}

export default Task1;
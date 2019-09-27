import React from 'react';
import { Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Draw from '../Draw/Draw'

class Task2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLine: '',
            passedLine: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.changePassedProp = this.changePassedProp.bind(this);
    }
    timer;

    componentDidMount() {
        this.timer = null;
    }

    handleInputChange = (e) => {
        clearTimeout(this.timer)
        this.setState({
            currentLine: e.target.value
        }, () => {
            this.timer = setTimeout(() => {
                this.changePassedProp(this.state.currentLine)
            }, 3000)
        })
    }

    changePassedProp = (line) => {
        this.setState({
            ...this.state,
            passedLine: line.trim()
        }, () => {
            console.log(this.state.passedLine)
        })
    }

    render() {
        return <div className='task-container'>
            <div className='task-header' id='task2'>TASK 2</div>
            <div>* only triangle, rectangle, pentagon, hexagon, heptagon, octagon are available </div>
            <Draw type='line' line={this.state.passedLine} />
            <Input label='Enter row' onChange={this.handleInputChange} placeholder='Example: 3G 4B 5W' />
        </div>
    }
}

export default Task2;
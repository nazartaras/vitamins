import React from 'react'
import Draw from '../Draw/Draw'
import { task3A } from './task3A'
import { Input, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './Task3.css'

class Task3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialVitaminsState: '',
            inputs: [''],
            statesForAnim:''
        }
        this.handleInputTextChange = this.handleInputTextChange.bind(this);
        this.handleRemoveInput = this.handleRemoveInput.bind(this);
        this.handleAddState = this.handleAddState.bind(this);
        this.handleInitialChange = this.handleInitialChange.bind(this);
        this.showAnimation = this.showAnimation.bind(this);
    }

    handleInputTextChange = idx => evt => {
        const newInputs = this.state.inputs.map((el, sidx) => {
            if (idx !== sidx) return el;
            return evt.target.value;
        });
        this.setState({ inputs: newInputs });
    };

    handleRemoveInput = idx => () => {
        this.setState({
            inputs: this.state.inputs.filter((el, sidx) => idx !== sidx)
        });
    };

    handleAddState = () => {
        if (this.state.inputs.length < 5)
            this.setState({
                inputs: this.state.inputs.concat([''])
            });
    };

    createInputs = () => {
        return this.state.inputs.map((el, idx) => (
            <div className='task3-state-with-button'>
                <Input
                    label='Enter swap'
                    className="task3-state-input"
                    type="text"
                    style={{ marginTop: '10px' }}
                    placeholder={`Example: 4 G B `}
                    value={el}
                    onChange={this.handleInputTextChange(idx)}
                />
                {
                    <Button
                        type="button"
                        content='X'
                        color='red'
                        onClick={this.handleRemoveInput(idx)}
                        style={{ opacity: idx > 0 ? 1 : 0, marginLeft: '10px' }}
                        className="delete-input-button"
                    />
                }
            </div>
        ));
    };

    showAnimation = () => {
        let swaps = this.state.inputs.map(el => el.split(' '));
        const states = task3A(this.state.initialVitaminsState, swaps);
        this.setState({
            ...this.state,
            statesForAnim:states
        })
    }

    handleInitialChange = evt => {
        this.setState({
            ...this.state,
            initialVitaminsState: evt.target.value
        })
    }

    render() {
        return <div className='task-container'>
            <div className='task-header' id='task3'>TASK 3</div>
            <div>* only triangle, rectangle, pentagon, hexagon, heptagon, octagon are available </div>
            <Draw type='operations' line={this.state.statesForAnim} />
            <Input
                label='Enter initial state'
                className="task3-state-input"
                type="text"
                style={{ marginTop: '10px' }}
                placeholder={`Example: 3G 4G `}
                onChange={this.handleInitialChange}
            />
            <div className="task3-input-container">
                {this.createInputs()}
                <Button
                    primary
                    className="add-input-button"
                    style={{ marginTop: '20px', marginBottom: '40px' }}
                    type="button"
                    content='Add color swap'
                    onClick={this.handleAddState}
                />
                <Button
                    color='green'
                    className="add-input-button"
                    style={{ marginTop: '20px', marginBottom: '40px' }}
                    type="button"
                    content='Show animation'
                    onClick={this.showAnimation}
                />
            </div>

        </div>
    }
}

export default Task3;
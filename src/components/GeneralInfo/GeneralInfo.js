import React from 'react';
import { List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import "./GeneralInfo.css"

const GeneralInfo = () => {
    return <div className='general-info'>
        <div className='task-header'>
           COMPLETED TASKS DESCRIPTION
        </div>
        <List>
            <List.Item>
                <List.Content>
                    <List.Header>Task 1</List.Header>
                    <List.Item>
                        A: write list of color swaps for given situation
                    </List.Item>
                    <List.Item>
                        B: write makeAllWhite function that will recieve an initial situation and return of needed color swaps to make all vitamins white
                    </List.Item>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Task 2</List.Header>
                    <List.Item>
                        A: write a piece of code that will prepare a visualisation of a Vitamin Line
                    </List.Item>
                    <List.Item>
                        B: modify task A to smoothly rerender when input is changed
                    </List.Item>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Task 3</List.Header>
                    <List.Item>
                        A: write a function that will take initial state and list of color swaps and will return array of consecutive states
                    </List.Item>
                    <List.Item>
                        B: combine task 2B and 3A to prepare animation consisting of multiple Colour Swap transitions.
                    </List.Item>
                </List.Content>
            </List.Item>
        </List>
    </div>
}

export default GeneralInfo;
import React, {Component} from 'react'

import Search from '../Search';
import List from '../List';
import Btn from '../AddItem';

import './App.css';

export default class App extends Component {
    tododata = [
        {name: 'Todo data 1', important: true, done: false, id: 1},
        {name: 'Todo data 1', important: true, done: false, id: 5},
        {name: 'Todo data 2', important: false, done: true, id: 2},
        {name: 'Todo data 3', important: true, done: false, id: 3},
        {name: 'Todo data 4', important: false, done: true, id: 4},
    ];

    state = {
        todoList: this.tododata,
        list: this.tododata
    };

    changeAction = (id) => {
        this.setState(({todoList}) => {
            const updatedList = todoList.map((obj) => {
                if (obj.id === id) {
                    obj.important = !obj.important
                }
                return obj
            });
            return {
                todoList: updatedList,
                list: updatedList
            }
        })
    };

    deleteItem = (id) => {
        this.setState(({todoList}) => {
            const updatedList = todoList.filter((obj) => {
                return obj.id !== id
            });

            return {
                todoList: updatedList,
                list: updatedList
            }
        })
    };

    doneItem = (id) => {
        this.setState(({todoList}) => {
            const updatedList = todoList.map((obj) => {
                if (obj.id === id) {
                    obj.done = !obj.done
                }
                return obj
            });
            return {
                todoList: updatedList,
                list: updatedList
            }
        })
    };

    filter = (type) => {
        console.log(type);
        const {list} = this.state;
        let updatedList = list;
        switch (type) {
            case 'done':
                updatedList = list.filter((obj) => obj.done === true);
                break;
            case 'important':
                updatedList = list.filter((obj) => obj.important === true);
                break;
            default:  updatedList = list.filter(el => el.name.match(type.target.value));
        }
        this.setState(() => {
            return {
                todoList: updatedList,
            }
        })
    };

    render() {
        let {todoList} = this.state;
        return (
            <div>
                <Search
                    searchToDoData={(text) => this.searchValue(text)}
                    filterToDoData={(type) => this.filter(type)}/>
                <List
                    items={todoList}
                    changeItemData={(id) => this.changeAction(id)}
                    removeItemData={(id) => this.deleteItem(id)}
                    doneItemData={(id) => this.doneItem(id)}/>
                <Btn/>
            </div>
        )
    }
};
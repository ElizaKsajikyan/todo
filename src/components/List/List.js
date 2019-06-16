import React, {Component} from 'react';
import ListItems from '../ListItems';
import './List.css';

export default class List extends Component {
    render(){
      let {items, changeItemData, removeItemData, doneItemData} = this.props;
        return (
            <ul>
                <ListItems items={items} 
                change={changeItemData}
                remove={removeItemData}
                changeDone={doneItemData}/>
            </ul>
        )
    }
}

import React, {Component} from 'react';
import './AddItem.css';

export default class AddItem extends Component {

    addItemAction = (value) => {
        console.log(value)
    }
    render() {
        return (
            <>
                <div className="form-group w-25 d-inline-block ml-2 mr-2">
                    <input type="text" className="form-control"/>
                </div>
                <button 
                    className="btn btn-danger"
                    onClick={()=>this.addItemAction('hello')}>
                        Add list
                </button>
            </>
            
        )
    }
}

import React, {Fragment, Component} from 'react';
import './ListItem.css';

export default class ListItems extends Component{

    setImportant = (id) => {
        this.props.change(id)
    };

    removeItem = (id) => {
        this.props.remove(id)
    };

    toDone = (id) => {
        this.props.changeDone(id)
    };

    render() {
        const {items} = this.props;
        const itemList = items.map(({name, important, id, done}) => {
            let imStyle = {
                color: important ? 'tomato' : 'black',
                backgroundColor: done ? '#f6f2f2' : 'transparent'
            };
            // className="btn btn-default" 
            return  (
                <Fragment key={id}>
                    <span style={imStyle} onClick={()=>{this.toDone(id)}}>
                     {name}
                    </span>
                    <button className="btn btn-danger"
                            onClick={() => this.removeItem(id)}>
                        <i className="fa fa-remove"/>
                    </button>
                    <button className="btn btn-info"
                            onClick={() => this.setImportant(id)}>
                        <i className="fa fa-star"/>
                    </button>
                 </Fragment>
            )
        });
        return (
            <div className="ListItems">
            {itemList}
        </div>
        )
    }
}
    
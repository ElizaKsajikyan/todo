import React, {Component} from 'react';

export default class Search extends Component {

    fillerValue = (t) => {
        this.props.filterToDoData(t)
    };

    render(){
        return (
            <>
                <div className="form-group w-25 d-inline-block ml-2 mr-2 mt-2">
                    <input 
                        className="form-control" 
                        type="search" 
                        placeholder='Search...'
                        onChange={this.fillerValue} />
                </div>
                <button 
                    className="btn btn-danger"
                    onClick={() => this.fillerValue("important")}>
                    Important
                </button>
                <button 
                    className="btn btn-info"
                    onClick={() => this.fillerValue("done")}>
                    Done
                </button>
            </>
        )
    }
};



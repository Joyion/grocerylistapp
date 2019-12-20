import React from "react";



class Item extends React.Component{
    constructor(props){
        super(props);
        this.addMore = this.addMore.bind(this);
        this.subMore = this.subMore.bind(this);
        this.removeAll = this.removeAll.bind(this);
    }

    addMore(e){
        e.preventDefault();
        this.props.addCount(this.props.item);
    }

    subMore(e){
        e.preventDefault();
        this.props.subCount(this.props.item);
    }

    removeAll(e){
        e.preventDefault();
        this.props.removeCount(this.props.item);
    }

    render(){
        return (
            <div>
                <h3>{this.props.item.name}</h3>
                <p>{this.props.item.type}</p>
                <div>quantity: {this.props.item.count} 
                    <button onClick={this.addMore}>+1</button>
                {this.props.item.count > 0 && (<button onClick={this.subMore}>-1</button>)}
                {this.props.item.count > 0 && (<button onClick={this.removeAll}>remove all</button>)}       
                </div>
            </div>
        )
    }
}

export default Item;
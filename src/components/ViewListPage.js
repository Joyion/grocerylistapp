import React from "react";
import {connect} from "react-redux";
import AddItem from "./AddItem";
import Item from "./Item";
import {getItemsToItem, addItemToItems, addCountToItems, removeCountToItems, resetItemToItems, resetAlltoItems} from "../actions/item.action";
import {setCount, addToCount, subtractCount, removeItem, resetStore} from "../actions/store.action";


class ViewListPage extends React.Component{
    constructor(props){
        super(props);
        this.addingItem = this.addingItem.bind(this);
        this.incrCount = this.incrCount.bind(this);
        this.decrCount = this.decrCount.bind(this);
        this.resetItem = this.resetItem.bind(this);
        this.resetAll = this.resetAll.bind(this);
    }
    componentDidMount(){
        const json = localStorage.getItem("items");
        if(json){
            this.props.dispatch(getItemsToItem(JSON.parse(json)));
        }
    }


    componentDidUpdate(){
        const json = JSON.stringify(this.props.items);
        localStorage.setItem("items", json);
        console.log("update local storage")
    }


    addingItem(item){
        this.props.dispatch(addItemToItems(item));
        this.props.dispatch(setCount(item));
    }

    incrCount(item){
        this.props.dispatch(addCountToItems(item));
        this.props.dispatch(addToCount(item));

    }

    decrCount(item){
        console.log(item.count);
        if(item.count == 1){
            this.props.dispatch(resetItemToItems(item));
            this.props.dispatch(subtractCount(item)); 
           
        }
        else {
            this.props.dispatch(removeCountToItems(item));
        }
       

    }
    
    resetItem(item){
        this.props.dispatch(resetItemToItems(item));
        this.props.dispatch(removeItem(item));

    }

    resetAll(){
        this.props.dispatch(resetAlltoItems());
        this.props.dispatch(resetStore());

    }

    render(){
        return (
            <div>
               <AddItem addItem={this.addingItem}/>
               {this.props.items.map((item, index) => {
                   return (
                   <Item key={index.toString()} item={item}
                   addCount={this.incrCount} subCount={this.decrCount}  removeCount={this.resetItem} />
                   )
               })}
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    store: state.store,
    items: state.items

})


export default connect(mapStateToProps)(ViewListPage);
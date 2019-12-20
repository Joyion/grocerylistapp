import React from "react";
import {connect} from "react-redux";
import {startGetStore, addToCount, subtractCount, removeItem} from "../actions/store.action";
import {addItemToItems, addCountToItems, removeCountToItems, resetItemToItems, resetAlltoItems} from "../actions/item.action";
import {setCategory} from "../actions/filter.action";
import Item from "./Item";
import selectListItems from "../selectors/selectListItems";

class StorePage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            category: false,
            categoryNames: [
                {name: "Dairy"},
                {name: "Deli/Meat"},
                {name: "Canned Goods"},
                {name: "Frozen"},
                {name: "Fruit/Vegetable"},
                {name: "Spices/Condiments"}
                
            ]
        }

        this.onCategoryClick = this.onCategoryClick.bind(this);
        this.addCount = this.addCount.bind(this);
        this.subCount = this.subCount.bind(this);
        this.removeCount = this.removeCount.bind(this);
    }


    componentDidMount(){
        // load store from database if state.store is empty
        if(this.props.store.length < 1){
            const myitems = this.props.items.map((item) => {return item});
            startGetStore(this.props.dispatch, myitems);
        }
    
    }

    onCategoryClick(e){
        e.preventDefault();
        this.setState((state) =>({
            category: !state.category
        }));
    const category = e.target.value;
    this.props.dispatch(setCategory({filterby: "category", category: category}))

    }

    addCount(item){
        this.props.dispatch(addToCount(item));
        this.props.dispatch(addCountToItems(item));
    }

    subCount(item){
        this.props.dispatch(subtractCount(item));
        this.props.dispatch(removeCountToItems(item));
    }

    removeCount(item){
        this.props.dispatch(removeItem(item));
        this.props.dispatch(resetItemToItems(item));
    }



    render(){
        return (
            <div>
                <h1>Find Grocery Items</h1>
                { this.state.category ?
                    (<div>
                    <button onClick={this.onCategoryClick}>Return to Categories</button>
                    { /* this is a if statement */}
                    {this.props.store ? this.props.store.map((item) =>{
                    return (<Item key={item._id} item={item} 
                                addCount={this.addCount}
                                subCount={this.subCount}
                                removeCount={this.removeCount}
                                />)
                }) : (<p>Unable to Load Store</p>) }
                </div>)
                 : 
                   (<div> 
                   {this.state.categoryNames.map((category, index) =>
                         (<div key={index}>
                        <button onClick={this.onCategoryClick} value={category.name}>{category.name}</button>
                        </div>))}
                   </div>)
            
                }
            </div>
        )       
    }
}

const mapStateToProps = (state) => ({
    store: selectListItems(state.store, state.filter),
    filter: state.filter,
    items: state.items
})

export default connect(mapStateToProps)(StorePage);
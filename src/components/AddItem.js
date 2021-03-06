import React from "react";


class AddItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            item: "",
            quantity: 0,
            type: "Dairy"
        }
        this.itemChange = this.itemChange.bind(this);
        this.quantityChange = this.quantityChange.bind(this);
        this.typeChange = this.typeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    itemChange(e){
        this.setState({item: e.target.value});
    }

    quantityChange(e){
        const count = e.target.value;
        if(!count || count.match(/^[0-9]*$/gm)){
            this.setState({quantity: count});
        }
    }

    typeChange(e){
        this.setState({type: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault(); 
        this.props.addItem({name: this.state.item, count: parseInt(this.state.quantity), type: this.state.type})
        this.setState({item: "", quantity: 0, type: "Dairy"})
       
    }


    render(){
        return (
            <div>
            <form className="container" onSubmit={this.handleSubmit}>
            <label className="container-flex-label" htmlFor="item">
                <span>Item:</span> <input autoFocus className="input" onChange={this.itemChange} value={this.state.item} type="text" id="item" name="item"/>
            </label>
            <label className="container-flex-label" htmlFor="quantity">
               <span >Quantity:</span><input className="input" onChange={this.quantityChange} value={this.state.quantity} type="text" id="quantity" name="count"/>
            </label>
            <label className="container-flex-label" htmlFor="type">
                Type: 
                <select className="input input-select" value={this.state.type} onChange={this.typeChange}>
                    <option value="Dairy">Dairy</option>
                    <option value="Deli/Meat">Deli/Meat</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Frozen">Frozen</option>
                    <option value="Fruit/Vegetable">Fruit/Vegetable</option>
                    <option value="Spices/Condiments">Spices/Condiments</option>
                </select>   
            </label>
            <button className="button" type="submit">Add Item</button>

            </form>
               
            </div>
        )
    }

}

export default AddItem;
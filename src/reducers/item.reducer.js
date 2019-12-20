const defaultItems = [];

export default (state = defaultItems, action) => {
    switch(action.type){
        case "GET_ITEMS":
            console.log(action.items);
            if(action.items.length > 0){
                return action.items;
            }
            return state;
        case "ADD_ITEM":
            return [...state, action.item];
        case "ADD_COUNT":
            return state.map((item) =>{
                if(item.name.toUpperCase() == action.item.name.toUpperCase() &&
                    item.type.toUpperCase().trim() == action.item.type.toUpperCase().trim()){
                    item.count++;
                    return item;
                }
                else {
                    return item;
                }
            });
        case "REMOVE_COUNT":
            return state.map((item) =>{
                if(item.name.toUpperCase().trim() == action.item.name.toUpperCase().trim()  &&
                    item.type.toUpperCase().trim() == action.item.type.toUpperCase.trim()){
                    item.count--;
                    return item;
                }
                else {
                    return item;
                }
            });;
        case "RESET_ITEM":
            return state.filter((item) =>{
               
               return !(item.name.toUpperCase().trim() == action.item.name.toUpperCase().trim() &&
                    item.type.toUpperCase().trim() == action.item.type.toUpperCase().trim())
            });
        case "RESET_ALL":
            return [];
        default: 
             return state;
    }
}
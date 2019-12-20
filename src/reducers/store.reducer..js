const defaultState = [];

export default (state = defaultState, action) => {
    switch(action.type) {
        case "SET_COUNT_STORE":
            return state.map((item) => {
                if(item.name.toUpperCase().trim() == action.item.name.toUpperCase().trim() &&
                    item.type == action.item.type){
                    item.count = action.item.count;
                    return item;
                }
                else {
                    return item;
                }
            })
        case "ADD_COUNT_STORE":
            return state.map((item) => {
                if(item.name.toUpperCase().trim() == action.item.name.toUpperCase().trim() &&
                item.type.toUpperCase().trim() == action.item.type.toUpperCase().trim()){
                     item.count++;
                     return item;
                }
                return item;
            });
        case "SUBTRACT_COUNT_STORE":
            return state.map((item) => {
                if(item.name.toUpperCase() == action.item.name.toUpperCase() &&
                item.type == action.item.type){
                    if(item.count > 0){
                      item.count--;
                    }
                     return item;
                }
                return item;
            });;
        case "REMOVE_ITEM_STORE":
            return state.map((item) => {
                if(item.name.toUpperCase() == action.item.name.toUpperCase() &&
                item.type == action.item.type){
                     item.count = 0;
                     return item;
                }
                return item;
            });
        case "GET_STORE":
            return action.store;
        case "RESET_STORE":
            return state.map((item) =>{
                item.count = 0;
                return item;
            })
        default:
            return state;
    }
}


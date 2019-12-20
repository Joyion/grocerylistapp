const defaultState = {
    filterby: "abc",
    category: ""
}


export default (state = defaultState, action) => {
    switch(action.type){
        case "abc": 
            return {filterby: "abc"};
        case "type":
            return {filterby: "type"};
        case "category":
            return {filterby:"category",
                    category: action.category} ;
        default: 
            return state;
    }
} 
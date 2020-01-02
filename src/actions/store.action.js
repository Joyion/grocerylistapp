import axios from "axios";
export const getStore = (store) => ({
    type: "GET_STORE",
    store
})

export const startGetStore = (dispatch, items) => {
    axios.get('/api/store')
    .then(function (response) {
        console.log("making request");
        console.log(response.data);
        response.data.map((item) => {
            if(items.length > 0){
                items.forEach(element => {
                if(element.name.toUpperCase().trim() == item.name.toUpperCase().trim() 
                && element.type.toUpperCase().trim() == item.type.toUpperCase().trim()){
                    item.count = element.count;
                }
            });  
            }
          
            return item;
        })
        dispatch(getStore(response.data));
    })
    .catch(function (error) {
        console.log("error making request");
        console.log(error);
    });
}

export const setCount = (item) => ({
    type: "SET_COUNT_STORE",
    item
})

export const addToCount = (item) =>({
    type: "ADD_COUNT_STORE",
    item
})

export const subtractCount = (item) => ({
    type: "SUBTRACT_COUNT_STORE",
    item
})

export const removeItem = (item) => ({
    type: "REMOVE_ITEM_STORE",
    item
})

export const resetStore = () => ({
    type: "RESET_STORE_STORE"
})


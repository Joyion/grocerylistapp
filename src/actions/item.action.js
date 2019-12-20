export const getItemsToItem = (items) => ({
    type: "GET_ITEMS",
    items
})

export const addItemToItems = (item) => ({
    type: "ADD_ITEM",
    item
});

// startAddItemToItems should contain dispatch for store and items

export const addCountToItems = (item) => ({
    type: "ADD_COUNT",
    item
});

// sta

export const removeCountToItems = (item) => ({
    type: "REMOVE_COUNT",
    item
});

export const resetItemToItems = (item) => ({
    type: "RESET_ITEM",
    item
});

export const resetAlltoItems = () => ({
    type: "RESET_ALL"
});
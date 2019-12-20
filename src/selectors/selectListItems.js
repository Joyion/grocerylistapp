export default (list, filter)  => {
    if(filter.filterby === "abc"){
        return list.sort();
    }
    else if(filter.filterby === "type") {
        return list.sort((a, b) => {
            if(a.type < b.type){
                return -1;
            }
            else if(a.type > b.type){
                return 1;
            }
            else {           return 0;  
            }
                  
        })
    }

    else {
        return list.filter((item) => {
     if(filter.filterby === "category"){
         return item.type === filter.category;
     }
     else if(filter.filterby === "none"){
         return true;
     }
     else {
         return true;
     }  
    })
}
    

}
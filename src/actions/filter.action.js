export const setfilter = (filter) => ({
    type: filter.filterby,
})

export const setCategory = (filter) => ({
    type: filter.filterby,
    category: filter.category
})
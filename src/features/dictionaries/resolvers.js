const dictionaryResolvers = {
    Query: {
        typeList: async () => { return [] },
        categoryList: async () => {return [] },
        countryList: async () => { return []},
        countyList: async () => {return [] },
        cityList: async () => {return [] }
    }
}
module.exports = dictionaryResolvers
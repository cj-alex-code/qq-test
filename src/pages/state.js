import Vue from 'vue'

const homePageStore = Vue.observable({
  isAscSort: true,
  sortBy: 'id',
  filterText: '',
  items: [{id: 1, name: "First", price: 100, rating: 0.2},
    {id: 2, name: "Second", price: 101, rating: 0.5},
    {id: 3, name: "Third", price: 101, rating: 0.9},
    {id: 4, name: "Forth", price: 50, rating: 0.6}]
})

const mainFunctions = {
  sortBy:(a, b) => {
    if (homePageStore.isAscSort) {
      if (a < b) {
        return -1
      }
      return 1
    } else {
      if (a < b) {
        return 1
      }
      return -1
    }
  },
  sortItems: ()=>{
    homePageStore.items.forEach((i)=>{
      i.hide = i.name.toLocaleLowerCase().search(homePageStore.filterText) < 0
    })
    homePageStore.items.sort((a, b) => mainFunctions.sortBy(a[homePageStore.sortBy], b[homePageStore.sortBy]))
  }
}

export const homePageStoreAction = {
  setFilteredNames(name){
    homePageStore.filterText = (name+'').toLocaleLowerCase()
    mainFunctions.sortItems()
  },
  setIsAscSort(isAscSort) {
    homePageStore.isAscSort = isAscSort
    mainFunctions.sortItems()
  },
  sortType(type) {
    if(type === 'none'){
      type = 'id'
    }
    homePageStore.sortBy = type
    mainFunctions.sortItems()

  }
}
export const homePageStoreGetter = {
  items: () => homePageStore.items.filter(i=>!i.hide),
}
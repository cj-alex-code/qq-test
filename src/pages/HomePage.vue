<script type="text/jsx">
import {homePageStoreGetter,homePageStoreAction} from './state'
import HomePageItem from "@/pages/HomePageItem.vue";
export default {
  computed: {
    items: homePageStoreGetter.items
  },
  methods:{
    sortBy(e){
      homePageStoreAction.setIsAscSort(e.target.value === 'min-to-max')
      e.preventDefault()
    },
    sortType(e){
      homePageStoreAction.sortType(e.target.value)
      e.preventDefault()
    },

    filterBy(e){
      homePageStoreAction.setFilteredNames(e.target.value)
      e.preventDefault()
    }
  },
  render() {
    const renderList = this.items.map((item)=>{
      return <HomePageItem key={`home-page-item-${item.id}`} data={item}/>

    })
    return <div>
      <div class="nav">
        Сортировка по:
        <select onChange={this.sortType}>
          <option value="none">Нет</option>
          <option value="price">Цена</option>
          <option value="rating">Рейтинг</option>
        </select>
        <select onChange={this.sortBy}>
          <option value="min-to-max">По возрастанию</option>
          <option value="max-to-min">По убыванию</option>
        </select>
      </div>
      <div class="nav">
        Фильтр по названию:
        <input onInput={this.filterBy} type="text"/>
      </div>
      <hr/>
      <div class="elements">
        {renderList}
      </div>
  </div>

  }
}
</script>
<style src="./style.css"></style>

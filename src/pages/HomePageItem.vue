<script type="text/jsx">

export default {
  props: {
    data: {
      type: Object,
      default: ()=>{
        return {}
      }
    }
  },
  render() {
    if(!('id' in this.data)){
      return null
    }
    return <div class="item">
        <strong class="name">Название: {this.data.name}</strong>
    <div class="price">Цена: {this.data.price}</div>
    <div class="rating">Рейтинг: {this.data.rating}</div>
  </div>
  }
}
</script>

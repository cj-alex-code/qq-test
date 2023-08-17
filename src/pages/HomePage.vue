<template>
  <div>
    <div class="nav">
      Сортировка по:
      <select>
        <option value="none">Нет</option>
        <option value="price">Цена</option>
        <option value="rating">Рейтинг</option>
      </select>
      <select>
        <option value="min-to-max">По возрастанию</option>
        <option value="max-to-min">По убыванию</option>
      </select>
    </div>
    <div class="nav">
      Фильтр по названию:
      <input type="text" />
    </div>
    <hr />
    <div class="elements">
      <template v-for="item in items">
        <div class="item" :key="item.id">
          <strong class="name">Название: {{ item.name }}</strong>
          <div class="price">Цена: {{ item.price }}</div>
          <div class="rating">Рейтинг: {{ item.rating }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      items: [
        { id: 1, name: "First", price: 100, rating: 0.2 },
        { id: 2, name: "Second", price: 101, rating: 0.5 },
        { id: 3, name: "Third", price: 101, rating: 0.9 },
        { id: 4, name: "Forth", price: 50, rating: 0.6 },
      ],
    };
  },
};
</script>

<style>
.nav {
  margin: 10px 0;
}
.nav-el {
  margin: 10px;
}
.item {
  margin: 5px 0;
  padding: 5px;
  border: 1px solid #000;
}

select {
  margin: 0 5px;
}
</style>
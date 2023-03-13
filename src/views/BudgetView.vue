<template>
    <div>
      <h1>Liste de composants réutilisables</h1>
      <MyChart v-for="(item, index) in items" :key="index" :data="item" />
      
    </div>
  </template>
  
  <script>
  import MyChart from './PeopleView.vue'
  
  export default {
    components: {
      MyChart,
    },
    data() {
      return {
        items: [
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' },
          { id: 3, name: 'Item 3' },
        ],
      };
    },
  }
  </script>
    <style>
  .row {
    display: flex;
  }
  </style>
  
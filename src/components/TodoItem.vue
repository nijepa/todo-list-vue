<template>
  <div class="todos">
    <h3 :class="{ finished: todosData.status }">
      Todo : 
      <input type="checkbox" name="status" id="status" v-model="todosData.status"> 
      <span> {{ todosData.title }} * </span> 
      <span> {{ todosData.dueDate }} * </span> 
      <span :class="'priority-' + todosData.priority"> {{ todosData.priority == 1 ? 'high' : todosData.priority == 2 ? 'medium' : 'low' }}</span>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: { todosData: Object },
}
</script>

<style lang="scss" scoped>
  $color-green: forestgreen;
  $color-gold: gold;
  $color-red: crimson;

  @mixin priority($color) {
    background-color: $color;
    border-radius: .5rem;
    padding: .2rem;
    color: black;
  }
.todos {
    margin: 1rem;
    padding: 1rem;
    background-color: #40bcdb;
    cursor: pointer;
    -webkit-box-shadow: 10px 10px 2px -5px rgba(28,110,173,1);
    -moz-box-shadow: 10px 10px 2px -5px rgba(28,110,173,1);
    box-shadow: 10px 10px 2px -5px rgba(28,110,173,1);
  }

  .todos:hover {
    color: white;
    background-color: rgba(28,110,173,1);
    box-shadow: 10px 10px 2px -5px #40bcdb;
  }
  .finished {
    text-decoration: line-through;
  }
  .priority-1 {
    @include priority(($color-red));
  }
  .priority-2 {
    @include priority(($color-gold));
  }
  .priority-3 {
    @include priority($color-green);
  }
</style>
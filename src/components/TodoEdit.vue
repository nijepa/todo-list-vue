<template>
  <div class="">
    <form action="" @submit.prevent="">
      <div class="form-group">
        <label for="title">Title : </label>
        <input type="text" name="title" id="title" v-model="todoData.title" required>
      </div>
      <div class="form-group">
        <label for="desc">Description : </label>
        <textarea name="desc" id="desc" cols="25" rows="3" v-model="todoData.description"></textarea>
      </div>
      <div class="form-group">
        <label for="dueDate">Due Date : </label>
        <input type="date" name="dueDate" id="dueDate" v-model="todoData.dueDate">
      </div>
      <div class="task-item-radio">
        <p class="task-element">Priority: </p>
        <input :checked="todoData.priority == 3" type="radio" id="high" name="priority" 
                :value="{priority: todoData.priority}" class="task-element " @click="setPriority(3)">
        <label for="high" class="task-element "> Low</label>
        <input :checked="todoData.priority == 2" type="radio" id="medium" name="priority" 
                :value="{priority: todoData.priority}" class="task-element "  @click="setPriority(2)">
        <label for="medium" class="task-element "> Medium</label>
        <input :checked="todoData.priority == 1" type="radio" id="low" name="priority" 
                :value="{priority: todoData.priority}" class="task-element "  @click="setPriority(1)">
        <label for="low" class="task-element "> High</label>
      </div>
      <div class="form-group status">
        <label class="status" for="status">Finished : </label>
        <input class="status" type="checkbox" name="status" id="finished" value="finished" v-model="todoData.status">
      </div>
      <div class="form-btns">
        <button id="cancel" @click="newTodo(false)">Cancel</button>
        <button id="save" type="submit" @click="newTodo(true)">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TodoEdit',
  props: { 
    todoData: Object,
    type: String,
    method: { type: Function } ,
    
  },
  data() {
    return {
      saveTodo: false,
      priority: ''
    }
  },
  mounted() {
    this.$emit('todo-edit', this.saveTodo);
    this.checkPriority()
  },
  methods: {
    newTodo(saveOrCancel) {
      if (saveOrCancel) {
        this.saveTodo = true;
      } else {
        this.saveTodo = false;
      }
      this.$emit('todo-edit', this.saveTodo, saveOrCancel, this.type);
    },
    checkPriority() {
      if (this.todoData.priority == 1) {
        this.priority = 'High'
      } else if (this.todoData.priority == 2) {
        this.priority = 'Medium'
      } else {
        this.priority = 'Low'
      }
    },
    setPriority(choice) {
      if (choice == 1) {
        this.todoData.priority = 1;
      } else if (choice == 2) {
        this.todoData.priority = 2;
      } else {
        this.todoData.priority = 3;
      }
    }
  },
  
}
</script>

<style lang="scss" scoped>
$color-blue: rgba(19,135,237,0.88);
$color-green:rgba(89, 199, 103, 0.88);
$color-yellow: rgba(231, 228, 29, 0.88);
$color-red: rgba(202, 41, 41, 0.88);
$color-blue-light: rgb(111, 194, 241);
$color-green-light: rgba(173, 238, 182, 0.88);
$color-yellow-light: rgba(241, 240, 162, 0.88);
$color-red-light: rgba(240, 159, 159, 0.88);;

@mixin boxShadow($color1, $color2) {
	-webkit-box-shadow: 6px 6px 4px 0px $color1;
  -moz-box-shadow: 6px 6px 4px 0px $color1;
  box-shadow: 6px 6px 4px 0px $color2;
}

.low {
  background-color: $color-green;
	&:hover {
		background-color: $color-green-light;
	}
}
.medium {
  background-color: $color-yellow;
	&:hover {
		background-color: $color-yellow-light;
	}
}

.high {
  background-color: $color-red;
	&:hover {
		background-color: $color-red-light;
	}
}

.task-item-radio {
	display: inline-block;
	margin: .2rem;
	padding: .2rem;
	input[type="radio"] {
		opacity: 0;
		position: fixed;
    width: 0;
    cursor: pointer;
		&:focus {
			+ {
				label {
					border: 2px solid black;
				}
			}
		}
		&:checked {
			+ {
				label {
					background-color: $color-blue-light;
          color: black;
					border: 2px solid black; 
				}
			}
		}
	}
	
}

.task-item-radio {
  label {
		display: inline-block;
		padding: 5px 5px;
		font-size: 1rem;
    border-radius: 4px;
    margin: .2rem;
    cursor: pointer;
		&:hover {
      background-color: $color-blue-light;
      color: black;
			border: 2px solid black;
		}
	}
}

.status {
  cursor: pointer;
}
</style>
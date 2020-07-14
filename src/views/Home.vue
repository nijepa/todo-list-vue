<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button id="add-pro" @click="addProject()"> </button>
    <div class="container">

      <div class="projects">
        <div class="project" v-for="item in allData" :key="item.id" 
            @click="selectProject($event, item)" v-bind:class="{active: item.id == isActive}">

          <project-item v-bind:projects-data="item" v-bind:class="{active: item.id == isActive}" />

          <div class="active" v-if="item.id == isActive">
            <button class="pro-btn" id="del" @click="deleteProject()">Delete Project</button>
            <button class="pro-btn" id="edit-pro" @click="updateProject()">Edit Project</button>
            <button class="pro-btn" id="add-todo" @click="addTodo()">Add ToDo</button>
          </div>

        </div>
      </div>
      
      <div class="show">

        <transition name="slide-fade">
          <div class="container-edit" v-if="newProject" :class="{hidden: currentProject.id == isActive && editProject == true}">
            <project-edit @send-message="handleProject" v-bind:project-data="currentProject" type="add" />
          </div>
        </transition>

        <transition name="slide-fade">
          <div class="container-edit" v-if="currentProject != {} && editProject == true">
            <project-edit @send-message="handleProject" v-bind:project-data="currentProject" type="edit" :class="{active: currentProject.id == isActive}" />
          </div>
        </transition>

        <transition name="slide-fade">
          <div class="container-edit" v-if="selectedTodo && editTodo == true">
            <todo-edit @todo-edit="handleTodo" v-bind:todo-data="selectedTodo" type="edit" :class="{active: selectedTodo == selectedTodo}" />
          </div>
        </transition>

        <transition name="slide-fade">    
          <div class="container-edit" v-if="newTodo">
            <todo-edit @todo-edit="handleTodo" v-bind:todo-data="currentTodo" type="add" :class="{active: selectedTodo == selectedTodo}" />
          </div>
        </transition>

      </div>
      
      <div class="tasks">

        <div class="container-edit" v-if="currentProject">
          <!-- <transition name="slide-fade"> -->
          <div class="todos" v-for="item in currentProject.todos" :key="item.id" 
                @click="selectTask($event, item)" :class="{active: item == selectedTodo}">

            <todo-item v-bind:todos-data="item" :class="{active: item == selectedTodo}" />

            <div class="active" v-if="item == selectedTodo">
              <button id="del" @click="deleteTodo()">Delete ToDo</button>
            </div>

          </div>
          <!-- </transition> -->
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import ProjectItem from '@/components/ProjectItem.vue'
import ProjectEdit from '@/components/ProjectEdit.vue'
import TodoItem from '@/components/TodoItem.vue'
import TodoEdit from '@/components/TodoEdit.vue'

export default {
  name: 'Home',
  components: {
    ProjectItem, TodoItem, ProjectEdit, TodoEdit
  },
  data() {
    return {
      allData: [{id: 0, name: 'Example project', desc: 'Description of example project', todos: []}, {id: 1, name: 'Another example project', desc: 'Project with some tasks', todos:[
              {id: 0, title: 'Example task', description: 'Active task, medium priority', dueDate: '2020-02-09', priority: 2, status: false},
              {id: 1, title: 'Another example task', description: 'Finished task, high priority', dueDate: '2020-02-06', priority: 1, status: true}]}],
      currentProject: {
        id: null,
        name: '',
        desc: ''
      },
      currentTodo: {
        id: null,
        title: '',
        description: '',
        dueDate: '',
        status: '',
        priority: ''
      },
      currentTodos: null,
      isActive: undefined,
      selectedTodo: null,
      editProject: false,
      newProject: false,
      newTodo: false
    }
  },

  mounted() {
    if (!localStorage.getItem('allData')) {
      localStorage.setItem('allData', JSON.stringify(this.allData));
    } else {
      this.allData = JSON.parse(localStorage.getItem('allData'));
    }
  },

  methods: {

    populateStorage() {
      localStorage.setItem('allData', JSON.stringify(this.allData));
    },

    getStorage: () => {
      console.log('uuu')
      if (!localStorage.getItem('allData')) {
        this.populateStorage();
      }
      this.allData = JSON.parse(localStorage.getItem('allData'));
      return this.allData;
    },

    selectProject: function(event, item) {
      this.selectedTodo = null;
      this.editTodo = false;
      this.newProject = false;
      this.currentProject = item;
      this.isActive = item.id;
      let proIndex = this.allData.findIndex((obj => obj.id == this.currentProject.id));
      let editIndex = this.allData[proIndex].todos.map((item) => {return item.id});
      const index = editIndex.indexOf(this.currentProject.id);
      this.currentTodos = this.allData[proIndex].todos[index];
      return this.allData[proIndex].todos[index];
    },

    selectTask: function(event, item) {
      this.selectedTodo = item;
      this.editProject = false;
      this.newTodo = false;
      this.editTodo = true;
    },

    addProject() {
      this.editProject = false;
      this.editTodo = false;
      this.newProject = true;
      this.newTodo = false;
      this.currentProject = {};
      this.isActive = undefined;
      this.selectedTodo = null;
    },

    handleProject(event, value, type) {
      if (event && value) {
        if (type == 'add') {

          this.allData.push({ id: this.allData.length + 1, 
                              name: this.currentProject.name, 
                              desc: this.currentProject.desc,
                              todos: [] });

          this.populateStorage();

          this.newProject = false;
          return this.allData[this.allData.length - 1];

        } else {
          let objIndex = this.allData.findIndex((obj => obj.id == this.currentProject.id));

          this.allData[objIndex].name = this.currentProject.name;
          this.allData[objIndex].desc = this.currentProject.desc;

          this.populateStorage();

          this.editProject = false;
          return this.allData[this.allData[objIndex]];
        }
      } else {
        if (value == false) { 
          this.newProject = false; 
          this.editProject = false;
        }
      }
    },

    updateProject() {
      this.editProject = true;
      this.newTodo = false;
    },

    deleteProject() {
      let removeIndex = this.allData.map(function(item) { return item.id; })
                      .indexOf(this.currentProject.id);
      ~removeIndex && this.allData.splice(removeIndex, 1);

      this.populateStorage();
    },

    addTodo() {
      this.editProject = false;
      this.editTodo = false;
      this.newTodo = true;
      this.selectedTodo = null;
      this.currentTodo = {};
    },

    updateTodo() {
      this.editTodo = true;
    },

    deleteTodo() {
      let proIndex = this.allData.findIndex((obj => obj.id == this.currentProject.id));
      let removeIndex = this.allData[proIndex].todos.map((item) => {return item.id});
      const index = removeIndex.indexOf(this.selectedTodo.id);
            
      ~removeIndex && this.allData[proIndex].todos.splice(index, 1);
      this.populateStorage();

      this.editTodo = false;
      this.selectedTodo = null;
      this.newTodo = true;
      this.currentTodo = {};
    },

    handleTodo(event, value, type) {
      if (event && value) {
        if (type == 'add') {
          let objIndex = this.allData.findIndex((obj => obj.id == this.currentProject.id));
          this.allData[objIndex].todos.push({ id: this.allData[objIndex].todos.length + 1, 
                                        title: this.currentTodo.title, 
                                        description: this.currentTodo.description,
                                        dueDate: this.currentTodo.dueDate,
                                        priority: this.currentTodo.priority,
                                        status: this.currentTodo.status });

          this.populateStorage();

          this.newTodo = false;
          return this.allData[this.allData[objIndex].todos.length - 1];

        } else {
          let proIndex = this.allData.findIndex((obj => obj.id == this.currentProject.id));
          let objIndex = this.allData.findIndex((obj => obj.id == this.currentProject.id));
          let editIndex = this.allData[proIndex].todos.map((item) => {return item.id});
          const index = editIndex.indexOf(this.selectedTodo.id);
          this.allData[objIndex].todos[index].title = this.selectedTodo.title;
          this.allData[objIndex].todos[index].description = this.selectedTodo.description;
          this.allData[objIndex].todos[index].dueDate = this.selectedTodo.dueDate;
          this.allData[objIndex].todos[index].priority = this.selectedTodo.priority;
          this.allData[objIndex].todos[index].status = this.selectedTodo.status;

          this.populateStorage();

          this.selectedTodo = false;
          return this.allData[this.allData[objIndex]];
        }
      } else {
        if (value == false) { 
          this.newTodo = false; 
          this.editTodo = false;
          this.selectedTodo = null;
        }
      }
    },
  }
}
</script>

<style lang="scss" scoped>

  .slide-fade-enter-active {
    transition: all .8s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-leave-to, .slide-fade-enter
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

  .body {
    font-family: 'Odibee Sans', cursive;
  }
  .container {
    font-family: 'Odibee Sans', cursive;
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: auto auto auto; 
  }
  .projects {
    grid-column: 1;
  }
  .show {
    grid-column: 2;
  }
  .tasks {
    grid-column: 3;
  }
  .active {
    color: white;
    background-color: rgba(28,110,173,1);
    border-radius: .3rem;
    box-shadow: 10px 10px 2px -5px #40bcdb;
  }
  .active-task {
    color: white;
    background-color: rgba(28,110,173,1);
    border-radius: .3rem;
    box-shadow: 10px 10px 2px -5px #40bcdb;
  }
  .hidden {
    visibility: hidden;
  }
  #del {
    background-color: crimson;
    color: white;
    border: .2rem solid black;
    border-radius: .5rem;
  }
  #del:hover {
    background-color: darkred;
    border-color: darkred;
  }
  #add-todo {
    background-color: forestgreen;
    color: white;
    border: .2rem solid black;
    border-radius: .5rem;
  }
  #add-todo:hover {
    background-color: darkgreen;
    border-color: darkgreen;
  }
  #add-pro {
    display: flex;
    justify-self: center;
    align-self: center;
    background-color: rgba(28,110,173,1);
    background-image: url(../assets/buttonplus.png);
    width: 55px;
    height: 55px;
    border: .2rem solid black;
    border-radius: .5rem;
  }
  #add-pro:hover {
    background-color: #40bcdb;
    background-image: url(../assets/buttonplus1.png);
  }
  #edit-pro {
    background-color: rgb(235, 200, 2);
    color: black;
    border: .2rem solid black;
    border-radius: .5rem;
  }
  #edit-pro:hover {
    background-color: #f3e673;
    border-color: #f3e673;
  }
  .pro-btn {
    //float: left;
  }
</style>
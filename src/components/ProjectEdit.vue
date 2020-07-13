<template>
  <div class="">
    <form action="" @submit.prevent="">
      <div class="form-group">
        <label for="title">Title : </label>
        <input type="text" name="title" id="title" v-model="projectData.name" required>
      </div>
      <div class="form-group">
        <label for="desc">Description : </label>
        <textarea name="desc" id="desc" cols="25" rows="3" v-model="projectData.desc" ></textarea>
      </div>
      <div class="form-btns">
        <button id="cancel" @click="newProject(false)">Cancel</button>
        <button id="save" type="submit" @click="newProject(true)">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProjectEdit',
  props: { 
    projectData: Object,
    type: String,
    method: { type: Function } ,
    
  },
  data() {
    return {
      saveProject: false
    }
  },
  mounted() {
    this.$emit('send-message', this.saveProject);
  },
  methods: {
    newProject(saveOrCancel) {
      console.log('uuus'+this.type)
      if (saveOrCancel) {
        this.saveProject = true;
      } else {
        this.saveProject = false;
      }
      this.$emit('send-message', this.saveProject, saveOrCancel, this.type);
    }
  }
}
</script>

<style>
  form {
    font-family: 'Odibee Sans', cursive;
    padding: 1rem;
  }
  .form-group {
    margin: .5rem;
  }
  input {
    font-family: 'Odibee Sans', cursive;
  }
  button {
    font-family: 'Odibee Sans', cursive;
    cursor: pointer;
    margin: .5rem;
    padding: 1rem;
  }
  #cancel {
    background-color: rgba(206, 204, 204, 0.911);
    color: black;
    border: .2rem solid white;
    border-radius: .3rem;
  }
  #cancel:hover {
    background-color: white;
  }
  #save {
    background-color: #333;
    color: white;
    border: .2rem solid black;
    border-radius: .5rem;
  }
  #save:hover {
    background-color: black;
  }
  .form-btns {
    margin: .5rem;
    padding: 1rem;
  }
</style>
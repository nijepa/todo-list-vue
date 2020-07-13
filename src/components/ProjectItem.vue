<template>
  <div class="project-card">
    <h3>Title : <span>{{ projectsData.name }}</span></h3>
    <p>Description : <span>{{ projectsData.desc }}</span></p>
  </div>
</template>

<script>
  export default {
    name: 'ProjectItem',
    props: { projectsData: Object } 
  }
</script>

<style lang="scss" scoped>
  .project-card {
    margin: 1rem;
    padding: 1rem;
    background-color: #40bcdb;
    cursor: pointer;
    -webkit-box-shadow: 10px 10px 2px -5px rgba(28,110,173,1);
    -moz-box-shadow: 10px 10px 2px -5px rgba(28,110,173,1);
    box-shadow: 10px 10px 2px -5px rgba(28,110,173,1);
  }
  .project-card:hover {
    color: white;
    background-color: rgba(28,110,173,1);
    box-shadow: 10px 10px 2px -5px #40bcdb;
  }
</style>
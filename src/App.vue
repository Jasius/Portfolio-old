<template>
  <div id="app">
    <app-navbar></app-navbar>
    <app-header></app-header>
    <app-projects></app-projects>
    <app-forms></app-forms>
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from '@/components/header.vue'
import navbar from '@/components/navbar.vue'
import projects from '@/components/projects.vue'
import footer from '@/components/footer.vue'
import forms from '@/components/forms.vue'
export default {
  components: {
    'app-navbar': navbar,
    'app-header': header,
    'app-projects': projects,
    'app-forms': forms,
    'app-footer': footer
  }
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700);
$font-stack: 'Open Sans',
Helvetica Neue,
Arial,
sans-serif;
$font-secondary: 'Segoe UI',
Helvetica Neue,
Arial,
sans-serif;
$light-blue: #3498db;
  // * {
  //   outline: 2px solid pink;
  //   outline-style: dashed;
  // }
  body {
    margin: 0;
    font-family: $font-stack;
	  color: #fff;
    text-rendering: optimizeLegibility;
  }

a {
	color: #FFC107;
	text-decoration: none;
	transition: all .2s;    
    &:hover {
        color: lighten(#FFC107, 20%)
    }
}
h2 {
	text-align: center;
}
</style>




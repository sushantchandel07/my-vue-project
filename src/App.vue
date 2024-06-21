<template>
  <div id="app">
    <commonHeader></commonHeader>
    <userSignup></userSignup>
    <commonFooter></commonFooter>
  </div>
</template>

<script>


import commonFooter from './components/common/common-footer.vue';
import commonHeader from './components/common/common-header.vue';
import userSignup from './components/user/user-signup.vue';
export default {
   name: 'App',
  components: {
    
    commonFooter,
    commonHeader,
    userSignup
  }
}
</script>



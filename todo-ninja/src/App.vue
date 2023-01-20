<template>
  <v-app class="blue lighten-4">
    <router-view />
  </v-app> 
</template>
<script>
export default{
    name: 'home',
    mounted()
    {
      let user = localStorage.getItem('user-info');
      if(!user)
      {
        this.$router.push({path: '/' })
      }
    }
}
</script>

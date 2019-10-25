<template>
  <div>
      <router-link :to="{ name:'special',params:{ id:list1.id } }" class="sele-router">
          <img :src="list1.pic" alt="">
          <p>{{list1.title}}</p>
          <p>{{list1.descript}}</p>
      </router-link>
  </div>
</template>

<script>
export default {
    props:['list1']
}
</script>

<style>
.sele-router{
  text-decoration: none;
  color: #333
}
</style>
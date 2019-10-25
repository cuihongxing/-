<template>
  <div>
      <router-link :to="{ path:'/detail',query:{ id:list.id } }" tag="p">
        <img :src="list.pic" alt="">
        <p>{{list.name}}</p>
        <p>{{list.characteristic}}</p>
        <p>￥{{list.minPrice}}</p>
      </router-link>
      
  </div>
</template>

<script>
export default {
    props:['list']
}
</script>

<style>

</style>
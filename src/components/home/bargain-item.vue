<template>
  <div>

          <ul>
              <!-- <li> -->
                <router-link :to="{ path:'/detail',query:{ id:newBarain.id } }" tag="li">
                  <img :src="newBarain.pic" alt="">
                  <div class="kanjia-xx">
                    <p>{{newBarain.name}}</p>
                    <p>{{newBarain.characteristic}}</p>
                    <p>
                        <span>￥{{newBarain.minPrice}}.00</span>
                        <span>￥{{newBarain.originalPrice}}.00</span>
                        <span>{{newBarain.stores}}件</span>
                    </p>
                    <p>
                        <span>低价</span>
                        <span>原价</span>
                        <span>限量</span>
                    </p>
                  </div>
                  </router-link>
              <!-- </li> -->
          </ul>
  </div>
</template>

<script>
export default {
  props:['newBarain'],
  
}
</script>

<style>

</style>
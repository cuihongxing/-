<template>
  <div>
      <div>
        <Loogin></Loogin>
        <Banner></Banner>
        <Bargain></Bargain>
        <Sele></Sele>
        <Recomm></Recomm>
      </div>
      
      
  </div>
</template>

<script>

import Banner from '@/views/home/banner'
import Bargain from '@/views/home/bargain'
import Sele from '@/views/home/sele'
import Recomm from '@/views/home/recommend'
import Loogin from '@/views/home/loogin'

export default {
    components: {
        Banner,
        Bargain,
        Sele,
        Recomm,
        Loogin
    }
}
</script>

<style>

</style>
<template>
  <h1>nuxt/vue ver.3</h1>
  <h2>{{ $hello('World') }}</h2>
  <button @click="changeLayout">レイアウト変更</button>
  
  <div>
    <p>{{ count }}</p>
    <button @click="() => inc()">increase</button>
    <button @click="() => dec()">decrease</button>
  </div>

  <button @click="handleClick">Coupon Get</button>
  <LazyCoupon v-if="show" />
  
</template>

<script setup lang="ts">
  const route = useRoute();
  const changeLayout = () => {
    if(route.meta.layout === 'custom'){
      setPageLayout('default');
    }
    else{
      setPageLayout('custom');
    }
  }

  //meta設定
  definePageMeta({
    layout: 'default',//初期レイアウト
    //middleware: 'auth', //ミドルウェア設定
  })

  //コンポーネント遅延読み込みテスト
  const show = ref(false);
  const handleClick = () => {
    show.value = true;
  };

  //composablesから呼び出し
  const { count, inc, dec } = useCounter<number>(1+1);
  //pluginsから呼び出し
  const { $hello } = useNuxtApp<string>();

</script>

<style scoped></style>
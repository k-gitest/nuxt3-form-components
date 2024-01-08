<template>
  <h1>ヘッダーコンポーネント</h1>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">トップ</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/signin">サインイン</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  ul {
    list-style:none;
    display: flex;
  }
  li{
    margin-right: 1rem;
  }
</style>
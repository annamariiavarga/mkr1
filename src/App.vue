<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/admin">Admin</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style>
h1.center, p.center {
  text-align: center;
}
#nav {
  max-width: 200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
}
</style>

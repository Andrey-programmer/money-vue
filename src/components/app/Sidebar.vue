<template>
  <ul class="sidenav app-sidenav open">
    <li
      active-class="active"
      v-for="link of links"
      :key="link"
    >
      <router-link 
        :to="link.url"
        :exact="link.exact"
        class="waves-effect waves-orange pointer"
      >
        {{link.title}}
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          {
            title: 'Счет',
            url: '/',
            exact: true
          },
          {
            title: 'История',
            url: '/history'
          },
          {
            title: 'Планирование',
            url: '/planning'
          },
          {
            title: 'Новая запись',
            url: '/records'
          },
          {
            title: 'Категории',
            url: '/categories'
          }

        ]
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>

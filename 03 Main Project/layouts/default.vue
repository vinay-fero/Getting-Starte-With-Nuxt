<template>
 <div>
   <TheHeader @sidenavToggle="sideBar = !sideBar" />
   <TheSidenav :show="sideBar" @close="sideBar = false"/>
   <nuxt />
 </div>
</template>

<script>
import TheHeader from "~/components/Navigations/TheHeader";
import TheSidenav from "~/components/Navigations/TheSidenav";

export default {
  name: "default",
  components: {
    TheHeader,
    TheSidenav
  },
  data() {
    return {
      sideBar: false
    }
  }
}
</script>

<style>
html {
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
}
</style>

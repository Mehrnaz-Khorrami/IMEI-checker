<template>
  <v-app>
    <!--    <v-app-bar app scroll-behavior="elevate" color="#F1F0E8">-->
    <!--      &lt;!&ndash; Your app bar content here &ndash;&gt;-->
    <!--      <v-toolbar-title>My Application</v-toolbar-title>-->
    <!--    </v-app-bar>-->
    <v-main>
      <!-- The slot will display the content of the pages -->
      <slot></slot>
    </v-main>
  </v-app>
</template>
<script setup></script>

<style scoped lang="css"></style>

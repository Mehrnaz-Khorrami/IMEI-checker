<template>
  <v-card
    class="px-4 pb-4 ma-10"
    elevation="0"
  >
    <v-card-title>
      <h5 class="py-3">
        گوشی موبایل شیائومی Redmi Note 12 Pro :
      </h5>
    </v-card-title>
    <v-card-text>
      <ImeiForm />
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="#578E7E"
        variant="flat"
        width="100%"
      >
        ثبت
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup>
import ImeiForm from "@/components/imei/imeiForm.vue";
</script>

<style scoped lang="css"></style>

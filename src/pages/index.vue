<template>
  <v-row no-gutters>
    <v-col cols="4">
      <ImeiChecker />
    </v-col>
    <v-col cols="8">
      <ImeiTable />
    </v-col>
  </v-row>
</template>

<script setup>
import ImeiTable from "@/components/imei/imeiTable.vue";
import ImeiChecker from "@/components/imei/imeiChecker.vue";
</script>

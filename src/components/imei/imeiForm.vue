<template>
  <v-row no-gutters>
    <v-col cols="12">
      <SharedTextField label="شماره جعبه" />
    </v-col>
    <v-col cols="12">
      <SharedTextField label="سریال نامبر۱" />
    </v-col>
    <v-col cols="12">
      <SharedTextField label="سریال نامبر۲" />
    </v-col>
    <v-col cols="6">
      <input
        id="fileInput"
        ref="fileInput"
        type="file"
        accept=".csv, .txt"
        class="hi"
        style="display: none"
      />
      <v-btn
        color="#89A8B2"
        variant="outlined"
        width="100%"
        class="ml-md-1"
      >
        <label
          id="fileInputLabel"
          for="fileInput"
        >
          انتخاب فایل
        </label>
      </v-btn>
    </v-col>
  </v-row>
</template>
<script setup>
import SharedTextField from "@/components/shared/textField.vue";
import { ref } from "vue";

const fileInput = ref(null);
</script>

<style scoped lang="css">
.hi {
  width: 100%;
}
</style>

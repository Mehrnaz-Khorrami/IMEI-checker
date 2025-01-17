<template>
  <div
    class="pa-5 imeiTable-container"
  >
    <v-card-text>
      <v-data-table
        :headers="headerTable"
        :items="items"
        items-per-page="10"
      >
        <template #[`item.status`]="{ item }">
          <v-icon
            v-if="!item.status"
            color="red"
          >
            mdi-close
          </v-icon>
          <v-icon
            v-else
            color="green"
          >
            mdi-check
          </v-icon>
        </template>
      </v-data-table>
    </v-card-text>
  </div>
</template>
<script setup>
import { ref } from "vue";

// it's use until get the data from backend
const items = ref([
  {
    box: "1",
    productTitle: "هندزفری بلوتوثی انکر مدل SoundCore Life U2i (Upgraded) A3213",
    imei1: "02154548f8e45233",
    imei2: "215wd21D54fd354gs4",
    status: true,
  },
  {
    box: "2",
    productTitle: "گوشی موبایل شیائومی Redmi Note 12 Pro",
    imei1: "dv21xcv21xvsdf21f",
    imei2: "fsd21f321fsd12fs2d",
    status: true,
  },
  {
    box: "3",
    productTitle: "گوشی موبایل شیائومی Redmi 12C",
    imei1: "sd31d62vx3v216v2",
    imei2: "2d1f1231ds12ff1sd31",
    status: true,
  },
  {
    box: "4",
    productTitle: "تبلت مایکروسافت مدل Surface Pro 9–i5",
    imei1: "21fdsvs22s6fd565",
    imei2: "dsfsdf231sf21fs21df1",
    status: false,
  },
  {
    box: "5",
    productTitle: "گوشی موبایل سامسونگ Galaxy A35 5G",
    imei1: "1fds5fsd54sdf21",
    imei2: "5s46ffsdf1s1f321sf231",
    status: false,
  },
  {
    box: "6",
    productTitle: "گوشی موبایل سامسونگ Galaxy A05",
    imei1: "d6f5sd4f53sf45f4s",
    imei2: "231f53sd1fs21fs31fs",
    status: true,
  },
  {
    box: "7",
    productTitle: "گوشی موبایل شیائومی Poco C65",
    imei1: "25d1sf5s3df4s5f4sd",
    imei2: "3f15sd4f5sf4s5f2d",
    status: false,
  },
  {
    box: "8",
    productTitle: "گوشی موبایل شیائومی Redmi Note 13 Pro",
    imei1: "54dsf5dsf3fs56d4f56",
    imei2: "sf65sdf3s2fs6f6s5f",
    status: true,
  },
]);

const headerTable = ref([
  { title: "شماره جعبه", key: "box", align: "start", minWidth: 50 },
  { title: "عنوان محصول", key: "productTitle", align: "start", minWidth: 300 },
  { title: "سریال نامبر۱", key: "imei1", align: "center" },
  { title: "سریال نامبر۲", key: "imei2", align: "center" },
  { title: "وضعیت", key: "status", align: "end" },
]);
</script>
<style lang="css">
.imeiTable-container{
  height: 100vh;
  background-color: #B3C8CF;
}
</style>

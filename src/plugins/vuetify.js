// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { fa } from "vuetify/locale";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme: {
        dark: false, // Set to true if you want a dark theme
        colors: {
          background: '#FFFAEC',
        },
      },
    },
  },
  styles: {
    configFile: "src/styles/settings.scss",
  },
  locale: {
    locale: "fa",
    messages: { fa },
    rtl: {
      fa: true,
    },
  },
});

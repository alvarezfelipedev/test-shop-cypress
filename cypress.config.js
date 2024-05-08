const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: 3, // asegúrate de que esté dentro del objeto de configuración principal
  e2e: {
    setupNodeEvents(on, config) {
      // implementa los listeners de eventos de nodo aquí si es necesario
    },
  },
});

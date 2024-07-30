const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    port: 8888, // Изменение порта на 8888
  },
  transpileDependencies: true,
});

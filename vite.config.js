export default {
    base: '/niniiwork/', // 如果你需要將專案部署在子路徑上，請根據需要設置此屬性
    build: {
      outDir: 'dist', // 打包輸出的文件夾
    },
    server: {
      // 啟動 server 時預設開啟的頁面
      open: 'pages/index.html',
    },
  };
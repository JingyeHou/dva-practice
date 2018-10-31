export default {
    "extraBabelPlugins": [
        [ "import", { "libraryName": "antd", "style": "css" } ],
        ["react-intl", {"messagesDir": "./src/locales/messages"}]
      ],
     "proxy": {
          "/api": {
              "target": "http://jsonplaceholder.typicode.com/",
              "changeOrigin": true,
              "pathRewrite": { "^/api" : "" }
       }
     },
 
 }
 
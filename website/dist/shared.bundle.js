!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var parentJsonpFunction=window.webpackJsonp;window.webpackJsonp=function(chunkIds,moreModules){for(var moduleId,chunkId,i=0,callbacks=[];i<chunkIds.length;i++)chunkId=chunkIds[i],installedChunks[chunkId]&&callbacks.push.apply(callbacks,installedChunks[chunkId]),installedChunks[chunkId]=0;for(moduleId in moreModules)modules[moduleId]=moreModules[moduleId];for(parentJsonpFunction&&parentJsonpFunction(chunkIds,moreModules);callbacks.length;)callbacks.shift().call(null,__webpack_require__);return moreModules[0]?(installedModules[0]=0,__webpack_require__(0)):void 0};var installedModules={},installedChunks={3:0};__webpack_require__.e=function(chunkId,callback){if(0===installedChunks[chunkId])return callback.call(null,__webpack_require__);if(void 0!==installedChunks[chunkId])installedChunks[chunkId].push(callback);else{installedChunks[chunkId]=[callback];var head=document.getElementsByTagName("head")[0],script=document.createElement("script");script.type="text/javascript",script.charset="utf-8",script.async=!0,script.src=__webpack_require__.p+""+chunkId+"."+({0:"sayA",1:"sayB"}[chunkId]||chunkId)+".bundle.js",head.appendChild(script)}},__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p=""}([]);
//# sourceMappingURL=shared.bundle.js.map
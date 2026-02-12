const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("gridMath", {});

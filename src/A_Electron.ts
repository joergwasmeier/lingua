require("./index.html");

var app = require('app');
var BrowserWindow = require('browser-window');
var mainWindow:Electron.BrowserWindow = null;

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    title:"Lingua",
    height: 600,
    width: 800
  });

  mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});
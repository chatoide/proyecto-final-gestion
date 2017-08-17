'use strict';
const { app, BrowserWindow } = require('electron');
let window;
app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

function createWindow() {
	window = new BrowserWindow({
		height: 768,
		width: 1024,
	});
	window.loadURL("file://"+__dirname+"/pages/index.html");
	//window.webContents.openDevTools();

	window.on('closed', () => {
		window = null
	});
}

exports.openWindow = () => {
	let window = new BrowserWindow({
		height: 300,
		width: 600,
	});
	window.loadURL("file://"+__dirname+"/pages/new.html");
}

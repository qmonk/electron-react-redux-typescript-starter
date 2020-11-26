import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as url from "url";

let mainWindow: Electron.BrowserWindow | null;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: "fff",
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false,
            contextIsolation: false,
        },
    });

    if (process.env.NODE_ENV !== "production") {
        mainWindow.loadURL("http://localhost:4000");
    } else {
        mainWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, "index.html"),
                protocol: "file:",
                slashes: true,
            })
        );
    }

    mainWindow.on("closed", () => {
        mainWindow = null;
    });
};

app.on("ready", createWindow);
app.allowRendererProcessReuse = true;

'use strict';

var vscode = require('vscode');
var path = require('path')

function activate(context) {
    var cmd = vscode.commands.registerCommand('extension.openFileFolder', function (e) {
        let folderName = path.dirname(e._path);
        let folderUrl = vscode.Uri.file(folderName)
        vscode.commands.executeCommand("vscode.openFolder", folderUrl, false)
    });

    context.subscriptions.push(cmd);
}

exports.activate = activate;

function deactivate() {

}

exports.deactivate = deactivate;
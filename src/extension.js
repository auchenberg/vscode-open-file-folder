'use strict';

var vscode = require('vscode');
var path = require('path')

function activate(context) {
    var cmd = vscode.commands.registerCommand('extension.openFileFolder', function (e) {
        const activeTextEditor = vscode.window.activeTextEditor;
        let file = activeTextEditor.document.uri.path;
        let folderName = path.dirname(file);
        let folderUrl = vscode.Uri.file(folderName);
        vscode.commands.executeCommand("vscode.openFolder", folderUrl, true);
    });

    context.subscriptions.push(cmd);
}

exports.activate = activate;

function deactivate() {

}

exports.deactivate = deactivate;
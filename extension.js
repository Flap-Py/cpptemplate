// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');
var workspace = vscode.workspace;
var fs = require('fs')

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "cpptemplate" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode.commands.registerCommand('extension.newcpp', function () {
        console.log('Hello World!');
        var filename = __dirname + "/newTemp.cpp";
        console.log(filename);
        fs.readFile(filename, 'utf8', function(err, data) {
            if (err){
                vscode.window.showInformationMessage("Template File Not Found");
                workspace.openTextDocument({language: 'cpp'}).then(doc=>{
                    vscode.window.showTextDocument(doc);
                });
            }
            else {
                console.log(data);
                workspace.openTextDocument({language: 'cpp', content: data}).then(doc=>{
                    vscode.window.showTextDocument(doc);
                }); 
            }
        });

    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
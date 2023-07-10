const vscode = require('vscode');
const opn = require('opn');

function activate(context) {
  let disposable = vscode.commands.registerCommand('extension.searchOnGoogle', () => {
    const panel = vscode.window.createWebviewPanel(
      'searchOnGoogle',
      'Google Search',
      vscode.ViewColumn.One,
      {}
    );

    const searchQuery = vscode.window.showInputBox({
      placeHolder: 'Enter your search query'
    });

    searchQuery.then(query => {
      if (query) {
        const searchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        panel.webview.html = `<iframe src="${searchURL}" frameborder="0"></iframe>`;
      }
    });
  });

  context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
  activate,
  deactivate
};

//chromeとbrowserの名前空間対策
if (!("browser" in window)) {
    window.browser = chrome;
}

//設定されているショートカットをすべて出力する。
var gettingAllCommands = browser.commands.getAll();
gettingAllCommands.then((commands) => {
    for (let command of commands) {
        console.log(command);
    }
});


//２つ目のショートカットを試してみる
browser.commands.onCommand.addListener(function (command) {
    if (command === "command_highlightNow") {
        console.log("いえーい");
    }
});


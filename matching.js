var matchArray = {
    "file": {
        "a": "test\\a.txt",
        "test": "test"
    },
    "website": {
        "hko": "https://www.hko.gov.hk/en/index.html"
    }
};


function entryMatching(argString) {
    // var wshShell = new ActiveXObject("WScript.shell");
    if (argString in matchArray["file"]) {
        wshShell.run(matchArray["file"][argString]);
        return;
    }
    if (argString in matchArray["website"]) {
        wshShell.run(matchArray["website"][argString]);
        return;
    }
}


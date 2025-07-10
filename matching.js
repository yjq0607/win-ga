var matchArray = {
    "file": {
        "cmd": "cmd",
        "img": "img"
    },
    "website": {
        "hko": "https://www.hko.gov.hk/en/index.html"
    }, 
    "webq": {
        "utd": "https://www.uptodate.com/contents/search?search=%%SEARCH_STRING%%",
        "dr": "https://www.mchk.org.hk/english/list_register/list.php?regno=&englishname=%%SEARCH_STRING%%&chinesename=&address=&qualification=&qual_year=&type=A&quallimit=&matchAllCondition=Y&Search=Search&advancedsearch=Y"
    }
};


function entryMatching(argString) {
    if (argString in matchArray["file"]) {
        wshShell.run(matchArray["file"][argString]);
        return;
    }
    if (argString in matchArray["website"]) {
        wshShell.run(matchArray["website"][argString]);
        return;
    }

    if (commandEntry(argString)) { return };

    if (webSearch(argString)) { return };
}

function commandEntry(argString) {
    switch (argString) {
        case "reboot":
            wshShell.run(matchArray["file"]["root"] + "/main.hta");
            window.close();
            return true;

        case "pds":
            return true;

    }
}


function webSearch(argString) {
    var v = argString.split(" ");
    if (v[0] in matchArray["webq"]) {
        wshShell.run(matchArray["webq"][v.shift()].replace("%%SEARCH_STRING%%", v.join("%20")));
        return true;
    }
}


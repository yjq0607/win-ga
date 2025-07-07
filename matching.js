var matchArray = {
    'file': {
        'qpic': 'qpic address'
    },
    'website': {
        'hko': 'hko address'
    }
};


function entryMatching(argString) {
    alert("entryMatching called")
    if (argString in matchArray["file"]) {
        alert(matchArray["file"][argString]);
        return;
    }
    if (argString in matchArray["website"]) {
        alert(matchArray["website"][argString]);
        return;
    }
}


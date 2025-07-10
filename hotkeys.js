function keyPress(e) {
    var eObj = window.event ? event : e

    if (eObj.keyCode === 191) {
        // "/"
        eObj.preventDefault();
        setFocus();
    };

    if (eObj.keyCode === 68 && eObj.altKey && eObj.shiftKey) {
        // shift alt d
        eObj.preventDefault();
        wshShell.run('powershell -command "& { Get-Date -Format \'yyyyMMdd_hhmmss\' | CLIP }"', 0, false);
    }

    if (eObj.keyCode === 83 && eObj.ctrlKey) {
        // ctrl s
        eObj.preventDefault();
        wshShell.run('powershell -executionpolicy bypass -file save_image.ps1"', 0, false);
        alert("Image Saved!");
    }
}


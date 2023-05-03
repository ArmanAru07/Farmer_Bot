// set Excerscise time in local storage.
const setLocalTherapyTime = (time) => {

    const practiceInfo = JSON.parse(localStorage.getItem("Practice Info"));

    // If Practice info exist, first time there will be no object in local storage.
    // else make an object first then put key.
    if (practiceInfo) {

        // if "excercise time" exist in local storage object", not exist then else condition
        if (practiceInfo["therapyTime"]) {
            practiceInfo["therapyTime"] = practiceInfo["therapyTime"] + time;
            localStorage.setItem("Practice Info", JSON.stringify(practiceInfo));
        }
        else {
            practiceInfo["therapyTime"] = time
            localStorage.setItem("Practice Info", JSON.stringify(practiceInfo));
        }
    }

    // Make a object then put key.
    else {
        localStorage.setItem("Practice Info", JSON.stringify({ therapyTime: time }));
    }
}


// set Break time local storage.
const setbreakTimeLocal = (time) => {

    const practiceInfo = JSON.parse(localStorage.getItem("Practice Info"));

    // If Practice info exist, first time there will be no object in local storage.
    // else make an object first then put key.
    if (practiceInfo) {
        if (practiceInfo["breakTime"]) {
            practiceInfo["breakTime"] = practiceInfo["breakTime"] + time;
            localStorage.setItem("Practice Info", JSON.stringify(practiceInfo));
        }
        else {
            practiceInfo["breakTime"] = time
            localStorage.setItem("Practice Info", JSON.stringify(practiceInfo));
        }

    }
    else {
        localStorage.setItem("Practice Info", JSON.stringify({ breakTime: time }));
    }
}


// Set progress time in local storage time.
const setProgressTimeLocal = (time) => {

    const practiceInfo = JSON.parse(localStorage.getItem("Practice Info"));

    // If Practice info exist, first time there will be no object in local storage.
    // else make an object first then put key.
    if (practiceInfo) {
        if (practiceInfo["progressTime"]) {
            practiceInfo["progressTime"] = time;
            localStorage.setItem("Practice Info", JSON.stringify(practiceInfo));
        }
        else {
            practiceInfo["progressTime"] = time
            localStorage.setItem("Practice Info", JSON.stringify(practiceInfo));
        }
    }
    else {
        localStorage.setItem("Practice Info", JSON.stringify({ progressTime: time }));
    }
}

// Get full local storage.
const getLocalStorage = () => {

    const getLocalObject = JSON.parse(localStorage.getItem("Practice Info"));

    // If Practice info exist, first time there will be no object in local storage.
    if (getLocalObject) {
        const localTherapyTime = getLocalObject["therapyTime"];
        const breakTime = getLocalObject["breakTime"];
        const progressTime = getLocalObject["progressTime"];
        return {
            localTherapyTime: localTherapyTime,
            breakTime: breakTime,
            progressTime: progressTime
        }
    }

}


// Auto reload function.
const clearLocalStorage = () => {
    localStorage.removeItem("Practice Info");
    // page relaod by function
    document.location.reload();
}

export { setLocalTherapyTime, getLocalStorage, setbreakTimeLocal, setProgressTimeLocal, clearLocalStorage }
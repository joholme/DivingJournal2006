
               var diver1_total_time;
var diver2_total_time;
var diver3_total_time;
var diver1_buttom_time;
var diver2_buttom_time;
var diver3_buttom_time;
var diver1_ascension_time;
var diver2_ascension_time;
var diver3_ascension_time;
//Total dykketid diver1
$(document).on("click", "#<%=D1LeftSurfaceButton.ClientID %>", function (evt) {
    clearInterval(diver1_total_time);
    let min = 0;
    let sec = 0;
    let time = undefined;
    diver1_total_time = setInterval(function () { myTimer() }, 1000);
                    
    function myTimer() {
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
        }
        time = (min ? (min > 9 ? min : "0" + min) : "00") + ":" + (sec > 9 ? sec : "0" + sec);
        $("#<%=D1totalDivingTime.ClientID %>").val(time);
    }
                    
});
$(document).on("click", "#<%=D1reachedSurfaceBtn.ClientID %>", function (evt) {
    clearInterval(diver1_total_time);
                    
});
//Total dykketid diver2
$(document).on("click", "#<%=D2LeftSurfaceButton.ClientID %>", function (evt) {
    clearInterval(diver2_total_time);
    let min = 0;
    let sec = 0;
    let time = undefined;
    diver2_total_time = setInterval(function () { myTimer() }, 1000);
    function myTimer() {
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
        }
        time = (min ? (min > 9 ? min : "0" + min) : "00") + ":" + (sec > 9 ? sec : "0" + sec);
        $("#<%=D2totalDivingTime.ClientID %>").val(time);
    }
});
$(document).on("click", "#<%=D2reachedSurfaceBtn.ClientID %>", function (evt) {
    clearInterval(diver2_total_time);
});
//Total dykketid diver3
$(document).on("click", "#<%=D3LeftSurfaceButton.ClientID %>", function (evt) {
    clearInterval(diver3_total_time);
    let min = 0;
    let sec = 0;
    let time = undefined;
    diver3_total_time = setInterval(function () { myTimer() }, 1000);
    function myTimer() {
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
        }
        time = (min ? (min > 9 ? min : "0" + min) : "00") + ":" + (sec > 9 ? sec : "0" + sec);
        $("#<%=D3totalDivingTime.ClientID %>").val(time);
    }
});
$(document).on("click", "#<%=D3reachedSurfaceBtn.ClientID %>", function (evt) {
    clearInterval(diver3_total_time);
});
//Bunntid diver1
$(document).on("click", "#<%=D1LeftSurfaceButton.ClientID %>", function (evt) {
    clearInterval(diver1_buttom_time);
    let min = 0;
    let sec = 0;
    let time = undefined;
    diver1_buttom_time = setInterval(function () { myTimer() }, 1000);
    function myTimer() {
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
        }
        time = (min ? (min > 9 ? min : "0" + min) : "00") + ":" + (sec > 9 ? sec : "0" + sec);
        $("#<%=D1bottomTime.ClientID %>").val(time);
    }
});
$(document).on("click", "#<%=D1leftBottom_TimeButton.ClientID %>", function (evt) {
    clearInterval(diver1_buttom_time);
});
//Bunntid diver2
$(document).on("click", "#<%=D2LeftSurfaceButton.ClientID %>", function (evt) {
    clearInterval(diver2_buttom_time);
    let min = 0;
    let sec = 0;
    let time = undefined;
    diver2_buttom_time = setInterval(function () { myTimer() }, 1000);
    function myTimer() {
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
        }
        time = (min ? (min > 9 ? min : "0" + min) : "00") + ":" + (sec > 9 ? sec : "0" + sec);
        $("#<%=D2bottomTime.ClientID %>").val(time);
    }
});
$(document).on("click", "#<%=D2leftBottom_TimeButton.ClientID %>", function (evt) {
    clearInterval(diver2_buttom_time);
});
//Bunntid diver3
$(document).on("click", "#<%=D3LeftSurfaceButton.ClientID %>", function (evt) {
    clearInterval(diver3_buttom_time);
    let min = 0;
    let sec = 0;
    let time = undefined;
    diver3_buttom_time = setInterval(function () { myTimer() }, 1000);
    function myTimer() {
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
        }
        time = (min ? (min > 9 ? min : "0" + min) : "00") + ":" + (sec > 9 ? sec : "0" + sec);
        $("#<%=D3bottomTime.ClientID %>").val(time);
    }
});
$(document).on("click", "#<%=D3leftBottom_TimeButton.ClientID %>", function (evt) {
    clearInterval(diver3_buttom_time);
});
//Oppstigningstid diver1
$(document).on("click", "#<%=D1leftBottom_TimeButton.ClientID %>", function (evt) {
    clearInterval(diver1_ascension_time);
    let min = 0;
    let sec = 0;
    let time = undefined;
    diver1_ascension_time = setInterval(function () { myTimer() }, 1000);
    function myTimer() {
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
        }
        time = (min ? (min > 9 ? min : "0" + min) : "00") + ":" + (sec > 9 ? sec : "0" + sec);
        $("#<%=D1ascensionTime.ClientID %>").val(time);
    }
});
$(document).on("click", "#<%=D1reachedSurfaceBtn.ClientID %>", function (evt) {
    clearInterval(diver1_ascension_time);
});
//Oppstigningstid diver2
$(document).on("click", "#<%=D2leftBottom_TimeButton.ClientID %>", function (evt) {
    clearInterval(diver2_ascension_time);
    let min = 0;
    let sec = 0;
    let time = undefined;
    diver2_ascension_time = setInterval(function () { myTimer() }, 1000);
    function myTimer() {
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
        }
        time = (min ? (min > 9 ? min : "0" + min) : "00") + ":" + (sec > 9 ? sec : "0" + sec);
        $("#<%=D2ascensionTime.ClientID %>").val(time);
    }
});
$(document).on("click", "#<%=D2reachedSurfaceBtn.ClientID %>", function (evt) {
    clearInterval(diver2_ascension_time);
});
//Oppstigningstid diver3
$(document).on("click", "#<%=D3leftBottom_TimeButton.ClientID %>", function (evt) {
    clearInterval(diver3_ascension_time);
    let min = 0;
    let sec = 0;
    let time = undefined;
    diver3_ascension_time = setInterval(function () { myTimer() }, 1000);
    function myTimer() {
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
        }
        time = (min ? (min > 9 ? min : "0" + min) : "00") + ":" + (sec > 9 ? sec : "0" + sec);
        $("#<%=D3ascensionTime.ClientID %>").val(time);
    }
});
$(document).on("click", "#<%=D3reachedSurfaceBtn.ClientID %>", function (evt) {
    clearInterval(diver3_ascension_time);
});
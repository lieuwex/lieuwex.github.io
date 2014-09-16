var birthDate = new Date(1998, 8, 18).getTime();

$(function () {
   "use strict";
   
    setInterval(function () {
        var age = Math.floor((new Date().getTime() - birthDate) / 31556952000);
        $("span#age").text(age);
    }, 1000);
});
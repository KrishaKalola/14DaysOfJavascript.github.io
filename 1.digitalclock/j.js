function updateTime(){
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var secands = dateTime.getSeconds();
    var am_or_pm = document.getElementById("am-or-pm");
    
    if(hours >= 12){
        am_or_pm.innerHTML = "PM";
    }else{
        am_or_pm.innerHTML = "AM";
    }

    if(hours>12){
        hours = hours-12;
    }
    hours = hours<10? "0" + hours : hours;
    minutes = minutes<10? "0" + minutes : minutes;
    secands = secands<10? "0" + secands : secands;

    
    document.getElementById("hours").innerHTML= hours;
    document.getElementById("minutes").innerHTML= minutes;
    document.getElementById("secands").innerHTML= secands;
}

setInterval(updateTime, 1000);
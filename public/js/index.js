/*function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction2() {
    var x = document.getElementById("myDIV2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}*/

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(function () { 
    
    $("#body-right").scroll(function () {
        if ($(this).scrollTop() > 300 && $(this).scrollTop() < 600) { 
            $('#body-left').css('background-image', 'url(purdue-4.png)');
            
            if (screen.width > 2000) {
                $('#body-left').css('background-image', 'url(purdue-5.png)');
            }
            
            if (screen.width < 2000 && screen.width > 1750) {
                $('#body-left').css('background-image', 'url(purdue-5.png)');
            }
            
        } else if ($(this).scrollTop() > 600 && $(this).scrollTop() < 1750) {
            $('#body-left').css('background-image', 'url(indiana-3.png)');
            
            if (screen.width > 2000 ) {
                $('#body-left').css('background-image', 'url(indiana-1.png)');
            }
            
            if (screen.width < 2000 && screen.width > 1750) {
                $('#body-left').css('background-image', 'url(indiana-1.png)');
            }
            
        } else if ($(this).scrollTop() > 1750 && $(this).scrollTop() < 4050) {
            $('#body-left').css('background-image', 'url(rocket.png)');
            
        } else if ($(this).scrollTop() > 4050 && $(this).scrollTop() < 4950) {
            $('#body-left').css('background-image', 'url(scholarships.jpg)');
            
        } else if ($(this).scrollTop() > 4950 && $(this).scrollTop() < 11050) {
            $('#body-left').css('background-image', 'url(indiana-4.png)');
            
            if (screen.width > 2000) {
                $('#body-left').css('background-image', 'url(indiana.png)');
            }
            
            if (screen.width < 2000 && screen.width > 1750) {
                $('#body-left').css('background-image', 'url(indiana.png)');
            }
            
        } else if ($(this).scrollTop() > 11050 && $(this).scrollTop() < 14400) {
            $('#body-left').css('background-image', 'url(security-1.png)');
            
            if (screen.width > 2000) {
                $('#body-left').css('background-image', 'url(security.png)');
            }
            
            if (screen.width < 2000 && screen.width > 1750) {
                $('#body-left').css('background-image', 'url(security.png)');
            }
            
        } else if ($(this).scrollTop() > 14400) {
            $('#body-left').css('background-image', 'url(bulbs-1.png)');
            
            if (screen.width > 2000) {
                $('#body-left').css('background-image', 'url(bulbs.jpg)');
            }
            
            if (screen.width < 2000 && screen.width > 1750) {
                $('#body-left').css('background-image', 'url(bulbs.jpg)');
            }
            
        } else if ($(this).scrollTop() < 300 ) {
            $('#body-left').css('background-image', 'url(purdue-4.png)');
            
            if (screen.width > 2000) {
                $('#body-left').css('background-image', 'url(purdue-5.png)');
            }
            
            if (screen.width < 2000 && screen.width > 1750) {
                $('#body-left').css('background-image', 'url(purdue-5.png)');
            }
            
        } else {
            
        }
    })
});

$(function () {
    $("#body-right").window(function () {
        if ($(this).offsetTop() > 300 && $(this).scrollTop() < 600) { 
            $('#body-left').css('background-image', 'url(purdue-1.png)');
            console.log(distance);
        } else if ($(this).offsetTop() < 300 ) {
            $('#body-left').css('background-image', 'url(purdue-4.png)');
        } else if ($(this).offsetTop() > 600 && $(this).scrollTop() < 2000) {
            $('#body-left').css('background-image', 'url(indiana-3.png)');
        } else if ($(this).offsetTop() > 2000 && $(this).scrollTop() < 4200) {
            $('#body-left').css('background-image', 'url(rocket.png)');
        } else if ($(this).offsetTop() > 4200 && $(this).scrollTop() < 5200) {
            $('#body-left').css('background-image', 'url(scholarships.jpg)');
        } else if ($(this).offsetTop() > 5200 && $(this).scrollTop() < 9000) {
            $('#body-left').css('background-image', 'url(indiana-4.png)');
        } else if ($(this).offsetTop() > 9000 && $(this).scrollTop() < 14200) {
            $('#body-left').css('background-image', 'url(security-1.png)');
        } else if ($(this).offsetTop() > 14300) {
            $('#body-left').css('background-image', 'url(bulbs.jpg)');
        } else {
            
        }
    })
});



/*var distance = $('#experience').offset().top;

$('#body-right').scroll(function() {
    if ( $(this).scrollTop() >= distance ) {
        console.log('is in top');
        $('#body-left').css('background-image', 'url(nature-1.jpg)');
        
    } else {
        console.log('is not in top');
        //$('#body-left').css('background-image', 'url(nature-2.jpg)');
    }
});

var distance2 = $('#grants').offset().top;

$('#body-right').scroll(function() {
    if ( $(this).scrollTop() >= distance2 ) {
        console.log('is in top');
        $('#body-left').css('background-image', 'url(nature-2.jpg)');
        
    } else {
        console.log('is not in top');
        //$('#body-left').css('background-image', 'url(nature-2.jpg)');
    }
});

var distance3 = $('#courses').offset().top;

$('#body-right').scroll(function() {
    if ( $(this).scrollTop() >= distance3 ) {
        console.log('is in top');
        $('#body-left').css('background-image', 'url(nature-.jpg)');
        
    } else {
        console.log('is not in top');
        //$('#body-left').css('background-image', 'url(nature-2.jpg)');
    }
});*/

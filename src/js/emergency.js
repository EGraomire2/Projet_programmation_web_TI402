window.onload=function() {
    button1 = document.getElementById("button1");
    button2 = document.getElementById("button2");
    button3 = document.getElementById("button3");
    button4 = document.getElementById("button4");

    button1.addEventListener("click", function() {
        button1.style.backgroundColor = "green";
        button1.style.color = "white";
        button1.innerHTML = "Clicked!";
        setTimeout(function() {
            button1.style.backgroundColor = "";
            button1.style.color = "";
            button1.innerHTML = "Button 1";
        }, 2000);
    });

    button2.addEventListener("click", function() {
        button2.style.backgroundColor = "green";
        button2.style.color = "white";
        button2.innerHTML = "Clicked!";
        setTimeout(function() {
            button2.style.backgroundColor = "";
            button2.style.color = "";
            button2.innerHTML = "Button 2";
        }, 2000);
    });

    button3.addEventListener("click", function() {
        button3.style.backgroundColor = "green";
        button3.style.color = "white";
        button3.innerHTML = "Clicked!";
        setTimeout(function() {
            button3.style.backgroundColor = "";
            button3.style.color = "";
            button3.innerHTML = "Button 3";
        }, 2000);
    });

    button4.addEventListener("click", function() {
        button4.style.backgroundColor = "green";
        button4.style.color = "white";
        button4.innerHTML = "Clicked!";
        setTimeout(function() {
            button4.style.backgroundColor = "";
            button4.style.color = "";
            button4.innerHTML = "Button 4";
        }, 2000);
    });
}
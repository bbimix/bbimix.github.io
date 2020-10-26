$(document).ready(function () {
    var count = 0;
    // $("#images img").mouseover(function () {
    //     $(this).stop().fadeTo("slow", 0);
    // });
    // $("#images img").mouseout(function () {
    //     $(this).stop().fadeTo("slow", 1)
    // });
    $("#switch").click(function () {
        count++;
        // let color = $("body").css("backgroundColor");
        if (count % 2 == 0) {
            $("#switch1").stop().fadeOut(1500);
            $("#switch2").stop().fadeOut(500);
        } else {
            $("#switch1").stop().fadeIn(500);
            $("#switch2").stop().fadeIn(1500);
        }
    });

    //style dark and light.
    $("#switch1").click(function () {
        $("body").css("backgroundColor", "black");
        $("#nav").css("background-color", "rgba(0, 0, 0, 0.7)");
        $("#navmenu").css("background-color", "rgba(0, 0, 0, 0.7)");
        $("#footer1").css("background-color", "rgb(30,30,30)");
        $(".ftr").css("color", "black");
        $(".imagePartContainer").css("background-color", "black");
        $("#nav a").hover(function (){
            $("#nav a").css("color", "white");
        });
    });
    $("#switch2").click(function () {
        $("body").css("backgroundColor", "white");
        $("#nav").css("background-color", "rgba(255, 255, 255, 0.7)");
        $("#navmenu").css("background-color", "rgba(255, 255, 255, 0.7)");
        $("#footer1").css("background-color", "black");
        $(".ftr").css("color", "white");
        $(".imagePartContainer").css("background-color", "white");
        $("#nav a:hover").css("color", "black");
    });

    //THE bbimix
    $(window).scroll(function () {
        // $(".ftr").css({opacity:0.005*(-1800+$(window).scrollTop())})
        var footerHeight = $("#footer1").height();
        if ($("#footer1").offset().top - $(window).scrollTop() < $(window).height() - $("#footer1").height() + 150) {
            $(".ftr").css({opacity: 1})
        } else {
            $(".ftr").css({opacity: 0})
        }

    })


    //加载完成后再执行 否则加载完成前会找不到DOM元素
    $(document).ready(function () {
        const adidas = document.querySelector(".adidas");
        const navmenu = document.querySelector(".navmenu");
        const menuli = document.querySelectorAll(".navmenu li");
        adidas.addEventListener("click", () => {
            //点击三条滑出菜单栏。
            adidas.classList.toggle("active");
            navmenu.classList.toggle("open");

            menuli.forEach((item, index) => {
                if (item.style.animation) {
                    item.style.animation = "";
                } else {
                    item.style.animation = `0.3s ease-in slipIn forwards ${index * 0.2 + 0.5}s`;
                }
            });
        })

    });
})
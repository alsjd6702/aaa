gsap.to(".intro_detail_position p:first-child",{
    opacity: 1,
    y: -30,
    scrollTrigger: {
        trigger: ".intro_detail_position p:first-child",
        // markers: true,
        start: "top 45%",
        end: "bottom 50%",
        toggleActions: "play pause resume reverse",
        scrub: 2,
    },
});
gsap.to(".intro_detail_position p:nth-child(2)",{
    opacity: 1,
    y: -30,
    scrollTrigger: {
        trigger: ".intro_detail_position p:nth-child(2)",
        // markers: true,
        start: "top 46%",
        end: "bottom 51%",
        toggleActions: "play pause resume reverse",
        scrub: 2,
    },
});
gsap.to(".intro_detail_position p:nth-child(3)",{
    opacity: 1,
    y: -30,
    scrollTrigger: {
        trigger: ".intro_detail_position p:nth-child(3)",
        // markers: true,
        start: "top 47%",
        end: "bottom 52%",
        toggleActions: "play pause resume reverse",
        scrub: 2,
    },
});
gsap.to(".intro_detail_position p:nth-child(4)",{
    opacity: 1,
    y: -30,
    scrollTrigger: {
        trigger: ".intro_detail_position p:nth-child(4)",
        // markers: true,
        start: "top 48%",
        end: "bottom 53%",
        toggleActions: "play pause resume reverse",
        scrub: 2,
    },
});
gsap.to(".intro_detail_position p:nth-child(5)",{
    opacity: 1,
    y: -30,
    scrollTrigger: {
        trigger: ".intro_detail_position p:nth-child(5)",
        // markers: true,
        start: "top 49%",
        end: "bottom 54%",
        toggleActions: "play pause resume reverse",
        scrub: 2,
    },
});

gsap.to(".logo",{
    opacity: 0,
    scrollTrigger: {
        trigger: ".logo",
        // markers: true,
        start: "2000% 60%",
        end: "6500% 20%",
        toggleActions: "play pause resume reverse",
        scrub: 2,
    },
});

$(function(){
    $(".planned .class_img ul li").hover(function(){
        let i = $(this).index();
        console.log(i);
        $(".planned .class_title").css("opacity","0");        
        $(".planned .desc_hidden > div").css("opacity","0");
        $(".planned .desc_hidden > div").eq(i).css("opacity","1");
        $(".class .class_txt").css("background-size","cover").css("background-repeat","no-repeat").css("background-position","center");
        if(i == 0){
            $(".planned .class_txt").css("background-image","url(Planet_images/yoga.jpg)");
        } else if(i == 1){
            $(".planned .class_txt").css("background-image","url(Planet_images/camera_master.jpg)");
        } else if(i == 2){
            $(".planned .class_txt").css("background-image","url(Planet_images/fitness.png)");
        }        
    }, function(){
        $(".planned .class_txt").css("background-image","none");
        $(".planned .class_title").css("opacity","1");        
        $(".planned .desc_hidden > div").css("opacity","0");

    });
});

$(function(){
    $(".decided .class_img ul li").hover(function(){
        let i = $(this).index();
        console.log(i);
        $(".decided .class_title").css("opacity","0");        
        $(".decided .desc_hidden > div").css("opacity","0");
        $(".decided .desc_hidden > div").eq(i).css("opacity","1");
        $(".class .class_txt").css("background-size","cover").css("background-repeat","no-repeat").css("background-position","center");
        if(i == 0){
            $(".decided .class_txt").css("background-image","url(Planet_images/running_3km.jpg)");
        } else if(i == 1){
            $(".decided .class_txt").css("background-image","url(Planet_images/dancing.jpg)");
        } else if(i == 2){
            $(".decided .class_txt").css("background-image","url(Planet_images/swimming.jpg)");
        }
    }, function(){
        $(".decided .class_txt").css("background-image","none");
        $(".decided .class_title").css("opacity","1");        
        $(".decided .desc_hidden > div").css("opacity","0");

    });
});

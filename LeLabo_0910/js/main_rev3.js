$(function(){
    $(".content .btn > div div").eq(0).css("top","-30px").css("color","#e5e5e5");
    $(".content .btn > div div a").eq(0).css("opacity","1");
    $(".content .btn > div").hover(function(){
        let i = $(this).index();
        console.log(i);
        $(".content .btn > div div").css("top","0").css("color","#8e8e8c");
        $(".content .btn > div div a").css("opacity","0");
        $(".content .btn > div div").eq(i).css("top","-30px").css("color","#e5e5e5");
        $(".content .btn > div div a").eq(i).css("opacity","1");
    });
});

$(function(){
    $(".content .main p").eq(0).css("z-index","2");
    $(".content .btn > div").hover(function(){
        let i = $(this).index();
        $(".content .main p").css("z-index","1");
        $(".content .main p").eq(i).css("z-index","3");
    });
});
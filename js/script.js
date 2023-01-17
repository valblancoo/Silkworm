$(document).ready(function(){
 
    $("#btn-menu").click(function(){
        if($(".btn-menu span").attr("class")== "fa fa-bars"){
           
            $(".btn-menu span").removeClass("fa fa-bars").addClass("fa fa-times");
            $(".fullMenu").css({"left":"0"});
            $(".fullMenu").css({"display":"block"});
       
        }else{
     
            $(".btn-menu span").removeClass("fa fa-times").addClass("fa fa-bars");
            $(".fullMenu").css({"left":"-100%"});
            $(".fullMenu").css({"display":"none"});
       
        }
    });
     
    $(".mainMenu li").click(function(){
        $(".fullMenu").css({"display":"none"});
        $(".btn-menu span").removeClass("fa fa-times").addClass("fa fa-bars");
        
    });
     
    });
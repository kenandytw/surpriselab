window.onload = function() {
    // short timeout
    setTimeout(function() {
        $(document.body).scrollTop(0);
    }, 15);
};

var i = 0,
    x = 0,
    lastScrollTop = 0;

//scroll up or down
//$(window).scroll(function(event){
//    var st = $(this).scrollTop();
//    if (st > lastScrollTop){
//        // downscroll code
//    } else {
//        // upscroll code
//    }
//    lastScrollTop = st;
//});

// 星球、點旋轉function

dotR = 72,
planetR = 1800;

function dotRotate(){
    
    var planetV= 'rotate('+planetR+'deg)',
        dotV = 'rotate('+dotR+'deg)';
    
    $('.the-dot').css("transform",dotV);
    $('.landing-planet').css("transform",planetV);
    planetR+=1800;
    dotR+=72;
    setTimeout(dotRotate,58000);
}

// main function
$(document).ready(function(){
    var w = $(window).width(),
        h = $('.landing-container').innerHeight();
    
    $('.landing-box,.cut-wrapper,.cut-2-wrapper').css("height",(h+"px"));
    //讓dot與星球轉
    dotRotate();
    
    //scroll function lock
    $('.main-container').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation();
        return false;
    })

    // Afu function test
    function test(par){
        console.log(par); // 印出
        par++; // 累加數值
        if(par>3) return false;   // 跳脫點
        setTimeout('test('+par+')',1000);  // 遞迴
    }
    setTimeout('test('+1+')',1000);   // 進入點
    
    //控制桌機才跑landing動畫
    if (w>776){
        floatItems();
        setInterval(floatItems, 2000);
        setTimeout(floatBack,11000)
    }
    else{
        return false;
    }
})

//物件往上飄動態
function floatItems(){
    $('.float-items').eq(i).css({
        "transform": "rotate(360deg)",
        "transition": "transform 11s"
    });
    $('.float-items').eq(i).animate({
        top: "-30%"
    },11000);
    if(i<7){
        i++
    }
    else{ 
        i=0
    }
}

// reset 物件
function floatBack(){
    setInterval(floatReset,2000)
}
function floatReset(){
    $('.float-items').eq(x).stop().css({
        "transform": "rotate(0deg)",
        "transition": "none",
        "top": "105%"
    });
    if(x<7){
        x++
    }
    else{  
        x=0
    }
}

//跳轉頁面


$(document).ready(function(){
    $('.go-next').bind('click',function(){
        var wheretoGo =( "#cut"+ $(this).attr('rel')),
            $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'),
            addRel = parseInt( $(this).attr('rel') )+ 1;
        $body.animate({
            scrollTop: $(wheretoGo).offset().top
        }, 700);
        // 如果是cut1則跑
        if(wheretoGo=="#cut1"){
            $('.landing-container').css("background","#f2f2f2");
            $('.float-items , .go-next').stop().fadeOut(300);
            $('.top-nav,.pink-btn').delay(300).fadeIn(700);
           setTimeout(slowMotion,700);
            
            function slowMotion(){
                $('.cut-1-img').css({
                    "top":"0px",
                    "opacity":"1"
                });
            }
        }
        if(wheretoGo=="#cut3"){
            setTimeout('dollToggle('+0+')',500); 
        }
        
        if(wheretoGo=="#cut4"){

            setTimeout(boxbox,650);
            $(this).fadeOut(700);
        }
        $(this).attr('rel',addRel)
    });

    // countdown scribe toggle

    $('.free-experience').click(function(){
        $('#countdown').fadeOut(700);
        $('#subscribe').delay(710).fadeIn(700);
    })


});



// doll function
function dollToggle(par){
    $('.stepFirst').eq(par).addClass('showDolls');
    par++; // 累加數值
    if(par>3) return false;   // 跳脫點
    setTimeout('dollToggle('+par+')',500);  // 遞迴
}     

// box-box function

function boxbox(){
    $('.box-box').addClass('box-box-position');
    $('.landing-container').css("background","#000000");
    setTimeout(boxContent,1500);
}

function boxContent(){
    $('.left-box').addClass("rotate-left");
    $('.right-box').addClass("rotate-right");
    $('.subscribe-container').css('opacity',1);
    setTimeout(light,1000);
}

function light(){
    $('.light').css('width',"1020px");
    setTimeout(pig,600);
}

function pig(){
    $('.subscribe-container').css('bottom','0px');
}


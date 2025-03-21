let bgm = 1;//有開
let bgmplayer = $('audio')[0]
$(".BGMbtn").on("click", function () {
    if (bgm == 0) {
        $(".BGMbtn").css(
            "background-image", "url(img/img/bgmOff.png)"
        )
        bgmplayer.pause()
        $(".BGMbtn").css(
            'animation', 'bgmbtn 1s infinite'
        )
        bgm = 1
    } else {
        $(".BGMbtn").css(
            "background-image", "url(img/img/bgmOn.png)"
        )
        bgmplayer.play()
        $(".BGMbtn").css(
            'animation', 'none'
        )
        bgm = 0
    }
})


$("html").mousemove(function (e) {
    let windowW = $(window).width(),
        windowH = $(window).height(),
        moveW = (e.pageX - windowW / 2) / (windowW / 2) * 10,
        moveH = (e.pageY - windowH / 2) / (windowH / 2) * 10

    $('.page_BG').css({
        left: 'calc(50% - ' + moveW + 'px)',
        top: 'calc(50% - ' + moveH + 'px)'
    })

})

let page = 0
$(".logo").on("click", function () {
    page = 0
    $(".logo").css("cursor", "auto")

    $('.page_btns > div').css("pointer-events", "auto")
    $(".logo").css("pointer-events", "none")

    $('.buttons .YT a').attr("href", 'https://www.youtube.com/@SHARKMOLIN')
    $('.buttons .twitter a').attr("href", 'https://x.com/MolinShark')

    $(".screenR,.screenL").css({
        "transform": "translateX(0%)",
        "width": "53%"
    })

    $('.buttons .TW,.buttons .DC').fadeOut(500)

    setTimeout(() => {
        $('.page_BG').css(
            "background-image", "url(img/img/BGindex.png)"
        )
        $('.BG_mask').css(
            "background-color", "#ddcdb6"
        )

        $('.logo').css({
            'filter': "drop-shadow(0 7px 10px #351F0F)drop-shadow(0 0px 40px #ffffff)",
            'top': "-50px",
            'width': "calc(933px * 1)",
            'height': "calc(897px * 1)"
        })

        $('.wood').css(
            "background-image", "url(img/img/header.png)"
        )

    }, 900);

    setTimeout(() => {
        $(".screenR").css({
            "transform": "translateX(50%)",
            "width": "15%"
        })
        $(".screenL").css({
            "transform": "translateX(-50%)",
            "width": "15%"
        })
    }, 910);

})
$(".page_mox").on("click", function () {
    page = 1
    $(".logo").css("cursor", "pointer")
    $('.page_btns > div,.logo').css("pointer-events", "auto")
    $(".page_mox").css("pointer-events", "none")
    $('.buttons .YT a').attr("href", 'https://www.youtube.com/@mox-vfucker')
    $('.buttons .twitter a').attr("href", 'https://x.com/MOX_Vfucker')
    $('.buttons .TW a').attr("href", 'https://www.twitch.tv/mox_vt')
    $('.buttons .DC a').attr("href", 'https://discord.com/invite/PHaKgfqwq8')
})
$(".page_fish").on("click", function () {
    page = 2
    $(".logo").css("cursor", "pointer")
    $('.page_btns > div,.logo').css("pointer-events", "auto")
    $(".page_fish").css("pointer-events", "none")
    $('.buttons .YT a').attr("href", 'https://www.youtube.com/@Dawayluyu')
    $('.buttons .twitter a').attr("href", 'https://x.com/Dawayluyu')
    $('.buttons .TW a').attr("href", 'https://www.twitch.tv/dawayluyu')
    $('.buttons .DC a').attr("href", 'https://discord.com/invite/qgdpqtGwPN ')
})
$(".page_ceresa").on("click", function () {
    page = 3
    $(".logo").css("cursor", "pointer")
    $('.page_btns > div,.logo').css("pointer-events", "auto")
    $(".page_ceresa").css("pointer-events", "none")
    $('.buttons .YT a').attr("href", 'https://www.youtube.com/@CeresaClark')
    $('.buttons .twitter a').attr("href", 'https://x.com/CeresaClark')
    $('.buttons .TW a').attr("href", 'https://www.twitch.tv/ceresaclark')
    $('.buttons .DC a').attr("href", 'https://discord.com/invite/W7C7PFzg5M ')
})
$(".page_fox").on("click", function () {
    page = 4
    $(".logo").css("cursor", "pointer")
    $('.page_btns > div,.logo').css("pointer-events", "auto")
    $(".page_fox").css("pointer-events", "none")
    $('.buttons .YT a').attr("href", 'https://www.youtube.com/@hikamiml')
    $('.buttons .twitter a').attr("href", 'https://x.com/HikamiML')
    $('.buttons .TW a').attr("href", 'https://www.twitch.tv/hikamiml')
    $('.buttons .DC a').attr("href", 'https://discord.com/invite/GTJXAdB7hN')
})

$('.page_btns > div').on("click", function () {
    $(".screenR,.screenL").css({
        "transform": "translateX(0%)",
        "width": "53%"
    })
    $('.logo').css({
        'filter': "drop-shadow(0 7px 10px #351F0F)drop-shadow(0 7px 20px #351F0F)",
        'top': "-85px",
        'width': "calc(933px * 0.4)",
        'height': "calc(897px * 0.4)"
    })
    $('.wood').css(
        "background-image", "url(img/img/header1-1.png)"
    )
    $('.buttons .TW,.buttons .DC').fadeIn(500)
    setTimeout(() => {
        switch (page) {
            case 1:
                $('.page_BG').css(
                    "background-image", "url(img/img/BGmox.png)"
                )
                $('.BG_mask').css(
                    "background-color", "#ddcdb6"
                )

                break;
            case 2:
                $('.page_BG').css(
                    "background-image", "url(img/img/BGfish.jpg)"
                )
                $('.BG_mask').css(
                    "background-color", "#cce1f7"
                )

                break;
            case 3:
                $('.page_BG').css(
                    "background-image", "url(img/img/BGceresa.jpg)"
                )
                $('.BG_mask').css(
                    "background-color", "#ddb6b6"
                )

                break;
            case 4:
                $('.page_BG').css(
                    "background-image", "url(img/img/BGfox.jpg)"
                )
                $('.BG_mask').css(
                    "background-color", "#fff7fb"
                )

                break;

            default:
                break;
        }
    }, 900);
    setTimeout(() => {
        $(".screenR").css({
            "transform": "translateX(50%)",
            "width": "15%"
        })
        $(".screenL").css({
            "transform": "translateX(-50%)",
            "width": "15%"
        })

    }, 910);
})



$('.p0_text p').on('click', function () {
    $('.pop').fadeIn(500)
})

$('.xx').on('click', function () {
    $('.pop').fadeOut(500)
})
$('.pop').on('click', function () {
    setTimeout(() => {
        $('.pop_frame').animate({
            top: '45%',
        }, 100)
    }, 500);
    setTimeout(() => {
        $('.pop_frame').animate({
            top: '50%',
        }, 100)
    }, 600);
    setTimeout(() => {
        $('.pop_frame').animate({
            top: '45%',
        }, 100)
    }, 700);
    setTimeout(() => {
        $('.pop_frame').animate({
            top: '50%',
        }, 100)
    }, 800);
})
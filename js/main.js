let bgm = 1;//有開
let bgmplayer = $('audio')[0]
//BGM開關
$(".BGMbtn").on("click", function () {
    if (bgm == 0) {
        $(".BGMbtn").css(
            "background-image", "url(img/img/bgmOff.webp)"
        )
        bgmplayer.pause()
        $(".BGMbtn").css(
            'animation', 'bgmbtn 1s infinite'
        )
        bgm = 1
    } else {
        $(".BGMbtn").css(
            "background-image", "url(img/img/bgmOn.webp)"
        )
        bgmplayer.play()
        $(".BGMbtn").css(
            'animation', 'none'
        )
        bgm = 0
    }
})

//背景跟隨游標
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

//回首頁
let page = 0
$("#pindex,.page_index_m").on("click", function () {
    if (page != 0) {
        page = 0
        $(".logo").css("cursor", "auto")

        $('.page_btns > div,.page_mox_m,.page_fish_m,.page_ceresa_m,.page_fox_m').css("pointer-events", "auto")

        $('.buttons .YT a').attr("href", 'https://www.youtube.com/@SHARKMOLIN')
        $('.buttons .twitter a').attr("href", 'https://x.com/MolinShark')

        $(".character > div").css('transform', 'perspective(500px)rotateX(90deg)')

        //簾子關
        if ($(window).width() > 768) {
            $(".screenR,.screenL").css({
                "transform": "translateX(0%)",
                "width": "53%"
            })
        } else {
            $(".screenL").css({
                "transform": "translateX(0%)",
                "width": "100%"
            })
        }

        $('.buttons .TW,.buttons .DC').fadeOut(500)

        setTimeout(() => {
            $('.page_BG').css(
                "background-image", "url(img/img/BGindex.webp)"
            )
            $('.BG_mask').css(
                "background-color", "#ddcdb6"
            )

            //logo位移
            if ($(window).width() > 768) {
                $('.logo').css({
                    'filter': "drop-shadow(0 7px 10px #351F0F)drop-shadow(0 0px 40px #ffffff)",
                    'width': "calc(50vw * 1)",
                    'height': "calc(50vw * 0.75)"
                })
            } else {
                $('.logo').css({
                    'top': "45vh",
                    'filter': 'drop-shadow(0 7px 10px #351F0F)drop-shadow(0 0px 40px #ffffff8c)',
                    'transform': 'translateX(-50%)translateY(-100%)scale(1)'
                })
            }

            //換上幕
            if ($(window).width() > 768) {
                $('.pv,.p0_text').fadeIn(100)
                $('.wood').css(
                    "background-image", "url(img/img/header.webp)"
                )
            } else {
                $('.p0_text').fadeIn(100)
            }

            $('.lock,.personal').hide()

            //社群按鈕位移
            if ($(window).width() <= 768) {
                $('.buttons').css({
                    'flex-direction': 'row',
                    'transform': 'translateX(-50%)translateY(150%)',
                    'left': '50%',
                    'bottom': '50vh',
                    'right': 'unset',
                    'top': 'unset'
                })
                $('.buttons > div').css({
                    'margin': '0 2px'
                })
            }

        }, 900);

        //簾子開
        setTimeout(() => {

            if ($(window).width() > 768) {
                $(".screenR").css({
                    "transform": "translateX(50%)",
                    "width": "15%"
                })
                $(".screenL").css({
                    "transform": "translateX(-50%)",
                    "width": "15%"
                })
            } else {
                $(".screenL").css({
                    "transform": "translateX(-50%)",
                    "width": "0%"
                })
            }

        }, 910);

    }

})
//Mox頁
$(".page_mox,.page_mox_m").on("click", function () {
    page = 1
    $(".character > div").css('transform', 'perspective(500px)rotateX(90deg)')
    setTimeout(() => {
        $(".c1").css('transform', 'perspective(500px)rotateX(0deg)')
    }, 1000);
})
//魚頁
$(".page_fish,.page_fish_m").on("click", function () {
    page = 2
    $(".character > div").css('transform', 'perspective(500px)rotateX(90deg)')
    setTimeout(() => {
        $(".c2").css('transform', 'perspective(500px)rotateX(0deg)')
    }, 1000);
})
//莎莎頁
$(".page_ceresa,.page_ceresa_m").on("click", function () {
    page = 3
    $(".character > div").css('transform', 'perspective(500px)rotateX(90deg)')
    setTimeout(() => {
        $(".c3").css('transform', 'perspective(500px)rotateX(0deg)')
    }, 1000);
})
//狐狸頁
$(".page_fox,.page_fox_m").on("click", function () {
    page = 4
    $(".character > div").css('transform', 'perspective(500px)rotateX(90deg)')
    setTimeout(() => {
        $(".c4").css('transform', 'perspective(500px)rotateX(0deg)')
    }, 1000);
})
//點擊人物頁
$('.page_btns > div,.page_mox_m,.page_fish_m,.page_ceresa_m,.page_fox_m').on("click", function () {

    //簾子關
    if ($(window).width() > 768) {
        $(".screenR,.screenL").css({
            "transform": "translateX(0%)",
            "width": "53%"
        })
    } else {
        $(".screenL").css({
            "transform": "translateX(0%)",
            "width": "100%"
        })
    }

    //按鈕狀態(可/不可按)
    $(".logo").css("cursor", "pointer")
    $('.page_btns > div,.page_mox_m,.page_fish_m,.page_ceresa_m,.page_fox_m,.logo').css("pointer-events", "auto")
    $(this).css("pointer-events", "none")

    //logo位移
    if ($(window).width() > 768) {
        $('.logo').css({
            'filter': "drop-shadow(0 7px 10px #351F0F)drop-shadow(0 7px 20px #351F0F)",
            'width': "calc(50vw * 0.4)",
            'height': "calc(50vw * 0.75 * 0.4)"
        })
        $('.pv').fadeOut(100)
    } else {
        $('.logo').css({
            'filter': "none",
            'top': '0px',
            'transform': 'translateX(-50%)translateY(-100%)scale(0.5)'
        })
    }

    if ($(window).width() > 768) {
        $('.wood').css(
            "background-image", "url(img/img/header1-1.webp)"
        )
    }
    setTimeout(() => {
        $('.buttons .TW,.buttons .DC').fadeIn(500)
        $('.p0_text').fadeOut(100)
        $('.personal').css('display', 'flex')

        //社群按鈕位移
        if ($(window).width() <= 768) {
            $('.buttons').css({
                'flex-direction': 'column',
                'transform': 'translateX(0%)translateY(0%)',
                'left': 'unset',
                'bottom': 'unset',
                'right': '5vw',
                'top': '30vw'
            })
            $('.buttons > div').css({
                'margin': '2px 0'
            })
        }

        switch (page) {
            case 1:
                $('.lock').hide()
                $('.page_BG').css(
                    "background-image", "url(img/img/BGmox.webp)"
                )
                $('.BG_mask').css(
                    "background-color", "#ddcdb6"
                )
                $('.role').css({
                    'width': 'calc(' + $('.name').height() + 'px * 2.46)',
                    "background-image": "url(img/img/name_Mox.webp)"
                })
                $('.slogan').html(`「誒？這裡是哪裡？<br/>不會吧……我、我變成兔子王子了？！」`)
                $('.personal_info').html(`自詡為天才的高中少女，擁有過人的發明才能與無限的好奇心。某日，她親手製作了一台「異世界穿越裝置」，原本只是想和朋友們進行一場刺激的冒險&nbsp;`)


                $('.buttons .YT a').attr("href", 'https://www.youtube.com/@mox-vfucker')
                $('.buttons .twitter a').attr("href", 'https://x.com/MOX_Vfucker')
                $('.buttons .TW a').attr("href", 'https://www.twitch.tv/mox_vt')
                $('.buttons .DC a').attr("href", 'https://discord.com/invite/PHaKgfqwq8')

                break;
            case 2:
                $('.lock').show()
                $('.page_BG').css(
                    "background-image", "url(img/img/BGfish.webp)"
                )
                $('.BG_mask').css(
                    "background-color", "#cce1f7"
                )
                $('.role').css({
                    'width': 'calc(' + $('.name').height() + 'px * 2.46)',
                    "background-image": "url(img/img/name_who.webp)"
                })

                //亮名
                // $('.role').css({
                //     "background-image": "url(img/img/name_fish.webp)",
                //     'width': 'calc('+ $('.name').height() +'px * 3.61)'
                // })

                $('.slogan').html(`「■■■■■■■■■■<br/>■■■■■■■■■■■■■■」`)
                $('.personal_info').html(`■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■&nbsp;`)

                $('.buttons .YT a').attr("href", 'https://www.youtube.com/@Dawayluyu')
                $('.buttons .twitter a').attr("href", 'https://x.com/Dawayluyu')
                $('.buttons .TW a').attr("href", 'https://www.twitch.tv/dawayluyu')
                $('.buttons .DC a').attr("href", 'https://discord.com/invite/qgdpqtGwPN ')

                break;
            case 3:
                $('.lock').show()
                $('.page_BG').css(
                    "background-image", "url(img/img/BGceresa.webp)"
                )
                $('.BG_mask').css(
                    "background-color", "#ddb6b6"
                )

                $('.role').css({
                    'width': 'calc(' + $('.name').height() + 'px * 2.46)',
                    "background-image": "url(img/img/name_who.webp)"
                })
                //亮名
                // $('.role').css({
                //     "background-image": "url(img/img/name_ceresa.webp)",
                //     'width': 'calc('+ $('.name').height() +'px * 3)'
                // })

                $('.slogan').html(`「■■■■■■■■■■<br/>■■■■■■■■■■■■■■」`)
                $('.personal_info').html(`■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■&nbsp;`)

                $('.buttons .YT a').attr("href", 'https://www.youtube.com/@CeresaClark')
                $('.buttons .twitter a').attr("href", 'https://x.com/CeresaClark')
                $('.buttons .TW a').attr("href", 'https://www.twitch.tv/ceresaclark')
                $('.buttons .DC a').attr("href", 'https://discord.com/invite/W7C7PFzg5M')

                break;
            case 4:
                $('.lock').show()
                $('.page_BG').css(
                    "background-image", "url(img/img/BGfox.webp)"
                )
                $('.BG_mask').css(
                    "background-color", "#fff7fb"
                )

                $('.role').css({
                    'width': 'calc(' + $('.name').height() + 'px * 2.46)',
                    "background-image": "url(img/img/name_who.webp)"
                })

                //亮名
                // $('.role').css({
                //     'width': 'calc('+ $('.name').height() +'px * 3.15)',
                //     "background-image": "url(img/img/name_fox.webp)",
                // })

                $('.slogan').html(`「■■■■■■■■■■<br/>■■■■■■■■■■■■■■」`)
                $('.personal_info').html(`■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■&nbsp;`)

                $('.buttons .YT a').attr("href", 'https://www.youtube.com/@hikamiml')
                $('.buttons .twitter a').attr("href", 'https://x.com/HikamiML')
                $('.buttons .TW a').attr("href", 'https://www.twitch.tv/hikamiml')
                $('.buttons .DC a').attr("href", 'https://discord.com/invite/GTJXAdB7hN')

                break;

            default:
                break;
        }

    }, 900);

    //簾子開
    setTimeout(() => {

        if ($(window).width() > 768) {
            $(".screenR").css({
                "transform": "translateX(50%)",
                "width": "15%"
            })
            $(".screenL").css({
                "transform": "translateX(-50%)",
                "width": "15%"
            })

            $(".character").css('transform', 'perspective(500px)rotateX(0deg)')
        } else {
            $(".screenL").css({
                "transform": "translateX(-50%)",
                "width": "0%"
            })
        }

    }, 910);
})


//世界觀內文
$('.p0_text p').on('click', function () {
    $('.pop_title').html("世界觀")
    $('.pop_text').html(`在一個叫做路納多利姆的大陸上，裏頭充斥著魔幻與奇幻的世界，在同一個世界卻有著人神獸不同種族的存在，而在另外一個位面上，也有著蘊含豐富精神力的靈界，而在這片大陸上，有著三種外貌能力截然不同的三大種族：因為過強的精神力和魔法力所以總是待在靈界的神靈族；有著先進科技發展崇尚科學研究的人族；還有嚮往自然居住在自然環境的異人族，後兩者在世界上的接觸引發了各種各樣的事件。<br><br>
    在百年之前，為了各自資源的爭奪，人族以及異人族之間發生了一場直到現在回想起來都令人毛骨悚然的沃爾戰爭，雖然在當時人族已經有相當的科技發展以及軍事武力，但是在沒有精神力的支持之下，異人族靠著強大的魔法力運用成功擊退了人族，在戰爭途中，人族由於精神力的缺乏對於魔法力的抵抗相當薄弱，此為人族節節敗退的主因，直到戰爭的後期人族以犧牲了近半數族人的性命作為媒介喚出了一名喜好戰爭的神靈族，成功將異人族逼退，並在大陸的中央刻下了一道至今依然被神靈族的魔法力所壟罩的「肯伊恩的裂隙」。<br><br>
    為了不再使相同的憾事發生，當時人族的國王以及異人族的族長共同簽下了"佛艾威爾匹斯"條約，而在簽署了條約之後人族退回至蘊含礦脈的谷地生存，異人族則是定居於含有森林以及海洋資源的平原大陸，雖說當時的戰役在雙方種族的心中都留下了一道深刻的傷口，但在經過了時間的流逝，兩族人也漸漸的嘗試與彼此互動，甚至是通商抑或是技術力之間的交流。<br><br>
    在戰後過了將近半載餘年，如今的社會上已經沒有當初相互排斥的思想了，雖然居住的地區不同，也還是可以藉由貿易或是其他的溝通管道來進行連絡，而近期人族研發出由科技驅動的魔法力"奧術"有時也會與異人族內的信仰魔法來相互切磋較勁，而除了人族異人族兩族的發展，隨著科技的進步而來的也有著各式各樣的信仰，而其中也不乏有些天生即具有強大精神力的人類，藉由自身的精神力成功地與靈界的神靈族接觸，更有甚者能夠與神靈族簽訂契約，並以此來借用神靈族的權能，使得"信仰"這份力量也逐漸開始的不容小覷。<br><br>
    那麼來自異世界的穿越者阿，你們的身上有帶著怎麼樣的色彩，又或是會給這個世界帶來什麼樣的故事呢？`)
    $('.pop').fadeIn(500)
})
//人物內文
$('.personal_info').on('click', function () {
    $('.pop_title').html("關於人物")

    switch (page) {
        case 1:
            $('.pop_text').html(`自詡為天才的高中少女，擁有過人的發明才能與無限的好奇心。某日，她親手製作了一台「異世界穿越裝置」，原本只是想和朋友們進行一場刺激的冒險，卻在啟動後意外發生了靈魂交換，來到異世界並成為了一位有著兔耳與王族血統的少年王子。<br>
            與友人失散後，她必須一邊隱瞞自己的真正身份。<br>
            表面上冷靜自負，內心卻藏著對夥伴深厚的思念，以及面對未知世界時無法隱藏的悸動。<br><br>`)
            break;

        case 2:
            $('.pop_text').html(`■`)
            break;

        case 3:
            $('.pop_text').html(`3`)
            break;

        case 4:
            $('.pop_text').html(`4`)
            break;

        default:
            break;
    }

    $('.pop').fadeIn(500)
})

$('.xx').on('click', function () {
    $('.pop').fadeOut(500)
})
//彈窗動態
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
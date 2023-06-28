$(function () {
    /*.nav>li에 마우스를 올리면,내가 방금 마우스를 올렸던 li 하위요소인 .sub가 slideDown된다.*/

    $(".category>li").mouseenter(function () {
        $(this).children(".category_inner").stop().slideDown()
    });
    /*.nav>li에 마우스를 내리면,내가 방금 마우스를 내렸던 li 하위요소인 .sub가 slideUp된다.*/
    $(".category>li").mouseleave(function () {
        $(this).children(".category_inner").stop().slideUp()
    });
});
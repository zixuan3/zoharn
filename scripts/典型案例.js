/*
let isDisplayingExamples = true;
$(window).resize(() => {
	//console.log($(this).width());
	if ($(this).width() < 1200) {
		isDisplayingExamples = false;
	} else if (isDisplayingExamples === false) {
		isDisplayingExamples = true;
		initiateSlickExamples();
	}
})
window.dispatchEvent(new Event('resize'));
*/

const initiateSlickExamples = () => {
	$('.examples-slick').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,

		autoplay: true,
		autoplaySpeed: 3000,

		dots: true/*,
		
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
		*/
	});
}

initiateSlickExamples();


$(".slick-next.slick-arrow")
.addClass("slide-arrows-ecjkKh")
.addClass("slide-arrow-right-kiWcOt")
.html(`
    <svg viewBox="0 0 26 19" role="img" width="70px" style="transform: rotate3d(0, 0, 1, -90deg);">
        <title>Chevron</title>
        <path d="M13 12.49l-8-8M21 4.49l-8.35 8.35" style="stroke: white;"></path>
    </svg>
`)
.css({"position": "absolute", "left": "1400px"});

$(".slick-prev.slick-arrow")
.addClass("slide-arrows-ecjkKh")
.addClass("slide-arrow-left-cCoBrd")
.html(`
    <svg viewBox="0 0 26 19" role="img" width="70px" style="transform: rotate3d(0, 0, 1, 90deg);">
        <title>Chevron</title>
        <path d="M13 12.49l-8-8M21 4.49l-8.35 8.35" style="stroke: white;"></path>
    </svg>
`)
.css({"position": "absolute", "left": "-100px"});
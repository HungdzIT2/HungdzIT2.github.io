$('.slider_home').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	nextArrow: $('.next_home'),
	prevArrow: $('.prev_home'),
	speed: 1000
});

tl1 = new TimelineMax({paused: true});
var i_home = 0,
	arr_data_slide_home = [];
function go_slide_home(){
	$('.content_post_home > a').attr('href', arr_data_slide_home[2]);
	tl1.to('.content_post_home > article, .content_post_home > section, .content_post_home > a', 0.5, {opacity: 0});
	tl1.set('.content_post_home > article', {text: arr_data_slide_home[0]});
	tl1.set('.content_post_home > section', {text: arr_data_slide_home[1]});
	tl1.to('.content_post_home > article, .content_post_home > section, .content_post_home > a', 0, {x: "-120%", opacity: 1});
	tl1.to('.content_post_home > article', 0.3, {x: 0, opacity: 1, ease: Back.easeOut.config(1)});
	tl1.to('.content_post_home > section', 0.3, {x: 0, opacity: 1, ease: Back.easeOut.config(1)});
	tl1.to('.content_post_home > a', 1, {x: 0, opacity: 1, ease: Elastic.easeOut.config(0.5, 0.3)});
}

//slide content
function conten_home(i_home, arr_data_slide_home){
	if (i_home == 0) {
		arr_data_slide_home[0] = "Title <br> template";
		arr_data_slide_home[1] = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum eveniet recusandae est voluptatum cupiditate modi accusantium laborum.";
		arr_data_slide_home[2] = "link1";
	}
	if (i_home == 1) {
		arr_data_slide_home[0] = "Page <br> template";
		arr_data_slide_home[1] = "consectetur adipisicing elit. Harum eveniet recusandae est voluptatum cupiditate modi accusantium laborum.";
		arr_data_slide_home[2] = "link2";
	}
	if (i_home == 2) {
		arr_data_slide_home[0] = "This is <br> template";
		arr_data_slide_home[1] = "consectetur adipisicing elit. Harum eveniet recusandae est voluptatum Harum eveniet recusandae est voluptatum cupiditate modi accusantium laborum.";
		arr_data_slide_home[2] = "link3";
	}
	return arr_data_slide_home;
}
$('.next_home').click(function(event) {
	if (i_home >= 2) {
		i_home = 0;
	}else{
		i_home++;
	}
	conten_home(i_home, arr_data_slide_home);
	go_slide_home();
	tl1.play();
});
$('.prev_home').click(function(event) {
	if (i_home <= 0) {
		i_home = 2;
	}else{
		i_home--;
	}
	conten_home(i_home, arr_data_slide_home);
	go_slide_home();
	tl1.play();
});


//Hover
jQuery(document).ready(function($) {
	var arr_hover_home = $('.hover_home').toArray();
	var text  = "";
	for (let i = 0; i < arr_hover_home.length; i++) {
		
		$(arr_hover_home[i]).hover(function(event) {
			text = $(arr_hover_home[i]).attr('data-hover');
			$('.play_video_home > div > div').html(text);
		});
	}

});










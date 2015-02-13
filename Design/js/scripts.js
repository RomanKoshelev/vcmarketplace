$(function() {
	$('.tabs_act_lst .tabs_act_a').click(function(e) {
		e.preventDefault();
		var list = $(this).parent().parent();
		var rel = $(this).attr('href').substr(1);
		if(list.hasClass('tabs_act_lst')) {
			var tab = $('.tabs_act_outer .tabs_act_content[rel=' + rel + ']');
			var tabsouter = $('.tabs_act_outer .tabs_act_content[rel=' + rel + ']').parent();
			if(tabsouter.hasClass('tabs_act_outer')) {
				$('.tabs_act_content', tabsouter).hide();
				tab.show();
				$('.tabs_act_a', list).removeClass('__active');
				$(this).addClass('__active');
			}
		}
	});
});
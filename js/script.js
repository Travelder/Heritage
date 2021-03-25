grade = {
	'1' : 'Daylight',
	'2' : 'Daylight Corner',
	'3' : 'Flat',
	'4' : 'Flat Corner',
	'5' : 'Walk-Out',
	'6' : 'Walk-Out Corner'
}
$('[data-toggle=popover].ridgeProperty').popover({
	'container': 'body',
	'html': true,
	'animation': false,
	'template': '<div class="popover ridgeProperty" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div><h3 class="popover-footer"> HHHH</h3></div>'
});
$('[data-toggle=popover].parkProperty').popover({
	'container': 'body',
	'html': true,
	'animation': false,
	'template': '<div class="popover parkProperty" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div><h3 class="popover-footer"> HHHH</h3></div>'
});
$('[data-toggle=popover].reserveProperty').popover({
	'container': 'body',
	'html': true,
	'animation': false,
	'template': '<div class="popover reserveProperty" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div><h3 class="popover-footer"> HHHH</h3></div>'
});
$('[data-toggle=popover].greenery').popover({
	'container': 'body',
	'html': true,
	'animation': false,
	'template': '<div class="popover greenery" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div><h3 class="popover-footer"> HHHH</h3></div>'
});
$('[data-toggle=popover]').on('shown.bs.popover', function(){
	$path = $(this);
	$popover = $('.popover');
	$content_template = '<div class="address"><span class="inline-block">Lot # <span class="address_lot"></span>,<br> <span class="inline-block">Block # <span class="address_block"></span>, <span class="inline-block address_street"></span></div>\
						<hr>\
						<div class="block"><dt>Front</dt><dd class="front">108</dd></div>\
						<div class="block"><dt>Rear</dt><dd class="rear">108</dd></div>\
						<div class="block"><dt>Left</dt><dd class="left">108</dd></div>\
						<div class="block"><dt>Right</dt><dd class="right">108</dd></div>\
						<div class="block top_border"><dt>Sqft</dt><dd class="sqft">108</dd></div>\
						<div class="block top_border"><dt>Acre</dt><dd class="acre">108</dd></div>\
						<div class="block top_border"><dt>Grade</dt><dd class="grade">Walk Out</dd></div>\
						<div class="block extras"><dt>Type</dt><dd class="type"></dd></div>\
						<div class="static-label">Green Space</div>';
	$popover.find('.popover-content').html($content_template);
	
	$popover.find('.popover-content .address_lot').html($path.data('lot'));
	$popover.find('.popover-content .address_block').html($path.data('block'));
	$popover.find('.popover-content .address_street').html($path.data('street'));
	$popover.find('.popover-content .front').html($path.data('front'));
	$popover.find('.popover-content .rear').html($path.data('rear'));
	$popover.find('.popover-content .left').html($path.data('left'));
	$popover.find('.popover-content .right').html($path.data('right'));
	if($path.data('sqft'))
		$popover.find('.popover-content .sqft').html($path.data('sqft'));
	else
		$popover.find('.popover-content .sqft').parent().addClass('hidden');
	if($path.data('acre'))
		$popover.find('.popover-content .acre').html($path.data('acre'));
	else
		$popover.find('.popover-content .acre').parent().addClass('hidden');
	if($path.data('type'))
		$popover.find('.popover-content .type').html($path.data('type'));
	else
		$popover.find('.popover-content .type').parent().addClass('hidden');
	$grade = $path.data('grade');
	if($grade)
		$popover.find('.popover-content .grade').html(grade[$grade]);
	else
		$popover.find('.popover-content .grade').parent().addClass('hidden');
	$price = $path.data('price');
	if($price == "-1") {
		$price = 'SPEC';
		$popover.addClass('spec');
	}
	else if($price == 0 || !$price) {
		$price = 'SOLD!!!';
		$popover.addClass('sold');
	}
	else {
		$price = '$' + $price
	}
	$popover.find('.popover-footer').html($price);
	if($popover.hasClass('left')){
		$left = $path[0].getBoundingClientRect()['left'];
		$width = $popover.width();
		$val = $left - $width - 10;
		if ($val < 15) {
			$popover.css('width', $width + ($val)) 
			$val = 15;

		}
		console.log($val)
		$popover.css('left', $val)
	}
	if($path.hasClass('greenery')) {
		if($path.hasClass('retain-title')){
			$popover.find('.static-label').html('');
		} else {
			$popover.find('.static-label').html($popover.find('.popover-title').html());
			$popover.find('.popover-title').html('Green Space');
		}
	}
	if($path.hasClass('no-address')) {
		$popover.addClass('no-address');
	}
	if($path.hasClass('b1')){
		$popover.addClass('b1');
	}
	if($path.hasClass('b2')){
		$popover.addClass('b2');
	}
	if($path.hasClass('b3')){
		$popover.addClass('b3');
	}
	if($path.hasClass('b4')){
		$popover.addClass('b4');
	}
});
$('path.otherside').hover(function(){
	$('.otherside').addClass('is_active')
});
$('path.otherside').mouseout(function(){
	$('.otherside').removeClass('is_active')
});
$('path.otherside').click(function(){
	if($('body').hasClass('parkMap')){
		location.href = 'http://heritagedevelopment.com/heritage-ridge/'
	}
	else {
		location.href = 'http://heritagedevelopment.com/heritage-park/'
	}
})

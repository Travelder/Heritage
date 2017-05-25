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
$('[data-toggle=popover]').on('shown.bs.popover', function(){
	$path = $(this);
	$popover = $('.popover');
	$content_template = '<div class="address"><span class="inline-block">Lot # <span class="address_lot"></span>,<br> <span class="inline-block">Block # <span class="address_block"></span>, <span class="inline-block address_street"></span></div><hr><div><dt>Front</dt><dd class="front">108</dd></div><div><dt>Rear</dt><dd class="rear">108</dd></div><div><dt>Left</dt><dd class="left">108</dd></div><div><dt>Right</dt><dd class="right">108</dd></div><div class="top_border"><dt>Sqft</dt><dd class="sqft">108</dd></div><div class="top_border"><dt>Grade</dt><dd class="grade">Walk Out</dd></div>';
	$popover.find('.popover-content').html($content_template);
	
	$popover.find('.popover-content .address_lot').html($path.data('lot'));
	$popover.find('.popover-content .address_block').html($path.data('block'));
	$popover.find('.popover-content .address_street').html($path.data('street'));
	$popover.find('.popover-content .front').html($path.data('front'));
	$popover.find('.popover-content .rear').html($path.data('rear'));
	$popover.find('.popover-content .left').html($path.data('left'));
	$popover.find('.popover-content .right').html($path.data('right'));
	$popover.find('.popover-content .sqft').html($path.data('sqft'));
	$grade = $path.data('grade');
	$popover.find('.popover-content .grade').html(grade[$grade]);
	$price = $path.data('price');
	if($price == "-1") {
		$price = 'SPEC'
	}
	else if($price == 0 || !$price) {
		$price = 'SOLD!!!'
	}
	else {
		$price = '$' + $price
	}
	$popover.find('.popover-footer').html($price);
	if($popover.hasClass('left')){
		$popover.css('left',$popover.css('left').substr(0, $popover.css('left').length-2) - 50)
	}
});

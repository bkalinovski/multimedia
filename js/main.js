const appSettings = settingsModule.getSettings();

appSettings.forEach(lucrare => {
    const indicator = pageModule.generateIndicator(lucrare);
    const page = pageModule.generatePageHTML(lucrare);

    $(".carousel-indicators").append(indicator);
    $("#lucrari").append(page);

    const allPages = $("#lucrari")[0].children;
    
    if(allPages.length > 0){
        const currentPage = allPages[allPages.length-1];
        pageModule.pageClickListner(currentPage, lucrare);
    }
});

$("#scrollUp").click(function(e) {
	e.preventDefault();
    var position = $("#customCarousel").offset().top;
	$("body, html").animate({
		scrollTop: position
	},500 );
});
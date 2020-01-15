var pageModule = function() {
    function generatePageHTML(lucrare) {
        return `
        <div class="carousel-item ${(lucrare.nr === 1) ? "active" : ''}">
            <div id="firstSlide" class="customSlide">
                <div class="container h-100">
                    <div class="row align-items-center h-100">
                        <div class="col-7 mx-auto">
                            <div class="card text-center">
                                <div class="card-body page" style="height: 850px;">
                                    <div class="pageHeader">
                                        <div>MINISTERUL EDUCATIEI A REPUBLICII MOLDOVA</div>
                                        <div>UNIVERSITATEA TEHNICA A MOLDOVEI</div>
                                        <div>FACULTATEA CALCULATOARE , INFORMATICA SI MICROELECTRONICA</div>
                                    </div>
    
                                    <div class="pageTheme">
                                        <div>Lucrare de laborator Nr.${lucrare.nr}</div>
                                        <div>la disciplina "Tehnologii multimedia"</div>
                                        <div>
                                            <span>Tema: </span>
                                            <span>"${lucrare.tema}"</span>
                                        </div>
                                    </div>
    
                                    <div class="pageAuthor">
                                        <div>
                                            <span>A elaborat: </span>
                                            <span>Kalinovski Bogdan</span>
                                        </div>
                                        <div>
                                            <span>Grupa: </span>
                                            <span>TI-171 F/R</span>
                                        </div>
                                    </div>
    
                                    <div class="pageFooter">Chisinau, 2019</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    function generateIndicator(lucrare) {
        return `
            <li data-target="#carouselExampleIndicators" data-slide-to="${lucrare.nr - 1}" ${(lucrare.nr === 1) ? `class="active"` : null}></li>
        `;
    }

    function pageClickListner(page, lucrare){
        $(page).click(function(e) {
            contentModule.generateContent(lucrare);
    
            e.preventDefault();
            var position = $("#content").offset().top - 100;
            $("body, html").animate({
                scrollTop: position
            },500 );
        });
    }

    return {
         generatePageHTML: generatePageHTML,
         generateIndicator: generateIndicator,
         pageClickListner: pageClickListner
    }
}();
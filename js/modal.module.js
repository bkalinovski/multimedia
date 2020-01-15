var modalModule = function() 
{
    function changeModalContent(source){
        let modalContent = ``;
        source.forEach(src => {
            modalContent += `
                <div class="custom_modal_image" style="background-image: url('${src}');"></div>
            `;
        });
        
        $("#modal-content").empty().append(modalContent);
    }

    return {
        changeModalContent: changeModalContent
    }
}();
var contentModule = function() 
{
    function generateContent(lucrare) 
    {
        const content = lucrare.content;
        const contentHeader = generateHeadingContent(content);
        let contentBody = null;
        
        switch(content.type){
            case "imageStack":
                contentBody = generateImageStackContent(content);
            break;
            
            case "audio":
                contentBody = generateAudioContent(content);
            break;
            
            case "video":
                contentBody = generateVideoContent(content);
            break;
        }

        const mainContent = $("#main-content");
        mainContent.empty().append(contentHeader).append(contentBody);
        
    }

    function generateHeadingContent(content)
    {
        return `
            <div class="col-md-7" style="vertical-align: middle;">
                <h2 class="featurette-heading">
                    ${content.title}
                    <div class="text-muted">${content.subtitle}</div>
                </h2>
                <p class="lead">${content.description}</p>
            </div>
        `;
    }

    function generateImageStackContent(content)
    {
        const stringifiedSource = JSON.stringify(content.src);
        let imageStackContent = `
            <div class="col-md-5" style="position: relative;" data-toggle="modal" data-target="#exampleModalCenter" onclick=modalModule.changeModalContent(${stringifiedSource})>
        `;

        let imageIndex = 0;
        content.src.forEach((element) => 
        {
            imageIndex++;
            if(imageIndex > 3){
                imageIndex = 1;
            }
            const imageTag = generateImageTag(`image${imageIndex}`,element);
            imageStackContent += imageTag;
        });

        imageStackContent += `</div>`;

        function generateImageTag(imageClass, source)
        {
            return `
                <img class="featurette-image img-fluid mx-auto ${imageClass}" data-src="holder.js/500x500/auto" alt="500x500" style="width: 500px; height: 500px;" src="${source}" data-holder-rendered="true">
            `;
        }

        return imageStackContent;
    }

    function generateAudioContent(content)
    {
        let audioContent = `
            <div class="col-md-5" style="position: relative;">
        `;

        if(content.src.length > 0){
            let source = content.src[content.src.length - 1];
            audioContent += `
                <audio controls>
                    <source src="${source}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            `;
        }
        audioContent += `</div>`;

        return audioContent;
    }

    function generateVideoContent(content)
    {
        let videoContent = `
            <div class="col-md-5" style="position: relative;">
        `;

        if(content.src.length > 0){
            let source = content.src[content.src.length - 1];
            videoContent += `
                <video width="400" controls autoplay>
                    <source src="${source}" type="video/mp4">
                </video>
            `;
        }
        videoContent += `</div>`;

        return videoContent;
    }

    return {
        generateContent: generateContent
    }
}();
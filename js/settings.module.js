var settingsModule = function() {
    const settings = [
        {
            "nr": 1,
            "tema": "Digitizarea documentelor",
            "content": {
                "type": "imageStack",
                "title": "Procesare texte.",
                "subtitle": "Procesare text, scanare si recunoastere texte, tabele, imagini din text.",
                "description": "Procesare text, scanare si recunoastere texte, tabele, imagini din text. \nProcesare text, scanare si recunoastere texte, tabele, imagini din text.",
                "src": [
                    "./assets/images/scan1.jpg",
                    "./assets/images/scan2.jpg",
                    "./assets/images/scan1.jpg"
                ]
            }
        },
        {
            "nr": 2,
            "tema": "Digitizarea imaginilor. Procesarea imaginilor digitale",
            "content": {
                "type": "imageStack",
                "title": "Procesarea imaginilor digitale.",
                "subtitle": "Procesarea imaginilor digitale.",
                "description": "Procesarea imaginilor digitale. \nProcesarea imaginilor digitale.",
                "src": [
                    "./assets/images/colors.jpg",
                    "./assets/images/gradientFilter.JPG",
                    "./assets/images/photoshoped.jpg",
                    "./assets/images/flowers.JPG"
                ]
            }
        },
        {
            "nr": 3,
            "tema": "Procesarea sunetului",
            "content": {
                "type": "audio",
                "title": "Procesarea sunetului.",
                "subtitle": "Inregistrarea digitala a sunetului.",
                "description": "Procesarea sunetului. \nInregistrarea digitala a sunetului.",
                "src": [
                    "./assets/files/james-bay.mp3"
                ]
            }
        },
        {
            "nr": 4,
            "tema": "Procesarea video",
            "content": {
                "type": "video",
                "title": "Procesarea video.",
                "subtitle": "Procesarea video.",
                "description": "Creare secvente de video folosind audio, text si grafica.",
                "src": [
                    "./assets/files/funny.mp4",
                    "./assets/files/santorini.MOV"
                ]
            }
        }
    ];
    
    function getSettings(){
        return settings;
    }

    return {
        getSettings: getSettings
    }
}();
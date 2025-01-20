//INIT DATA
let data = {
    universities: [
        {
            during: "2014-2018",
            name: "Texas Tech University",
            job: "Computer Science"
        },
    ],
    experiences: [
        {
            during: "Jan 2021 - Dec 2024",
            job: "Senior Machine Learning Engineer",
            where: "Nike",
            des: "Led the development of advanced AI-driven solutions for an innovative AI writing assistant designed for novelists and storytellers. (Sudowrite)\nDeveloped cutting-edge machine learning solutions to power a virtual dressing room for an immersive e-commerce shopping experience. (Veesual)",
        },
        {
            during: "Oct 2018 - Jan 2021",
            job: "Machine Learning Engineer",
            where: "Vistendo",
            des: "Abnormality Detection System in Soldiers  - Developed an emotion and neurological anomaly detection system for real-time monitoring of military personnel.\nAI-Powered Sleep Stage Analyzer - Developed a military-grade AI system for monitoring sleep stages and identifying sleep disorders in soldiers.",
        },
        {
            during: "Mar 2015 - Sep 2018",
            job: "Machine Learning Engineer",
            where: "Ensign Services",
            des: "Generative Code Completion - Developed an AI-powered code completion tool to augment the productivity of developers by predicting and suggesting code snippets.",
        }
    ],

}

function initUniversity() {
    $("#university").html('')
    data.universities.forEach(universitiy => {
        $("#university").append(`
            <div class="timeline-item clearfix">
                <div class="left-part">
                    <h5 class="item-period">${universitiy.during}</h5>
                    <span class="item-company">${universitiy.name}</span>
                </div>
                <div class="divider"></div>
                <div class="right-part">
                    <h4 class="item-title">${universitiy.job}</h4>
                </div>
            </div>
        `)
    })
}

function initExperience() {
    $("#experience").html('')
    data.experiences.forEach(experience => {
        $("#experience").append(`
        <div class="timeline-item clearfix">
            <div class="left-part">
                <h5 class="item-period">${experience.during}</h5>
                <span class="item-company">${experience.where}</span>
            </div>
            <div class="divider"></div>
            <div class="right-part">
                <h4 class="item-title">${experience.job}</h4>
                <p>${experience.des}</p>
            </div>
        </div>
        `)
    })
}


function init() {
    initUniversity();
    initExperience();
}

init();

function myFunction() {
    document.getElementById("myAudio").play();
}

window.onAudioMute = () => {
    const audio = document.getElementById("myAudio");

    if (audio.volume == 0.3) {
        document.getElementById("audioPart").setAttribute("class", "menu-icon lnr lnr-volume-high");
        audio.pause();
        audio.volume = 0;
    } else {
        document.getElementById("audioPart").setAttribute("class", "menu-icon lnr lnr-volume");
        audio.play();
        audio.volume = 0.3;
    }


}

window.onclick = () => {
    myFunction();
}
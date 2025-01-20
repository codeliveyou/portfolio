//INIT DATA
let data = {
    universities: [
        {
            during: "2014-2018",
            name: "ITS – Visoka škola strukovnih studija za informacione tehnologije",
            job: "Information Technology"
        },
    ],
    experiences: [
        {
            during: "November 2020 - Present",
            job: "Lead WebGL Graphics Engineer ",
            where: "Excellarate",
            des: "Creating and Implementing stunning WebGL Graphics Visualization for one of the world's largest providers of products and services to the energy industry.",
        },
        {
            during: "July 2020 - July 2021",
            job: "Senior WebGL Developer",
            where: "Verdiseno, Inc.",
            des: "This role involves implementing new capabilities to the front end of a WebGL-based graphical design tool and increasing test coverage using Three.js, React.js, Mobx, and Storybook. Lyra Solar and Solar Design Tool",
        },
        {
            during: "January 2020 - January 2021",
            job: "Unity Game Developer ",
            where: "Terahard Ltd.",
            des: "Worked on a world class upcoming fighter game in Unity3D using DOTS and ECS Jobs system. https://store.steampowered.com/app/417130/Era/",
        },
        {
            during: "July 2019 - December 2019",
            job: "Graphics Engineer",
            where: "Homevista Decor and Furnishings Pvt. Ltd",
            des: "Worked on a 3D virtual interior design platform for the browser using WebGL and ThreeJS. http://spacecraft.homelane.com",
        },
        {
            during: "May 2018 - April 2019",
            job: "WebGL Developer",
            where: "Inmagine Innovation Sdn. Bhd.",
            des: "Worked on world class image editing WebGL Projects and WebGL Games http://www.pixlr.com/x/ | http://www.pixlr.com/e/",
        },
        {
            during: "July 2014 - April 2018",
            job: "Game Developer",
            where: "Logic Simplified",
            des: "Game Development in Unity3D, ImpactJS, JavaScript-WebGL, Node.JS, Socket.IO for Multiple Mobile and Desktop Devices. The job responsibility in this company includes development of 2D and 3D games in Unity3D-C# after the assets are provided by the design team. I have also developed games for web browsers here using Three.JS, ImpactJS and Phaser libraries..",
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
    
    if(audio.volume == 0.3) {
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
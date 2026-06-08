// =========================
// NAVEGACIÓN
// =========================

function showSection(sectionId){

    const pages =
    document.querySelectorAll(".page");

    pages.forEach(page => {

        page.classList.remove(
            "active-page"
        );

    });

    document
    .getElementById(sectionId)
    .classList.add(
        "active-page"
    );

    document
    .querySelectorAll(".nav-btn")
    .forEach(btn =>
        btn.classList.remove(
            "active"
        )
    );

}

// =========================
// CANCIONES
// =========================

const songs = [

{
title:"¿A qué te sabe el café?",
memory:"¿Cuántas veces podré respirar sin necesitarte?",
link:"https://www.youtube.com/watch?v=6xSbRxr480E"
},

{
title:"Never Let Me Go",
memory:"Honey, you and me, and no one.",
link:"https://www.youtube.com/watch?v=ohGVmwNkdFk"
},

{
title:"Reina Pepiada",
memory:"Por tus besos mataría.",
link:"https://www.youtube.com/watch?v=Zn37zIBGv5M"
},

{
title:"Te Soñé",
memory:"No sé qué fue, solo soñé.",
link:"https://www.youtube.com/watch?v=xkInIM-8VRY"
},

{
title:"El Hombre Que Yo Amo",
memory:"Él es mi motivo, es mi propio sol.",
link:"https://www.youtube.com/watch?v=g-0xdtTTaw4"
},

{
title:"Materia Gris",
memory:"¿Por qué verte a los ojos se siente como ver al universo?",
link:"https://www.youtube.com/watch?v=YNPhcMFEJvc"
},

{
title:"Amor de Mis Amores",
memory:"No tienes remedio, eres mi gran amor.",
link:"https://www.youtube.com/watch?v=otP2HT5m9GI"
},

{
title:"Corazón de Melón",
memory:"Melón, melón, melón ❤️",
link:"https://www.youtube.com/watch?v=f_E5MgeiOWs"
},

{
title:"Ya No Vivo Por Vivir",
memory:"Quiero ser de ti.",
link:"https://www.youtube.com/watch?v=sIM4mDQJib4"
},

{
title:"Fue Lo Más Bello",
memory:"Una de las canciones más especiales.",
link:"https://www.youtube.com/watch?v=FCi-Xp2TVoQ"
},

{
title:"Wrinkle",
memory:"Yo jamás te dejaría.",
link:"https://www.youtube.com/watch?v=4zEkbojhRCk"
},

{
title:"Kuchizuke Diamond",
memory:"Diamantes en besos te daré.",
link:"https://www.youtube.com/watch?v=8HUbQcla4ek"
}

];

// =========================
// GENERAR TARJETAS
// =========================

const songsContainer =
document.getElementById(
    "songsContainer"
);

songs.forEach(song => {

    songsContainer.innerHTML += `

    <div class="song-card">

        <h3>${song.title}</h3>

        <p>${song.memory}</p>

        <div class="song-buttons">

            <button
            class="listen"
            onclick="window.open('${song.link}','_blank')">

                🎧 Escuchar

            </button>

            <button
            class="memory"
            onclick="showMemory(
                '${song.title}',
                '${song.memory}'
            )">

                💌 Recuerdo

            </button>

        </div>

    </div>

    `;

});

// =========================
// MODAL
// =========================

function showMemory(title,text){

    document
    .getElementById(
        "memoryTitle"
    )
    .innerText = title;

    document
    .getElementById(
        "memoryText"
    )
    .innerText = text;

    document
    .getElementById(
        "memoryModal"
    )
    .style.display = "flex";
}

function closeMemory(){

    document
    .getElementById(
        "memoryModal"
    )
    .style.display = "none";

}

// =========================
// CONTADOR DE DÍAS
// =========================

const startDate =
new Date("2025-05-25");

const today =
new Date();

const diff =
today - startDate;

const days =
Math.floor(
diff /
(1000*60*60*24)
);

document
.getElementById(
    "daysCounter"
)
.innerText = days;

// =========================
// TOTAL DE CANCIONES
// =========================

document
.getElementById(
    "songCounter"
)
.innerText = songs.length;

// =========================
// CERRAR MODAL
// =========================

window.onclick = function(e){

    const modal =
    document.getElementById(
        "memoryModal"
    );

    if(e.target === modal){

        modal.style.display =
        "none";

    }

}

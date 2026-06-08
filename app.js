const songs = [

{
title:"¿A qué te sabe el café?",
link:"https://www.youtube.com/watch?v=6xSbRxr480E",
memory:"¿Cuántas veces podré respirar sin necesitarte?"
},

{
title:"Never Let Me Go",
link:"https://www.youtube.com/watch?v=ohGVmwNkdFk",
memory:"Honey, you and me, and no one."
},

{
title:"Materia Gris",
link:"https://www.youtube.com/watch?v=YNPhcMFEJvc",
memory:"¿Por qué verte a los ojos se siente como ver al universo?"
},

{
title:"Te Soñé",
link:"https://www.youtube.com/watch?v=xkInIM-8VRY",
memory:"No sé qué fue, solo soñé."
}

];

const container =
document.getElementById("songs");

songs.forEach(song=>{

container.innerHTML += `

<div class="song-card">

<h3>${song.title}</h3>

<p>${song.memory}</p>

<div class="song-buttons">

<button
class="listen"
onclick="window.open('${song.link}')">
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

function showMemory(title,text){

document.getElementById(
"memoryTitle"
).textContent = title;

document.getElementById(
"memoryText"
).textContent = text;

document.getElementById(
"memoryModal"
).style.display = "flex";
}

function closeMemory(){

document.getElementById(
"memoryModal"
).style.display = "none";
}

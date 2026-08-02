const text=[
"ETQ Reliance Consultant",
"ETQ Developer",
"ETQ Administrator",
"Production Support Engineer"
];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){

current=text[i];

if(!isDeleting){

document.getElementById("typing").innerHTML=current.substring(0,j++);

if(j>current.length){

isDeleting=true;

setTimeout(type,1500);

return;

}

}else{

document.getElementById("typing").innerHTML=current.substring(0,j--);

if(j===0){

isDeleting=false;

i++;

if(i===text.length) i=0;

}

}

setTimeout(type,isDeleting?40:90);

}

type();

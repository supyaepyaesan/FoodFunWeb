AOS.init();
window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
});

let rating;
let chg=(star)=>{
    for(i=1;i<=5;i++){
        document.getElementById(i).style.color="gray";
    }
    let n=parseInt(star.id);
    rating=n;
    for(i=1;i<=n;i++){
        document.getElementById(i).style.color="orange";
    }
}

let ratingt;
let ch=(star1)=>{
    for(i=6;i<=10;i++){
        document.getElementById(i).style.color="gray";
    }
    let n=parseInt(star1.id);
    ratingt=n;
    for(i=6;i<=n;i++){
        document.getElementById(i).style.color="orange";
    }
}


let ratingc;
let c=(star2)=>{
    for(i=11;i<=15;i++){
        document.getElementById(i).style.color="gray";
    }
    let n=parseInt(star2.id);
    ratingc=n;
    for(i=11;i<=n;i++){
        document.getElementById(i).style.color="orange";
    }
}

let ratingh;
let chgs=(star3)=>{
    for(i=16;i<=20;i++){
        document.getElementById(i).style.color="gray";
    }
    let n=parseInt(star3.id);
    ratingh=n;
    for(i=16;i<=n;i++){
        document.getElementById(i).style.color="orange";
    }
}

let ratings;
let chs=(star4)=>{
    for(i=21;i<=25;i++){
        document.getElementById(i).style.color="gray";
    }
    let n=parseInt(star4.id);
    ratings=n;
    for(i=21;i<=n;i++){
        document.getElementById(i).style.color="orange";
    }
}

let ratins;
let cs=(star5)=>{
    for(i=26;i<=30;i++){
        document.getElementById(i).style.color="gray";
    }
    let n=parseInt(star5.id);
    ratins=n;
    for(i=26;i<=n;i++){
        document.getElementById(i).style.color="orange";
    }
}

let ratincs;
let chge=(star6)=>{
    for(i=31;i<=35;i++){
        document.getElementById(i).style.color="gray";
    }
    let n=parseInt(star6.id);
    ratincs=n;
    for(i=31;i<=n;i++){
        document.getElementById(i).style.color="orange";
    }
}

let ratinsc;
let che=(star7)=>{
    for(i=36;i<=40;i++){
        document.getElementById(i).style.color="gray";
    }
    let n=parseInt(star7.id);
    ratinsc=n;
    for(i=36;i<=n;i++){
        document.getElementById(i).style.color="orange";
    }
}

let ratigcs;
let ce=(star8)=>{
    for(i=41;i<=45;i++){
        document.getElementById(i).style.color="gray";
    }
    let n=parseInt(star8.id);
    ratigcs=n;
    for(i=41;i<=n;i++){
        document.getElementById(i).style.color="orange";
    }
}



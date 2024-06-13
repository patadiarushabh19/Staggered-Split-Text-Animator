function breakText(){
    var h1 = document.querySelector("h1");
var h1Text = h1.textContent;

var splittedText = h1Text.split("");
var halfValue = Math.floor(splittedText.length/2)
var clutter = "";


splittedText.forEach(function (e, idx) {
//   
if(idx<halfValue){
    clutter += `<span class="a">${e}</span>`;

}else{
    clutter += `<span class="b">${e}</span>`;
}
});

h1.innerHTML = clutter;

}

breakText()


gsap.from("h1 .a",{
    y:50,
    opacity:0,
    durations:0.6,
    delay:0.5,
    stagger:0.1,
    opacity:0
})

gsap.from("h1 .b",{
    y:50,
    opacity:0,
    durations:0.6,
    delay:0.5,
    stagger:-0.15,
    opacity:0
})
let t = parseFloat(document.querySelector(".temperature").innerHTML)
let s = parseFloat(document.querySelector(".wind-speed").innerHTML)
let chillFactor = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16))

if (t <= 50 && s > 3) {
    document.querySelector(".wind-chill").innerHTML = Math.ceil(chillFactor) + '&#8457';
}
else {
    document.querySelector(".wind-chill").innerHTML = "N/A"
}
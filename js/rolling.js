

$(document).ready(function() {
    const r1 = new CircleType(document.getElementById('rolling1')).radius(365)
    const r2 = new CircleType(document.getElementById('rolling2')).radius(150).dir(-1);
    const r3 =  new CircleType(document.getElementById('rolling3')).radius(124)
    const r4 =  new CircleType(document.getElementById('rolling4')).radius(80).dir(-1);
    const r5 =  new CircleType(document.getElementById('rolling5')).radius(150).dir(-1);
    r1.forceWidth(true);
    r2.forceWidth(true);
    r3.forceWidth(true).forceHeight(true);
    r4.forceWidth(true);
    r5.forceWidth(true);


});

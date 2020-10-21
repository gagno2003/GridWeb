var degCount =0;
var container = document.getElementById('textHead');
var charText= 'me a few seconds to draw it. but it took me 34 years to lear how to draw it in a few seconds '
for( var i = 0; i < charText.length ; i++){
    var charTextChild = '<span style = "transform: rotate('+degCount+'deg)">';
    charTextChild+=charText[i];
    degCount+=3;
    charTextChild+='</span>';
    container.innerHTML+=charTextChild;
}



$( function() {

lines = httpGet("allAudioLinks.txt").split("mp3.");


//for (i=0; i < lines.length; i++) {
//	$("body").append
//}
for (i =0; i < lines.length; i++) {
text = '<li><a onclick="insertAudio(this,'+"'<audio src="+lines[i].split(",")[1]+"mp3></audio>'"+')" class="button">'+lines[i].split(",")[0]+'</a>​</li>';
//console.log(text);
$("ul").append(text);
}
});
function insertAudio(mySelf,audio) {
	if ( $(mySelf).has("audio").length == 0 ) {
	$(mySelf).append(audio);
	}
	$(mySelf).has("audio")[0].childNodes[1].play();
}
sexy=[];


function httpGet(theUrl)
{

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
 // false for synchronous request

    xmlHttp.send( null );

    return xmlHttp.responseText;
}

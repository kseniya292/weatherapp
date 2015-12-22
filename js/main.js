$(document).ready(function(){
 /* $(".fb-album-container").FacebookAlbumBrowser({
    account: "Montezuma-Half-Marathon-5K-970747939609605"
  });*/

/*$("").hover(function () {
	$(this).find("img").animate({
		"opacity" : 0.6,
	}); //animate on
}, function () {
	$(this).find("img").animate({
		"opacity" : 1.0, 
	}); // animate off
}); // complete hover*/

$(".mainphoto").hover(function () {

	$(this).find("img").animate({
		"opacity" : 0.6,
	}); //animate on

}, function () {
	$(this).find("img").animate({
		"opacity" : 1.0, 
	}); // animate off

}); // complete hover



}); //ready method end
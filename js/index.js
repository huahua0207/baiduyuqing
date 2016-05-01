$(function(){
	var meau=$(".meau");
	// console.log(meau);
	var navLists=$(".nav-left-list");
	console.log(navLists);
	meau.click(function(){

      navLists.slideToggle();
	});
})
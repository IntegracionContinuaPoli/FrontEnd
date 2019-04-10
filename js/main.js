$(document).ready(function(){
	$(".userDropBtn").click(function(){
		$("#userDropDownList").toggleClass("show");
	});
});

$(document).ready(function(){
	$(".menuDropBtn").click(function(){
		$("#menuDropDownList").toggleClass("show");
	});
});




$(document).ready(function(){

	$(window).click(function(event){
		
		if (!event.target.matches('.userDropBtn')) {
			var dropdowns = document.getElementsByClassName("userDropBtn-Content");
			var i;
			for (i = 0; i < dropdowns.length; i++) {
				var openDropdown = dropdowns[i];
				if (openDropdown.classList.contains('show')) {
					openDropdown.classList.remove('show');
				}
			}
		}
		
	});
});


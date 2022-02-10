/*portfolio*/
var array=[
	{name:"Administrator Panel",description:"BootStrap, JavaScript, PHP",sourceName:"dummy.jpg"},
	{name:"Administrator Panel",description:"HTML, CSS,JavaScript, PHP",sourceName:"dummy.jpg"},
	{name:"H World Inc.",description:"HTML, CSS, JavaScript",sourceName:"dummy.jpg"},
	{name:"ABC",description:"HTML, CSS, PHP, Photoshop",sourceName:"dummy.jpg"},
	{name:"Administrator Panel",description:"HTML, CSS,JavaScript, PHP",sourceName:"dummy.jpg"},
	{name:"H World Inc.",description:"HTML, CSS, JavaScript",sourceName:"dummy.jpg"},
	{name:"ABC",description:"HTML, CSS, PHP, Photoshop",sourceName:"dummy.jpg"},
	{name:"Administrator Panel",description:"HTML, CSS,JavaScript, PHP",sourceName:"dummy.jpg"},
	{name:"H World Inc.",description:"HTML, CSS, JavaScript",sourceName:"dummy.jpg"},
	{name:"ABC",description:"HTML, CSS, PHP, Photoshop",sourceName:"dummy.jpg"},
	{name:"Administrator Panel",description:"HTML, CSS,JavaScript, PHP",sourceName:"dummy.jpg"},
	{name:"H World Inc.",description:"HTML, CSS, JavaScript",sourceName:"dummy.jpg"},
	{name:"ABC",description:"HTML, CSS, PHP, Photoshop",sourceName:"dummy.jpg"},
	{name:"Administrator Panel",description:"HTML, CSS,JavaScript, PHP",sourceName:"dummy.jpg"},
	{name:"H World Inc.",description:"HTML, CSS, JavaScript",sourceName:"dummy.jpg"},
	{name:"ABC",description:"HTML, CSS, PHP, Photoshop",sourceName:"dummy.jpg"},
	{name:"Administrator Panel",description:"HTML, CSS,JavaScript, PHP",sourceName:"dummy.jpg"},
	{name:"H World Inc.",description:"HTML, CSS, JavaScript",sourceName:"dummy.jpg"},
	{name:"ABC",description:"HTML, CSS, PHP, Photoshop",sourceName:"dummy.jpg"},
 	{name:"Administrator Panel",description:"HTML, CSS,JavaScript, PHP",sourceName:"dummy.jpg"},
	{name:"H World Inc.",description:"HTML, CSS, JavaScript",sourceName:"dummy.jpg"},
	{name:"ABC",description:"HTML, CSS, PHP, Photoshop",sourceName:"dummy.jpg"},
	];
	
jQuery(document).ready(function(){
	for(i=0;i<array.length;i++){		
		var portfolioArticle="<article class=\"projectArticle\">"+
								"<img src=\"images/small/"+array[i].sourceName+"\" data-icon=\""+array[i].sourceName+"\" class=\"projectImage\" />"+
								"<div class=\"description\">"+
								"<p>"+array[i].description+"</p>"+
								"<i class=\"zoom\"><a><span class=\"icon-search-plus\"></span></a></i>"+
								"</div>"+
								"<h3 class=\"projectTitle\">"+array[i].name+"</h3>"+
								"</article>";
		if(jQuery("body").attr("aria-label")=="portfolio"){
			jQuery(".projectsContainer").append(portfolioArticle);
		}else{
			jQuery(".projectsContainer").append(portfolioArticle);
			if(i>=2){break;}
		}
	}
});
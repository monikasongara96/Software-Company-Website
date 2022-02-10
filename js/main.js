// JavaScript Document
jQuery(document).ready(function(){
	
	jQuery.loadBigPortfolio=function(obj){
		var appendable=jQuery("<div id=\"fixedPortfolioWrapper\">"+
						"<div id=\"transparent\"></div>"+
						"<div id=\"fixedPortfolioInner\">"+
						"<span id=\"loading\">Loading...</span>"+
						"<span id=\"closeButton\" class=\"icon-close closeButton\"></span>"+
						"</div>"+
						"</div>");
		jQuery("body").append(appendable);
		var bigImg=jQuery("<img src=\"images/big/"+obj+"\" id=\"fixedPortfolioImage\" />");
		jQuery(bigImg).load(function(){
			jQuery("#fixedPortfolioInner").append(bigImg);
			jQuery("#fixedPortfolioImage").show(500);
		});
	}
	
	jQuery(document).on('click',".zoom",function(){
		jQuery.loadBigPortfolio(jQuery(this).parent(".description").parent(".projectArticle").children(".projectImage").attr("data-icon"));
	});
	
	jQuery(document).on('click',"#closeButton,#transparent",function(){
		jQuery("#fixedPortfolioWrapper").hide(1000,function(){
			jQuery("#fixedPortfolioWrapper").remove();
		});
	});
	
	jQuery(window).scroll(function(){
        if(jQuery(this).scrollTop()>100){
			jQuery("#moveToTop").addClass("active");
		}else{
			jQuery("#moveToTop").removeClass("active");
		}
    });
	
	jQuery(document).on('click',"#moveToTop",function(){
		jQuery("body,html").animate({scrollTop:0},500);
	});
	
	jQuery(document).on('click',".menu ul li a",function(){
		
		var hrefLink=jQuery(this).attr("href");
		hrefLink=hrefLink.split("#").join("");
		var scrollToOffset=jQuery("[name="+hrefLink+"]").offset().top;
		jQuery("body,html").animate({ scrollTop : scrollToOffset},700);
	});
});
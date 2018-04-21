/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
/*
 * jQuery hashchange event, v1.4, 2013-11-29
 * https://github.com/georgekosmidis/jquery-hashchange
 */
(function(e,t,n){"$:nomunge";function f(e){e=e||location.href;return"#"+e.replace(/^[^#]*#?(.*)$/,"$1")}var r="hashchange",i=document,s,o=e.event.special,u=i.documentMode,a="on"+r in t&&(u===n||u>7);e.fn[r]=function(e){return e?this.bind(r,e):this.trigger(r)};e.fn[r].delay=50;o[r]=e.extend(o[r],{setup:function(){if(a){return false}e(s.start)},teardown:function(){if(a){return false}e(s.stop)}});s=function(){function p(){var n=f(),i=h(u);if(n!==u){c(u=n,i);e(t).trigger(r)}else if(i!==u){location.href=location.href.replace(/#.*/,"")+i}o=setTimeout(p,e.fn[r].delay)}var s={},o,u=f(),l=function(e){return e},c=l,h=l;s.start=function(){o||p()};s.stop=function(){o&&clearTimeout(o);o=n};var d=function(){var e,t=3,n=document.createElement("div"),r=n.getElementsByTagName("i");while(n.innerHTML="<!--[if gt IE "+ ++t+"]><i></i><![endif]-->",r[0]);return t>4?t:e}();d&&!a&&function(){var t,n;s.start=function(){if(!t){n=e.fn[r].src;n=n&&n+f();t=e('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){n||c(f());p()}).attr("src",n||"javascript:0").insertAfter("body")[0].contentWindow;i.onpropertychange=function(){try{if(event.propertyName==="title"){t.document.title=i.title}}catch(e){}}}};s.stop=l;h=function(){return f(t.location.href)};c=function(n,s){var o=t.document,u=e.fn[r].domain;if(n!==s){o.title=i.title;o.open();u&&o.write('<script>document.domain="'+u+'"</script>');o.close();t.location.hash=n}}}();return s}()})(jQuery,this);
(function($){
	//back to top button function
	function backToTopScrollup(){
		//$('.back-to-top').on("click",function(){
		$('body').delegate(".back-to-top", "click",function(){
			$('html, body').animate({scrollTop: '0px'}, 800);
			//$("html, body").animate({ scrollTop: $(document).height() }, 1000);
		});
		
		$('body').delegate(".chat-with-us", "click",function(){
			$("html, body").animate({ scrollTop: $(document).height() }, 1000);
		});
		
	}
	//function for login form show on hover
	function loginFormShowHide(){
		//$('.login-icon-text-box').on("mouseover",function(){
		$('body').delegate(".login-icon-text-box", "click mouseover",function(){
			$('.user-login-wrapper').show();
				$('.user-login-wrapper').on("mouseleave",function(){
					$('.user-login-wrapper').hide(100);
				});
		});
		
		$(document).on('touchstart', function (event) {
			$('.login-icon-text-box').on("mouseover",function(){
				$('.user-login-wrapper').show();
			});
		});
		//$('.user-icon , .member-login-link').on("mouseover",function(){
		/*$('body').delegate(".user-icon , .member-login-link", "mouseover",function(){
			$('.user-login-wrapper').show();
		});*/
		//$('.login-wrapper , .user-login-wrapper').on("mouseleave",function(){
		/*$('body').delegate(".login-wrapper , .user-login-wrapper", "mouseleave",function(){
			$('.user-login-wrapper').hide();
		});	*/
		//for mobile and tab	
		$(document).on('touchstart', function (event) {
			if (!$(event.target).closest('.user-login-wrapper').length) {
				$('.user-login-wrapper').hide()
			}
		});	
	}
	//show and hide user settings block on clicking user profiles icon or text
	function userSettingsShowHide(){	
		$('body').delegate(".user--profile-icon , .user-profile-title ","mouseover",function(){
			$('.user-settings').show();
				$('.user-settings').on("mouseleave",function(){
					$('.user-settings').hide(100);
				});
		});
		/*$('.user--profile-icon , .user-profile-title , .left-page .user-profile-title').on("mouseover",function(){
			$('.user-settings').show();
				$('.user-settings').on("mouseleave",function(){
					$('.user-settings').hide(100);
				});
		});*/
		$(document).on('touchstart',function(event){
			if (!$(event.target).closest('.user-settings').length) {
				$('.user-settings').hide();
			}		
		});
		//****
		$('.search-mobile .search-bar').on("click",function(){
			//$('.search-mobile .search-bar').addClass("show");
			$('.search-block-mobile').toggle();
		});
		/*$(document).on('touchstart',function(event){
			if (!$(event.target).closest('.search-block-mobile ').length) {
				$('.search-block-mobile').hide();
			}		
		});*/
		
	}
	//function for mobile serach
	
	//user-account captcha
	function captchaReplace(){	
		var content = $('.user-register-block .captcha').clone();
		$('.user-register-block .captcha').remove();
		$('.user-register-block .field-group-format-wrapper').append(content);
	}
	
	//function for cop quicktab modification in logged out case
	function loggedOutQuicktabAlter(){
	
		if($("body").hasClass("not-logged-in")){	
			$('.node-type-work-group .cop-quicktab .resources , .node-type-work-group .cop-quicktab .e-learning , .node-type-work-group .cop-quicktab .experts').wrapAll('<li class="wrapped-list"> </li>');			
			if( $('.not-logged-in.node-type-work-group .wrapped-list li').length > 0 ){
				if( $('.not-logged-in .cop-quicktab ul.quicktabs-tabs li.about').length > 0 ){ 
						$('.not-logged-in .cop-quicktab ul.quicktabs-tabs li.about').after('<li class="knowledge"><a>'+Drupal.t("Knowledge")+'<div class="plus">+</div><div class="minus">-</div></a></li>');
				}
				else if( $('.not-logged-in.node-type-work-group .cop-quicktab ul.quicktabs-tabs li.about').length == 0 ){ 
						$('.cop-quicktab ul.quicktabs-tabs li:first-child').before('<li class="knowledge"><a>'+Drupal.t("Knowledge")+'<div class="plus">+</div><div class="minus">-</div></a></li>');
				}
			}		
			
			var content = $('.cop-main-header').clone();
			$('.cop-main-header').remove();
			$('.cop-quicktab .tab-content .quicktabs-tabpage:first-child').before(content);
			//$('.customized-quicktab-menu .tab-content').before(content);
			
		}
		/*function for cop quicktab modification in logged out case French*/
		if(($("body").hasClass("not-logged-in")) && ($("body").hasClass("i18n-fr")) ){	
			$('.node-type-work-group .cop-quicktab .portail, .node-type-work-group .cop-quicktab .trousses-à-outils, .node-type-work-group .cop-quicktab .ressources, .node-type-work-group .cop-quicktab .e-learning , .node-type-work-group .cop-quicktab .experts').wrapAll('<li class="wrapped-list"> </li>');			
			if( $('.not-logged-in.node-type-work-group .wrapped-list li').length > 0 ){
				if( $('.not-logged-in .cop-quicktab ul.quicktabs-tabs li.à-propos').length > 0 ){ 
						$('.not-logged-in .cop-quicktab ul.quicktabs-tabs li.à-propos').after('<li class="knowledge"><a>'+Drupal.t("Knowledge")+'<div class="plus">+</div><div class="minus">-</div></a></li>');
				}
				else if( $('.not-logged-in.node-type-work-group .cop-quicktab ul.quicktabs-tabs li.à-propos').length == 0 ){ 
						$('.cop-quicktab ul.quicktabs-tabs li:first-child').before('<li class="knowledge"><a>'+Drupal.t("Knowledge")+'<div class="plus">+</div><div class="minus">-</div></a></li>');
				}
			}		
			
			var content = $('.cop-main-header').clone();
			$('.cop-main-header').remove();
			$('.cop-quicktab .tab-content .quicktabs-tabpage:first-child').before(content);	
		}			
	}
	
	//for logged-in case
	//function for cop quicktab modification in logged in case
	function loggedInQuicktabAlter(){
		if(($("body").hasClass("logged-in")) && ($("body").hasClass("i18n-en"))){
		//cop-header shifted
			var content = $('.cop-main-header').clone();
			$('.cop-main-header').remove();
			$('.customized-quicktab-menu  .tab-content').before(content);
		//Removed the "about" tab from quicktab list
			$('.logged-in.node-type-work-group .quicktabs-tabs li.about').remove();
		//to wrap the quicktabs with a div instead of ul while moving to anther region
			$('.logged-in.node-type-work-group .quicktabs-tabs>li').wrapAll("<div class='cop-quicktab cop-logged-in-quicktab customized-quicktab-menu'></div>");
		//Adding "networks" to quicktab list 
			if($('.cop-logged-in-quicktab li.e-learning').length > 0){
				$('.cop-logged-in-quicktab>li.e-learning').after('<li class="knowledge"><a>'+Drupal.t("Networks")+'<div class="plus">+</div><div class="minus">-</div></a></li>');			
			}
			else if($('.cop-logged-in-quicktab li.e-discussion').length > 0){
				$('.cop-logged-in-quicktab>li.e-discussion').after('<li class="knowledge"><a>'+Drupal.t("Networks")+'<div class="plus">+</div><div class="minus">-</div></a></li>');	
			}
			else if( ($('.cop-logged-in-quicktab li.e-discussion').length == 0)&&($('.cop-logged-in-quicktab li.e-learning').length == 0) ){
				$('.cop-logged-in-quicktab>li:first-child').before('<li class="knowledge"><a>'+Drupal.t("Networks")+'<div class="plus">+</div><div class="minus">-</div></a></li>');
			}
		//Adding a wrapper next to "networks" in quicktab
			$('.cop-logged-in-quicktab .knowledge').after('<div class="wrapped-list"> </div>');
		//Adding experts and apply to become an expert inside the wrapper
			var content2 = $('.cop-logged-in-quicktab li.experts').clone();
			$('.cop-logged-in-quicktab li.experts').remove();
			$('.wrapped-list').append(content2);
		//wrapped div now moved to another region(wide-sidebar-first)
			var content = $('.cop-logged-in-quicktab').clone();
			$('.logged-in.node-type-work-group .quicktabs-tabs').remove();
			$('.logged-in.node-type-work-group .wide-sidebar-first').prepend(content);
		//links in quicktab not working when shifted to another region, so href is removed from links
			$('.cop-logged-in-quicktab>li a').removeAttr("href");
		//added active class to apply style for active li
			$('.cop-logged-in-quicktab>li:first-child').addClass("active");
			$('.cop-logged-in-quicktab .tab-content .quicktabs-tabpage:first-child').removeClass('quicktabs-hide');
		//adding links to the quicktab li's
			if($('.node-type-work-group .nid').length > 0)
				{
					var link_val = $('.node-type-work-group .nid')[0].innerHTML;
				}
				if($('.node-type-work-group .nid').text() != ''){
					$('.customized-quicktab-menu li.e-discussion a').attr('href','/cop-discussions/'+link_val);
					$('.customized-quicktab-menu li.e-learning a').attr('href','/');
					$('.customized-quicktab-menu li.experts a').attr('href','/expert-pool/'+link_val);
					$('.customized-quicktab-menu li.resources a').attr('href','/resource-cop/'+link_val);	
					$('.customized-quicktab-menu li.suggestions a').attr('href','/suggestions-cop/'+link_val);	
					$('.logged-in .wrapped-list').append("<li class='Apply-to-become-an-expert'><a href='/expert-pool-apply/"+link_val+" '> Apply to become an Expert</a></li>");
				}		
		}

		if(($("body").hasClass("logged-in")) && ($("body").hasClass("i18n-fr")) ){
		//cop-header shifted
			var content = $('.cop-main-header').clone();
			$('.cop-main-header').remove();
			$('.customized-quicktab-menu  .tab-content').before(content);
		//Removed the "about" tab from quicktab list
			$('.logged-in.node-type-work-group li.à-propos').remove();
		//to wrap the quicktabs with a div instead of ul while moving to anther region
			$('.logged-in.node-type-work-group .quicktabs-tabs>li').wrapAll("<div class='cop-quicktab cop-logged-in-quicktab customized-quicktab-menu'></div>");
		//Adding "networks" to quicktab list 
			if($('.cop-logged-in-quicktab li.e-learning').length > 0){
				$('.cop-logged-in-quicktab>li.e-learning').after('<li class="knowledge"><a>'+Drupal.t("Networks")+'<div class="plus">+</div><div class="minus">-</div></a></li>');			
			}
			else if($('.cop-logged-in-quicktab li.e-discussion').length > 0){
				$('.cop-logged-in-quicktab>li.e-discussion').after('<li class="knowledge"><a>'+Drupal.t("Networks")+'<div class="plus">+</div><div class="minus">-</div></a></li>');	
			}
			else if( ($('.cop-logged-in-quicktab li.e-discussion').length == 0)&&($('.cop-logged-in-quicktab li.e-learning').length == 0) ){
				$('.cop-logged-in-quicktab>li:first-child').before('<li class="knowledge"><a>'+Drupal.t("Networks")+'<div class="plus">+</div><div class="minus">-</div></a></li>');
			}
		//Adding a wrapper next to "networks" in quicktab
			$('.cop-logged-in-quicktab .knowledge').after('<div class="wrapped-list"> </div>');
		//Adding experts and apply to become an expert inside the wrapper
			var content2 = $('.cop-logged-in-quicktab li.experts').clone();
			$('.cop-logged-in-quicktab li.experts').remove();
			$('.wrapped-list').append(content2);
		//wrapped div now moved to another region(wide-sidebar-first)
			var content = $('.cop-logged-in-quicktab').clone();
			$('.logged-in.node-type-work-group .quicktabs-tabs').remove();
			$('.logged-in.node-type-work-group .wide-sidebar-first').prepend(content);
		//links in quicktab not working when shifted to another region, so href is removed from links
			$('.cop-logged-in-quicktab>li a').removeAttr("href");
		//added active class to apply style for active li
			$('.cop-logged-in-quicktab>li:first-child').addClass("active");
			$('.cop-logged-in-quicktab .tab-content .quicktabs-tabpage:first-child').removeClass('quicktabs-hide');
		//adding links to the quicktab li's
			if($('.node-type-work-group .nid').length > 0)
				{
					var link_val = $('.node-type-work-group .nid')[0].innerHTML;
				}
				if($('.node-type-work-group .nid').text() != ''){
					
                                        $('.customized-quicktab-menu li.e-discussion a').attr('href','/fr/cop-discussions/'+link_val);

                                        $('.customized-quicktab-menu li.e-learning a').attr('href','/fr');
					$('.customized-quicktab-menu li.experts a').attr('href','/fr/expert-pool/'+link_val);	
					$('.customized-quicktab-menu li.portail a').attr('href','/fr/resource-cop/'+link_val);	
					$('.customized-quicktab-menu li.trousses-à-outils a').attr('href','/fr/resource-cop/'+link_val);
					$('.customized-quicktab-menu li.ressources a').attr('href','/fr/resource-cop/'+link_val);
					$('.customized-quicktab-menu li.suggestions a').attr('href','/fr/suggestions-cop/'+link_val);	
					$('.logged-in .wrapped-list').append("<li class='Apply-to-become-an-expert'><a href='/fr/expert-pool-apply/"+link_val+" '> Apply to become an Expert</a></li>");
				}		
		}
		
	}	
	/*******************/
	
	//function for adding comments link like join now in quicktab
	function addCommentsLink(){
		var content = $('.node-type-work-group .comments-link ').clone();
		$('.node-type-work-group .comments-link ').remove();
		$('.cop-quicktab ul.quicktabs-tabs>li:last-child').after(content);
		$('.customized-quicktab-menu>li:last-child').after(content);
		
		var content2 = $('.node-type-events .typeAddDropdown').clone();
		 $('.node-type-events .typeAddDropdown').remove();
		$('.node-type-events .quicktabs-tabs>li:last-child').after(content2);
		
		//to add register buttons in quicktabs
		var regFrm = $('.node-type-events .register-event-webform').clone();
		$('.node-type-events .register-event-webform').remove();
		if(($('.node-type-events').hasClass("logged-in"))&&($('.node-type-events .typeAddDropdown').length == 0 )){
			//$('.node-type-events.logged-in .typeAddDropdown').after(regFrm);
			$('.node-type-events.logged-in .quicktabs-tabs>li:last-child').after(regFrm);
		}
		else if($('.node-type-events .typeAddDropdown').length > 0 ){
			$('.node-type-events.logged-in .typeAddDropdown').after(regFrm);
		}
		else{
			$('.node-type-events .quicktabs-tabs>li:last-child').after(regFrm);
		}
				
	}
	//function for quictabs expanding
	function quicktabListShowHide(){
		$('.knowledge').on("click",function(){		
			if( $('.cop-quicktab').hasClass("showlist") ){			
				$('.cop-quicktab').removeClass("showlist");
			}
			else{
				$('.cop-quicktab').addClass("showlist");			
			}					
		});	
		
		$(".node-type-events ul.quicktabs-tabs li , .node-type-events ul.quicktabs-tabs li>a").on("click",function(){
			$(".quicktab-events-page ul.quicktabs-tabs , .quicktab-events-page .tab-content ").css("height","auto");
			$(".quicktab-events-page ul.quicktabs-tabs , .quicktab-events-page .tab-content ").equalHeights();
		});
		
		$('.logged-in.node-type-work-group .cop-logged-in-quicktab .knowledge').on("click",function(){
			$(".wide-sidebar-first , .wide-content , .wide-sidebar-second ").css("height","auto");
			$(".wide-sidebar-first , .wide-content , .wide-sidebar-second ").equalHeights();
		});
		$('.not-logged-in.node-type-work-group ul.quicktabs-tabs li , .not-logged-in.node-type-work-group ul.quicktabs-tabs li>a ').on("click",function(){
			$(".not-logged-in.node-type-work-group .cop-quicktab .quicktabs-tabs , .not-logged-in.node-type-work-group .cop-quicktab .tab-content").css("height","auto");
			$(".not-logged-in.node-type-work-group .cop-quicktab .quicktabs-tabs , .not-logged-in.node-type-work-group .cop-quicktab .tab-content").equalHeights();
		});	
				
		//for read more and read less in quicktab content
		$('.site-quicktab-style .more-link-cop').on("click",function(){
			//initEquiHeight();
			if( $('.site-quicktab-style .kp-li-body-txt ').hasClass("hidden") ){
				$('.site-quicktab-style .kp-li-body-txt ').removeClass("hidden");
				$('.site-quicktab-style .kp-li-body-txt-less ').addClass("hidden");
				$('.site-quicktab-style .more-link-cop').text('Read less');
			}
			else if($('.site-quicktab-style .kp-li-body-txt-less ').hasClass("hidden")){
				$('.site-quicktab-style .kp-li-body-txt-less ').removeClass("hidden");
				$('.site-quicktab-style .kp-li-body-txt ').addClass("hidden");	
				$('.site-quicktab-style .more-link-cop').text('Read more');
			}
			$(".not-logged-in.node-type-work-group .cop-quicktab .quicktabs-tabs , .not-logged-in.node-type-work-group .cop-quicktab .tab-content").css("height","auto");
			$(".not-logged-in.node-type-work-group .cop-quicktab .quicktabs-tabs , .not-logged-in.node-type-work-group .cop-quicktab .tab-content").equalHeights();			
			
			$(".wide-sidebar-first , .wide-content , .wide-sidebar-second ").css("height","auto");
			$(".wide-sidebar-first , .wide-content , .wide-sidebar-second ").equalHeights();
			
		});
		
	}
	
	//function for events inner page quicktab alter
		function eventsInnerAlter(){
			if($("body").hasClass("node-type-events")){	
				$('.node-type-events .cop-quicktab .resources , .node-type-events .cop-quicktab .portal ').wrapAll('<li class="wrapped-list"> </li>');			
				if( $('.node-type-events .wrapped-list li').length > 0 ){
					if( $('.node-type-events .cop-quicktab ul.quicktabs-tabs li.about').length > 0 ){ 
							$('.node-type-events .cop-quicktab ul.quicktabs-tabs li.about').after('<li class="knowledge"><a>'+Drupal.t("Knowledge")+'<div class="plus">+</div><div class="minus">-</div></a></li>');
					}
					else if( $('.node-type-events .cop-quicktab ul.quicktabs-tabs li.about').length == 0 ){ 
							$('.node-type-events .cop-quicktab ul.quicktabs-tabs li:first-child').before('<li class="knowledge"><a>'+Drupal.t("Knowledge")+'<div class="plus">+</div><div class="minus">-</div></a></li>');
					}
				}				
			}

			if(($("body").hasClass("node-type-events")) && ($("body").hasClass("i18n-fr")) ){	
				$('.node-type-events .cop-quicktab .portail, .node-type-events .cop-quicktab .trousses-à-outils, .node-type-events .cop-quicktab .ressources').wrapAll('<li class="wrapped-list"> </li>');			
				if( $('.node-type-events .wrapped-list li').length > 0 ){
					if( $('.node-type-events .cop-quicktab ul.quicktabs-tabs li.à-propos').length > 0 ){ 
							$('.node-type-events .cop-quicktab ul.quicktabs-tabs li.à-propos').after('<li class="knowledge"><a>'+Drupal.t("Knowledge")+'<div class="plus">+</div><div class="minus">-</div></a></li>');
					}
					else if( $('.node-type-events .cop-quicktab ul.quicktabs-tabs li.à-propos').length == 0 ){ 
							$('.node-type-events .cop-quicktab ul.quicktabs-tabs li:first-child').before('<li class="knowledge"><a>'+Drupal.t("Knowledge")+'<div class="plus">+</div><div class="minus">-</div></a></li>');
					}
				}				
			}
		}
		
	//function for gallery inner page to show gallery details
	function galleryDetailsShowHide(){
		
		var cols = $(".master-wrapper .views-row");
		var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
		if(width>=992){
			colCount=4;
		}
		else if(width>=768&&width<992){
			colCount=2;
		}
		else {
			colCount=1;
		}
		for(var i = 0; i < cols.length; i+=colCount) {
			cols.slice(i, i+colCount).wrapAll("<div class='grouper'></div>");
		}
		$(".master-wrapper .grouper").after("<div class='detailed-view sub-heading col-xs-12 clear-all'></div>");	
		
		$(".master-wrapper .grouper .gallery-thumb img").click(function(){
			var clickedItem=$(this).closest(".grouper").next(".detailed-view");
			if($(clickedItem).is(":visible")==false){
				$(".detailed-view").not(clickedItem).slideUp();
				clickedItem.slideToggle();
			}else{
				if($(this).hasClass("active")==false){
					clickedItem.slideUp();
					clickedItem.slideDown();
				}
			}
			clickedItem.html($(this).closest(".gallery-thumb").siblings(".gallery-details-wrap").html());
			clickedItem.prepend("<div class='close-btn'>X</div>")
			
			$(".master-wrapper .grouper .gallery-thumb").removeClass("active");
			$(".master-wrapper .grouper .gallery-thumb img").removeClass("active");
			$(this).addClass("active");
			$(this).closest(".gallery-thumb").addClass("active");	
	
		});
	
		$(".master-wrapper").on("click",".detailed-view .close-btn",function(){
			$(".detailed-view").slideUp();
			$(".master-wrapper .grouper .gallery-thumb").removeClass("active");
			$(".master-wrapper .grouper .gallery-thumb img").removeClass("active");
		});	
		
		var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
			if(width > 991)
				{
					$(".page-galleries .grouper .views-row:nth-child(3) .gallery-thumb img").click(function(){
						$('.page-galleries .detailed-view').css({"float":"right"});
					});
					$(".page-galleries .grouper .views-row:nth-child(4) .gallery-thumb img").click(function(){
						$('.page-galleries .detailed-view').css({"float":"right"});
					});	
					$(".page-galleries .grouper .views-row:nth-child(2) .gallery-thumb img").click(function(){
						$('.page-galleries .detailed-view').css({"float":"left"});
					});
					$(".page-galleries .grouper .views-row:nth-child(1) .gallery-thumb img").click(function(){
						$('.page-galleries .detailed-view').css({"float":"left"});
					});		
				}		
	
	}	
	//function for cop-logged-in page filter field shifting
	function copFilterShift(){
		var content = $('.cop-calender .view-filters').clone();
		$('.cop-calender .view-filters').remove();
		$('.cop-calender .view-header').before(content);
	}
	
	//function for adding div under regions for shadow effect
	function shadowDiv(){
		//$('.wide-content').after("<div class='shadow-div'></div>");
	}
	
	//function password strngth shift
	function passwordStrength(){
		var content = $('.page-user .form-type-password .password-strength').clone();
		$('.page-user .form-type-password .password-strength').remove();
		$('.page-user .form-type-password.form-item-pass-pass1 input').after(content);
		
		var content2 = $('.page-user .form-type-password div.password-confirm').clone();
		$('.page-user .form-type-password div.password-confirm').remove();
		$('.page-user .form-type-password.form-item-pass-pass2 input').after(content2);
	}

	//function for wrapping the filter fields and showing it on click in resource landing page
	function resourcePageAlter(){
		//added a div in search box of resource filter
		$('.resource-filter-block .views-exposed-widgets>div:nth-child(1)').append("<div class='resource-search-icon'></div>");
		//fields of search form wrapped with a div and make the wrapper hide and show on click
		$('.resource-filter-block .views-exposed-widgets>div:nth-child(2) , .resource-filter-block .views-exposed-widgets>div:nth-child(3) , .resource-filter-block .views-exposed-widgets>div:nth-child(4) , .resource-filter-block .views-exposed-widgets>div:nth-child(5),.resource-filter-block .views-exposed-widget.views-submit-button').wrapAll("<div class='filter-wrapper'> </div>");
		//$('body').delegate(".resource-filter-advanced", "click",function(){
		$('.resource-filter-advanced').on("click",function(){
			$('.page-resources .main-container>.row>aside').css({"height":"auto"});
			$('.page-resources .main-container>.row>.col-sm-9 ').css("height","auto");
			if($('.resource-filter-block').hasClass("show")){
				$('.resource-filter-block').removeClass("show");
				$('.resource-filter-advanced .show-hide').text('+');
			}
			else{
				$('.resource-filter-block').addClass("show");
				$('.resource-filter-advanced .show-hide').text('-');
			}
			$(".page-resources .main-container>.row>aside , .page-resources .main-container>.row>.col-sm-9 ").equalHeights();
			var h1= $('.page-resources .main-container>.row>aside').height();
			var h2= $('.page-resources .main-container>.row>.col-sm-9 ').height();
		});
		//triggered the click event of apply button when search icon in resource search box is clicked
		$('body').delegate(".resource-search-icon", "click",function(){
			$('.resource-filter-block .views-exposed-widgets button').trigger('click');
		});
		
	}
	
	function ieResourceSearch(){
		var ua = window.navigator.userAgent
		var msie = ua.indexOf ( "MSIE " )
		var majorVersion = parseInt (ua.substring (msie+5, ua.indexOf (".", msie )))
			
		if (majorVersion == 9) {
			$('.page-resources .resource-filter-block button').click(function(){
				var value = $('.page-resources .resource-filter-block input').val();
				if(value == "Keyword"){
					$('.page-resources .resource-filter-block input').attr("placeholder","");
					$('.page-resources .resource-filter-block input').val("");
					$('.page-resources .resource-filter-block input').attr("data-placeholder-value","");
				}
			});
		}
	}
	
	//function for partners page nepad programmes header replace
	function partnerPage(){
		$('.partner-websites-block').closest('.full-width-region-4').css({"background-color":"#F4F1F0"});
		$('.partner-websites-block').closest('.full-width-region-4').before('<div class="sub-heading partner-websites-heading"></div>');
		var content = $('.partner-websites-block .partner-title').clone();
		$('.partner-websites-block .partner-title').remove();
		$('.partner-websites-heading').append(content);
		$('.partner-websites-block').closest('.full-width-region-4').css({"background-color":"#F4F1F0"});
	}
	//function for ceo corner page text change in subscribe to my blog section
	function ceoCornerTextAlter(){
		
		$('.page-ceo-corner .resource-subscribe-block form label').text(Drupal.t("Enter your email address to subscribe to this blog and recieve notifications of new posts by email. "));
	}
	//function to add caadp button in programes page
	function caadpButton(){
		var content = $('.node-type-programmes .caadp-term-class').clone();
		$('.node-type-programmes .caadp-term-class').remove();
		$('.node-type-programmes ul.quicktabs-tabs>li.last').after(content);
		}
	
/*jQuery plugin for making equal heights for elements with same padding, border and marginBottom
usage $("your selector").equalHeights();
*/
	$.fn.equalHeights = function(options){
		var highest=0;
		$(this).each(function(){
			highest = Math.max(highest,$(this).height());
		});
		$(this).height(highest);
	}	
	
	//var wWidth = $(window).width();
	//if(wWidth > 768){
		function initEquiHeight() {
			var wWidth = $(window).width();
			if(wWidth > 767){
			    $(".cop-quicktab .knowledge a").attr("href","javascript:void(0);");
				$(".wide-sidebar-first , .wide-content , .wide-sidebar-second ").equalHeights();
				$(".not-logged-in.node-type-work-group .cop-quicktab .quicktabs-tabs , .not-logged-in.node-type-work-group .cop-quicktab .tab-content").equalHeights();
				$(".page-resources .main-container>.row>aside , .page-resources .main-container>.row>.col-sm-9 ").equalHeights();
				$(".page-latest-news .main-container>.row>.col-sm-8 , .page-latest-news .main-container>.row>aside ").height("auto").equalHeights();
				$(".quicktab-events-page ul.quicktabs-tabs , .quicktab-events-page .tab-content ").equalHeights();
				$(".node-type-events .event-resources-block , .node-type-events  .event-agenta-block").equalHeights();	
				$(".abt-skills-content .first-half a, .abt-innovation-content .first-half a, .abt-trade-content .first-half a, .abt-governance-content .first-half a").equalHeights();
				$(".abt-skills-content .second-half , .abt-innovation-content .second-half , .abt-trade-content .second-half , .abt-governance-content .second-half").equalHeights();
			}
		}
		function mapEqualHeight(){
			var wWidth = $(window).width();
			if(wWidth > 767){
				$(".page-nepad-on-the-continent aside.sidebar-first , .page-nepad-on-the-continent .main-container>.row>.col-sm-9").equalHeights();
			}
		}	
		//map page
			function mapHeight(){
				var wWidth = $(window).width();
				if(wWidth > 767){
					$('body').delegate(".map-links-btn .block-title", "click",function(){
						$(".page-nepad-on-the-continent aside.sidebar-first , .page-nepad-on-the-continent .main-container>.row>.col-sm-9").height("auto");
						var h1 = $(".page-nepad-on-the-continent aside.sidebar-first").height();
						var h2 = $(".page-nepad-on-the-continent .main-container>.row>.col-sm-9").height();

						if(h1 > h2){
							$(".page-nepad-on-the-continent aside.sidebar-first , .page-nepad-on-the-continent .main-container>.row>.col-sm-9").css("min-height",h1);
						}
						else{
							$(".page-nepad-on-the-continent aside.sidebar-first , .page-nepad-on-the-continent .main-container>.row>.col-sm-9").css("min-height",h2);
						}
					});
				}
			}
	//}
	/*Edited by Akhil*/
	/*Country profile*/
	//make the height of each cells in a row same
		function countryProfileHeight(){
			$('.country-profile .views-row.views-row-odd').each(function(){
				/*$(this).find(".country-profile-wrapper");
				$(this).next(".views-row.views-row-even").find(".country-profile-wrapper");*/
					
				var h1 = $(this).find(".country-profile-wrapper").height();
				var h2 = $(this).next(".views-row.views-row-even").find(".country-profile-wrapper").height();
				var lar=0;
				if(h1 > h2){
					//$("td.col-first .country-profile-wrapper , td.col-last .country-profile-wrapper",this).css("min-height",h1);
					lar=h1;
				}
				else{
					//$("td.col-first .country-profile-wrapper , td.col-last .country-profile-wrapper",this).css("min-height",h2);
					lar=h2;
				}
					$(this).find(".country-profile-wrapper").css("min-height",lar+2);
					$(this).next(".views-row.views-row-even").find(".country-profile-wrapper").css("min-height",lar+2);
			});
		}	
	function documentType() {

		//***************onload*****************
		if ($('#edit-field-document-type-und option:selected').text() == 'Video') {

			$('#edit-field-video').css("display","block");
			$('#edit-field-document-attachment').css("display","none");

		} else {
				$('#edit-field-video').css("display","none");
				$('#edit-field-document-attachment').css("display","block");
		}


		if ($('#edit-field-document-type-und option:selected').text() == 'Picture') {		
			$('#edit-field-document-image').css("display","none");
		} else {
			$('#edit-field-document-image').css("display","block");
		}


		if ($('#edit-field-document-type-und option:selected').text() == 'File') {		
			$('#edit-field-album').css("display","none");
			$('#edit-field-field-resource-category').css("display","block");

		} else {
			$('#edit-field-album').css("display","block");	
			$('#edit-field-field-resource-category').css("display","none");	
		}

		//**************onchange****************

		$('#edit-field-document-type-und').change(function(){

			if ($('#edit-field-document-type-und option:selected').text() == 'Video') {
				$('#edit-field-video').css("display","block");
				$('#edit-field-document-attachment').css("display","none");
			} else {
					$('#edit-field-video').css("display","none");
					$('#edit-field-document-attachment').css("display","block");
			}


			if ($('#edit-field-document-type-und option:selected').text() == 'Picture') {		
				$('#edit-field-document-image').css("display","none");
			} else {
				$('#edit-field-document-image').css("display","block");
			}

			if ($('#edit-field-document-type-und option:selected').text() == 'File') {		
				$('#edit-field-album').css("display","none");
				$('#edit-field-field-resource-category').css("display","block");
			} else {
				$('#edit-field-album').css("display","block");	
				$('#edit-field-field-resource-category').css("display","none");	
			}
		});
	} 
	//function for about page contact menu click trigger on validation
	function contactForm(){
		if($('#contact-site-form .form-type-textfield.form-item-subject , #contact-site-form .form-type-textarea').hasClass("error")){		
			location.hash="contact";
		}
		
		if($('.programme-contact-form .form-item').hasClass("error")){		
			$('.node-type-programmes .vertical-tabs .contact a').trigger("click");		
		}	
		
		/*$('.about-menu-wrapper .abt-mnu-contact').on("click",function(){
			if($('about-nepad-contact-form ').hasClass("hide-block")){
				$('about-nepad-contact-form ').removeClass("hide-block")
			}
			else{
				$('about-nepad-contact-form ').addClass("hide-block")
			}
		});*/
		var block = $('.about-nepad-contact-form').clone();
		$('.about-nepad-contact-form').remove();
		$('.abt-contact-content').append(block);
		
	}
/*Edited by Akhil*/
      
    function deleteAlignOnLoad() {
		$(".page-node-delete .page-scroll .page-slide").width($(window).width());
        $(".page-node-delete .page-scroll>div").offset({ top: 0, left: - $(".page-node-delete .page-scroll .page-slide").width() });
	}
/*select event based on date*/
	function eventOnDate(){
		$(".page-eventsdate-day").ready(function(){
			var url = window.location.href;
			$(".calendar-calendar .mini td a").each(function() {
				if (url.indexOf($(this).attr("href")) != -1) {
					$(this).parent().css("background-color","#97B64B");
				}
			});
		});
	}
/*hide back button in map page*/
    function hideBackBtn(){
		$("page-nepad-on-the-continent").ready(function(){
			var url=window.location.href;
            if(url.search("&")>-1){
				$(".page-nepad-on-the-continent .view-rec-list-map .view-header").show();
            }
			else{
				 $(".page-nepad-on-the-continent .view-rec-list-map .view-header").hide();
			}
			if(url.search("=all")<=-1){
				$(".page-nepad-on-the-continent .view-rec-list-map .view-header").show();
			}
		});
	}
// change the position of form in content page
    function contentPositionChange() {
		$(".node-type-programmes ").ready(function(){
			if ($(".node-type-programmes .view-programme-contact .view-content .views-row").find(".views-field-field-programme-contact").length > 0) {
				$(".node-type-programmes .view-programme-contact form").removeClass("change-form-position");
            } 
            else {
			$(".node-type-programmes .view-programme-contact form").addClass("change-form-position");
			}                    
		});
	}
	//Load strategic page 
	function appendStrategy(){
		$(".region-content>.about-nepad-strategy .sub-title").remove();
		$(".abt-strategy-content").append($(".region-content>.about-nepad-strategy"));
	}
	//Load CEO's Blog-About page
	function appendBlog(){
		$(".abt-ceo-blog").append($(".region-content>.about-ceo-blog"));
	}	
	//Load CEO's speech
	function appendSpeech(){
		$(".abt-ceo-speech").append($(".region-content>.about-ceo-speech"));
	}	
	function mediaSpeech(){
			$('a.speeches').attr("href", "#");
			$('a.media-contact').attr("href", "#");
			$('.newsletter-resource a.newsletter-archive-class').attr("href","#");
			$('a.press-kit').attr("href", "#");
			var formHead= $(".page-latest-news .contact-page-media-centre");
			var contactForm= $(".page-latest-news .contactform-media");
			var speech= $(".page-latest-news .about-ceo-speech");
			var initial= $(".page-latest-news .media-center .view-content");
			var pagination= $(".page-latest-news .view-media-centre .text-center");
			var news= $(".page-latest-news .media-news-archive");
			var press=$(".page-latest-news .press-release-detail-block");
			var pressContent=$(".page-latest-news .press-release-detail-block .view-content");
			formHead.hide();
			contactForm.hide();
			speech.hide();
			news.hide();
			press.hide();
			$(".page-latest-news .speeches").click(function(){
				initial.hide();
				pagination.hide();
				formHead.hide();
				contactForm.hide();
				speech.show();
				news.hide();
				press.hide();
				mediaEquiHeight();
			});
			$(".page-latest-news .media-contact").click(function(){
				initial.hide();
				pagination.hide();
				formHead.show();
				contactForm.show();
				speech.hide();
				news.hide();
				press.hide();
				mediaEquiHeight();
			});
			$('.newsletter-resource a.newsletter-archive-class').click(function(){
				initial.hide();
				pagination.hide();
				formHead.hide();
				contactForm.hide();
				speech.hide();
				news.show();
				press.hide();
				mediaEquiHeight();
			});
			$('a.press-kit').click(function(){
				initial.hide();
				pagination.hide();
				formHead.hide();
				contactForm.hide();
				speech.hide();
				news.hide();
				press.show();
				pressContent.show();
				/*$(".page-latest-news .sidebar-second ").css("height","auto");
				$(".page-latest-news .main-container section.col-sm-8").css("height","auto");
				$(".page-latest-news .sidebar-second , .page-latest-news .main-container section.col-sm-8").equalHeights();*/
				mediaEquiHeight();				
			});	
	}
	function resourceNews() {
	    var resource = $('.page-resources .block-system .resource-list .view-content');
	    var resrctitle = $('.page-resources .block-system .resource-list .publication-title');
	    var resrcpage = $('.page-resources .block-system .resource-list .text-center');
	    var newsArchv = $('.page-resources .news-archive-page');
	    newsArchv.hide();
	    var newsClick= $('.page-resources .newsletter-resource .newsletter-archive-class');
	    newsClick.click(function(){
			newsArchv.show();
			resource.hide();
			resrctitle.hide();
			resrcpage.hide();
			resourceEquiHeight();
		});
	}
	function mediaFormSubmit(){
        if($(".page-latest-news .form-item-name , .page-latest-news .form-item-mail , .page-latest-news .form-item-subject, .page-latest-news .form-item-message").hasClass("error")){
			$(".page-latest-news .view-media-centre .view-content").hide();
			$(".page-latest-news .view-media-centre .text-center").hide();
			$(".page-latest-news .contact-page-media-centre").show();
			$(".page-latest-news .contactform-media").show();
			$(".page-latest-news .about-ceo-speech").hide();
			$(".page-latest-news .media-news-archive").hide();
		}		
	}
	function mediaEquiHeight(){
		$(".page-latest-news .sidebar-second ").css("height","auto");
		$(".page-latest-news .main-container section.col-sm-8").css("height","auto");
		$(".page-latest-news .sidebar-second , .page-latest-news .main-container section.col-sm-8").equalHeights();						
	}
	function resourceEquiHeight() {
		$('.page-resources .sidebar-first').css('height','auto');
		$('.page-resources .main-container section.col-sm-9').css('height','auto');
		$(".page-resources .sidebar-first , .page-resources .main-container section.col-sm-9").equalHeights();
	}
	function tenderHeight() {
		$(".page-tenders .views-view-grid tbody tr").each(function(){
			$(".page-tenders .views-view-grid tbody tr td.col-first .tender-wrapper,.page-tenders .views-view-grid tbody tr td.col-last .tender-wrapper").equalHeights();
		})	
		$(".page-careers .views-view-grid tbody tr").each(function(){
			$(".page-careers .views-view-grid tbody tr td.col-first .career-wrapper,.page-careers .views-view-grid tbody tr td.col-last .career-wrapper").equalHeights();
		})	
	}
	function ceoSpeechEquiHeight(){
		$(".page-ceo-corner .view-ceo-speeches .view-content").css("height","auto");
		$(".page-events .past-events-block .title-date-wrapper").css("height","auto");
		$(".page-eventsdate .past-events-block .title-date-wrapper").css("height","auto");		
		$(".page-ceo-corner .view-ceo-speeches .view-content , .page-ceo-corner .view-ceo-speeches .icn-ceo-speech").equalHeights();
		$(".page-events .past-events-block .title-date-wrapper , .page-events .past-events-block .thumbnail-image").equalHeights();
		$(".page-eventsdate .past-events-block .title-date-wrapper , .page-eventsdate .past-events-block .thumbnail-image").equalHeights();
		$(".front .events-block , .front .publication-block, .front .home-knowledge-portal").equalHeights();
	}
	function viewMore() {
		$(".cmt-untrimmed-wrapper").hide();
		$(".view-clone-of-forum-s-comment  .views-view-grid td").each(function() {
				$(this).find(".cmt-trimmed a").click(function(){
					$(this).closest("td").find(".cmt-untrimmed-wrapper").show();  
					$(this).closest("td").find(".cmt-trimmed-wrapper").hide();       
				});
				$(this).find(".cmt-untrimmed a").click(function(){
					$(this).closest("td").find(".cmt-untrimmed-wrapper").hide();  
					$(this).closest("td").find(".cmt-trimmed-wrapper").show();       
				});
        });
	}
	function selectAll() {
		/*$("#edit-field-user-permission-und div:first-child").before("<input type='checkbox' id='select-all' name='select all' class='select-all'>  Select all");*/
		$("#edit-field-user-permission-und div:first-child").before('<div class="form-type-checkbox form-item-field-user-permission-und-626 form-item checkbox">'+'<input type="checkbox" id="select-all" name="select all" class="select-all"><label for="edit-field-user-permission-und-626"><span class="views-field views-field-nothing"> <span class="field-content">Select all </span> </span> </label></div>')
		$("#select-all").click(function(){
            $("#edit-field-user-permission-und .form-checkbox").prop('checked', $(this).prop("checked"));
        });
	}

	/*IE9 validation*/
	function validateForm(){
	    $(".node-type-programmes .webform-client-form .webform-submit").click(function(){
		     if ($("<input />").prop("required") === undefined) {
				$(document).on("submit", function(e) {
					$(this)
                    .find("input, select, textarea")
                    .filter("[required]")
                    .filter(function() { return this.value == ''; })
                    .each(function() {
						e.preventDefault();
                        $(this).css({ "border-color":"#f2dede" });
                        $(this).parent().css({"background-color":"#f2dede","color":"#b94a48"});                     
                    });
				});
             }
		});	
	}
	/*append li in our work*/
	function listOurWork() {
		var caadp= $('.view-programme-list li:has(a[href="/programme/comprehensive-africa-agriculture-development-programme-caadp"])');
		var climateChange= $('.view-programme-list li:has(a[href="/programme/climate-change-fund"])');
		$('.our-work-subtitle').hide();
		$(".view-programme-list li:has(a[href='/programme/fish-governance-and-trade']),.view-programme-list li:has(a[href='/programme/food-and-nutrition-security']),.view-programme-list li:has(a[href='/programme/climate-smart-agriculture']),.view-programme-list li:has(a[href='/programme/climate-change-fund']),.view-programme-list li:has(a[href='/content/gender-climate-smart-support-programme']),.view-programme-list li:has(a[href='/programme/agriculture-and-food-insecurity-risk-management-afirm'])").hide();
		caadp.append("<ul class='work-subtitle'><li class='caadp-support'>CAADP Implementation Support</li><li class='climate-change'>Climate Change</li></ul>");
		$('.work-subtitle .caadp-support').append("<ul class='ourWork-list'><li class='views-row views-row-2 views-row-even'><a href='/programme/agriculture-and-food-insecurity-risk-management-afirm'>Agriculture and Food Insecurity Risk Management (AFIRM)</a></li><li class='governance-trade'><a href='/programme/fish-governance-and-trade'>Fish Governance and Trade</a></li><li class='views-row views-row-8 views-row-even'><a href='/programme/food-and-nutrition-security'>Food and Nutrition Security</a></li><ul>");
		$('.work-subtitle .climate-change').append("<ul class='ourWork-list'><li class='views-row views-row-6 views-row-even'><a href='/programme/climate-change-fund'>Climate Change Fund</a></li><li class='views-row views-row-5 views-row-odd'><a href='/programme/climate-smart-agriculture'>Climate Smart Agriculture</a></li><li class='iews-row views-row-7 views-row-odd'><a href='/content/gender-climate-smart-support-programme'>Gender Climate Change Agriculture Support</a></li><ul>");
	
	}
	/*append li in our work fr*/
	function listOurWorkfr() {
		if($('body').hasClass('i18n-fr')){
			var caadp= $('.view-programme-list li:has(a[href="/fr/programme/programme-d%C3%A9taill%C3%A9-pour-le-d%C3%A9veloppement-de-l%E2%80%99agriculture-en-afrique-pddaa"])');
			var climateChange= $('.view-programme-list li:has(a[href="/fr/programme/fonds-dadaptation-aux-changement-climatique"])');
			$('.our-work-subtitle').hide();
			$(".view-programme-list li:has(a[href='/fr/programme/gouvernance-et-commercialisation-des-produits-de-p%C3%AAche']),.view-programme-list li:has(a[href='/fr/programme/s%C3%A9curit%C3%A9-alimentaire-et-nutritionnelle']),.view-programme-list li:has(a[href='/fr/programme/fonds-dadaptation-aux-changement-climatique']),.view-programme-list li:has(a[href='/fr/programme/appui-agricole-ax%C3%A9-sur-le-genre-face-au-changement-climatique']),.view-programme-list li:has(a[href='/fr/programme/gestion-des-risques-li%C3%A9s-%C3%A0-l%E2%80%99agriculture-et-l%E2%80%99ins%C3%A9curit%C3%A9-alimentaire-graia'])").hide();				
			caadp.append("<ul class='work-subtitle'><li class='caadp-support'></li><li class='climate-change'>Changement climatique</li></ul>");
			$('.work-subtitle .caadp-support').append("<ul class='ourWork-list'><li class='views-row views-row-2 views-row-even'><a href='/fr/programme/gestion-des-risques-li%C3%A9s-%C3%A0-l%E2%80%99agriculture-et-l%E2%80%99ins%C3%A9curit%C3%A9-alimentaire-graia'>Gestion des Risques liés à l’Agriculture et l’Insécurité Alimentaire (GRAIA)</a></li><li class='governance-trade'><a href='/fr/programme/gouvernance-et-commercialisation-des-produits-de-p%C3%AAche'>Gouvernance et commercialisation des produits de pêche</a></li><li class='views-row views-row-8 views-row-even'><a href='/fr/programme/s%C3%A9curit%C3%A9-alimentaire-et-nutritionnelle'>Sécurité alimentaire et nutritionnelle</a></li><ul>");
			$('.work-subtitle .climate-change').append("<ul class='ourWork-list'><li class='views-row views-row-6 views-row-even'><a href='/fr/programme/fonds-dadaptation-aux-changement-climatique'>Fonds d'adaptation aux changement climatique</a></li><li class='iews-row views-row-7 views-row-odd'><a href='/fr/programme/appui-agricole-ax%C3%A9-sur-le-genre-face-au-changement-climatique'>Appui agricole axé sur le genre face au changement climatique</a></li><ul>");		
		}
	
	}
	/*resource full width in highlights*/
	function resourceHighlight() {
		$(".node-type-events .quicktabs-tabpage .resource-list").before("<div class='highlights-heading'>Resources</div>")
		$(".node-type-events .quicktabs-tabpage .events-portal").before("<div class='highlights-heading'>Portal</div>")
		$(".node-type-events .quicktabs-tabpage .events-news").before("<div class='highlights-heading'>News</div>")
		
		if($(".node-type-events section").hasClass("cop-event")) 
			$(".node-type-events .full-width-region section.event-resources-block").removeClass("col-md-12").addClass("col-sm-8");
	    else
		    $(".node-type-events .full-width-region section.event-resources-block").removeClass("col-md-8").addClass("col-sm-12");	
	}
	function titleCentr() {
	   var url=window.location.href;
	   var last=url.substr(url.lastIndexOf('/'))
	   if(last=="/registration-form"){
			$(".node-type-webform .page-header").css("text-align","center");
       }
	}
/*for map page*/
    //function for check the program list in map page 
    function mapProgrameList() {
		$('.page-nepad-on-the-continent .view-map-program-list li a').each(function(){
			if($(this).text().length==0){
			    $(this).parent().hide();	
			}
		});
		$('#mapsvg svg path').click(function(){
			$('.page-nepad-on-the-continent .view-map-program-list li a').each(function(){
				if($(this).text().length==0){
					$(this).parent().hide();	
				}
			});
		});
	}
	
		
/*function call*/

	$(document).ready(function(){
		backToTopScrollup();
		loginFormShowHide();
		userSettingsShowHide();
		captchaReplace();
		//functions of cop
		loggedOutQuicktabAlter();
		loggedInQuicktabAlter();
		shadowDiv();
		copFilterShift();	
		addCommentsLink();
		//function for resource landing page
		resourcePageAlter();
		ieResourceSearch();
		//function for partner page
		partnerPage();
		//functions of events inner page
		eventsInnerAlter();
		//ceo corner function
		ceoCornerTextAlter();
		//function of gallery page
		galleryDetailsShowHide();
		passwordStrength();
		documentType();
		//function of programme page
		caadpButton();
		//function of map page
		mapHeight();
		//function for search in mobile and tab
		//searchMobTab();
		contactForm();
		//function for highlight the day
		eventOnDate();
		//function for hide the back btn in map page
		hideBackBtn();
		//change the position of the contact form 
		contentPositionChange();
		//Append blocks-About page
		appendStrategy();
		appendBlog();
		appendSpeech();
		//Hide Dwnld
		mediaSpeech();
		mediaFormSubmit();
		validateForm();
		viewMore();
		selectAll();
		ceoSpeechEquiHeight();
		listOurWork();
		listOurWorkfr();
		resourceHighlight();
		titleCentr();
		resourceNews();
        mapProgrameList()
	});
	
	$( window ).load(function() {
		quicktabListShowHide();	
		initEquiHeight();
		mapEqualHeight();
		deleteAlignOnLoad();
        countryProfileHeight();
        tenderHeight();
	});

	$(document).ajaxComplete(function(){
		copFilterShift();
		$(".page-latest-news .media-body-section img").load(function(){
			initEquiHeight();
			mapEqualHeight();
		});
		eventOnDate();
		mediaEquiHeight();
		mediaSpeech();
		resourceEquiHeight();
		mapProgrameList()
	});



		/*$("body").on("load",".quickedit-init-processed",function(){
		$( window ).resize(function() {
        $(".quickedit-init-processed .page-scroll .page-slide").width($(window).width());
        $(".quickedit-init-processed .page-scroll>div").offset({ top: 0, left: - $(".quickedit-init-processed .page-scroll .page-slide").width() });
       });
	});*/
	
	
}(jQuery));
			
	
		
;
(function($) {
	$.fn.isOnScreen = function(){
		
		var win = $(window);
		var viewport = {
			top : win.scrollTop(),
			left : win.scrollLeft()
		};
		viewport.right = viewport.left + win.width();
		viewport.bottom = viewport.top + win.height();
		var bounds = this.offset();
		bounds.right = bounds.left + this.outerWidth();
		bounds.bottom = bounds.top + this.outerHeight();
		//return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
		return (!(viewport.right < bounds.left || viewport.left > bounds.right));

	};
	function loadSidePages(){
		if($(".front,.page-knowledge-portal").length>0){
			
			if(window.location.href.indexOf("fr") > -1){
				var leftLoc = "/fr/partners";
				var rightLoc = "/fr/knowledge-portal";
				if($(".page-knowledge-portal").length>0) {
					rightLoc = "/fr";
				}				
			}
			else {
				var leftLoc = "/partners";
				var rightLoc = "/knowledge-portal";
				if($(".page-knowledge-portal").length>0) {
					rightLoc = "/";
				}
			}
			var selector=" .center-page .page-loader>*";
			$(".left-page .page-loader").load(leftLoc+" "+selector,"",ajaxResult);
			$(".right-page .page-loader").load(rightLoc+" "+selector,"",ajaxResult);
		}
	}
	
	//function for partners page nepad programmes header replace
	function partnerPage(){
		$('.partner-websites-block').closest('.full-width-region-4').css({"background-color":"#F4F1F0"});
		$('.partner-websites-block').closest('.full-width-region-4').before('<div class="sub-heading partner-websites-heading"></div>');
		var content = $('.partner-websites-block .partner-title').clone();
		$('.partner-websites-block .partner-title').remove();
		$('.partner-websites-heading').append(content);
		$('.partner-websites-block').closest('.full-width-region-4').css({"background-color":"#F4F1F0"});
	}
	//Header position change in area of work
	function headerReplace(){
		var header1= $(".page-knowledge-portal .right-page .sub-heading");
		if(!header1.hasClass("cloned-header")){
			$('.page-knowledge-portal .right-page .full-width-region-2').before("<div class='container'><div class='sub-heading cloned-header'><h2>Areas of Work</h2></div></div>");
			$('.front .right-page .kp-cop-list-block').closest('.full-width-region').before("<div class='width-100 cop-header-wrapper'><div class='container'><div class='sub-heading'><h2>Communities of Practice</h2></div></div></div>");			
	   }
	}
	//Hide social media block in Home page
	function checkIfHome(){
		if($(".active .hm-mnu").length!=0) {
			if($(".active .hm-mnu").isOnScreen()==true) 
				$(".region-fixed-social-media .social-media-block").hide();	
			else
				$(".region-fixed-social-media .social-media-block").show();				
		}
		$(".page-scroll-ctr-btn").click(function(){	
			setTimeout(function() {
				if($(".active .hm-mnu").isOnScreen()==true) 
					$(".region-fixed-social-media .social-media-block").hide();	
				else
					$(".region-fixed-social-media .social-media-block").show();				
			},700);
		});
	}
	
	function ajaxResult(response,status,xhr){
		if(status=="success"){
			$(".page-loader").removeClass("loading");
			//$(".page-scroll>div").height
			$('.carousel').carousel({
			  interval: 5000
			});
			
			partnerPage();
			//headerReplace();
			//checkIfHome();
		}
	}
	
	function mapMenuFunc() {
		$(".view-map-program-list .views-row").each(function(){
			if($(this).html()==""){
				$(this).addClass("hide");
			}
		});
		
		$(".map-links-btn .block-title").unbind().click(function(){
			$(this).siblings(".view").slideToggle("fast");
		});
	}
	
	
	function repositionPageTitle() {
		/**our work page*/
		$(".page-programmes .main-container-wrapper").prepend($(".page-programmes .page-header"));
		$(".page-programmes .page-header").wrapInner("<div class='container'></div>")
		
		/**Program page*/
		if($(window).width()>767) {
			$(".node-type-programmes #quicktabs-programme_page>ul.quicktabs-tabs").after($(".node-type-programmes .page-header"));
		}else{
			setTimeout(function(){
				$(".abt-wrk-content .abt-nepad-content .abt-nepad-millenium").before($(".about-page .abt-nepad-img-wrapper"));
			},10);
		}
		
		/**add drop down*/
		$(".logged-in.node-type-programmes .quicktabs-tabs").append($(".add-dd-blk"));
		
		
	}

	function addClasses() {
		$(".programme-tab-listing>.view-content,.programme-tab-listing>.view-footer").addClass("col-md-6");
	}
	
	function programPageSubmenu(){
		$(".node-type-programmes .projects,.node-type-programmes .portal, .node-type-programmes .toolkits, .node-type-programmes .resources").wrapAll("<li class='wrapped-list'></li>");
		$(".node-type-programmes .wrapped-list").wrapAll("<li class='knowledge'></li>");
		$(".node-type-programmes .knowledge").prepend("<a href='javascript:void(0);'>"+Drupal.t("Knowledge")+"<span class='plus'>+</span><span class='minus'>-</span></a>");
		$(".node-type-programmes").on("click",".knowledge",function(){
			$(this).toggleClass("showlist");
		});
		
		$(".node-type-programmes #quicktabs-programme_page>ul.quicktabs-tabs li a").click(function(){
			sideMenuHeightAdj();
		});
	}
	function programPageSbmenuFr(){
		if($("body").hasClass("i18n-fr")){
			$(".node-type-programmes .projets, .node-type-programmes .portail, .node-type-programmes .trousses-à-outils, .node-type-programmes .ressources").wrapAll("<li class='wrapped-list'></li>");
			$(".node-type-programmes .wrapped-list").wrapAll("<li class='knowledge'></li>");
			$(".node-type-programmes .knowledge").prepend("<a href='javascript:void(0);'>"+Drupal.t("Knowledge")+"<span class='plus'>+</span><span class='minus'>-</span></a>");
			//~ $(".node-type-programmes .knowledge").click(function(){
			$('body').delegate(".node-type-programmes .knowledge", "click",function(){
				$(this).toggleClass("showlist");
			});
			
			$(".node-type-programmes #quicktabs-programme_page>ul.quicktabs-tabs li a").click(function(){
				sideMenuHeightAdj();
			});
	    }
	}
	
	function sideMenuHeightAdj(){
		if($("body.node-type-programmes").length>0){
			var h = $(".node-type-programmes .page-header").outerHeight() + $(".node-type-programmes #quicktabs-programme_page>div.tab-content").outerHeight();
			$(".node-type-programmes .quicktabs-tabs").css("min-height",h);
		}else if($("body.about-page").length>0){
			$(".main-container>.row>aside, aside.sidebar-first").css("min-height",0);
			var h = $(".about-page .main-container").outerHeight();
			$(".main-container>.row>aside, aside.sidebar-first").css("min-height",h);
		}
	}
	
	function aboutPageMenu() {
		if($(".about-menu-wrapper").length>0){
			$("body").addClass("about-page");
			/**About page sub titles to header*/
				$(".page-header ").append("<div class='about-subheading'></div>");		
			$(".page-header div").append("<span class='page-subtitle'></span>");
		
			var hash = window.location.hash;
			if(hash==""){
				hash+="#aboutourwork";
			}else {
				$(".page-subtitle").html($(hash+" .sub-title").text());
				setTimeout(function(){window.scrollTo(0, 0);},100);
			}
			showTargetItem(hash);

			sideMenuHeightAdj();

			
			//$(".about-menu-wrapper a").click(function(event){
				/*var hash = $(this).attr("href");
				showTargetItem(hash);
				
				$(".page-subtitle").html($(hash+" .sub-title").text());
				
				sideMenuHeightAdj();

				event.preventDefault();*/
			//});
		}
	}
	
	function showTargetItem(hash){
		var target = "div"+hash;
		$(".about-content-wrapper").hide();
		$(target).show();
		$(".about-menu-wrapper a").removeClass("active");
		$(".about-menu-wrapper a[href='"+hash+"']").addClass("active");
		
		if($(".about-page .page-subtitle").text()==""){
			$(".about-page .page-header").addClass("no-sub");
		}else {
			$(".about-page .page-header").removeClass("no-sub");
		}
		
	}
	function flexSlider() {
		$(".node-type-rec .flexslider").append($(".thematic-area-did-u-know"));
	}
	//init megamenu for the left and right ajax pages
	function megamenuInit(){
		$("body").on("mouseenter",".right-page li.mega, .left-page li.mega",function(event) {
            var $this = $(this);
			$this.addClass ('animating');
			clearTimeout ($this.data('animatingTimeout'));
			$this.data('animatingTimeout', setTimeout(function(){$this.removeClass ('animating')}, 500));
			clearTimeout ($this.data('hoverTimeout'));
			$this.data('hoverTimeout', setTimeout(function(){$this.addClass ('open')}, 100));  
        });
		$("body").on("mouseleave",".right-page li.mega, .left-page li.mega",function(event) {
            var $this = $(this);
              $this.addClass ('animating');
              clearTimeout ($this.data('animatingTimeout'));
              $this.data('animatingTimeout', 
              setTimeout(function(){$this.removeClass ('animating')}, 500));
              clearTimeout ($this.data('hoverTimeout'));
              $this.data('hoverTimeout', setTimeout(function(){$this.removeClass ('open')}, 100)); 
        });
	}
    //function for about menue links 
    function aboutMenuLinks(){
		$("body").on("click",".mega-nav li>a,.about-menu-wrapper li>a,.menu-block-wrapper .menu li>a",function(event) {
			setTimeout(function(){window.scrollTo(0, 0);},0);
		});	
	}
	
	//Load strategic page 
	/*function loadStrategicDocs(){
		if($("body.about-page").length>0){
			$("#strategy").load("/strategic-documents #block-system-main");
		}
	}*/
	
	//Hide Download btn-About
	function hideDwnldBtn(){
		var url= window.location.href;	
		var urlPart=url.split('#')[1];
		if($('li a.abt-mnu-ceo').hasClass('active')){
			$(".abt-ceo-biography").show();
		}
		else{
			$(".abt-ceo-biography").hide();
		}
	}
	//function for remove the '|' symbol from the heading-about page
	function aboutHeading() {
	    var url = window.location.href.split('#');	
	    if(url[1]=="aboutourwork"){
			$(".about-page .page-header .page-subtitle").hide();
		}
		else{
			$(".about-page .page-header .page-subtitle").show();
		}
	}
	
	$(function() {
		loadSidePages();
		mapMenuFunc();
		repositionPageTitle();
		addClasses();
		programPageSubmenu();
		programPageSbmenuFr();
		aboutPageMenu();
		flexSlider();
		megamenuInit();
		aboutMenuLinks();
		//loadStrategicDocs();	
		hideDwnldBtn();
		aboutHeading();
	});
	
	$( document ).ajaxComplete(function() {
		mapMenuFunc();
		$(".about-page img").load(function(){
			sideMenuHeightAdj();
		});
	});
	$(window).load(function() {
		sideMenuHeightAdj();
		//checkIfHome();
	});
	$( window ).resize(function() {
		
	});
	$(window).on('hashchange',function(){
		var hash = window.location.hash;
		if(hash==""){
			hash+="#aboutourwork";
		}else{
			$(".page-subtitle").html($(hash+" .sub-title").text());
			setTimeout(function(){window.scrollTo(0, 0);},100);
		}
		if($(".about-page .page-subtitle").text()==""){
			$(".about-page .page-header").addClass("no-sub");
		}else {
			$(".about-page .page-header").removeClass("no-sub");
		}
		showTargetItem(hash);
		hideDwnldBtn();
		sideMenuHeightAdj();
		$("abt-ceo-biography").load(function(){
			sideMenuHeightAdj();
		});
		aboutHeading();
	});
})(jQuery);
;
/* Placeholders.js v4.0.1 */
/*!
 * The MIT License
 *
 * Copyright (c) 2012 James Allardice
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
!function(a){"use strict";function b(){}function c(){try{return document.activeElement}catch(a){}}function d(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return!0;return!1}function e(a,b,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):void 0}function f(a,b){var c;a.createTextRange?(c=a.createTextRange(),c.move("character",b),c.select()):a.selectionStart&&(a.focus(),a.setSelectionRange(b,b))}function g(a,b){try{return a.type=b,!0}catch(c){return!1}}function h(a,b){if(a&&a.getAttribute(B))b(a);else for(var c,d=a?a.getElementsByTagName("input"):N,e=a?a.getElementsByTagName("textarea"):O,f=d?d.length:0,g=e?e.length:0,h=f+g,i=0;h>i;i++)c=f>i?d[i]:e[i-f],b(c)}function i(a){h(a,k)}function j(a){h(a,l)}function k(a,b){var c=!!b&&a.value!==b,d=a.value===a.getAttribute(B);if((c||d)&&"true"===a.getAttribute(C)){a.removeAttribute(C),a.value=a.value.replace(a.getAttribute(B),""),a.className=a.className.replace(A,"");var e=a.getAttribute(I);parseInt(e,10)>=0&&(a.setAttribute("maxLength",e),a.removeAttribute(I));var f=a.getAttribute(D);return f&&(a.type=f),!0}return!1}function l(a){var b=a.getAttribute(B);if(""===a.value&&b){a.setAttribute(C,"true"),a.value=b,a.className+=" "+z;var c=a.getAttribute(I);c||(a.setAttribute(I,a.maxLength),a.removeAttribute("maxLength"));var d=a.getAttribute(D);return d?a.type="text":"password"===a.type&&g(a,"text")&&a.setAttribute(D,"password"),!0}return!1}function m(a){return function(){P&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)?f(a,0):k(a)}}function n(a){return function(){l(a)}}function o(a){return function(){i(a)}}function p(a){return function(b){return v=a.value,"true"===a.getAttribute(C)&&v===a.getAttribute(B)&&d(x,b.keyCode)?(b.preventDefault&&b.preventDefault(),!1):void 0}}function q(a){return function(){k(a,v),""===a.value&&(a.blur(),f(a,0))}}function r(a){return function(){a===c()&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)&&f(a,0)}}function s(a){var b=a.form;b&&"string"==typeof b&&(b=document.getElementById(b),b.getAttribute(E)||(e(b,"submit",o(b)),b.setAttribute(E,"true"))),e(a,"focus",m(a)),e(a,"blur",n(a)),P&&(e(a,"keydown",p(a)),e(a,"keyup",q(a)),e(a,"click",r(a))),a.setAttribute(F,"true"),a.setAttribute(B,T),(P||a!==c())&&l(a)}var t=document.createElement("input"),u=void 0!==t.placeholder;if(a.Placeholders={nativeSupport:u,disable:u?b:i,enable:u?b:j},!u){var v,w=["text","search","url","tel","email","password","number","textarea"],x=[27,33,34,35,36,37,38,39,40,8,46],y="#ccc",z="placeholdersjs",A=new RegExp("(?:^|\\s)"+z+"(?!\\S)"),B="data-placeholder-value",C="data-placeholder-active",D="data-placeholder-type",E="data-placeholder-submit",F="data-placeholder-bound",G="data-placeholder-focus",H="data-placeholder-live",I="data-placeholder-maxlength",J=100,K=document.getElementsByTagName("head")[0],L=document.documentElement,M=a.Placeholders,N=document.getElementsByTagName("input"),O=document.getElementsByTagName("textarea"),P="false"===L.getAttribute(G),Q="false"!==L.getAttribute(H),R=document.createElement("style");R.type="text/css";var S=document.createTextNode("."+z+" {color:"+y+";}");R.styleSheet?R.styleSheet.cssText=S.nodeValue:R.appendChild(S),K.insertBefore(R,K.firstChild);for(var T,U,V=0,W=N.length+O.length;W>V;V++)U=V<N.length?N[V]:O[V-N.length],T=U.attributes.placeholder,T&&(T=T.nodeValue,T&&d(w,U.type)&&s(U));var X=setInterval(function(){for(var a=0,b=N.length+O.length;b>a;a++)U=a<N.length?N[a]:O[a-N.length],T=U.attributes.placeholder,T?(T=T.nodeValue,T&&d(w,U.type)&&(U.getAttribute(F)||s(U),(T!==U.getAttribute(B)||"password"===U.type&&!U.getAttribute(D))&&("password"===U.type&&!U.getAttribute(D)&&g(U,"text")&&U.setAttribute(D,"password"),U.value===U.getAttribute(B)&&(U.value=T),U.setAttribute(B,T)))):U.getAttribute(C)&&(k(U),U.removeAttribute(B));Q||clearInterval(X)},J);e(a,"beforeunload",function(){M.disable()})}}(this);;
/*! jCarousel - v0.3.3 - 2015-04-07
* http://sorgalla.com/jcarousel/
* Copyright (c) 2006-2015 Jan Sorgalla; Licensed MIT */
!function(a){"use strict";var b=a.jCarousel={};b.version="0.3.3";var c=/^([+\-]=)?(.+)$/;b.parseTarget=function(a){var b=!1,d="object"!=typeof a?c.exec(a):null;return d?(a=parseInt(d[2],10)||0,d[1]&&(b=!0,"-="===d[1]&&(a*=-1))):"object"!=typeof a&&(a=parseInt(a,10)||0),{target:a,relative:b}},b.detectCarousel=function(a){for(var b;a.length>0;){if(b=a.filter("[data-jcarousel]"),b.length>0)return b;if(b=a.find("[data-jcarousel]"),b.length>0)return b;a=a.parent()}return null},b.base=function(c){return{version:b.version,_options:{},_element:null,_carousel:null,_init:a.noop,_create:a.noop,_destroy:a.noop,_reload:a.noop,create:function(){return this._element.attr("data-"+c.toLowerCase(),!0).data(c,this),!1===this._trigger("create")?this:(this._create(),this._trigger("createend"),this)},destroy:function(){return!1===this._trigger("destroy")?this:(this._destroy(),this._trigger("destroyend"),this._element.removeData(c).removeAttr("data-"+c.toLowerCase()),this)},reload:function(a){return!1===this._trigger("reload")?this:(a&&this.options(a),this._reload(),this._trigger("reloadend"),this)},element:function(){return this._element},options:function(b,c){if(0===arguments.length)return a.extend({},this._options);if("string"==typeof b){if("undefined"==typeof c)return"undefined"==typeof this._options[b]?null:this._options[b];this._options[b]=c}else this._options=a.extend({},this._options,b);return this},carousel:function(){return this._carousel||(this._carousel=b.detectCarousel(this.options("carousel")||this._element),this._carousel||a.error('Could not detect carousel for plugin "'+c+'"')),this._carousel},_trigger:function(b,d,e){var f,g=!1;return e=[this].concat(e||[]),(d||this._element).each(function(){f=a.Event((c+":"+b).toLowerCase()),a(this).trigger(f,e),f.isDefaultPrevented()&&(g=!0)}),!g}}},b.plugin=function(c,d){var e=a[c]=function(b,c){this._element=a(b),this.options(c),this._init(),this.create()};return e.fn=e.prototype=a.extend({},b.base(c),d),a.fn[c]=function(b){var d=Array.prototype.slice.call(arguments,1),f=this;return this.each("string"==typeof b?function(){var e=a(this).data(c);if(!e)return a.error("Cannot call methods on "+c+' prior to initialization; attempted to call method "'+b+'"');if(!a.isFunction(e[b])||"_"===b.charAt(0))return a.error('No such method "'+b+'" for '+c+" instance");var g=e[b].apply(e,d);return g!==e&&"undefined"!=typeof g?(f=g,!1):void 0}:function(){var d=a(this).data(c);d instanceof e?d.reload(b):new e(this,b)}),f},e}}(jQuery),function(a,b){"use strict";var c=function(a){return parseFloat(a)||0};a.jCarousel.plugin("jcarousel",{animating:!1,tail:0,inTail:!1,resizeTimer:null,lt:null,vertical:!1,rtl:!1,circular:!1,underflow:!1,relative:!1,_options:{list:function(){return this.element().children().eq(0)},items:function(){return this.list().children()},animation:400,transitions:!1,wrap:null,vertical:null,rtl:null,center:!1},_list:null,_items:null,_target:a(),_first:a(),_last:a(),_visible:a(),_fullyvisible:a(),_init:function(){var a=this;return this.onWindowResize=function(){a.resizeTimer&&clearTimeout(a.resizeTimer),a.resizeTimer=setTimeout(function(){a.reload()},100)},this},_create:function(){this._reload(),a(b).on("resize.jcarousel",this.onWindowResize)},_destroy:function(){a(b).off("resize.jcarousel",this.onWindowResize)},_reload:function(){this.vertical=this.options("vertical"),null==this.vertical&&(this.vertical=this.list().height()>this.list().width()),this.rtl=this.options("rtl"),null==this.rtl&&(this.rtl=function(b){if("rtl"===(""+b.attr("dir")).toLowerCase())return!0;var c=!1;return b.parents("[dir]").each(function(){return/rtl/i.test(a(this).attr("dir"))?(c=!0,!1):void 0}),c}(this._element)),this.lt=this.vertical?"top":"left",this.relative="relative"===this.list().css("position"),this._list=null,this._items=null;var b=this.index(this._target)>=0?this._target:this.closest();this.circular="circular"===this.options("wrap"),this.underflow=!1;var c={left:0,top:0};return b.length>0&&(this._prepare(b),this.list().find("[data-jcarousel-clone]").remove(),this._items=null,this.underflow=this._fullyvisible.length>=this.items().length,this.circular=this.circular&&!this.underflow,c[this.lt]=this._position(b)+"px"),this.move(c),this},list:function(){if(null===this._list){var b=this.options("list");this._list=a.isFunction(b)?b.call(this):this._element.find(b)}return this._list},items:function(){if(null===this._items){var b=this.options("items");this._items=(a.isFunction(b)?b.call(this):this.list().find(b)).not("[data-jcarousel-clone]")}return this._items},index:function(a){return this.items().index(a)},closest:function(){var b,d=this,e=this.list().position()[this.lt],f=a(),g=!1,h=this.vertical?"bottom":this.rtl&&!this.relative?"left":"right";return this.rtl&&this.relative&&!this.vertical&&(e+=this.list().width()-this.clipping()),this.items().each(function(){if(f=a(this),g)return!1;var i=d.dimension(f);if(e+=i,e>=0){if(b=i-c(f.css("margin-"+h)),!(Math.abs(e)-i+b/2<=0))return!1;g=!0}}),f},target:function(){return this._target},first:function(){return this._first},last:function(){return this._last},visible:function(){return this._visible},fullyvisible:function(){return this._fullyvisible},hasNext:function(){if(!1===this._trigger("hasnext"))return!0;var a=this.options("wrap"),b=this.items().length-1,c=this.options("center")?this._target:this._last;return b>=0&&!this.underflow&&(a&&"first"!==a||this.index(c)<b||this.tail&&!this.inTail)?!0:!1},hasPrev:function(){if(!1===this._trigger("hasprev"))return!0;var a=this.options("wrap");return this.items().length>0&&!this.underflow&&(a&&"last"!==a||this.index(this._first)>0||this.tail&&this.inTail)?!0:!1},clipping:function(){return this._element["inner"+(this.vertical?"Height":"Width")]()},dimension:function(a){return a["outer"+(this.vertical?"Height":"Width")](!0)},scroll:function(b,c,d){if(this.animating)return this;if(!1===this._trigger("scroll",null,[b,c]))return this;a.isFunction(c)&&(d=c,c=!0);var e=a.jCarousel.parseTarget(b);if(e.relative){var f,g,h,i,j,k,l,m,n=this.items().length-1,o=Math.abs(e.target),p=this.options("wrap");if(e.target>0){var q=this.index(this._last);if(q>=n&&this.tail)this.inTail?"both"===p||"last"===p?this._scroll(0,c,d):a.isFunction(d)&&d.call(this,!1):this._scrollTail(c,d);else if(f=this.index(this._target),this.underflow&&f===n&&("circular"===p||"both"===p||"last"===p)||!this.underflow&&q===n&&("both"===p||"last"===p))this._scroll(0,c,d);else if(h=f+o,this.circular&&h>n){for(m=n,j=this.items().get(-1);m++<h;)j=this.items().eq(0),k=this._visible.index(j)>=0,k&&j.after(j.clone(!0).attr("data-jcarousel-clone",!0)),this.list().append(j),k||(l={},l[this.lt]=this.dimension(j),this.moveBy(l)),this._items=null;this._scroll(j,c,d)}else this._scroll(Math.min(h,n),c,d)}else if(this.inTail)this._scroll(Math.max(this.index(this._first)-o+1,0),c,d);else if(g=this.index(this._first),f=this.index(this._target),i=this.underflow?f:g,h=i-o,0>=i&&(this.underflow&&"circular"===p||"both"===p||"first"===p))this._scroll(n,c,d);else if(this.circular&&0>h){for(m=h,j=this.items().get(0);m++<0;){j=this.items().eq(-1),k=this._visible.index(j)>=0,k&&j.after(j.clone(!0).attr("data-jcarousel-clone",!0)),this.list().prepend(j),this._items=null;var r=this.dimension(j);l={},l[this.lt]=-r,this.moveBy(l)}this._scroll(j,c,d)}else this._scroll(Math.max(h,0),c,d)}else this._scroll(e.target,c,d);return this._trigger("scrollend"),this},moveBy:function(a,b){var d=this.list().position(),e=1,f=0;return this.rtl&&!this.vertical&&(e=-1,this.relative&&(f=this.list().width()-this.clipping())),a.left&&(a.left=d.left+f+c(a.left)*e+"px"),a.top&&(a.top=d.top+f+c(a.top)*e+"px"),this.move(a,b)},move:function(b,c){c=c||{};var d=this.options("transitions"),e=!!d,f=!!d.transforms,g=!!d.transforms3d,h=c.duration||0,i=this.list();if(!e&&h>0)return void i.animate(b,c);var j=c.complete||a.noop,k={};if(e){var l={transitionDuration:i.css("transitionDuration"),transitionTimingFunction:i.css("transitionTimingFunction"),transitionProperty:i.css("transitionProperty")},m=j;j=function(){a(this).css(l),m.call(this)},k={transitionDuration:(h>0?h/1e3:0)+"s",transitionTimingFunction:d.easing||c.easing,transitionProperty:h>0?function(){return f||g?"all":b.left?"left":"top"}():"none",transform:"none"}}g?k.transform="translate3d("+(b.left||0)+","+(b.top||0)+",0)":f?k.transform="translate("+(b.left||0)+","+(b.top||0)+")":a.extend(k,b),e&&h>0&&i.one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",j),i.css(k),0>=h&&i.each(function(){j.call(this)})},_scroll:function(b,c,d){if(this.animating)return a.isFunction(d)&&d.call(this,!1),this;if("object"!=typeof b?b=this.items().eq(b):"undefined"==typeof b.jquery&&(b=a(b)),0===b.length)return a.isFunction(d)&&d.call(this,!1),this;this.inTail=!1,this._prepare(b);var e=this._position(b),f=this.list().position()[this.lt];if(e===f)return a.isFunction(d)&&d.call(this,!1),this;var g={};return g[this.lt]=e+"px",this._animate(g,c,d),this},_scrollTail:function(b,c){if(this.animating||!this.tail)return a.isFunction(c)&&c.call(this,!1),this;var d=this.list().position()[this.lt];this.rtl&&this.relative&&!this.vertical&&(d+=this.list().width()-this.clipping()),this.rtl&&!this.vertical?d+=this.tail:d-=this.tail,this.inTail=!0;var e={};return e[this.lt]=d+"px",this._update({target:this._target.next(),fullyvisible:this._fullyvisible.slice(1).add(this._visible.last())}),this._animate(e,b,c),this},_animate:function(b,c,d){if(d=d||a.noop,!1===this._trigger("animate"))return d.call(this,!1),this;this.animating=!0;var e=this.options("animation"),f=a.proxy(function(){this.animating=!1;var a=this.list().find("[data-jcarousel-clone]");a.length>0&&(a.remove(),this._reload()),this._trigger("animateend"),d.call(this,!0)},this),g="object"==typeof e?a.extend({},e):{duration:e},h=g.complete||a.noop;return c===!1?g.duration=0:"undefined"!=typeof a.fx.speeds[g.duration]&&(g.duration=a.fx.speeds[g.duration]),g.complete=function(){f(),h.call(this)},this.move(b,g),this},_prepare:function(b){var d,e,f,g,h=this.index(b),i=h,j=this.dimension(b),k=this.clipping(),l=this.vertical?"bottom":this.rtl?"left":"right",m=this.options("center"),n={target:b,first:b,last:b,visible:b,fullyvisible:k>=j?b:a()};if(m&&(j/=2,k/=2),k>j)for(;;){if(d=this.items().eq(++i),0===d.length){if(!this.circular)break;if(d=this.items().eq(0),b.get(0)===d.get(0))break;if(e=this._visible.index(d)>=0,e&&d.after(d.clone(!0).attr("data-jcarousel-clone",!0)),this.list().append(d),!e){var o={};o[this.lt]=this.dimension(d),this.moveBy(o)}this._items=null}if(g=this.dimension(d),0===g)break;if(j+=g,n.last=d,n.visible=n.visible.add(d),f=c(d.css("margin-"+l)),k>=j-f&&(n.fullyvisible=n.fullyvisible.add(d)),j>=k)break}if(!this.circular&&!m&&k>j)for(i=h;;){if(--i<0)break;if(d=this.items().eq(i),0===d.length)break;if(g=this.dimension(d),0===g)break;if(j+=g,n.first=d,n.visible=n.visible.add(d),f=c(d.css("margin-"+l)),k>=j-f&&(n.fullyvisible=n.fullyvisible.add(d)),j>=k)break}return this._update(n),this.tail=0,m||"circular"===this.options("wrap")||"custom"===this.options("wrap")||this.index(n.last)!==this.items().length-1||(j-=c(n.last.css("margin-"+l)),j>k&&(this.tail=j-k)),this},_position:function(a){var b=this._first,c=b.position()[this.lt],d=this.options("center"),e=d?this.clipping()/2-this.dimension(b)/2:0;return this.rtl&&!this.vertical?(c-=this.relative?this.list().width()-this.dimension(b):this.clipping()-this.dimension(b),c+=e):c-=e,!d&&(this.index(a)>this.index(b)||this.inTail)&&this.tail?(c=this.rtl&&!this.vertical?c-this.tail:c+this.tail,this.inTail=!0):this.inTail=!1,-c},_update:function(b){var c,d=this,e={target:this._target,first:this._first,last:this._last,visible:this._visible,fullyvisible:this._fullyvisible},f=this.index(b.first||e.first)<this.index(e.first),g=function(c){var g=[],h=[];b[c].each(function(){e[c].index(this)<0&&g.push(this)}),e[c].each(function(){b[c].index(this)<0&&h.push(this)}),f?g=g.reverse():h=h.reverse(),d._trigger(c+"in",a(g)),d._trigger(c+"out",a(h)),d["_"+c]=b[c]};for(c in b)g(c);return this}})}(jQuery,window),function(a){"use strict";a.jcarousel.fn.scrollIntoView=function(b,c,d){var e,f=a.jCarousel.parseTarget(b),g=this.index(this._fullyvisible.first()),h=this.index(this._fullyvisible.last());if(e=f.relative?f.target<0?Math.max(0,g+f.target):h+f.target:"object"!=typeof f.target?f.target:this.index(f.target),g>e)return this.scroll(e,c,d);if(e>=g&&h>=e)return a.isFunction(d)&&d.call(this,!1),this;for(var i,j=this.items(),k=this.clipping(),l=this.vertical?"bottom":this.rtl?"left":"right",m=0;;){if(i=j.eq(e),0===i.length)break;if(m+=this.dimension(i),m>=k){var n=parseFloat(i.css("margin-"+l))||0;m-n!==k&&e++;break}if(0>=e)break;e--}return this.scroll(e,c,d)}}(jQuery),function(a){"use strict";a.jCarousel.plugin("jcarouselControl",{_options:{target:"+=1",event:"click",method:"scroll"},_active:null,_init:function(){this.onDestroy=a.proxy(function(){this._destroy(),this.carousel().one("jcarousel:createend",a.proxy(this._create,this))},this),this.onReload=a.proxy(this._reload,this),this.onEvent=a.proxy(function(b){b.preventDefault();var c=this.options("method");a.isFunction(c)?c.call(this):this.carousel().jcarousel(this.options("method"),this.options("target"))},this)},_create:function(){this.carousel().one("jcarousel:destroy",this.onDestroy).on("jcarousel:reloadend jcarousel:scrollend",this.onReload),this._element.on(this.options("event")+".jcarouselcontrol",this.onEvent),this._reload()},_destroy:function(){this._element.off(".jcarouselcontrol",this.onEvent),this.carousel().off("jcarousel:destroy",this.onDestroy).off("jcarousel:reloadend jcarousel:scrollend",this.onReload)},_reload:function(){var b,c=a.jCarousel.parseTarget(this.options("target")),d=this.carousel();if(c.relative)b=d.jcarousel(c.target>0?"hasNext":"hasPrev");else{var e="object"!=typeof c.target?d.jcarousel("items").eq(c.target):c.target;b=d.jcarousel("target").index(e)>=0}return this._active!==b&&(this._trigger(b?"active":"inactive"),this._active=b),this}})}(jQuery),function(a){"use strict";a.jCarousel.plugin("jcarouselPagination",{_options:{perPage:null,item:function(a){return'<a href="#'+a+'">'+a+"</a>"},event:"click",method:"scroll"},_carouselItems:null,_pages:{},_items:{},_currentPage:null,_init:function(){this.onDestroy=a.proxy(function(){this._destroy(),this.carousel().one("jcarousel:createend",a.proxy(this._create,this))},this),this.onReload=a.proxy(this._reload,this),this.onScroll=a.proxy(this._update,this)},_create:function(){this.carousel().one("jcarousel:destroy",this.onDestroy).on("jcarousel:reloadend",this.onReload).on("jcarousel:scrollend",this.onScroll),this._reload()},_destroy:function(){this._clear(),this.carousel().off("jcarousel:destroy",this.onDestroy).off("jcarousel:reloadend",this.onReload).off("jcarousel:scrollend",this.onScroll),this._carouselItems=null},_reload:function(){var b=this.options("perPage");if(this._pages={},this._items={},a.isFunction(b)&&(b=b.call(this)),null==b)this._pages=this._calculatePages();else for(var c,d=parseInt(b,10)||0,e=this._getCarouselItems(),f=1,g=0;;){if(c=e.eq(g++),0===c.length)break;this._pages[f]=this._pages[f]?this._pages[f].add(c):c,g%d===0&&f++}this._clear();var h=this,i=this.carousel().data("jcarousel"),j=this._element,k=this.options("item"),l=this._getCarouselItems().length;a.each(this._pages,function(b,c){var d=h._items[b]=a(k.call(h,b,c));d.on(h.options("event")+".jcarouselpagination",a.proxy(function(){var a=c.eq(0);if(i.circular){var d=i.index(i.target()),e=i.index(a);parseFloat(b)>parseFloat(h._currentPage)?d>e&&(a="+="+(l-d+e)):e>d&&(a="-="+(d+(l-e)))}i[this.options("method")](a)},h)),j.append(d)}),this._update()},_update:function(){var b,c=this.carousel().jcarousel("target");a.each(this._pages,function(a,d){return d.each(function(){return c.is(this)?(b=a,!1):void 0}),b?!1:void 0}),this._currentPage!==b&&(this._trigger("inactive",this._items[this._currentPage]),this._trigger("active",this._items[b])),this._currentPage=b},items:function(){return this._items},reloadCarouselItems:function(){return this._carouselItems=null,this},_clear:function(){this._element.empty(),this._currentPage=null},_calculatePages:function(){for(var a,b,c=this.carousel().data("jcarousel"),d=this._getCarouselItems(),e=c.clipping(),f=0,g=0,h=1,i={};;){if(a=d.eq(g++),0===a.length)break;b=c.dimension(a),f+b>e&&(h++,f=0),f+=b,i[h]=i[h]?i[h].add(a):a}return i},_getCarouselItems:function(){return this._carouselItems||(this._carouselItems=this.carousel().jcarousel("items")),this._carouselItems}})}(jQuery),function(a,b){"use strict";var c,d,e={hidden:"visibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange",webkitHidden:"webkitvisibilitychange"};a.each(e,function(a,e){return"undefined"!=typeof b[a]?(c=a,d=e,!1):void 0}),a.jCarousel.plugin("jcarouselAutoscroll",{_options:{target:"+=1",interval:3e3,autostart:!0},_timer:null,_started:!1,_init:function(){this.onDestroy=a.proxy(function(){this._destroy(),this.carousel().one("jcarousel:createend",a.proxy(this._create,this))},this),this.onAnimateEnd=a.proxy(this._start,this),this.onVisibilityChange=a.proxy(function(){b[c]?this._stop():this._start()},this)},_create:function(){this.carousel().one("jcarousel:destroy",this.onDestroy),a(b).on(d,this.onVisibilityChange),this.options("autostart")&&this.start()},_destroy:function(){this._stop(),this.carousel().off("jcarousel:destroy",this.onDestroy),a(b).off(d,this.onVisibilityChange)},_start:function(){return this._stop(),this._started?(this.carousel().one("jcarousel:animateend",this.onAnimateEnd),this._timer=setTimeout(a.proxy(function(){this.carousel().jcarousel("scroll",this.options("target"))},this),this.options("interval")),this):void 0},_stop:function(){return this._timer&&(this._timer=clearTimeout(this._timer)),this.carousel().off("jcarousel:animateend",this.onAnimateEnd),this},start:function(){return this._started=!0,this._start(),this},stop:function(){return this._started=!1,this._stop(),this}})}(jQuery,document);;
(function($) {
    $(function() {
	//$( window ).load(function() {
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();
				//console.log(width);
				var visibleItemsCnt = parseInt($(this).attr("data-items-count")) || 0;
				if(visibleItemsCnt==0){
					visibleItemsCnt = 5;
				}
                if (width >= 700) {
                    width = width / visibleItemsCnt;
                } else if (width >= 600) {
                    width = width / 3;
                }else if (width >= 350) {
                    width = width / 2;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
			.on('jcarousel:targetin', 'li', function() {
                $(this).addClass('target');
            })
            .on('jcarousel:targetout', 'li', function() {
                $(this).removeClass('target');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });
	$( document ).ajaxComplete(function() {
	
        var jcarousel = $('.right-page .jcarousel');
        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();
				var visibleItemsCnt = parseInt($(this).attr("data-items-count")) || 0;
				if(visibleItemsCnt==0){
					visibleItemsCnt = 5;
				}
                if (width >= 700) {
                    width = width / visibleItemsCnt;
                } else if (width >= 600) {
                    width = width / 3;
                }else if (width >= 350) {
                    width = width / 2;
                }
                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
			.on('jcarousel:targetin', 'li', function() {
                $(this).addClass('target');
            })
            .on('jcarousel:targetout', 'li', function() {
                $(this).removeClass('target');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
	});
	
})(jQuery);
;
(function($) {
	function init() {
		$(".page-scroll .page-slide").width($(window).width());
		$(".page-scroll>div").offset({ top: 0, left: - $(".page-scroll .page-slide").width() });
		
		$(".page-scroll-ctr-btn").click(function(){
			var direction=1;
			var endPoint1=0;
			var itemWrapper = $(".page-scroll>div");
			var items = $(".page-scroll .page-slide");
			var endPoint2 = -1 * (items.length-2) * items.width();
			var currentPosition = itemWrapper.offset().left;	
			
			if($(this).hasClass("next")){
				direction=-1;
				if(currentPosition == endPoint2){
					itemWrapper.offset({ top: 0, left: currentPosition + items.width() });
					currentPosition= itemWrapper.offset().left;
					$(".page-scroll .page-slide:first-child").appendTo(itemWrapper);
				}
			}else {
			
				if(currentPosition == endPoint1){
					itemWrapper.offset({ top: 0, left: currentPosition - items.width() });
					currentPosition = itemWrapper.offset().left;
					$(".page-scroll .page-slide:last-child").prependTo(itemWrapper);
				}
			}
			itemWrapper.animate({
				left: (currentPosition + (direction * items.width()))
			}, 1000);
		});
	}
	
	$(function() {
		init();
	});
	
	var windowWidth = $(window).width();
    $(window).resize(function(){
        if ($(window).width() != windowWidth) {
			if($(window).width()<1025) {
				windowWidth = $(window).width();
				$(".page-scroll .page-slide").width($(window).width());
				$(".page-scroll>div").offset({ top: 0, left: - $(".page-scroll .page-slide").width() });
			}
			else {
				$(".page-scroll .page-slide").width($(window).width());
				$(".page-scroll>div").offset({ top: 0, left: - $(".page-scroll .page-slide").width() });
			}
        }
    });
	
	$( window ).resize(function() {
		//$(".page-scroll .page-slide").width($(window).width());
		//$(".page-scroll>div").offset({ top: 0, left: - $(".page-scroll .page-slide").width() });
        //alert("resized");
	});
})(jQuery);
;

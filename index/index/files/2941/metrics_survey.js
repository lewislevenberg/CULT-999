	
jQuery(document).ready(function() {
	/*expand-collapse*/
	jQuery(".view-metrics-survey-fiches .item-list h3").each(function(){
		this.p=this.parentNode;
		jQuery(this.p).addClass("collapsed");
		this.onclick=function(){
			jQuery(this.p).toggleClass("collapsed");
		}
	});
	jQuery(".view-header #metrics_survey_filter_wrapper .expandCollapseAll .expandAll").each(function(){
		this.onclick=function(){
			jQuery(".view-metrics-survey-fiches .item-list h3").each(function(){
				jQuery(this.p).removeClass("collapsed");
			});
		};
	});
	jQuery(".view-header #metrics_survey_filter_wrapper .expandCollapseAll .collapseAll").each(function(){
		this.onclick=function(){
			jQuery(".view-metrics-survey-fiches .item-list h3").each(function(){
				jQuery(this.p).addClass("collapsed");
			});
		};
	});
	
	/*filter*/
	var metrics_survey_filter_wrapper=jQuery(".view-header #metrics_survey_filter_wrapper")[0];
	if(metrics_survey_filter_wrapper)metrics_survey_filter_wrapper.style.display="block";
	
	jQuery(".list_filter_input").each(function(){
		var tF=this;
		tF.initVal=tF.value;
		var o=this;
		while(o && (o.className.indexOf("view ")==-1 || o.className=="view"))o=o.parentNode;
		if(!o)return false;
		tF.relList=o;
		tF.onfocus=function(e){
			jQuery(this.parentNode).addClass("edited");
			if(this.value==this.initVal)this.value="";
		};
		tF.onblur=function(e){
			if(this.value == ""){
				jQuery(this.parentNode).removeClass("edited");
				this.value = this.initVal;
			}
		};
		tF.onkeyup=function(e){
			var lclVal=this.value.toLowerCase();
			jQuery(".view-content",this.relList).each(function(){
				var liList = this.getElementsByTagName("li");
				
				if(lclVal==""){
					jQuery(".view-metrics-survey-fiches .item-list").each(function(){
						jQuery(this).removeClass("filtered");
						this.style.display="";
					});
				}else{
					jQuery(".view-metrics-survey-fiches .item-list").each(function(){
						jQuery(this).addClass("filtered");
						this.style.display="none";
					});
				}
				
				for(var i=0;i<liList.length;i++){
					var cnt=liList[i].innerHTML;
					if(liList[i].innerText)cnt=liList[i].innerText;
					cnt=cnt.replace(/filter list/g,"");
					cnt=cnt.replace(/<\/.*>/g,"").replace(/<.*>/g,"");
					if(lclVal==""){
						liList[i].style.display='';
					}else{
						if(cnt.toLowerCase().indexOf(lclVal)==-1){
							liList[i].style.display='none';
						}else{
							liList[i].parentNode.parentNode.style.display="block";
							liList[i].style.display='block';
						}
					}
				};
				
			});
		};

		var remFltr=jQuery(".removeFilter",tF.parentNode)[0];
		remFltr.tF=tF;
		remFltr.onclick=function(e){
			this.tF.value="";
			this.tF.onkeyup();
			this.tF.onblur();
		};
	});

	jQuery(LIHiddenWhileLoading).remove();
	
}); 
var LIHiddenWhileLoading=jQuery("<style type='text/css'>.view-metrics-survey-fiches .item-list .list_to_filter li{display:none;} </style>").appendTo("head");

$(document).ready(function(){	

 /*expand */
		$('.expandCont span.plsBtn').click(function(){								
			
			  $(this).toggleClass('rb');
			  
			 if(($(this)).is('.rb')){
				
					  $(this).addClass("openAdd");
				   $(this).text("Close");
				$(this).parent().next('div').slideDown();
				 }else{
			
				 $(this).removeClass("openAdd");
				 $(this).text("Open");
				$(this).parent().next('div').slideUp();
					 }
		});
 
 /*expand end */

						   

		if (!$.browser.opera) {
    
			// select element styling
			$('select.select').each(function(){
				var title = $(this).attr('title');
				if( $('option:selected', this).val() != ''  ) title = $('option:selected',this).text();
				$(this)
					.css({'z-index':10,'opacity':0,'-khtml-appearance':'none'})
					.after('<span class="select">' + title + '</span>')
					.change(function(){
						val = $('option:selected',this).text();
						$(this).next().text(val);
						})
			});

		};
		
		});
		
		 
	
	
ForeSee.surveydefs = [{
    name: 'worldbank',
    invite: {
        when: 'onentry'
    },
    pop: {
        when: 'now'
    },
    criteria: {
        sp: 2,
        lf: 4,
        locales: [{
            locale: 'fre',
            sp: 5,
            lf: 4
        }, {
            locale: 'spa',
            sp: 5,
            lf: 4
        }, {
            locale: 'chi',
            sp: 15,
            lf: 4
        }]
    },
    include: {
        urls: ['.']
    }
}];
ForeSee.properties = {
    repeatdays: 90,
    
    language: {
		locale: 'eng',
        src: 'variable',
		type: 'foresee',
		name: 'lang',
        locales: [{
            match: 'spa',
            locale: 'spa'
        }, {
            match: 'fre',
            locale: 'fre'
        }, {
            match: 'chi',
            locale: 'chi'
        }]
    },
    
    exclude: {
        local: [],
        referer: []
    },
    
    invite: {
        //url: 'invite.html',
		content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE><meta http-equiv=\"Content-Type\" content= \"text/html; charset=utf-8\"></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}sitelogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\"><b>Thank you for visiting The World Bank!</b><br><br>Thank you for visiting our site.You have been randomly selected to take part in a survey to let us know what we\'re doing well and where we need to do better.All results are strictly confidential.<br><br>Please select your language and click \"Continue\".&nbsp;&nbsp;<SELECT NAME=\"language\" onchange=\"ForeSee.c().fsr$set(\'locale\', this.value)\"><OPTION name=\"locale\" value=\"eng\" SELECTED>English<OPTION name=\"locale\" value=\"fre\">en Fran&ccedil;ais<OPTION name=\"locale\" value=\"spa\">en Espa&ntilde;ol<OPTION name=\"locale\" value=\"chi\">中文</SELECT><br><br></div></div></BODY></HTML>',
        width: '550',
        bgcolor: '#333',
        opacity: 0.7,
        x: 'center',
        y: 'center',
        delay: 0,
        accept: 'Continue',
        decline: 'No thanks',
        hideOnClick: false,
        locales: [{
            locale: 'fre',
            //url: 'invite_fre.html',
			content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE><meta http-equiv=\"Content-Type\" content= \"text/html; charset=utf-8\"></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}sitelogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\"><b>Nous vous remercions de votre visite sur le site de la Banque mondiale!</b><br><br>Nous vous remercions de votre visite sur notre site. Il est possible que vous soyez sélectionné aléatoirement pour participer à une enquête dont l\'objectif est d\'identifier nos points forts et ceux à améliorer. Tous les résultats sont strictement confidentiels.<br><br>Sélectionnez votre langue et cliquez sur \"Continuer\".&nbsp;&nbsp;<SELECT NAME=\"language\" onchange=\"ForeSee.c().fsr$set(\'locale\', this.value)\"><OPTION name=\"locale\" value=\"eng\">English<OPTION name=\"locale\" value=\"fre\" SELECTED>en Français<OPTION name=\"locale\" value=\"spa\">en Español<OPTION name=\"locale\" value=\"chi\">中文</SELECT><br><br></div></div></BODY></HTML>',
            accept: 'Continuer',
            decline: 'Non Merci'
        }, {
            locale: 'spa',
            //url: 'invite_spa.html',
			content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE><meta http-equiv=\"Content-Type\" content= \"text/html; charset=utf-8\"></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}sitelogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\"><b>Gracias por su visita al Banco Mundial.</b><br><br>Gracias por su visita a nuestro sitio. Usted ha sido elegido al azar para participar en una breve encuesta que nos permitirá saber qué estamos haciendo bien y qué aspectos podemos mejorar.Todos sus comentarios se mantendrán en forma estrictamente confidencial.<br><br>Por favor seleccione su idioma y haga clic en \"Continuar\".&nbsp;&nbsp;<SELECT NAME=\"language\" onchange=\"ForeSee.c().fsr$set(\'locale\', this.value)\"><OPTION name=\"locale\" value=\"eng\">English<OPTION name=\"locale\" value=\"fre\">en Français<OPTION name=\"locale\" value=\"spa\" SELECTED>en Español<OPTION name=\"locale\" value=\"chi\">中文</SELECT><br><br></div></div></BODY></HTML>',
            accept: 'Continuar',
            decline: 'No, gracias'
        }, {
            locale: 'chi',
            //url: 'invite_chi.html',
			content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE><meta http-equiv=\"Content-Type\" content= \"text/html; charset=utf-8\"></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}sitelogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\"><b>感谢您访问世界银行网站。</b><br><br>感谢您访问本网站。您被随机选中参与一个调查，请您指出本网站的优点和需改进之处。所有调查结果将严格保密。<br><br>请选择您的语言，之后点击 \"继续\".&nbsp;&nbsp;<SELECT NAME=\"language\" onchange=\"ForeSee.c().fsr$set(\'locale\', this.value)\"><OPTION name=\"locale\" value=\"eng\">English<OPTION name=\"locale\" value=\"fre\">en Français<OPTION name=\"locale\" value=\"spa\">en Español<OPTION name=\"locale\" value=\"chi\" SELECTED>中文</SELECT><br><br></div></div></BODY></HTML>',
            accept: '继续',
            decline: '不参加，谢谢'
        }]
    },
    
    tracker: {
        width: '500',
        height: '325',
        timeout: 3,
        url: 'tracker.html',
        locales: [{
            locale: 'fre',
            url: 'tracker_fre.html'
        }, {
            locale: 'spa',
            url: 'tracker_spa.html'
        }]
    },
    
    survey: {
        width: 650,
        height: 700,
        loading: false
    },
    
    qualifier: {
        location: 'local',
        width: '500',
        height: '300'
    },
    
    loading: {
        url: 'survey_loading.html',
        locales: [{
            locale: 'fre',
            url: 'survey_loading_fre.html'
        }, {
            locale: 'spa',
            url: 'survey_loading_spa.html'
        }]
    },
    
    pop: {
        what: 'survey',
        after: 'leaving-site',
        pu: false,
        tracker: true
    },
    
    ipexclude: {
        src: 'variable',
		type: 'client',
		name: 'strIP',
		ips: [/^192\.168\.[0-9]{1,3}\.[0-9]{1,3}$/, /^172\.16\.[0-9]{1,3}\.[0-9]{1,3}$/, /^172\.16\.[0-9]{1,3}\.[0-9]{1,3}$/, /^172\.17\.[0-9]{1,3}\.[0-9]{1,3}$/, /^172\.18\.[0-9]{1,3}\.[0-9]{1,3}$/, /^172\.19\.[0-9]{1,3}\.[0-9]{1,3}$/, /^172\.20\.[0-9]{1,3}\.[0-9]{1,3}$/, /^172\.21\.[0-9]{1,3}\.[0-9]{1,3}$/, /^172\.22\.[0-9]{1,3}\.[0-9]{1,3}$/, /^172\.23\.[0-9]{1,3}\.[0-9]{1,3}$/, /^172\.24\.[0-9]{1,3}\.[0-9]{1,3}$/, /^172\.25\.[0-9]{1,3}\.[0-9]{1,3}$/, /^172\.26\.[0-9]{1,3}\.[0-9]{1,3}$/, /^172\.27\.[0-9]{1,3}\.[0-9]{1,3}$/, /^172\.28\.[0-9]{1,3}\.[0-9]{1,3}$/, /^172\.29\.[0-9]{1,3}\.[0-9]{1,3}$/, /^172\.30\.[0-9]{1,3}\.[0-9]{1,3}$/, /^172\.31\.[0-9]{1,3}\.[0-9]{1,3}$/]
	},
    
    mode: 'first-party'
};

jQuery(document).ready(function () {
    jQuery('a[href*=".ashx"], a[href*=".pdf"], a[href*=".xls"], a[href *= ".doc"], a[href *= ".docx"]').click(function () {
        var s = window.location.hostname == "www.imf.org" ? s_gi('Imfprod') : s_gi('Imfdev');
        var Linkname = jQuery(this).text() + ":" + jQuery(this).attr("href");
        s.tl(this, 'd', Linkname);
    });
});



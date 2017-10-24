function showRollover(thema, lang) {
	if(document.getElementById) {
                var currlang = lang;		
                hideRollover(currlang);
		var sRolloverDiv = thema + '_' + lang;		
		if (document.getElementById(sRolloverDiv).innerHTML.length == 0) return;
               		document.getElementById('rollout_area').style.visibility = "visible";
			document.getElementById(sRolloverDiv).style.visibility = "visible";
	}
}

function hideRollover(currlang) {
    if(document.getElementById) {
        document.getElementById('lawinenbulletin_rollover_' + currlang).style.visibility = "hidden";
        document.getElementById('schneeinfo_rollover_' + currlang).style.visibility = "hidden";
        document.getElementById('praevention_rollover_' + currlang).style.visibility = "hidden";
        document.getElementById('forschung_rollover_' + currlang).style.visibility = "hidden";
        document.getElementById('slf_rollover_' + currlang).style.visibility = "hidden";
        document.getElementById('dienstleistungen_rollover_' + currlang).style.visibility = "hidden";
        document.getElementById('rollout_area').style.visibility = "hidden";
        }
}
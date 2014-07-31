// Custom Enable Rule on hidden ribbon buttons to create Global Advanced Find
function addAdvFindToCommandBar(retryCount) {
    try {
        setTimeout(function () {
            // Only add the button if it hasn't already been added (prevents dupes)
            if (parent.$("#mag_advancedfind").length == 0) {

                // Create the button HTML with embedded JavaScript actions and CSS and prepend it to the global context bar
                // This is a bit messy but CRM has too many frames to split it into seperate functions
                parent.$(".navFloatRight").prepend("<span title='Advanced Find' class='navTabButton' id='mag_advancedfind'><a class='navTabButtonLink' href='javascript:var u=Mscrm.CrmUri.create(\"/main.aspx\");u.get_query()[\"pagetype\"]=\"advancedfind\";try{var etc=$(\"iframe\").filter(function(){return $(this).css(\"visibility\")==\"visible\"})[0].contentWindow.Xrm.Page.context.getQueryStringParameters().etc;}catch(e){}if(etc){u.get_query()[\"extraqs\"]=\"EntityCode=\"+etc;}openStdWin(u,\"_blank\",900,600);void(0);' onMouseOver='document.getElementById(\"mag_advancedfindimage\").style.backgroundPosition=\"0 24px\";' onMouseOut='document.getElementById(\"mag_advancedfindimage\").style.backgroundPosition=\"0 0\";'><span class='navTabButtonImageContainer'><img class='globalCreateButtonImage' id='mag_advancedfindimage' alt='' style=\"background-image:url('" + Xrm.Page.context.getClientUrl() + "/WebResources/mag_/img/globaladvancedfind.png'); width:24px;height:24px\" src=\"/_imgs/NavBar/Invisible.gif\"></span><span class='navTabButtonLabel' id='mag_advancedfindtext'><span class='navTabButtonText'>Advanced Find</span></span></a></span>");
            }

            // Global context bar/navigation refreshes randomly when forms open etc so recur for 5 seconds to be sure
            if (retryCount === undefined || retryCount > 0) {
                addAdvFindToCommandBar(retryCount !== undefined ? retryCount - 1 : 10);
            }
        }, 500);
    } catch (e) { }

    // Always hide the button
    return false;
}
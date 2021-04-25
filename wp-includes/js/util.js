function initialVideo(id) {

    var aOrigin = jQuery('#' + id);
    var newContentID = 'highslide-html-' + id;
    var newPlayerID = 'player-' + id;

    var html = `
        <div id="${newContentID}" class="highslide-html-content highslide-video-container" style="width: 500px; height: 385px">
            <div class="highslide-header">
                <ul>
                    <li class="highslide-move"></li>
                    <li class="highslide-close">
                        <a href="#" onclick="return hs.close(this)"></a>
                    </li>
                </ul>
            </div>
            <div class="highslide-body">
                <div id="${newPlayerID}" style="display: block; width: 480px; height: 360px; margin: auto">
                    <video controls style="outline: none">
                        <source src="${aOrigin.attr('href')}">
                    </video>
                </div>
            </div>
        </div>
    `;

    jQuery('body').append(jQuery.parseHTML(html));

    aOrigin.click(function() {
        return hs.htmlExpand(aOrigin[0], {
            contentId: newContentID,
            allowSizeReduction: false,
            wrapperClassName: 'draggable-header no-footer'
        });
    });

    aOrigin.click(function() {
        jQuery('#' + newPlayerID).children('video')[0].play();
    });

}

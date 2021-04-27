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
                <div id="${newPlayerID}" style="width: 480px; height: 360px; margin: auto">
                    <video width="480" height="360" style="outline: none" src="${aOrigin.attr('href')}"></video>
                </div>
            </div>
        </div>
    `;

    jQuery(html).appendTo('body');

    hs.Expander.prototype.onAfterExpand = function (sender) {
        setTimeout(function() {
            var video = jQuery(sender.content).find('video');
            video.trigger('play');
            
            setTimeout(function() {
                video.prop('controls', true);
            }, 1000);

        }, 100);
    };

    aOrigin.click(function() {
        return hs.htmlExpand(aOrigin[0], {
            contentId: newContentID,
            allowSizeReduction: false,
            wrapperClassName: 'draggable-header no-footer'
        });
    });
}

//////////////////////////////

var _hmt = _hmt || [];

(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?8785f875403fa16ddd737c1133a21784";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

(function() {
    var ga = document.createElement('script');
    ga.src = "https://www.googletagmanager.com/gtag/js?id=G-HT4F9QQ6KY";
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-HT4F9QQ6KY');

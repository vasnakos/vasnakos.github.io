(function($){
    $.fn.equalHeights = function(options) {
        //Default settings:
        var defaults = {
            container: ".pods-container",
            equalElements: ".pod",
            vw: 768
        };

        var opt = $.extend( {}, defaults, options );
        viewPortWidth = $(window).width();

        equalizer(opt.equalElements, opt.vw);

        function equalizer(elements, vw) {
            viewPortWidth = $(window).width();
            var els = document.querySelectorAll(elements),
                elsLen = els.length,
                i = 0;
            if (elsLen > 0) {
                for (i; i < elsLen; i += 1) {
                    els[i].style.height = 'auto';
                }
            }
            if (elsLen > 1) {
                var pods = els,
                    podsLen = pods.length,
                    arr = [],
                    podHeight,
                    podMaxHeight,
                    i = 0,
                    j = 0;
                for (i; i < podsLen; i += 1) {
                    podHeight = pods[i].offsetHeight;
                    arr.push(podHeight);
                }
                podMaxHeight = Math.max.apply(Math, arr);
                if (podMaxHeight > 0) {
                    for (j; j < podsLen; j += 1) {
                        pods[j].style.height = podMaxHeight + 'px';
                    }
                }
            }
            if (viewPortWidth < vw) {
                var pods = els,
                    podsLen = pods.length,
                    i = 0;

                for (i; i < podsLen; i += 1) {
                    pods[i].style.height = 'auto';
                }
            }
        }

        $(window).on('resize', function () {
            console.log('On resize');
            console.log('window width: ' + viewPortWidth);
            console.log('options vw: ' + opt.vw);
            equalizer(opt.equalElements, opt.vw);
        });        
        return this;
    };

})(jQuery);
require.config({
    paths: {
        'cocos2d': '../lib/Cocos2d-html5-canvasmenu',
        'domReady': '../lib/domReady'
    },
    shim: {
        'cocos2d': {
            exports: 'cc'
        }
    }
});

require(['domReady', 'cocos2d', 'AppDelegate'], function(domReady, cc) {
    'use strict';

    domReady(function() {
        cc.setup("gameCanvas");
        cc.AudioManager.sharedEngine().init("mp3,ogg");

        var loader = cc.Loader.shareLoader();
        loader.onloading = function() {
            cc.LoaderScene.shareLoaderScene().draw();
        };

        loader.onload = function() {
            cc.AppController.shareAppController().didFinishLaunchingWithOptions();
        };

        loader.preload([
            {type: 'image', src: 'resources/HelloWorld.png'}
        ]);
    });
});

define(['cocos2d'], function(cc) {
    'use strict';

    var HelloWorldScene = cc.Layer.extend({
        init: function() {
            this._super();

            var winSize = cc.Director.sharedDirector().getWinSize();
            var helloWorld = cc.Sprite.create('resources/HelloWorld.png');

            helloWorld.setPosition(cc.ccp(winSize.width / 2, winSize.height / 2));
            this.addChild(helloWorld);

            return true;
        }
    });

    HelloWorldScene.scene = function() {
        var scene = cc.Scene.create();
        var node = this.node();
        scene.addChild(node);
        return scene;
    };

    HelloWorldScene.node = function() {
        var node = new HelloWorldScene();
        if (node && node.init()) {
            return node;
        }
        throw new Error('Node not created');
    };

    return HelloWorldScene;
});

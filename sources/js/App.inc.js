"use strict";

include("Env.js");
include("lib/Updater.js");
include("lib/helpers.js");

var App = {
    overrides: {
        before: {},
        after: {}
    }
};

include("live/base/Storage.js");
include("live/base/Dev.js");
include("live/Literator.js");
include("live/Writer.js");
include("live/Commands.js");
include("live/DomMarks.js");
include("live/auxi/DomSignaler.js");
include("live/auxi/ViewController.js");
include("live/auxi/Fitter.js");
include("live/auxi/Messages.js");
include("live/auxi/OutFontResizer.js");
include("live/auxi/SelectsController.js");
include("live/auxi/ClickEvents.js");
include("live/auxi/ClickRepeater.js");
include("live/auxi/Selection.js");
include("building/Constructor.js");
include("building/MenuBuilder.js");
include("building/KBoardBuilder.js");
include("building/EventAssigner.js");
include("building/auxi/buildOutline.js");
include("building/auxi/removeLoader.js");
include("overrides/NoGoOnCssFlexLack.js");
include("overrides/JsStringMethodsLack.js");
include("overrides/JsSetRangeTextLack.js");
include("overrides/JsScrollingElementLack.js");
include("overrides/MsKeyboardEvents.js");
include("overrides/TouchDevCaptions.js");

include("run.js");
include("cleanup.js");

App.Constructor.enterAlphabets(
        include("/data/alphabets/05-american_futharch.json")
);

if (App.Dev.std) {
    App.Constructor.enterLayouts(
            include("/data/layouts/00-uni.json")
    );
}

window.addEventListener("load", App.run);

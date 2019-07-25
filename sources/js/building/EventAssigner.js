
/* global App, Updater, findOne */

App.EventAssigner = {

    run: function () {
        this.assignMenuClicks();
        this.assignXCharClicks();
        this.assignResizeHandling();
        if (App.Dev.std) {
            this.assingKeyboardWriting();
            this.assignCommandKeys();
        } else {
            this.assignTouchSelection();
        }
    },

    assingKeyboardWriting: function () {
        var textArea = App.Writer.textArea;
        textArea.addEventListener("keydown", App.Writer.catchKeyDown);
        textArea.addEventListener("keyup", App.Writer.catchKeyUp);
    },

    assignTouchSelection: function () {
        var element = App.Writer.textArea.div;
        element.addEventListener("ontouchend" in element ? "touchend" : "click", function () {
            setTimeout(App.Writer.textArea.catchTouch, 0);
        });
    },

    assignMenuClicks: function () {
        var menuClickHandler = function (event) {
            var topic = null;
            for (var i = 0, target = event.target; i < 3 && target && !topic; i++) {
                (topic = target.getAttribute("data-topic")) || (target = target.parentNode);
            }
            if (topic) {
                Updater.push(
                        topic,
                        target.getAttribute("data-" + topic)
                );
            }
        };
        var menus = findMany(".menu");
        for (var i = 0; i < menus.length; i++) {
            menus[i].addEventListener("click", menuClickHandler);
        }

        var workspace = findOne("#workspace");

        var selectSwitchHandler = function (event) {
            var select = App.MenuSelectController.findContainingSelect(event.target, true);
            if (select) {
                event.stopPropagation();
                App.MenuSelectController.handle(select);
            }
        };
        workspace.firstElementChild.children[1].addEventListener("click", selectSwitchHandler);

        var selectClearingHandler = function (event) {
            if (!App.MenuSelectController.findContainingSelect(event.target, false)) {
                App.MenuSelectController.clear();
            }
        };
        workspace.addEventListener("click", selectClearingHandler);
    },

    assignXCharClicks: function () {
        App.DomMarks.kBoardSpace.addEventListener("click", function (event) {
            if (event.target.hasAttribute("data-xchar")) {
                App.Writer.clickWrite(
                        event.target.getAttribute("data-xchar")
                );
            }
        });
    },

    assignResizeHandling: function () {
        window.addEventListener("resize", App.FitController.fit);
    },

    assignCommandKeys: function () {
        document.addEventListener("keydown", App.Commands.catchKeyDown);
    }

};

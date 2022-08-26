// ==UserScript==
// @name        Stash New Performer Filter Button
// @description Adds a button to the performers page to switch to a new performers filter
// @version     0.2.1
// @author      7dJx1qP
// @match       http://localhost:9999/*
// @grant       none
// @require     https://raw.githubusercontent.com/7dJx1qP/stash-userscripts/develop/src\StashUserscriptLibrary.js
// ==/UserScript==

(function () {
    'use strict';

    const {
        Stash,
        waitForElementId,
        waitForElementClass,
        waitForElementByXpath,
        getElementByXpath,
    } = window.stash;

    const stash = new Stash();

    stash.addEventListener('page:performers', function () {
        waitForElementClass("btn-toolbar", function () {
            if (!document.getElementById('new-performer-filter')) {
                const toolbar = document.querySelector(".btn-toolbar");

                const newGroup = document.createElement('div');
                newGroup.classList.add('mx-2', 'mb-2', 'd-flex');
                toolbar.appendChild(newGroup);

                const newButton = document.createElement("a");
                newButton.setAttribute("id", "new-performer-filter");
                newButton.classList.add('btn', 'btn-secondary', 'mr-2');
                newButton.innerHTML = 'New Performers';
                newButton.href = `${stash.serverUrl}/performers?disp=3&sortby=created_at&sortdir=desc`;
                newGroup.appendChild(newButton);
            }
        });
    });
})();
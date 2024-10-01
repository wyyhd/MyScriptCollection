// ==UserScript==
// @name         以格式markdown复制网页链接
// @namespace    http://tampermonkey.net/
// @version      2024-10-01
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @match        https://*/**
// @icon         https://www.google.com/s2/favicons?sz=64&domain=0.10
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    // 弹窗
function tc(text) {
    var a = document.createElement("mydiv")

    // 设置元素的样式为居中
    a.style.position = 'fixed';
    a.style.top = '50vh'; // 视口高度的50%
    a.style.left = '50vw'; // 视口宽度的50%
    a.style.transform = 'translate(-50%, -50%)';

    // 显示复制文字
    var b = document.createElement("div")
    b.innerText = text


    // b.style.width = '8vh'
    // a.style.margin = '5em auto'
    // a.style.padding = '2em'
    b.style["background-color"] = ' #24f5ff'
    b.style["border-radius"] = ' 0.5em'
    b.style[" box-shadow"] = ' 2px 3px 7px 2px rgba(0,0,0,0.02);'
    b.style.border = "3px solid blue"


    // 删除
    var x = document.createElement("button")
    x.innerText = "x"

    // 添加点击删除事件监听器
    x.addEventListener('click', function (event) {
        a.remove();
    });

    a.appendChild(b);
    a.appendChild(x);
    document.body.appendChild(a);
}


function func() {
    var a = document.createElement("mydiv")

    // 设置元素的样式为靠边
    a.style.position = 'fixed';
    a.style.top = '10vh'; // 视口高度的50%
    a.style.left = '90vw'; // 视口宽度的50%
    a.style.transform = 'translate(-50%, -50%)';

    // 装饰
    a.style["background-color"] = ' #24f5ff'
    a.style["border-radius"] = '2px'
    a.style.border = "2px solid blue"
    // 注册事件
    a.addEventListener('click', () => {
        // 获取当前页面的URL和标题
        var url = window.location.href;
        var title = document.title;
        tc(`[${title}](${url})`)
    })

    a.innerText = "copy"
    document.body.appendChild(a);
}
func()
})();

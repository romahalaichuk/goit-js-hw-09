let t;document.getElementById("startButton").addEventListener("click",function(){this.disabled=!0,document.getElementById("stopButton").disabled=!1,t=setInterval(function(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`},1e3)}),document.getElementById("stopButton").addEventListener("click",function(){document.getElementById("startButton").disabled=!1,this.disabled=!0,clearInterval(t)});
//# sourceMappingURL=01-color-switcher.9b904679.js.map

(function(){"use strict";function P(){window.animationOverlay!=null&&H(),window.animationBlocker=document.createElement("div"),window.animationBlocker.id="recipe-execution-blocker",window.animationBlocker.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: auto;
    cursor: not-allowed;
    z-index: 2147483646;
    will-change: transform;
    transform: translateZ(0);
    isolation: isolate;
    contain: strict;
  `,window.animationOverlay=document.createElement("div"),window.animationOverlay.id="recipe-execution-glow",window.animationOverlay.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    cursor: default;
    z-index: 2147483647;
    box-shadow:
      inset 0 0 80px 20px rgba(148, 50, 252, 0.4),
      inset 0 0 120px 40px rgba(148, 50, 252, 0.2);
    animation: breathingGlow 5s ease-in-out infinite;
    will-change: transform;
    transform: translateZ(0);
    isolation: isolate;
    contain: strict;
  `,window.animationStyle=document.createElement("style"),window.animationStyle.textContent=`
    @keyframes breathingGlow {
      0% {
        box-shadow:
          inset 0 0 80px 20px rgba(148, 50, 252, 0.5),
          inset 0 0 120px 40px rgba(148, 50, 252, 0.3);
      }
      33% {
        box-shadow:
          inset 0 0 80px 20px rgba(12, 189, 252, 0.5),
          inset 0 0 120px 40px rgba(12, 189, 252, 0.3);
      }
      66% {
        box-shadow:
          inset 0 0 80px 20px rgba(105, 94, 252, 0.5),
          inset 0 0 120px 40px rgba(105, 94, 252, 0.3);
      }
      100% {
        box-shadow:
          inset 0 0 80px 20px rgba(148, 50, 252, 0.5),
          inset 0 0 120px 40px rgba(148, 50, 252, 0.3);
      }
    }
  `,document.head.appendChild(window.animationStyle),document.body.appendChild(window.animationBlocker),document.body.appendChild(window.animationOverlay)}function H(){if(window.animationBlocker!=null){try{document.body.removeChild(window.animationBlocker)}catch{}window.animationBlocker=null}if(window.animationOverlay!=null){try{document.body.removeChild(window.animationOverlay)}catch{}window.animationOverlay=null}if(window.animationStyle!=null){try{document.head.removeChild(window.animationStyle)}catch{}window.animationStyle=null}}function J(){window.animationBlocker!=null&&(window.animationBlocker.style.display="none"),window.animationOverlay!=null&&(window.animationOverlay.style.opacity="0")}function A(i,n){const e=window.innerWidth,o=window.innerHeight,l=Math.min(n,i>0?n:0),t=i,s=i,a=e-i,d=o-i;return"M0,0 H"+e+" V"+o+" H0 Z M"+t+","+(s+l)+" Q"+t+","+s+" "+(t+l)+","+s+" H"+(a-l)+" Q"+a+","+s+" "+a+","+(s+l)+" V"+(d-l)+" Q"+a+","+d+" "+(a-l)+","+d+" H"+(t+l)+" Q"+t+","+d+" "+t+","+(d-l)+" Z"}function $(){const i=document.getElementById("recipe-user-action-border"),n=()=>{window.animationOverlay==null&&P(),window.animationBlocker!=null&&(window.animationBlocker.style.display="block"),window.animationOverlay!=null&&(window.animationOverlay.style.opacity="1",window.animationOverlay.style.animation="none",window.animationOverlay.offsetHeight,window.animationOverlay.style.animation="breathingGlow 5s ease-in-out infinite")};if(i!=null){let e=null;const o=500,l=5,t=s=>{e==null&&(e=s);const a=s-e,d=Math.min(a/o,1),p=d*d,u=l*(1-p);if(i!=null&&(i.style.boxShadow=`inset 0 0 0 ${u}px #1877F2`),d<1)requestAnimationFrame(t);else{const w=document.getElementById("recipe-user-action-border");w!=null&&w.remove(),n()}};requestAnimationFrame(t)}else n()}function q(){window.failureBorderOverlay!=null&&N(),H(),window.failureBorderStyle=document.createElement("style"),window.failureBorderStyle.id="recipe-failure-border-style",window.failureBorderStyle.textContent=`
    @keyframes failureBorderGlow {
      0% { box-shadow: inset 0 0 4px 2px rgba(150, 94, 3, 0.35); }
      50% { box-shadow: inset 0 0 20px 8px rgba(150, 94, 3, 0.55); }
      100% { box-shadow: inset 0 0 4px 2px rgba(150, 94, 3, 0.35); }
    }
  `,document.head.appendChild(window.failureBorderStyle),window.failureBorderGlowOverlay=document.createElement("div"),window.failureBorderGlowOverlay.id="recipe-failure-border-glow",window.failureBorderGlowOverlay.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 2147483646;
    box-shadow: inset 0 0 4px 2px rgba(150, 94, 3, 0.35);
    animation: failureBorderGlow 2s ease-in-out infinite;
  `,window.failureBorderOverlay=document.createElement("div"),window.failureBorderOverlay.id="recipe-failure-border",window.failureBorderOverlay.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 2147483647;
    background: rgba(150, 94, 3, 0.8);
  `;const i=5,n=10,e=800;window.failureBorderOverlay.style.clipPath="path(evenodd, '"+A(0,n)+"')",window.failureBorderGlowOverlay.style.opacity="0";let o=null;const l=t=>{if(window.failureBorderOverlay==null)return;o==null&&(o=t);const s=t-o,a=Math.min(s/e,1),d=1-Math.pow(1-a,3),p=d*i;window.failureBorderOverlay.style.clipPath="path(evenodd, '"+A(p,n)+"')",window.failureBorderGlowOverlay!=null&&(window.failureBorderGlowOverlay.style.opacity=String(d)),a<1&&requestAnimationFrame(l)};window.failureBorderResizeHandler=()=>{window.failureBorderOverlay!=null&&(window.failureBorderOverlay.style.clipPath="path(evenodd, '"+A(i,n)+"')")},window.addEventListener("resize",window.failureBorderResizeHandler),document.body.appendChild(window.failureBorderGlowOverlay),document.body.appendChild(window.failureBorderOverlay),requestAnimationFrame(l)}function N(){if(window.failureBorderResizeHandler!=null&&(window.removeEventListener("resize",window.failureBorderResizeHandler),window.failureBorderResizeHandler=null),window.failureBorderStyle!=null){try{document.head.removeChild(window.failureBorderStyle)}catch{}window.failureBorderStyle=null}if(window.failureBorderGlowOverlay!=null){try{document.body.removeChild(window.failureBorderGlowOverlay)}catch{}window.failureBorderGlowOverlay=null}if(window.failureBorderOverlay!=null){try{document.body.removeChild(window.failureBorderOverlay)}catch{}window.failureBorderOverlay=null}}function K(){window.sideBorderOverlay!=null&&U(),window.sideBorderStyle=document.createElement("style"),window.sideBorderStyle.id="recipe-side-border-style",window.sideBorderStyle.textContent=`
    @keyframes sideBorderGlow {
      0% { box-shadow: 0 0 4px 2px rgba(150, 94, 3, 0.35); }
      50% { box-shadow: 0 0 20px 8px rgba(150, 94, 3, 0.55); }
      100% { box-shadow: 0 0 4px 2px rgba(150, 94, 3, 0.35); }
    }
  `,document.head.appendChild(window.sideBorderStyle),window.sideBorderOverlay=document.createElement("div"),window.sideBorderOverlay.id="recipe-side-border",window.sideBorderOverlay.style.cssText=`
    position: fixed;
    top: 0;
    right: 0;
    width: 0px;
    height: 100vh;
    pointer-events: none;
    z-index: 2147483647;
    background: rgba(150, 94, 3, 0.8);
    animation: sideBorderGlow 2s ease-in-out infinite;
  `,document.body.appendChild(window.sideBorderOverlay);const i=5,n=800;let e=null;const o=l=>{if(window.sideBorderOverlay==null)return;e==null&&(e=l);const t=l-e,s=Math.min(t/n,1),a=1-Math.pow(1-s,3);window.sideBorderOverlay.style.width=`${a*i}px`,s<1&&requestAnimationFrame(o)};requestAnimationFrame(o)}function U(){if(window.sideBorderStyle!=null){try{document.head.removeChild(window.sideBorderStyle)}catch{}window.sideBorderStyle=null}if(window.sideBorderOverlay!=null){try{document.body.removeChild(window.sideBorderOverlay)}catch{}window.sideBorderOverlay=null}}function ee(){Y(),window.userActionBorderOverlay=document.createElement("div"),window.userActionBorderOverlay.id="recipe-user-action-border",window.userActionBorderOverlay.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 2147483647;
    box-shadow: inset 0 0 0 0px #1877F2;
  `;const i=5;let n=null;const e=800,o=l=>{if(window.userActionBorderOverlay==null)return;n==null&&(n=l);const t=l-n,s=Math.min(t/e,1),d=(1-Math.pow(1-s,3))*i;window.userActionBorderOverlay.style.boxShadow=`inset 0 0 0 ${d}px #1877F2`,s<1&&requestAnimationFrame(o)};document.body.appendChild(window.userActionBorderOverlay),requestAnimationFrame(o)}function Y(){window.userActionBorderOverlay=null;const i=document.getElementById("recipe-user-action-border");i!=null&&i.remove()}function ie(i,n){const e={CONTAINER_ID:"user-action-highlight-container",KEYFRAMES_ID:"user-action-highlight-keyframes",Z_INDEX:2147483646,COLORS:{primary:"#1877F2",tooltipBackground:"#1877F2",tooltipText:"#FFFFFF"},BORDER:{width:3,borderRadius:12,padding:8},CURSOR:{size:24,offsetX:4,offsetY:4},TOOLTIP:{padding:"8px 16px",borderRadius:24,fontSize:14,fontWeight:"500",offsetX:8,offsetY:8}},o="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MSIgaGVpZ2h0PSI4MSIgdmlld0JveD0iMCAwIDgxIDgxIiBmaWxsPSJub25lIj48ZyBmaWx0ZXI9InVybCgjY3Vyc29yX3NoYWRvdykiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQsIDQpIHNjYWxlKDMuMzc1KSI+PHBhdGggZD0iTTUuOTE3MiAyLjAwNTVMNi4xNTE2IDIuMDM4N0w2Ljc4MjUgMi4xNzQ0QzguMzk0MiAyLjUzNDYgMTAuOTU1MyAzLjIxMDMgMTMuOTA5NCA0LjM3MzdDMTUuNzgxMiA1LjExMDggMTguMzM3IDYuNTQwNSAyMC4wNzg0IDcuNTYxMkMyMS42Mjk0IDguNDcwMyAyMS4xMTIyIDEwLjc1MTggMTkuMzkyOCAxMC45OTc3TDEzLjgwNDkgMTEuNzk1NUwxMy4wMDYxIDE3LjM5MjJDMTIuNzYwOCAxOS4xMDk5IDEwLjQ4MDIgMTkuNjMzMiA5LjU3MDYgMTguMDc3N0M4LjU1MSAxNi4zMzQ1IDcuMTIzMiAxMy43NzU3IDYuMzg3IDExLjkwMkM0Ljk3NjcgOC4zMTI4IDQuMzIxNSA1LjU5NDMgNC4wMzU0IDQuMTMyNUMzLjgwMTYgMi45Mzc5IDQuNzU5MyAxLjkxNTggNS45MTcyIDIuMDA1NVoiIGZpbGw9IiMxODc3RjIiLz48L2c+PGRlZnM+PGZpbHRlciBpZD0iY3Vyc29yX3NoYWRvdyIgeD0iMCIgeT0iMCIgd2lkdGg9IjgxIiBoZWlnaHQ9IjgxIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz48ZmVPZmZzZXQgZHk9IjYiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI2Ii8+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC4wMzkyMTU3IDAgMCAwIDAgMC4wNzQ1MDk4IDAgMCAwIDAgMC4wOTAxOTYxIDAgMCAwIDAuMiAwIi8+PGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz48ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPjwvZmlsdGVyPjwvZGVmcz48L3N2Zz4=";window.userActionHighlight==null&&(window.userActionHighlight={container:null,styleSheet:null});function l(r){return document.evaluate(r,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue}const t=l(i);if(!(t instanceof HTMLElement))return;function s(r){return"disabled"in r&&r.disabled===!0||typeof r.hasAttribute=="function"&&r.hasAttribute("disabled")===!0||typeof r.getAttribute=="function"&&r.getAttribute("aria-disabled")==="true"}function a(){window.userActionHighlight!=null&&window.userActionHighlight.container!=null&&(window.userActionHighlight.container.style.visibility="hidden")}function d(){window.userActionHighlight!=null&&window.userActionHighlight.container!=null&&(window.userActionHighlight.container.style.visibility="visible")}function p(r,v,R){window.userActionHighlight.disabledObserver!=null&&window.userActionHighlight.disabledObserver.disconnect();let C=s(r);const k=new MutationObserver(()=>{const D=s(r);C&&!D?(C=!1,window.userActionHighlight.container==null?window.RecipeAnimation.createUserActionHighlight(v,R):d()):!C&&D&&(C=!0,a())});k.observe(r,{attributes:!0,attributeFilter:["disabled","aria-disabled"]}),window.userActionHighlight.disabledObserver=k}if(s(t)){p(t,i,n);return}window.userActionHighlight.container!=null&&window.userActionHighlight.container.remove(),window.userActionHighlight.styleSheet!=null&&window.userActionHighlight.styleSheet.remove(),p(t,i,n);const u=document.createElement("style");u.id=e.KEYFRAMES_ID,u.textContent=`
    @keyframes userActionCursorSlideIn {
      0% {
        opacity: 0;
        transform: translate(-20px, -20px) scale(0.5);
      }
      100% {
        opacity: 1;
        transform: translate(0, 0) scale(1);
      }
    }
    @keyframes userActionTooltipSlideIn {
      0% {
        opacity: 0;
        transform: translateX(-10px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes userActionTooltipSlideInReverse {
      0% {
        opacity: 0;
        transform: translateX(10px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes userActionBorderPulse {
      0% {
        opacity: 1;
        box-shadow: 0 0 0 0 rgba(24, 119, 242, 0.4);
      }
      50% {
        opacity: 0.6;
        box-shadow: 0 0 12px 4px rgba(24, 119, 242, 0.6);
      }
      100% {
        opacity: 1;
        box-shadow: 0 0 0 0 rgba(24, 119, 242, 0.4);
      }
    }
  `,document.head.appendChild(u),window.userActionHighlight.styleSheet=u;const w=document.createElement("div");w.id=e.CONTAINER_ID,w.style.cssText=`
    position: fixed;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${e.Z_INDEX};
    visibility: hidden;
  `,document.body.appendChild(w),window.userActionHighlight.container=w;const g=document.createElement("div");g.style.cssText=`
    position: fixed;
    border: ${e.BORDER.width}px solid ${e.COLORS.primary};
    border-radius: ${e.BORDER.borderRadius}px;
    pointer-events: none;
    box-sizing: border-box;
    animation: userActionBorderPulse 1.5s ease-in-out infinite;
  `,w.appendChild(g);const m=document.createElement("div");m.style.cssText=`
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    pointer-events: none;
    z-index: ${e.Z_INDEX+1};
  `;const y=document.createElement("div");y.style.cssText=`
    width: ${e.CURSOR.size}px;
    height: ${e.CURSOR.size}px;
    min-width: ${e.CURSOR.size}px;
    min-height: ${e.CURSOR.size}px;
    flex-shrink: 0;
  `;const h=document.createElement("img");h.src=o,h.style.cssText=`
    width: ${e.CURSOR.size}px;
    height: ${e.CURSOR.size}px;
    display: block;
    pointer-events: none;
  `,y.appendChild(h);const x=n!=null&&n.length>0?n:"[Action]",f=x.length>50?x.substring(0,47)+"...":x,c=document.createElement("div");c.style.cssText=`
    background: ${e.COLORS.tooltipBackground};
    color: ${e.COLORS.tooltipText};
    padding: ${e.TOOLTIP.padding};
    border-radius: ${e.TOOLTIP.borderRadius}px;
    font-size: ${e.TOOLTIP.fontSize}px;
    font-weight: ${e.TOOLTIP.fontWeight};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    pointer-events: none;
    max-width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,c.textContent=f,w.appendChild(m);const E=()=>{const r=t.getBoundingClientRect();if(r.width===0||r.height===0){g.style.display="none",m.style.display="none";return}const v=e.BORDER.padding+e.BORDER.width;g.style.top=r.top-v+"px",g.style.left=r.left-v+"px",g.style.width=r.width+v*2+"px",g.style.height=r.height+v*2+"px",g.style.display="block";const R=window.innerWidth,C=window.innerHeight,k=r.left+r.width/2,D=r.top+r.height/2,Q=k<R/2,F=D<C/2;let G,B,M,O;F?(G=r.bottom+e.CURSOR.offsetY,Q?(B=r.right+e.CURSOR.offsetX,M="none",O=!0):(B=r.left-e.CURSOR.size-e.CURSOR.offsetX,M="scaleX(-1)",O=!1)):(G=r.top-e.CURSOR.size-e.CURSOR.offsetY,Q?(B=r.right+e.CURSOR.offsetX,M="scaleY(-1)",O=!0):(B=r.left-e.CURSOR.size-e.CURSOR.offsetX,M="scale(-1, -1)",O=!1)),m.style.top=G+"px",m.style.display="flex",h.style.transform=M,m.innerHTML="",O?(m.style.left=B+"px",m.style.right="",m.style.flexDirection="row",y.style.animation="userActionCursorSlideIn 500ms ease-out forwards",c.style.marginLeft=e.TOOLTIP.offsetX+"px",c.style.marginRight="0",F?(m.style.alignItems="flex-start",c.style.marginTop=e.TOOLTIP.offsetY+"px",c.style.marginBottom="0"):(m.style.alignItems="flex-end",c.style.marginTop="0",c.style.marginBottom=e.TOOLTIP.offsetY+"px"),c.style.animation="userActionTooltipSlideIn 500ms ease-out forwards",m.appendChild(y),m.appendChild(c)):(m.style.left="",m.style.right=R-B-e.CURSOR.size+"px",m.style.flexDirection="row-reverse",y.style.animation="userActionCursorSlideIn 500ms ease-out forwards",c.style.marginRight=e.TOOLTIP.offsetX+"px",c.style.marginLeft="0",F?(m.style.alignItems="flex-start",c.style.marginTop=e.TOOLTIP.offsetY+"px",c.style.marginBottom="0"):(m.style.alignItems="flex-end",c.style.marginTop="0",c.style.marginBottom=e.TOOLTIP.offsetY+"px"),c.style.animation="userActionTooltipSlideInReverse 500ms ease-out forwards",m.appendChild(y),m.appendChild(c))};let I=0;const z=()=>{const r=performance.now();r-I<16||(I=r,E())},b=()=>{E()};window.addEventListener("scroll",z,!0),window.addEventListener("resize",b),window.userActionHighlight.scrollListener=z,window.userActionHighlight.resizeListener=b,setTimeout(()=>{window.userActionHighlight==null||window.userActionHighlight.container==null||requestAnimationFrame(()=>{E(),w.style.visibility="visible"})},300)}function te(){window.userActionHighlight!=null&&(window.userActionHighlight.disabledObserver!=null&&(window.userActionHighlight.disabledObserver.disconnect(),window.userActionHighlight.disabledObserver=null),window.userActionHighlight.scrollListener!=null&&(window.removeEventListener("scroll",window.userActionHighlight.scrollListener,!0),window.userActionHighlight.scrollListener=null),window.userActionHighlight.resizeListener!=null&&(window.removeEventListener("resize",window.userActionHighlight.resizeListener),window.userActionHighlight.resizeListener=null),window.userActionHighlight.container!=null&&(window.userActionHighlight.container.remove(),window.userActionHighlight.container=null),window.userActionHighlight.styleSheet!=null&&(window.userActionHighlight.styleSheet.remove(),window.userActionHighlight.styleSheet=null))}function j(){window.milestoneIslandStyle==null&&(window.milestoneIslandStyle=document.createElement("style"),window.milestoneIslandStyle.textContent=`
      @keyframes milestoneSlideUp {
        from {
          opacity: 0;
          transform: translate(-50%, 20px) translateZ(0);
        }
        to {
          opacity: 1;
          transform: translate(-50%, 0) translateZ(0);
        }
      }

      @keyframes milestoneProgressSlide {
        0% { background-position: 100% 0%; }
        100% { background-position: 0% 100%; }
      }

      #milestone-island-container {
        position: fixed;
        bottom: 32px;
        left: 50%;
        transform: translateX(-50%) translateZ(0);
        z-index: 2147483648;
        pointer-events: auto;
        animation: milestoneSlideUp 0.3s ease-out forwards;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        will-change: transform;
        isolation: isolate;
        contain: layout style;
      }

      #milestone-island-pill {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 12px 10px 16px;
        background: #1c1c1c;
        border-radius: 50px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      }

      #milestone-island-content {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      #milestone-island-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
      }

      #milestone-island-icon svg {
        width: 16px;
        height: 16px;
      }

      #milestone-island-icon img {
        width: 20px;
        height: 20px;
        object-fit: contain;
      }

      #milestone-island-text {
        color: #ffffff;
        font-size: 14px;
        font-weight: 500;
        white-space: nowrap;
        max-width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #milestone-island-pause-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px 16px;
        border-radius: 50px;
        border: 1px solid rgba(255, 255, 255, 0.4);
        background: transparent;
        color: #ffffff;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        white-space: nowrap;
        flex-shrink: 0;
      }

      #milestone-island-pause-btn:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.6);
      }

      #milestone-island-pause-btn:active {
        transform: scale(0.98);
      }

      @keyframes milestoneShimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }

      #milestone-island-pill.milestone-action-state {
        background: linear-gradient(269deg, rgba(10, 19, 23, 0.90) 3.82%, #2975D4 98.97%), #1E1E1E;
        position: relative;
        overflow: hidden;
        box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.15), 0 8px 32px 0 rgba(0, 0, 0, 0.15);
      }

      /* Amber variant of the action-state pill, used by setMilestoneIslandActionFailed.
         The user-action (action-required) state keeps the default blue gradient above. */
      #milestone-island-pill.milestone-action-state.milestone-action-failed-state {
        background: linear-gradient(269deg, rgba(10, 19, 23, 0.90) 3.82%, #965E03 98.97%), #1E1E1E;
      }

      /* Failure copy is wider than the user-action copy, so widen the
         text track to avoid an ellipsis truncation. */
      #milestone-island-pill.milestone-action-failed-state #milestone-island-text {
        max-width: 420px;
      }

      #milestone-island-pill.milestone-action-state::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 50px;
        border: 2px solid transparent;
        background: radial-gradient(circle at 95% 0%, rgba(255, 255, 255, 0.4) 0%, transparent 9%) border-box;
        -webkit-mask:
          linear-gradient(#fff 0 0) padding-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
        z-index: 10;
      }

      #milestone-island-blue-overlay {
        display: none;
      }

      #milestone-island-shimmer {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.15) 50%, transparent 100%);
        border-radius: 65px;
        z-index: 2;
        animation: milestoneShimmer 2.5s ease-in-out infinite;
      }

      #milestone-island-pill.milestone-action-state #milestone-island-content {
        position: relative;
        z-index: 3;
      }

      #milestone-island-text.milestone-action-text {
        font-size: 14px;
        color: #ffffff;
        font-weight: 500;
      }

      #milestone-island-arrow-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        position: relative;
        z-index: 3;
      }

      #milestone-island-arrow-btn img {
        width: 37px;
        height: 34px;
        object-fit: contain;
      }

      #milestone-island-pill.milestone-action-state:hover #milestone-island-arrow-btn {
        display: none;
      }

      #milestone-island-minimize-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        border: 1px solid transparent;
        background: transparent;
        color: #ffffff;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        white-space: nowrap;
        flex-shrink: 0;
        overflow: hidden;
        max-width: 0;
        padding: 8px 0;
        opacity: 0;
        position: relative;
        z-index: 3;
        transition: max-width 0.3s ease, padding 0.3s ease, opacity 0.2s ease, border-color 0.2s ease;
      }

      #milestone-island-pill.milestone-action-state:hover #milestone-island-minimize-btn,
      #milestone-island-pill.milestone-action-state:focus-within #milestone-island-minimize-btn {
        max-width: 120px;
        padding: 8px 16px;
        border-color: rgba(255, 255, 255, 0.4);
        opacity: 1;
      }

      #milestone-island-pill.milestone-action-state:hover,
      #milestone-island-pill.milestone-action-state:focus-within {
        padding-right: 12px !important;
      }

      #milestone-island-pill.milestone-action-state:hover #milestone-island-arrow-btn,
      #milestone-island-pill.milestone-action-state:focus-within #milestone-island-arrow-btn {
        display: none;
      }

      #milestone-island-minimize-btn:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.6);
      }

      #milestone-island-minimize-btn:active {
        transform: scale(0.98);
      }

      #milestone-island-container.milestone-minimized {
        left: 36px;
        transform: none;
        animation: none;
      }

      #milestone-island-pill.milestone-minimized-pill {
        min-width: 56px;
        min-height: 56px;
        border-radius: 28px;
        padding: 0 !important;
        justify-content: center;
        gap: 0;
        cursor: pointer;
        background: linear-gradient(269deg, rgba(10, 19, 23, 0.90) 3.82%, #2975D4 98.97%), #1E1E1E;
        position: relative;
        overflow: hidden;
        box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.15), 0 8px 32px 0 rgba(0, 0, 0, 0.15);
        transition: gap 0.3s ease, padding 0.3s ease, border-radius 0.3s ease;
      }

      #milestone-island-pill.milestone-minimized-pill::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 28px;
        border: 2px solid transparent;
        background: radial-gradient(circle at 95% 0%, rgba(255, 255, 255, 0.4) 0%, transparent 40%) border-box;
        -webkit-mask:
          linear-gradient(#fff 0 0) padding-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
        z-index: 10;
        transition: border-radius 0.3s ease;
      }

      #milestone-island-pill.milestone-minimized-pill #milestone-island-content {
        position: relative;
        z-index: 3;
        gap: 0;
        transition: gap 0.3s ease;
      }

      /* Truly hidden elements */
      #milestone-island-pill.milestone-minimized-pill #milestone-island-arrow-btn,
      #milestone-island-pill.milestone-minimized-pill #milestone-island-minimize-btn,
      #milestone-island-pill.milestone-minimized-pill #milestone-island-shimmer,
      #milestone-island-pill.milestone-minimized-pill #milestone-island-blue-overlay {
        display: none !important;
      }

      /* Text - hidden via max-width for smooth transition */
      #milestone-island-pill.milestone-minimized-pill #milestone-island-text {
        max-width: 0;
        overflow: hidden;
        opacity: 0;
        white-space: nowrap;
        transition: max-width 0.3s ease, opacity 0.2s ease;
      }

      #milestone-island-pill.milestone-minimized-pill #milestone-island-icon {
        width: 16px !important;
        height: 16px !important;
        flex-shrink: 0;
      }

      #milestone-island-pill.milestone-minimized-pill #milestone-island-icon svg {
        width: 16px !important;
        height: 16px !important;
      }

      /* Hover: smoothly extend pill to the right */
      #milestone-island-pill.milestone-minimized-pill:hover,
      #milestone-island-pill.milestone-minimized-pill:focus-within {
        padding: 0 12px 0 20px !important;
        justify-content: flex-start;
        gap: 12px;
        border-radius: 50px;
      }

      #milestone-island-pill.milestone-minimized-pill:hover::after,
      #milestone-island-pill.milestone-minimized-pill:focus-within::after {
        border-radius: 50px;
        background: radial-gradient(circle at 95% 0%, rgba(255, 255, 255, 0.4) 0%, transparent 9%) border-box;
      }

      #milestone-island-pill.milestone-minimized-pill:hover #milestone-island-content,
      #milestone-island-pill.milestone-minimized-pill:focus-within #milestone-island-content {
        gap: 8px;
      }

      #milestone-island-pill.milestone-minimized-pill:hover #milestone-island-text,
      #milestone-island-pill.milestone-minimized-pill:focus-within #milestone-island-text {
        max-width: 300px;
        opacity: 1;
      }

      /* Failure copy is wider than the user-action copy, so widen the
         text track when the minimized pill expands on hover/focus too. */
      #milestone-island-pill.milestone-minimized-pill.milestone-action-failed-state:hover #milestone-island-text,
      #milestone-island-pill.milestone-minimized-pill.milestone-action-failed-state:focus-within #milestone-island-text {
        max-width: 420px;
      }

      #milestone-island-pill.milestone-minimized-pill:hover #milestone-island-expand-btn,
      #milestone-island-pill.milestone-minimized-pill:focus-within #milestone-island-expand-btn {
        max-width: 120px;
        padding: 8px 16px;
        border-color: rgba(255, 255, 255, 0.4);
        opacity: 1;
      }

      #milestone-island-expand-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        border: 1px solid transparent;
        background: transparent;
        color: #ffffff;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        white-space: nowrap;
        flex-shrink: 0;
        overflow: hidden;
        max-width: 0;
        padding: 8px 0;
        opacity: 0;
        position: relative;
        z-index: 3;
        transition: max-width 0.3s ease, padding 0.3s ease, opacity 0.2s ease, border-color 0.2s ease;
      }

      #milestone-island-expand-btn:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.6);
      }

      #milestone-island-expand-btn:active {
        transform: scale(0.98);
      }

      /* Suppress hover expansion during drag */
      #milestone-island-pill.milestone-minimized-pill.milestone-dragging,
      #milestone-island-pill.milestone-minimized-pill.milestone-dragging:hover,
      #milestone-island-pill.milestone-minimized-pill.milestone-dragging:focus-within {
        padding: 0 !important;
        justify-content: center;
        gap: 0;
        border-radius: 28px;
        cursor: grabbing;
      }

      #milestone-island-pill.milestone-minimized-pill.milestone-dragging #milestone-island-text,
      #milestone-island-pill.milestone-minimized-pill.milestone-dragging #milestone-island-expand-btn {
        max-width: 0 !important;
        opacity: 0 !important;
      }

      #milestone-island-pill.milestone-minimized-pill {
        cursor: grab;
      }

      #milestone-island-pill.milestone-minimized-pill:active {
        cursor: grabbing;
      }

      /* Compact running state: scaled-down pill; full size on hover */
      #milestone-island-pill:not(.milestone-action-state):not(.milestone-minimized-pill) {
        gap: 0;
        padding: 6px 10px;
        transition: padding 0.3s ease, gap 0.3s ease;
      }

      #milestone-island-pill:not(.milestone-action-state):not(.milestone-minimized-pill):hover,
      #milestone-island-pill:not(.milestone-action-state):not(.milestone-minimized-pill):focus-within {
        gap: 12px;
        padding: 10px 12px 10px 16px;
      }

      #milestone-island-pill:not(.milestone-action-state):not(.milestone-minimized-pill) #milestone-island-content {
        gap: 6px;
        transition: gap 0.3s ease;
      }

      #milestone-island-pill:not(.milestone-action-state):not(.milestone-minimized-pill):hover #milestone-island-content,
      #milestone-island-pill:not(.milestone-action-state):not(.milestone-minimized-pill):focus-within #milestone-island-content {
        gap: 8px;
      }

      #milestone-island-pill:not(.milestone-action-state):not(.milestone-minimized-pill) #milestone-island-icon {
        width: 14px;
        height: 14px;
        transition: width 0.3s ease, height 0.3s ease;
      }

      #milestone-island-pill:not(.milestone-action-state):not(.milestone-minimized-pill) #milestone-island-icon svg {
        width: 12px;
        height: 12px;
      }

      #milestone-island-pill:not(.milestone-action-state):not(.milestone-minimized-pill) #milestone-island-icon img {
        width: 14px;
        height: 14px;
      }

      #milestone-island-pill:not(.milestone-action-state):not(.milestone-minimized-pill):hover #milestone-island-icon,
      #milestone-island-pill:not(.milestone-action-state):not(.milestone-minimized-pill):focus-within #milestone-island-icon {
        width: 20px;
        height: 20px;
      }

      #milestone-island-pill:not(.milestone-action-state):not(.milestone-minimized-pill):hover #milestone-island-icon svg,
      #milestone-island-pill:not(.milestone-action-state):not(.milestone-minimized-pill):focus-within #milestone-island-icon svg {
        width: 16px;
        height: 16px;
      }

      #milestone-island-pill:not(.milestone-action-state):not(.milestone-minimized-pill):hover #milestone-island-icon img,
      #milestone-island-pill:not(.milestone-action-state):not(.milestone-minimized-pill):focus-within #milestone-island-icon img {
        width: 20px;
        height: 20px;
      }

      #milestone-island-pill:not(.milestone-action-state):not(.milestone-minimized-pill) #milestone-island-text {
        font-size: 12px;
        max-width: 200px;
        transition: font-size 0.3s ease, max-width 0.3s ease;
      }

      #milestone-island-pill:not(.milestone-action-state):not(.milestone-minimized-pill):hover #milestone-island-text,
      #milestone-island-pill:not(.milestone-action-state):not(.milestone-minimized-pill):focus-within #milestone-island-text {
        font-size: 14px;
        max-width: 500px;
      }

      #milestone-island-pill:not(.milestone-action-state):not(.milestone-minimized-pill) #milestone-island-pause-btn {
        max-width: 0;
        overflow: hidden;
        opacity: 0;
        padding: 6px 0;
        border-color: transparent;
        transition: max-width 0.3s ease, padding 0.3s ease, opacity 0.2s ease, border-color 0.2s ease, background 0.2s ease;
      }

      #milestone-island-pill:not(.milestone-action-state):not(.milestone-minimized-pill):hover #milestone-island-pause-btn,
      #milestone-island-pill:not(.milestone-action-state):not(.milestone-minimized-pill):focus-within #milestone-island-pause-btn {
        max-width: 120px;
        padding: 8px 16px;
        border-color: rgba(255, 255, 255, 0.4);
        opacity: 1;
      }

      /* askUserSelect variant: permanent right-arrow, no Minimize button. The
         base action-state rules hide the arrow on hover (to reveal Minimize) —
         keep it visible here since there is no Minimize. */
      #milestone-island-pill.milestone-ask-user-select #milestone-island-arrow-btn,
      #milestone-island-pill.milestone-ask-user-select:hover #milestone-island-arrow-btn,
      #milestone-island-pill.milestone-ask-user-select:focus-within #milestone-island-arrow-btn {
        display: inline-flex !important;
      }
    `,document.head.appendChild(window.milestoneIslandStyle))}function Z(i,n){if(window.milestoneIsland!=null){try{document.body.removeChild(window.milestoneIsland)}catch{}window.milestoneIsland=null}window.milestoneIsland=document.createElement("div"),window.milestoneIsland.id="milestone-island-container";const e=document.createElement("div");e.id="milestone-island-pill";const o=document.createElement("div");if(o.id="milestone-island-icon",n){const a=document.createElement("img");a.src=n,a.alt="milestone icon",a.style.width="20px",a.style.height="20px",a.style.objectFit="contain",o.appendChild(a)}else o.innerHTML=`
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill="url(#starGradient)" stroke="url(#starGradient)" stroke-width="1"/>
          <defs>
            <linearGradient id="starGradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#9432FC"/>
              <stop offset="50%" stop-color="#0CBDFC"/>
              <stop offset="100%" stop-color="#695EFC"/>
            </linearGradient>
          </defs>
        </svg>
      `;const l=document.createElement("span");l.id="milestone-island-text",l.textContent=i;const t=document.createElement("div");t.id="milestone-island-content",t.appendChild(o),t.appendChild(l);const s=document.createElement("button");s.id="milestone-island-pause-btn",s.title="Pause",s.textContent="Pause",s.addEventListener("click",()=>{chrome.runtime.sendMessage({type:"MILESTONE_ISLAND_PAUSE_ACTION"})}),e.appendChild(t),e.appendChild(s),window.milestoneIsland.appendChild(e),document.body.appendChild(window.milestoneIsland)}function ne(i){if(window.milestoneIsland==null)return;const n=window.milestoneIsland.querySelector("#milestone-island-text");n!=null&&(n.textContent=i)}function oe(){if(window.milestoneIsland!=null){try{document.body.removeChild(window.milestoneIsland)}catch{}window.milestoneIsland=null}if(window.milestoneIslandStyle!=null){try{document.head.removeChild(window.milestoneIslandStyle)}catch{}window.milestoneIslandStyle=null}window._milestoneIslandMinimized=!1}function le(){const i=document.getElementById("milestone-island-container");i!=null&&(i.style.display="none",i.style.pointerEvents="none")}function se(i){L(i||"Please complete action to continue");const n=document.getElementById("milestone-island-pill");n!=null&&n.classList.remove("milestone-action-failed-state");const e=document.getElementById("milestone-island-icon");e!=null&&(e.style.width="",e.style.height="");const o=document.getElementById("milestone-island-arrow-btn");o!=null&&o.remove();const l=document.getElementById("milestone-island-pill");if(l!=null&&document.getElementById("milestone-island-minimize-btn")==null){l.style.paddingRight="";const t=document.createElement("button");t.id="milestone-island-minimize-btn",t.textContent="Minimize",t.setAttribute("aria-label","Minimize automation island"),t.addEventListener("click",s=>{s.stopPropagation(),S()}),l.appendChild(t)}}function ae(i){L(i||"Please complete action to continue");const n=document.getElementById("milestone-island-pill");n!=null&&(n.classList.remove("milestone-action-failed-state"),n.classList.add("milestone-ask-user-select"),n.style.paddingRight="");const e=document.getElementById("milestone-island-icon");e!=null&&(e.style.width="",e.style.height="");const o=document.getElementById("milestone-island-minimize-btn");if(o!=null&&o.remove(),n!=null&&document.getElementById("milestone-island-arrow-btn")==null){const l=document.createElement("div");l.id="milestone-island-arrow-btn";const t=document.createElement("img");t.src=chrome.runtime.getURL("arrow-right-white.gif"),t.alt="",t.width=37,t.height=34,t.setAttribute("aria-hidden","true"),l.appendChild(t),n.appendChild(l)}}function re(i){L(i||"Please complete action to continue");const n=document.getElementById("milestone-island-pill");n!=null&&n.classList.add("milestone-action-failed-state");const e=document.getElementById("milestone-island-icon");e!=null&&(e.style.width="24px",e.style.height="24px",e.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.29 2.86a2 2 0 013.42 0l8.69 14.99c.81 1.4-.18 3.15-1.71 3.15H3.31c-1.53 0-2.52-1.75-1.71-3.15L10.29 2.86zM12 6c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zm0 10a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/></svg>');const o=document.getElementById("milestone-island-content");if(o!=null&&document.getElementById("milestone-island-arrow-btn")==null){const t=document.createElement("div");t.id="milestone-island-arrow-btn";const s=document.createElement("img");s.src=chrome.runtime.getURL("arrow-right-white.gif"),s.alt="",s.width=37,s.height=34,s.setAttribute("aria-hidden","true"),t.appendChild(s),o.appendChild(t)}const l=document.getElementById("milestone-island-pill");if(l!=null&&document.getElementById("milestone-island-minimize-btn")==null){l.style.paddingRight="6px";const t=document.createElement("button");t.id="milestone-island-minimize-btn",t.textContent="Minimize",t.setAttribute("aria-label","Minimize automation island"),t.addEventListener("click",s=>{s.stopPropagation(),S()}),l.appendChild(t)}}function L(i){const n=document.getElementById("milestone-island-container");if(n==null)return;n.style.display="block",n.style.pointerEvents="auto";const e=document.getElementById("milestone-island-pill");if(e==null)return;if(e.classList.add("milestone-action-state"),document.getElementById("milestone-island-blue-overlay")==null){const s=document.createElement("div");s.id="milestone-island-blue-overlay",e.insertBefore(s,e.firstChild)}if(document.getElementById("milestone-island-shimmer")==null){const s=document.createElement("div");s.id="milestone-island-shimmer",e.insertBefore(s,e.firstChild!=null?e.firstChild.nextSibling:null)}const o=document.getElementById("milestone-island-icon");o!=null&&(o.innerHTML='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.2719 6.15093C11.1404 3.93379 7.45282 2.47094 3.00329 1.66332C2.62996 1.59475 2.24901 1.71664 1.98234 1.98331C1.71568 2.24998 1.59377 2.63093 1.66234 3.00426C2.46996 7.45378 3.93282 11.1414 6.14996 14.2728C6.3633 14.5776 6.71377 14.7528 7.07949 14.7528C7.15568 14.7528 7.22424 14.7528 7.30044 14.73C7.74234 14.6386 8.10044 14.3033 8.19949 13.8614L8.65664 11.8347L11.2243 14.4023C11.6662 14.8443 12.3976 14.8443 12.8395 14.4023L14.3938 12.8481C14.8357 12.4062 14.8357 11.6747 14.3938 11.2328L11.8262 8.66521L13.8528 8.20808C14.2947 8.10903 14.6376 7.75854 14.7214 7.30902C14.8052 6.86711 14.63 6.4176 14.2642 6.15856L14.2719 6.15093Z" fill="white"/></svg>');const l=document.getElementById("milestone-island-text");l!=null&&(l.textContent=i,l.classList.add("milestone-action-text"));const t=document.getElementById("milestone-island-pause-btn");t!=null&&(t.style.display="none"),window._milestoneIslandMinimized===!0&&S()}function X(i){const n=window.innerWidth,e=window.innerHeight,o=56,l=36,t=32;switch(i){case"bottom-right":return{left:n-l-o,top:e-t-o};case"top-left":return{left:l,top:t};case"top-right":return{left:n-l-o,top:t};default:return{left:l,top:e-t-o}}}function T(i,n,e){const o=X(n),l=n==="bottom-right"||n==="top-right",t=n==="top-left"||n==="top-right",s=36,a=32,d=()=>{i.style.transition="",i.style.left=l?"auto":s+"px",i.style.right=l?s+"px":"",i.style.top=t?a+"px":"",i.style.bottom=t?"auto":a+"px",i.style.transform="none"};if(e){i.style.transition="left 0.3s ease, top 0.3s ease",i.style.left=o.left+"px",i.style.top=o.top+"px",i.style.bottom="auto",i.style.right="",i.style.transform="none";const u=()=>{i.removeEventListener("transitionend",u),d()};i.addEventListener("transitionend",u)}else d();const p=document.getElementById("milestone-island-pill");p!=null&&(l?p.classList.add("milestone-right-corner"):p.classList.remove("milestone-right-corner"))}function S(){const i=document.getElementById("milestone-island-container"),n=document.getElementById("milestone-island-pill");if(!(i==null||n==null)){if(window._milestoneIslandMinimized=!0,i.classList.add("milestone-minimized"),n.classList.add("milestone-minimized-pill"),window._milestoneCorner==null&&(window._milestoneCorner="bottom-left"),T(i,window._milestoneCorner,!1),document.getElementById("milestone-island-expand-btn")==null){const e=document.createElement("button");e.id="milestone-island-expand-btn",e.textContent="Expand",e.addEventListener("click",o=>{o.stopPropagation(),W()}),n.appendChild(e)}window._milestoneDragHandler==null&&(window._milestoneDragHandler=e=>{if(e.target instanceof HTMLElement&&e.target.closest("#milestone-island-expand-btn")!=null)return;e.preventDefault();let o=!1,l=e.clientX,t=e.clientY;const s=document.getElementById("milestone-island-container"),a=document.getElementById("milestone-island-pill");if(s==null||a==null)return;const d=s.getBoundingClientRect();let p=d.left,u=d.top;const w=e.clientX-d.left,g=e.clientY-d.top,m=h=>{let x=h.clientX-l,f=h.clientY-t;if(!o&&(Math.abs(x)>5||Math.abs(f)>5)){o=!0,a.classList.add("milestone-dragging"),p=h.clientX-w,u=h.clientY-g,l=h.clientX,t=h.clientY,x=0,f=0,s.style.transition="none",s.style.left=p+"px",s.style.top=u+"px",s.style.bottom="auto",s.style.right="auto";return}o&&(s.style.left=p+x*1.6+"px",s.style.top=u+f*1.6+"px",s.style.bottom="auto",s.style.right="auto")},y=()=>{if(document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",y),a!=null&&a.classList.remove("milestone-dragging"),!o)return;const h=window.innerWidth,x=window.innerHeight,f=s.getBoundingClientRect(),c=f.left+f.width/2,E=f.top+f.height/2,I=c>h/2,z=E>x/2;let b;z&&!I?b="bottom-left":z&&I?b="bottom-right":!z&&!I?b="top-left":b="top-right",window._milestoneCorner=b,T(s,b,!0)};document.addEventListener("mousemove",m),document.addEventListener("mouseup",y)}),n.addEventListener("mousedown",window._milestoneDragHandler),window._milestoneResizeHandler==null&&(window._milestoneResizeHandler=()=>{if(window._milestoneIslandMinimized===!0&&window._milestoneCorner!=null){const e=document.getElementById("milestone-island-container");e!=null&&T(e,window._milestoneCorner,!1)}},window.addEventListener("resize",window._milestoneResizeHandler))}}function W(){const i=document.getElementById("milestone-island-container"),n=document.getElementById("milestone-island-pill");if(i==null||n==null)return;window._milestoneIslandMinimized=!1,i.classList.remove("milestone-minimized"),n.classList.remove("milestone-minimized-pill"),n.classList.remove("milestone-dragging"),n.classList.remove("milestone-right-corner"),window._milestoneDragHandler!=null&&n.removeEventListener("mousedown",window._milestoneDragHandler),i.style.left="",i.style.top="",i.style.bottom="",i.style.right="",i.style.transition="",i.style.transform="",i.style.animation="none";const e=document.getElementById("milestone-island-expand-btn");e!=null&&e.remove()}function de(i,n){const e=document.getElementById("milestone-island-container");if(e!=null){e.style.display="block",e.style.pointerEvents="auto",e.classList.remove("milestone-minimized"),e.style.left="",e.style.top="",e.style.bottom="",e.style.right="",e.style.transition="",e.style.transform="";const o=document.getElementById("milestone-island-pill");if(o!=null){o.classList.remove("milestone-action-state"),o.classList.remove("milestone-action-failed-state"),o.classList.remove("milestone-ask-user-select"),o.classList.remove("milestone-minimized-pill"),o.classList.remove("milestone-dragging"),o.classList.remove("milestone-right-corner"),o.style.padding="",o.style.paddingRight="",o.style.borderRadius="50px";const a=document.getElementById("milestone-island-icon");a!=null&&(a.style.width="",a.style.height=""),window._milestoneDragHandler!=null&&o.removeEventListener("mousedown",window._milestoneDragHandler);const d=document.getElementById("milestone-island-blue-overlay");d!=null&&d.remove();const p=document.getElementById("milestone-island-shimmer");p!=null&&p.remove();const u=document.getElementById("milestone-island-arrow-btn");u!=null&&u.remove();const w=document.getElementById("milestone-island-minimize-btn");w!=null&&w.remove();const g=document.getElementById("milestone-island-expand-btn");g!=null&&g.remove()}const l=document.getElementById("milestone-island-icon");if(l!=null)if(n){l.innerHTML="";const a=document.createElement("img");a.src=n,a.alt="milestone icon",a.style.width="20px",a.style.height="20px",a.style.objectFit="contain",l.appendChild(a)}else l.innerHTML='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#starGradient)" stroke="url(#starGradient)" stroke-width="1"/><defs><linearGradient id="starGradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#9432FC"/><stop offset="50%" stop-color="#0CBDFC"/><stop offset="100%" stop-color="#695EFC"/></linearGradient></defs></svg>';const t=document.getElementById("milestone-island-text");t!=null&&(t.classList.remove("milestone-action-text"),i!=null&&(t.textContent=i));const s=document.getElementById("milestone-island-pause-btn");if(s!=null&&(s.style.display="flex"),window._milestoneRestoreHandler!=null){const a=document.getElementById("milestone-island-pill");a!=null&&a.removeEventListener("click",window._milestoneRestoreHandler),window._milestoneRestoreHandler=null}}else i!=null&&(j(),Z(i,n))}function V(){this.style.display="none"}function me(i,n){_();const e=5e3,o=document.createElement("div");o.id="recipe-success-celebration",o.style.cssText="position: fixed; top: 0; left: 0; right: 0; bottom: 0;display: flex; align-items: center; justify-content: center;z-index: 2147483647; pointer-events: none;opacity: 0; transition: opacity 0.3s ease-in;";const l=document.createElement("img");l.src=n,l.alt="",l.style.cssText="position: absolute; width: 90vmin; height: 90vmin; object-fit: contain; pointer-events: none;",l.onerror=V;const t=document.createElement("img");t.src=i,t.alt="",t.style.cssText="position: relative; width: 40vmin; height: 40vmin; max-width: 400px; max-height: 400px; object-fit: contain; pointer-events: none;opacity: 0; transition: opacity 0.4s ease-in;",t.onerror=V,o.appendChild(l),o.appendChild(t),document.body.appendChild(o),window.successCelebration=o,requestAnimationFrame(()=>{o.style.opacity="1"}),window.successCelebrationCheckTimer=setTimeout(()=>{t.style.opacity="1"},500),window.successCelebrationTimer=setTimeout(()=>{o.style.opacity="0",window.successCelebrationFadeTimer=setTimeout(()=>{_()},300)},e)}function _(){if(window.successCelebrationTimer!=null&&(clearTimeout(window.successCelebrationTimer),window.successCelebrationTimer=null),window.successCelebrationFadeTimer!=null&&(clearTimeout(window.successCelebrationFadeTimer),window.successCelebrationFadeTimer=null),window.successCelebrationCheckTimer!=null&&(clearTimeout(window.successCelebrationCheckTimer),window.successCelebrationCheckTimer=null),window.successCelebration!=null){try{document.body.removeChild(window.successCelebration)}catch{}window.successCelebration=null}}window.RecipeAnimation={createGlowOverlay:P,removeGlowOverlay:H,pauseGlowOverlay:J,resumeGlowOverlay:$,_buildRoundedFrameClipPath:A,createFailureBorderOverlay:q,removeFailureBorderOverlay:N,createSideBorderOverlay:K,removeSideBorderOverlay:U,createUserActionBorderOverlay:ee,removeUserActionBorderOverlay:Y,createUserActionHighlight:ie,removeUserActionHighlight:te,injectMilestoneIslandStyles:j,createMilestoneIsland:Z,updateMilestoneIsland:ne,removeMilestoneIsland:oe,pauseMilestoneIsland:le,setMilestoneIslandActionRequired:se,setMilestoneIslandAskUserSelect:ae,setMilestoneIslandActionFailed:re,_applyActionStateBase:L,_getMinimizedCornerPosition:X,_applyMinimizedCornerPosition:T,minimizeMilestoneIsland:S,restoreMilestoneIsland:W,resumeMilestoneIsland:de,showSuccessCelebration:me,removeSuccessCelebration:_}})();

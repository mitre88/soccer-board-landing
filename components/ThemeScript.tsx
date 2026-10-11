// Runs before first paint: applies a stored appearance choice and keeps <picture> dark sources and
// the browser tint in step with it. Without a stored choice the page follows prefers-color-scheme
// and the media-based theme-color metas apply (#EDF1EF by day, #0C120F by night). A forced choice
// adds one theme-color meta of its own at the top of <head>: browsers use the first one that
// matches, and React never has to reconcile a meta it rendered.
const script = `(function(){var d=document.documentElement;try{var t=localStorage.getItem("sb-theme");if(t==="light"||t==="dark"){d.setAttribute("data-theme",t)}}catch(e){}function c(t){var h=document.head,e=document.getElementById("sb-theme-color");if(t!=="dark"&&t!=="light"){if(e){e.remove()}return}if(!e){e=document.createElement("meta");e.id="sb-theme-color";e.name="theme-color";h.insertBefore(e,h.firstChild)}e.content=t==="dark"?"#0C120F":"#EDF1EF"}function s(){var t=d.getAttribute("data-theme");var q=t==="dark"?"all":t==="light"?"not all":"(prefers-color-scheme: dark)";var n=document.querySelectorAll("source[data-dark]");for(var i=0;i<n.length;i++){n[i].media=q}c(t)}window.__sbSyncSources=s;s();document.addEventListener("DOMContentLoaded",s)})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

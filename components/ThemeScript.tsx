// Runs before first paint: applies a stored appearance choice and keeps <picture> dark sources
// in step with it. Without a stored choice the page follows prefers-color-scheme.
const script = `(function(){var d=document.documentElement;try{var t=localStorage.getItem("sb-theme");if(t==="light"||t==="dark"){d.setAttribute("data-theme",t)}}catch(e){}function s(){var t=d.getAttribute("data-theme");var q=t==="dark"?"all":t==="light"?"not all":"(prefers-color-scheme: dark)";var n=document.querySelectorAll("source[data-dark]");for(var i=0;i<n.length;i++){n[i].media=q}}window.__sbSyncSources=s;document.addEventListener("DOMContentLoaded",s)})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

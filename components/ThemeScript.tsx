// Runs before first paint: applies a stored appearance choice and keeps <picture> dark sources and
// the theme-color metas in step with it. Without a stored choice the page follows
// prefers-color-scheme and the metas keep their media-based values (#EDF1EF by day, #0C120F by night).
const script = `(function(){var d=document.documentElement;try{var t=localStorage.getItem("sb-theme");if(t==="light"||t==="dark"){d.setAttribute("data-theme",t)}}catch(e){}function s(){var t=d.getAttribute("data-theme");var q=t==="dark"?"all":t==="light"?"not all":"(prefers-color-scheme: dark)";var n=document.querySelectorAll("source[data-dark]");for(var i=0;i<n.length;i++){n[i].media=q}var m=document.querySelectorAll('meta[name="theme-color"]');for(var j=0;j<m.length;j++){var e=m[j];if(e.getAttribute("data-c")===null){e.setAttribute("data-c",e.getAttribute("content")||"")}e.setAttribute("content",t==="dark"?"#0C120F":t==="light"?"#EDF1EF":e.getAttribute("data-c"))}}window.__sbSyncSources=s;s();document.addEventListener("DOMContentLoaded",s)})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

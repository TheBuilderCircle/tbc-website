export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "tbc-theme";

// Runs before paint: applies the saved theme and marks the document as
// JS-enabled so scroll-reveal styles only hide content when JS can show it.
export const THEME_INIT_SCRIPT = `(function(){var d=document.documentElement;d.classList.add("js");try{var k=${JSON.stringify(
  THEME_STORAGE_KEY
)},s=localStorage.getItem(k),t=(s==="light"||s==="dark")?s:"dark";d.setAttribute("data-theme",t);}catch(e){d.setAttribute("data-theme","dark");}})();`;

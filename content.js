console.log("✅ Songsterr Popup Remover activo");

const selectors = [
  ".rq25k",   // popup
  ".Cip2pk",  // blur main
  ".Cto1rx",  // blur bottom
  ".D5an6",   // blur top
  ".Cek20l",  // banner ad
  ".C0d2hw",  // "love songsterr?" popup
  "#Redesign_ATF_tab_page_728x90"
];

// Función de borrado por selector
function removeElements() {
  selectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.remove();
      console.log("❌ Eliminado:", selector);
    });
  });
}

// Ejecuta cada 200ms
setInterval(removeElements, 200);

// Observa cambios en el DOM y borra si reaparecen
const observer = new MutationObserver(() => {
  removeElements();
});
observer.observe(document.body, { childList: true, subtree: true });

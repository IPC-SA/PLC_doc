function setGiscusTheme(theme) {
    const iframe = document.querySelector('iframe.giscus-frame');
    if (iframe) {
      iframe.contentWindow.postMessage(
        { giscus: { setConfig: { theme } } },
        'https://giscus.app'
      );
    }
  }
  
  // Слушатель для переключения темы Material for MkDocs
  document.addEventListener("DOMContentLoaded", () => {
    const getCurrentTheme = () =>
      document.documentElement.getAttribute("data-md-color-scheme");
  
    // Установить тему при загрузке страницы
    setGiscusTheme(getCurrentTheme());
  
    // Отслеживать переключение темы
    document.querySelector("[data-md-toggle=scheme]").addEventListener("click", () => {
      const newTheme = getCurrentTheme();
      setGiscusTheme(newTheme === "slate" ? "dark" : "light");
    });
  });
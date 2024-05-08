function switchTheme(themeName, mode) {
  const themeLink = document.querySelector('link[rel="stylesheet"][href*="theme"]');
  if (themeLink) {
    themeLink.href = `/assets/css/${themeName}.css`;
  } else {
    const newThemeLink = document.createElement('link');
    newThemeLink.rel = 'stylesheet';
    newThemeLink.href = `/assets/css/${themeName}.css`;
    document.head.appendChild(newThemeLink);
  }

  const body = document.body;
  body.classList.remove('light-mode', 'dark-mode');
  body.classList.add(mode);
}

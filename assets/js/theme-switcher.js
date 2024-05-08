function switchTheme(themeName, mode) {
  const themeLink = document.querySelector('link[rel="stylesheet"]');
  themeLink.href = `/assets/css/${themeName}.css`;

  // Apply the appropriate light/dark mode class to the <body> element
  const body = document.body;
  body.classList.remove('light-mode', 'dark-mode');
  body.classList.add(mode);
}

const localDarkTheme = window.localStorage && window.localStorage.getItem("darkMode");
document.body.classList.remove("light-theme", "dark-theme");

if (localDarkTheme) {
  document.body.classList.add(localDarkTheme === "true" ? "dark-theme" : "light-theme");
} else {
  document.body.classList.add("light-theme");
}
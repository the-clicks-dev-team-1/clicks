export const toggleTheme = (): void => {
  const htmlElement = document.documentElement;
  const isLightMode = htmlElement.classList.contains("light");
  if (isLightMode) {
    htmlElement.classList.remove("light");
    localStorage.setItem("theme", "dark");
  } else {
    htmlElement.classList.add("light");
    localStorage.setItem("theme", "light");
  }
};

export const initTheme = (): void => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.documentElement.classList.add("light");
  } else {
    document.documentElement.classList.remove("light");
  }
};

const getTheme = () => {
    const theme = window.localStorage.getItem("theme");
    if(!theme) {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if(!isDark) {
        return false;
      } else {
        return true;
      }
    }

    if(theme === "dark") {
      return true;
    } else {
      return false
    }
  }

  export default getTheme
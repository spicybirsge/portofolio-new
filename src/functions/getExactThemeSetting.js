const getExactThemeSetting = () => {
const theme = window.localStorage.getItem("theme")

if(!theme) {
    return "system"
}

if(theme === "dark") {
    return "dark"
}

if(theme === "light") {
    return "light"
}

return "system"
}

export default getExactThemeSetting
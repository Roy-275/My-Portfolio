// toggle menu with this function
const handleMenu = () => {
    if (document.getElementById('menu').classList.contains('hidden')) {
        document.getElementById('menu').classList.remove('hidden')
    } else {
        document.getElementById('menu').classList.add('hidden')
    }
};
function childAccess() {
    return document.getElementById("menu").firstElementChild.textContent;
}

// console.log(childAccess());
module.exports = childAccess;
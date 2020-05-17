//this function is called when user click ont the delete icon and it will hide that paticular post by changing its display to none
function deletePost(id) {
    var Delete = document.getElementById("deleteYes");
    Delete.onclick = function() {
        document.getElementById(id).style.display = "none";
    }
}
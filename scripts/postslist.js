function deletePost(id) {
    var Delete = document.getElementById("deleteYes");
    Delete.onclick = function() {
        document.getElementById(id).style.display = "none";
    }
}
var count = 0;

function editSave() {
    count++;
    var editButton = document.getElementById('editAndSave');
    var heading = document.getElementById('title');
    var blogText = document.getElementById('blogText');
    if (editButton.textContent.includes('Edit') && count < 2) {
        editButton.innerHTML = 'Save <i class="fa fa-save"></i>';
        heading.setAttribute('contenteditable', "true");
        blogText.setAttribute('contenteditable', 'true');
        heading.style.border = '2px pink solid';
        blogText.style.border = '2px pink solid';
    } else if (editButton.textContent.includes('Save') && count < 3) {
        editButton.innerHTML = 'Edit <i class="fa fa-edit"></i>';
        heading.setAttribute('contenteditable', "false");
        blogText.setAttribute('contenteditable', 'false');
        heading.style.border = '';
        blogText.style.border = '';
    } else {
        alert("You can only edit once");
    }
}

/*likes*/
var numberOfClicks = 0;

function postLiked() {
    document.getElementById("likeBlog").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked";
    numberOfClicks += 1;
    document.getElementById('likeCount').innerHTML = numberOfClicks + " people likes this!";
}

function addComments(id) {
    var commentText = id.value + '<br>';
    var temp = document.getElementById('commentTextBox');
    if (temp.value == "") {
        alert('Comment box is empty!!');
    } else {
        document.getElementById('comment').innerHTML += '<div id="allCommit" >' + '<p>' + commentText + '</p>' + '</div>';
        temp.value = temp.defaultValue;
    }
}
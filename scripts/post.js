//count variable is use to restrict the edit upto 1 time only
var count = 0;
/* This function is called when user click on rtthe edit/save button
    it will make heading and bolg text editable and then save the changes.
    if user try to edit more than one time than a alert box is shown.
*/
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

// var numberOfClicks is use to keep the count of likes
var numberOfClicks = 0;
/* 
   this function is called when user click on the like button.
   It changes the text of like button form like => liked an dshow the like count.
*/
function postLiked() {
    document.getElementById("likeBlog").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked";
    numberOfClicks += 1;
    document.getElementById('likeCount').innerHTML = numberOfClicks + " person likes this!";
}


//this function is called when user write a comment and press the comment button.
function addComments(id) {
    var commentText = id.value + '<br>';
    var temp = document.getElementById('commentTextBox');
    if (temp.value == "") {
        /* If the comment box is empty,  alert box is shown*/
        alert('Comment box is empty!!');
    } else {
        /* Else the comment will be printed in the bellow the ALL Comment text.*/
        document.getElementById('comment').innerHTML += '<div id="allCommit" >' + '<p>' + commentText + '</p>' + '</div>';
        temp.value = temp.defaultValue;
    }
}
let comments = [];
loadComments();

document.getElementById('comment-add').onclick = function(){
    event.preventDefault();
    let commentBody = document.getElementById('comment-body');

    let comment = {
        body : commentBody.value,
    }
    commentBody.value = '';
    comments.push(comment);
    saveComments();
    showComments();
}

function saveComments(){
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments(){
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
    
}
function showComments(){
    let commentField = document.getElementById('comment-field');
    let out = '';
    comments.forEach(function(item){
        out += `<p>${item.body}</p>`;
    })
    commentField.innerHTML = out;
}
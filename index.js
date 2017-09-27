function createPost() {
  var pageTemplate = .template(document.getElementById("page-template").innerHTML);
  var postTemplate = .template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = .template(document.getElementById("comments-template").innerHTML);

  var postTitle = document.getElementById("postTitle").value;
  var templateFn = _.template(commentTemplate);
  var commentsDiv = document.getElementById("comments");

  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  commentsDiv.innerHTML += templateHTML;
}

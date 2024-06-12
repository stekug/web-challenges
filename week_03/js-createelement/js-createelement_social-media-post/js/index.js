console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

const bodyElement = document.querySelector("body");

// Exercise:
// Use document.createElement() and append another social media post to the body.

function newSocialMediaPost() {
  const newArticle = document.createElement("article");
  newArticle.classList.add("post");

  const postContent = document.createElement("p");
  postContent.classList.add("post__content");
  postContent.innerText =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

  const newFooter = document.createElement("footer");
  newFooter.classList.add("post__footer");

  const newSpan = document.createElement("span");
  newSpan.classList.add("post__username");
  newSpan.innerText = "@username";

  const newButton = document.createElement("button");
  newButton.classList.add("post__button");
  newButton.innerText = "♥ Like";
  newButton.addEventListener("click", handleLikeButtonClick);

  bodyElement.append(newArticle);
  newArticle.append(postContent);
  newArticle.append(newFooter);
  newFooter.append(newSpan);
  newFooter.append(newButton);
}

newSocialMediaPost();
newSocialMediaPost();
newSocialMediaPost();

// script.js

document.addEventListener('DOMContentLoaded', function () {
    const posts = [];
    const postsList = document.getElementById('posts');
    const postInput = document.getElementById('postInput');
    const addPostButton = document.getElementById('addPostButton');

    function renderPosts() {
        postsList.innerHTML = '';
        posts.forEach((post, idx) => {
            const li = document.createElement('li');
            li.textContent = post;
            postsList.appendChild(li);
        });
    }

    addPostButton.addEventListener('click', function () {
        const text = postInput.value.trim();
        if (text) {
            posts.unshift(text); // 최신 글이 위에 오도록
            postInput.value = '';
            renderPosts();
        }
    });

    postInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            addPostButton.click();
        }
    });

    renderPosts();
});
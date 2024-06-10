function getURLs() {
    const keyword = document.getElementById('keywordInput').value;
    fetch(`/api/keywords/${keyword}`)
    .then(response => response.json())
    .then(data => {
        let urlsList = document.getElementById('urlsList');
        urlsList.innerHTML = '';
        data.forEach(url => {
            let urlElement = document.createElement('p');
            urlElement.textContent = url;
            urlElement.addEventListener('click', () => downloadContent(url));
            urlsList.appendChild(urlElement);
        });
    })
    .catch(error => console.error('Error:', error));
}

function downloadContent(url) {
    fetch(`/api/download/${url}`)
    .then(response => response.json())
    .then(data => {
        let contentStatus = document.getElementById('contentStatus');
        contentStatus.textContent = data.message;
    })
    .catch(error => console.error('Error:', error));
}

const itemContainer = document.getElementById('itemContainer');
const loadMoreButton = document.getElementById('loadMore');

let itemCount = 0;

loadMoreButton.addEventListener('click', () => {
    loadItems();
});

function loadItems() {
    fetch('/getItems')
        .then(response => response.json())
        .then(items => {
            items.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('item');
                itemElement.textContent = item.text;
                itemContainer.appendChild(itemElement);
            });
            itemCount += items.length;
            if (itemCount >= 100) {
                loadMoreButton.style.display = 'none';
            }
        });
}

loadItems();

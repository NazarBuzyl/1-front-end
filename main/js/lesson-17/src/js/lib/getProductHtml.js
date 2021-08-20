function getProductHtml(product) {
    let productHtml = `
    <div data-price="${product.price}" class="slider__item">
        <img src="image/${product.img}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>Цена: ${product.price} $</p>
        ${product.instock ? '<button data-id="' + product.id + '" type="button">Купить</button>' : 'Нет в наличии'}
    </div>
    `;
    return productHtml;
}

export default getProductHtml;

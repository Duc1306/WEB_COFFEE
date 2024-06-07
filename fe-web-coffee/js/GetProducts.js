document.addEventListener('DOMContentLoaded', function () {
    // Gọi API để lấy danh sách sản phẩm
    axios.get('http://localhost:8080/api/products')  // Thay URL bằng URL API thực tế của bạn
        .then(response => {
            const products = response.data;
            // Render danh sách sản phẩm lên trang
            renderProducts(products);
        })
        .catch(error => console.error('Error fetching products:', error));
});

function renderProducts(products) {
<<<<<<< HEAD
    const mainContainer = document.querySelector('.home__container');
    mainContainer.innerHTML = ''; // Clear existing content

    let rowContainer = createNewRowContainer();

    products.forEach((product, index) => {
        if (index % 4 === 0 && index !== 0) {
            mainContainer.appendChild(rowContainer);
            rowContainer = createNewRowContainer();
        }

        const productElement = `
            <div class="col">
                <article class="cate-item">
                    <img src="data:image/jpeg;base64,${product.img_path}" alt="${product.name}" class="cate-item__thumb" onclick="location.href='view/sign-in.html';" />
                    <section class="cate-item__info">
                        <a href="http://127.0.0.1:5501/fe-web-coffee/view/sign-in.html" class="cate-item__title">${product.name}</a>
                        <p class="cate-item__desc">${formatPrice(product.price)} đ</p>
                    </section>
                </article>
            </div>
        `;

        rowContainer.innerHTML += productElement;
    });

    // Append the last row container
    mainContainer.appendChild(rowContainer);
}

function createNewRowContainer() {
    const rowContainer = document.createElement('div');
    rowContainer.className = 'row row-cols-4 row-cols-md-1';
    return rowContainer;
}

function formatPrice(price) {
    return parseInt(price).toLocaleString('vi-VN');
=======
    const productContainer1 = document.querySelector('.row.row-cols-4.row-cols-md-1:first-of-type');
    const productContainer2 = document.querySelector('.row.row-cols-4.row-cols-md-1:nth-of-type(2)');
    productContainer1.innerHTML = ''; // Clear existing content
    productContainer2.innerHTML = ''; // Clear existing content

    products.forEach((product, index) => {
        const productElement = `
            <div class="col">
                <article class="cate-item">
                    <img src="./assets/img/category-item-2.webp
                    " alt="${product.name}" class="cate-item__thumb" />
                    <section class="cate-item__info">
                        <a href="#!" class="cate-item__title">${product.name}</a>
                        <p class="cate-item__desc">${product.price} đ</p>
                    </section>
                </article>  
            </div>
        `;
        if (index < 4) {
            productContainer1.innerHTML += productElement;
        } else {
            productContainer2.innerHTML += productElement;
        }
    });
>>>>>>> f1a39535bb30d959b85b009ae5169ec0b1de9db5
}

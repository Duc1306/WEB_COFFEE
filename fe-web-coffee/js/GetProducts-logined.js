document.addEventListener("DOMContentLoaded", function () {
<<<<<<< HEAD
    loadCartDropdown();
    updateWallet();
=======
>>>>>>> f1a39535bb30d959b85b009ae5169ec0b1de9db5
    // Gọi API để lấy danh sách sản phẩm
    axios
        .get("http://localhost:8080/api/products") // Thay URL bằng URL API thực tế của bạn
        .then((response) => {
            const products = response.data;
            // Render danh sách sản phẩm lên trang
            renderProducts(products);
        })
        .catch((error) => console.error("Error fetching products:", error));
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
                <article class="cate-item" data-product-id="${product.id}">
                    <img src="data:image/jpeg;base64,${product.img_path}" alt="${product.name}" class="cate-item__thumb" />
                    <section class="cate-item__info">
                        <a href="javascript:void(0);" class="cate-item__title">${product.name}</a>
                        <p class="cate-item__desc">${formatPrice(product.price)} đ</p>
                    </section>
                </article>
            </div>
        `;

        rowContainer.innerHTML += productElement;
    });

    // Append the last row container
    mainContainer.appendChild(rowContainer);

    const productElements = document.querySelectorAll('.cate-item');
    productElements.forEach(productElement => {
        productElement.addEventListener('click', function () {
            const productId = this.getAttribute('data-product-id');
            window.location.href = `../view/product-detail.html?id=${productId}`;
        });
    });
}

function createNewRowContainer() {
    const rowContainer = document.createElement('div');
    rowContainer.className = 'row row-cols-4 row-cols-md-1';
    return rowContainer;
}

function updateWallet() {
    const customerData = JSON.parse(sessionStorage.getItem('customer'));
    if (customerData && customerData.wallet) {
        document.getElementById('Wallet').textContent = "Ví của tôi: " + formatPrice(customerData.wallet) + ' đ';
    }
}

function loadCartDropdown() {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const cartDropdown = document.getElementById('cart-dropdown');
    cartDropdown.innerHTML = ''; // Clear existing content

    if (cart.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'Giỏ hàng của bạn đang trống';
        cartDropdown.appendChild(emptyMessage);
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement('article');
        cartItem.classList.add('dropdown-item');
        cartItem.innerHTML = `
            <img src="data:image/jpeg;base64,${item.img_path}" alt="${item.name}" class="dropdown-item__thumb" />
            <section class="dropdown-item__info">
                <a href="../view/product-detail.html?id=${item.id}" class="dropdown-item__title">${item.name}</a>
                <p class="dropdown-item__desc">${formatPrice(item.price)} đ</p>
                <p class="dropdown-item__quantity">Số lượng: ${item.quantity}</p>
            </section>
        `;
        cartDropdown.appendChild(cartItem);
    });
}

function logout() {
    sessionStorage.clear();
    alert("Bạn đã đăng xuất thành công!");
    window.location.href = '../index.html'; // Redirect to home page after logout
}

function formatPrice(price) {
    return parseInt(price).toLocaleString('vi-VN');
}
=======
    const productContainer1 = document.querySelector(
        ".row.row-cols-4.row-cols-md-1:first-of-type"
    );
    const productContainer2 = document.querySelector(
        ".row.row-cols-4.row-cols-md-1:nth-of-type(2)"
    );
    productContainer1.innerHTML = ""; // Clear existing content
    productContainer2.innerHTML = ""; // Clear existing content

    products.forEach((product, index) => {
        const productElement = `
            <div class="col">
                <article class="cate-item">
                    <img src="../assets/img/category-item-2.webp
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
}
>>>>>>> f1a39535bb30d959b85b009ae5169ec0b1de9db5

document.addEventListener("DOMContentLoaded", () => {
    const cartItems = []; // Giỏ hàng lưu danh sách sản phẩm

    // Lấy tất cả các nút "Cart Now"
    const cartNowButtons = document.querySelectorAll(".cart-now");

    // Thêm sự kiện cho mỗi nút "Cart Now"
    cartNowButtons.forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();

            // Lấy thông tin sản phẩm từ DOM
            const productCard = button.closest(".product-card");
            const productName = productCard.querySelector(".product-name").textContent;
            const productPriceText = productCard.querySelector(".product-price").textContent;
            const productImage = productCard.querySelector("img").src;

            // Xử lý giá trị của sản phẩm thành số nguyên (loại bỏ ký tự không phải số)
            const productPrice = parseInt(productPriceText.replace(/[^\d]/g, ""), 10);

            // Thêm sản phẩm vào giỏ hàng
            const product = {
                name: productName,
                price: productPrice,
                image: productImage
            };
            cartItems.push(product);

            // Cập nhật giao diện giỏ hàng
            updateCartUI();
            localStorage.setItem('cart', JSON.stringify(cartItems));
        });
    });

    // Hàm cập nhật giao diện giỏ hàng
    function updateCartUI() {
        const cartContainer = document.querySelector(".right-nav span");
        const cartModal = document.querySelector(".cart-modal");

        // Hiển thị số lượng sản phẩm trong giỏ hàng
        if (cartContainer) {
            cartContainer.textContent = cartItems.length;
        }

        // Cập nhật tổng tiền trong giỏ hàng
        const totalPriceElement = document.querySelector(".cart-modal .total-price");
        if (totalPriceElement) {
            const totalPrice = cartItems.reduce((total, item) => total + item.price, 0); // Tính tổng tiền
            totalPriceElement.textContent = `Tổng tiền: ${totalPrice.toLocaleString()}₫`; // Hiển thị tổng tiền có dấu phẩy và đơn vị "₫"
        }

        // Hiển thị danh sách sản phẩm trong giỏ hàng
        const cartItemsContainer = document.querySelector(".cart-modal .cart-items");
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = ""; // Xóa danh sách cũ
            cartItems.forEach((item, index) => {
                const cartItemDiv = document.createElement("div");
                cartItemDiv.classList.add("cart-item");
                cartItemDiv.innerHTML = `
                    <p>${item.name}</p>
                    <p>${item.price.toLocaleString()}₫</p>
                    <button class="remove-item" data-index="${index}">Xóa</button>
                `;
                cartItemsContainer.appendChild(cartItemDiv);
            });

            // Thêm sự kiện xóa cho các nút "Xóa"
            const removeButtons = document.querySelectorAll(".remove-item");
            removeButtons.forEach(button => {
                button.addEventListener("click", event => {
                    const index = parseInt(button.getAttribute("data-index"), 10);
                    removeItem(index);
                });
            });
        }
    }

    // Hàm xóa sản phẩm
    function removeItem(index) {
        cartItems.splice(index, 1); // Xóa sản phẩm khỏi mảng
        localStorage.setItem('cart', JSON.stringify(cartItems)); // Lưu lại giỏ hàng sau khi xóa
        updateCartUI(); // Cập nhật lại giao diện và tổng tiền
    }
});

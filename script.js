/* ========================================== */
/* KHU VỰC 1: PHÉP THUẬT PHÒNG "VỀ MÌNH" 🌸   */
/* ========================================== */

// 1. TÌM CÁC THÀNH PHẦN CỦA BẢNG POPUP XỊN XÒ
const customModal = document.getElementById('custom-edit-modal');
const modalInput = document.getElementById('edit-modal-input');
const saveBtn = document.getElementById('save-edit-btn');
const cancelBtn = document.getElementById('cancel-edit-btn');
const closeBtn = document.getElementById('close-edit-btn');

// 2. TÌM ĐẾN MỤC TIÊU CẦN SỬA (Tên của chị)
const nameElement = document.getElementById('about-name');
nameElement.style.cursor = "pointer";
nameElement.title = "Bấm vào đây để sửa tên nha";

// 3. KHÔI PHỤC TRÍ NHỚ (Chạy ngay khi vừa mở web)
const savedName = localStorage.getItem('anhlinh_name');
if (savedName) {
    nameElement.innerText = savedName; 
}


// 5. KHI BẤM NÚT LƯU 💾
saveBtn.addEventListener('click', function() {
    const newName = modalInput.value.trim(); // Lấy chữ chị vừa gõ
    
    if (newName !== "") { // Nếu chị không để trống
        nameElement.innerText = newName; // Đổi chữ trên web
        localStorage.setItem('anhlinh_name', newName); // Lưu vào túi không gian
    }
    customModal.style.display = 'none'; // Làm phép tàng hình bảng đi
});

// 6. KHI BẤM NÚT HỦY ❌ HOẶC NÚT X
cancelBtn.addEventListener('click', function() {
    customModal.style.display = 'none'; // Chỉ đóng bảng, không lưu gì hết
});

closeBtn.addEventListener('click', function() {
    customModal.style.display = 'none'; 
});


/* ========================================== */
/* KHU VỰC 2: HỆ THỐNG QUẢN TRỊ BÁNH RĂNG ⚙️  */
/* ========================================== */

const adminBtn = document.getElementById('admin-toggle-btn');
const bodyElement = document.body;

// 1. CHỨC NĂNG BẬT/TẮT BÁNH RĂNG
adminBtn.addEventListener('click', function() {
    // Phép thuật này sẽ thêm/xóa thẻ "admin-mode" vào body
    bodyElement.classList.toggle('admin-mode');
    
    // Đổi màu bánh răng cho dễ nhận biết đang bật hay tắt
    if (bodyElement.classList.contains('admin-mode')) {
        adminBtn.style.backgroundColor = '#ffb7c5'; // Chuyển nền hồng
        adminBtn.style.color = '#fff';
    } else {
        adminBtn.style.backgroundColor = '#fff'; // Trả về nền trắng
    }
});

// 2. TỰ ĐỘNG GẮN BÚT CHÌ VÀO CÁC MỤC CẦN SỬA
// Bác thợ JS tạo sẵn cái bút chì ✏️ ở dạng mã HTML
const editIconHTML = '<span class="edit-icon" title="Bấm để sửa">✏️</span>';

// Gắn tự động vào Tên (Ví dụ cho chị thấy sự nhàn rỗi)
const nameContainer = document.getElementById('about-name');
nameContainer.insertAdjacentHTML('afterend', editIconHTML); // Dán bút chì ngay sau cái tên

// Bắt sự kiện: Chỉ khi bấm vào BÚT CHÌ thì bảng mới hiện ra (thay vì bấm thẳng vào chữ như trước)
nameContainer.nextElementSibling.addEventListener('click', function() {
    customModal.style.display = 'flex'; 
    modalInput.value = nameContainer.innerText; 
});
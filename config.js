// Ngày 10 tháng 10 năm 2019 https://github.com/AJLoveChina/birthday
var config = {
    // Độ dài của câu có thể tùy ý, bạn có thể viết mười câu và hai mươi câu có thể
    // Cố gắng không vượt quá 15 từ trong mỗi câu, nếu không hiệu ứng hiển thị có thể không tốt lắm
    texts: [
        "Tính đến thời điểm hiện tại",      //Ở đây, dấu phẩy cuối cùng ở cuối mỗi câu phải là tiếng Anh !! Nó rất quan trọng !!
        "Mình tìm hiểu nhau cũng được 8 tháng rồi",  // Giống như trên ...
        "Có cho nhau nhiều kỉ niệm vui buồn",
        "Đây là bức ảnh đầu tiên anh chụp cho em",
        "Xinh ấy chứ nhỉ",
        "Hôm nay là sinh nhật của em",
        "Anh không biết làm gì cho hợp lí",
        "Mong là em thích món quà này",
        "Chúc em tuổi 17 luôn xinh đẹp",
        "Happy Birthday",
        "Sapphire~~",
    ],
    /**
     * imgs Bạn không thể điền vào nó, nhưng nếu bạn muốn điền nó, bạn phải làm theo định dạng sau
     * "Tương ứng với văn bản ở trên, nó chính xác giống nhau ":" Địa chỉ hình ảnh, bạn có thể đặt hình ảnh vào thư mục IMGS"
     * Ví dụ
     * "Yêu thương nhỏ dễ thương": "./imgs/xiaokeai.jpg"
     *
     * Nếu bạn thực hiện hình ảnh cần hình ảnh, hãy viết hai ghi chú chém trực tiếp vào đầu mỗi dòng. Ví dụ, hình ảnh của ngày hôm nay là sinh nhật của bạn dưới đây sẽ không được hiển thị :)
     * Tip: Hình ảnh là tốt nhất để sử dụng một hình vuông hoặc hình vuông, nó trông đẹp hơn
     */
    imgs: {
        "Xinh ấy chứ nhỉ": "./imgs/bichNgoc.jpg",
        // "Hôm nay là cuộc sống của bạn日": "./imgs/birthday.jpg",
    },
    // Mô tả văn bản nút, sau đây là văn bản nút mặc định, tiếng Anh, bạn có thể thay đổi thành văn bản yêu thích của mình
    desc: {
        turn_on: "bắt đầu",
        play: "âm nhạc cho sôi động nhé",
        bannar_coming: "Một chút màu sắc",
        balloons_flying: "Thêm tí gì đó",
        cake_fadein: "Em ăn bánh ngọt nhé",
        light_candle: "Để anh thắp nến",
        wish_message: "Chúc mừng sinh nhật",
        story: "Anh có vài lời muốn gửi đến em",
    }
};

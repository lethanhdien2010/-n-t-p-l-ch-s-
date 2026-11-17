// =========================================================================
// NGÂN HÀNG TRẮC NGHIỆM ĐÚNG / SAI
// Hỗ trợ phần dẫn (`context`) bằng cả ĐOẠN TƯ LIỆU lẫn BẢNG THỐNG KÊ HTML
// Lưu ý: Dùng dấu huyền (backtick ` ... `) bao quanh `context` để viết nhiều dòng
// =========================================================================
const trueFalseBank = {
  "tn-ds_k12_b6": [
    // MẪU 1: Phần dẫn là ĐOẠN TƯ LIỆU VĂN BẢN
    {
      context: `“Ở Đông Dương ai sẽ tranh thủ được diễn biến tình hình mới sau sự đầu hàng của Nhật hoàng trước quân Đồng minh đây? Đảng Cộng sản Đông Dương là tổ chức duy nhất có chiến lược rành mạch và chiến thuật cụ thể. Nhờ vào máy liên hệ vô tuyến mà Hồ Chí Minh và các đồng chí của ông đã biết tin quân Nhật đầu hàng. Do đó họ đã nắm lấy thời cơ,...”<br><em>(P. Bờ-rô-sô, D. Hê-mơ-ri, Đông Dương: một nền thuộc địa nhập nhằng)</em>`,
      question: "Dựa vào đoạn tư liệu trên, hãy đánh giá tính đúng/sai của các nhận định sau:",
      statements: [
        { text: "a) Theo tư liệu, Đảng Cộng sản Đông Dương đã có sự chuẩn bị chu đáo, sẵn sàng cho Tổng khởi nghĩa.", correct: true, explanation: "Đúng, tư liệu nêu rõ Đảng có chiến lược rành mạch và chiến thuật cụ thể." },
        { text: "b) Đảng Cộng sản Đông Dương là tổ chức chính trị duy nhất ở Việt Nam biết tin Nhật Bản đầu hàng.", correct: false, explanation: "Sai, không chỉ riêng Đảng ta mà các thế lực khác cũng nắm được thông tin, nhưng Đảng là lực lượng chủ động chớp thời cơ nhanh nhất." },
        { text: "c) Thực tiễn lịch sử chứng minh Đảng Cộng sản Đông Dương là tổ chức cách mạng có năng lực lãnh đạo xuất sắc.", correct: true, explanation: "Đúng, Đảng đã lãnh đạo quần chúng nhân dân Tổng khởi nghĩa giành chính quyền thành công trong cả nước." },
        { text: "d) Đoạn trích trên là nhận định khách quan của các nhà nghiên cứu nước ngoài về cuộc cách mạng giải phóng dân tộc của Việt Nam.", correct: true, explanation: "Đúng, đây là trích dẫn từ công trình nghiên cứu của các tác giả người Pháp." }
      ]
    },

    // MẪU 2: Phần dẫn là BẢNG DỮ KIỆN (dùng thẻ <table>...</table> chuẩn đẹp)
    {
      context: `Cho bảng dữ kiện về diễn biến chính của Tổng khởi nghĩa tháng Tám năm 1945:
        <table>
          <thead>
            <tr>
              <th>Thời gian</th>
              <th>Sự kiện tiêu biểu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>14 - 18/8/1945</strong></td>
              <td>Khởi nghĩa thắng lợi ở nông thôn đồng bằng Bắc Bộ, đại bộ phận miền Trung, một phần miền Nam. Bốn tỉnh giành chính quyền sớm nhất: Bắc Giang, Hải Dương, Hà Tĩnh, Quảng Nam.</td>
            </tr>
            <tr>
              <td><strong>19/8/1945</strong></td>
              <td>Khởi nghĩa giành chính quyền thắng lợi hoàn toàn ở Hà Nội.</td>
            </tr>
            <tr>
              <td><strong>23/8/1945</strong></td>
              <td>Khởi nghĩa giành chính quyền thắng lợi ở Huế.</td>
            </tr>
            <tr>
              <td><strong>25/8/1945</strong></td>
              <td>Khởi nghĩa giành chính quyền thắng lợi ở Sài Gòn.</td>
            </tr>
          </tbody>
        </table>`,
      question: "Từ bảng dữ kiện trên, hãy chọn Đúng hoặc Sai cho mỗi nhận định dưới đây:",
      statements: [
        { text: "a) Bốn tỉnh giành được chính quyền sớm nhất trong cả nước là Bắc Giang, Hải Dương, Hà Tĩnh và Quảng Nam.", correct: true, explanation: "Đúng, theo bảng dữ kiện 4 tỉnh này giành chính quyền sớm nhất." },
        { text: "b) Thắng lợi tại Hà Nội, Huế, Sài Gòn đã tạo ra ảnh hưởng quyết định đến các địa phương còn lại.", correct: true, explanation: "Đúng, đây là 3 đô thị lớn nhất cả nước." },
        { text: "c) Tổng khởi nghĩa tháng Tám năm 1945 diễn ra trước ở các đô thị lớn rồi mới lan về các vùng nông thôn.", correct: false, explanation: "Sai, khởi nghĩa thắng lợi ở nhiều vùng nông thôn (14-18/8) trước khi giành chính quyền ở Hà Nội (19/8), Huế (23/8), Sài Gòn (25/8)." },
        { text: "d) Cuộc Tổng khởi nghĩa giành chính quyền trong cả nước diễn ra nhanh chóng, gọn gàng trong vòng nửa tháng.", correct: true, explanation: "Đúng, từ ngày 14/8 đến 28/8/1945 cuộc Tổng khởi nghĩa đã giành thắng lợi hoàn toàn." }
      ]
    }
  ]
};
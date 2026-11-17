// =========================================================================
// 1. CẤU HÌNH SỐ LƯỢNG CÂU HỎI HIỂN THỊ MẶC ĐỊNH CHO TỪNG BÀI
// (Khi học sinh mở bài lên, hệ thống sẽ tự động bốc đúng số lượng này)
// =========================================================================
const lessonConfig = {
  "k10_b1": { biet: 3, hieu: 3, vandung: 3, tf: 2 }, // Bài 1 Khối 10: 3 Biết, 3 Hiểu, 3 VD, 2 Đ/S
  "k12_b6": { biet: 2, hieu: 1, vandung: 1, tf: 2 }  // Bài 6 Khối 12: 2 Biết, 1 Hiểu, 1 VD, 2 Đ/S
};

// =========================================================================
// 2. NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM NHIỀU LỰA CHỌN (PHÂN HÓA 3 MỨC ĐỘ)
// =========================================================================
const questionBank = {
  "tn-nlc_k12_b6": [
    {
      level: "biet",
      question: "[Khối 12 - Bài 6] Thời điểm nào sau đây đánh dấu thời cơ 'ngàn năm có một' của Tổng khởi nghĩa tháng Tám năm 1945 tồn tại?",
      options: [
        "A. Từ sau khi Nhật Bản đầu hàng Đồng minh đến khi quân Đồng minh vào Đông Dương.",
        "B. Từ khi Nhật Bản đầu hàng Đồng minh đến trước khi quân Đồng minh vào Đông Dương.",
        "C. Từ sau khi Nhật đầu hàng Đồng minh đến khi quân Đồng minh kéo vào Đông Dương.",
        "D. Từ trước khi Nhật đầu hàng Đồng minh đến sau khi quân Đồng minh vào Đông Dương."
      ],
      correct: 1,
      explanation: "Thời cơ ngàn năm có một tính từ khi Nhật đầu hàng Đồng minh đến trước khi quân Đồng minh vào Đông Dương."
    },
    {
      level: "biet",
      question: "[Khối 12 - Bài 6] Trong cuộc Tổng khởi nghĩa tháng 8 - 1945 ở Việt Nam, thắng lợi ở địa bàn nào có ý nghĩa quyết định đối với cuộc cách mạng giải phóng dân tộc?",
      options: [
        "A. Ở các đô thị - trung tâm chính trị, kinh tế của kẻ thù.",
        "B. Ở nông thôn - nơi cơ sở cách mạng rất vững mạnh.",
        "C. Ở đồng bằng - nơi có sức người, sức của dồi dào.",
        "D. Ở rừng núi - nơi có căn cứ địa mở rộng, vững chắc."
      ],
      correct: 0,
      explanation: "Giành chính quyền ở các đô thị - trung tâm chính trị, kinh tế của kẻ thù có ý nghĩa quyết định."
    },
    {
      level: "hieu",
      question: "[Khối 12 - Bài 6] Nội dung nào sau đây là điều kiện chủ quan thuận lợi của Cách mạng tháng Tám năm 1945 ở Việt Nam?",
      options: [
        "A. Lực lượng cách mạng được xây dựng và rèn luyện qua thực tiễn đấu tranh.",
        "B. Cuộc Chiến tranh thế giới thứ hai đã hoàn toàn kết thúc ở châu Âu.",
        "C. Nhật hoàng đã tuyên bố đầu hàng quân Đồng minh không điều kiện.",
        "D. Quân Đồng minh và quân Pháp vẫn chưa kịp kéo vào Đông Dương."
      ],
      correct: 0,
      explanation: "Lực lượng cách mạng được chuẩn bị và rèn luyện qua thực tiễn là nhân tố chủ quan quyết định."
    },
    {
      level: "vandung",
      question: "[Khối 12 - Bài 6] Về tổng thể, thời cơ thuận lợi trong Cách mạng tháng Tám năm 1945 có đặc điểm nổi bật nào sau đây?",
      options: [
        "A. Yếu tố thời cơ đan xen lẫn cả nguy cơ phức tạp.",
        "B. Thuận lợi là cơ bản, nguy cơ là thứ yếu nhưng thời gian rất gấp gáp.",
        "C. Nguy cơ là cơ bản, thời cơ là thứ yếu do ngoại bang chi phối.",
        "D. Thời cơ và nguy cơ hoàn toàn do lực lượng cách mạng chủ động tạo ra."
      ],
      correct: 1,
      explanation: "Thời cơ của Cách mạng tháng Tám có đặc điểm cơ bản là thuận lợi là chính, nhưng thời gian tồn tại rất ngắn ngủi."
    }
  ]
};
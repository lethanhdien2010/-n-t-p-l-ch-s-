// =========================================================================
// PHÒNG ĐỀ THAM KHẢO & KIỂM TRA
// Hỗ trợ tính năng `autoGenerate`: tự động rút ngẫu nhiên câu hỏi từ
// các tệp questions.js, tru-sai.js, tu-luan.js theo đúng cấu trúc đề!
// =========================================================================
const examBank = {
  "de_k12_dk_gk1": [
    {
      title: "Đề Ôn Tập Định Kì Giữa Kì I - Lịch sử 12 (Tự động trộn từ ngân hàng)",
      time: "50 phút",
      structure: "Tự động rút ngẫu nhiên từ ngân hàng câu hỏi các bài theo mức độ cài đặt",
      autoGenerate: {
        mcq: [
          { lesson: "k12_b6", biet: 2, hieu: 1, vandung: 1 }
        ],
        trueFalse: [
          { lesson: "k12_b6", count: 2 }
        ],
        essay: [
          { lesson: "k12_b6", count: 1 }
        ]
      }
    }
  ]
};
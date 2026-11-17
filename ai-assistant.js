const AI_CONFIG = {
  provider: "gemini",
  geminiApiKey: "AQ.Ab8RN6JeIGWuWZqrAOW2klpMPlho2xbifwkflfmei4l7drZRBA",
  openAiApiKey: ""
};

const HISTORY_SYSTEM_PROMPT = "Bạn là một Trợ lí AI chuyên gia về môn Lịch sử THPT tại Việt Nam. Hãy trả lời ngắn gọn, chuẩn xác, sư phạm theo sách giáo khoa.";

async function callAIModel(userMessage, targetBoxId) {
  const chatBox = document.getElementById(targetBoxId);
  const loadingId = 'loading_' + Date.now();
  
  chatBox.innerHTML += `
    <div id="${loadingId}" class="flex items-start gap-3 my-2">
      <div class="w-8 h-8 rounded-lg bg-amber-500 text-slate-900 font-bold flex items-center justify-center shrink-0 text-xs">AI</div>
      <div class="bg-slate-100 rounded-2xl rounded-tl-none p-3.5 text-slate-600 text-xs italic animate-pulse">
        Trợ lí AI đang tổng hợp kiến thức...
      </div>
    </div>
  `;
  chatBox.scrollTop = chatBox.scrollHeight;

  const apiKey = AI_CONFIG.geminiApiKey;
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          { role: "user", parts: [{ text: HISTORY_SYSTEM_PROMPT + "\n\nCâu hỏi: " + userMessage }] }
        ]
      })
    });

    const data = await response.json();
    if(document.getElementById(loadingId)) document.getElementById(loadingId).remove();

    if (data.candidates && data.candidates[0].content) {
      const replyText = data.candidates[0].content.parts[0].text;
      chatBox.innerHTML += `
        <div class="flex items-start gap-3 my-2">
          <div class="w-8 h-8 rounded-lg bg-amber-500 text-slate-900 font-bold flex items-center justify-center shrink-0 text-xs">AI</div>
          <div class="bg-slate-100 rounded-2xl rounded-tl-none p-3.5 text-slate-800 leading-relaxed text-xs sm:text-sm">
            ${replyText.replace(/\n/g, '<br>')}
          </div>
        </div>
      `;
    } else {
      throw new Error(data.error?.message || "Phản hồi từ Google không hợp lệ.");
    }
  } catch (error) {
    if(document.getElementById(loadingId)) document.getElementById(loadingId).remove();
    chatBox.innerHTML += `
      <div class="flex items-start gap-3 my-2">
        <div class="w-8 h-8 rounded-lg bg-amber-500 text-slate-900 font-bold flex items-center justify-center shrink-0 text-xs">AI</div>
        <div class="bg-rose-50 border border-rose-200 rounded-2xl rounded-tl-none p-3.5 text-rose-800 text-xs leading-relaxed">
          ⚠️ <strong>Lỗi kết nối:</strong> ${error.message}
        </div>
      </div>
    `;
  }
  chatBox.scrollTop = chatBox.scrollHeight;
}
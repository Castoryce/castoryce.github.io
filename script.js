// 随机副标题数组
const subtitles = [
    "四海翻腾云水怒，五洲震荡风雷激",
    "回首向来萧瑟处，归去，也无风雨也无晴",
    "愿此行，终抵群星",
    "怅寥廓，问苍茫大地，谁主沉浮"
];

// 打字机效果函数
async function typeWriter(text, element) {
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  element.appendChild(cursor);

  for (let i = 0; i < text.length; i++) {
    element.insertBefore(document.createTextNode(text[i]), cursor);
    await new Promise(resolve => setTimeout(resolve, 80));
  }
  cursor.style.animation = 'none';
  cursor.style.opacity = '0';
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  const subtitleElement = document.getElementById('subtitle');
  const randomSubtitle = subtitles[Math.floor(Math.random() * subtitles.length)];
  typeWriter(randomSubtitle, subtitleElement);

  // 卡片悬停效果
  document.querySelectorAll('.card').forEach(card => {
    card.style.transition = 'all 0.3s ease';

    card.addEventListener('mouseover', () => {
      card.style.transform = 'translateY(-5px) scale(1.02)';
      card.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
    });

    card.addEventListener('mouseout', () => {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = '0 3px 6px rgba(0, 0, 0, 0.08)';
    });
  });
});
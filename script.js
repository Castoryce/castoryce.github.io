const subtitles = [
    "距离繁星更近的每一步，都是开拓的收获",
    "即便折断的羽翼不再属于天际，它将坠落的方向也是群星",
    "愿此行，终抵群星",
    "于此浮世中，不独入寝可成梦，事事皆虚空",
    "所谓开拓，就是沿着前人未尽的道路，走出更遥远的距离",
    "开拓的道路，从来不由他人铺就",
    "四海翻腾云水怒，五洲震荡风雷激",
    "竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生",
    "回首向来萧瑟处，归去，也无风雨也无晴",
    "人间有味是清欢",
    "怅寥廓，问苍茫大地，谁主沉浮",
];

let currentIndex = 0;
let isRunning = true;

function createCursor() {
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.textContent = '_';
    return cursor;
}

async function typeWriter(element) {
    const text = subtitles[currentIndex];
    element.innerHTML = '';
    const cursor = createCursor();
    element.appendChild(cursor);

    // 打字效果
    for (let i = 0; i < text.length; i++) {
        if (!isRunning) return;
        const char = document.createTextNode(text[i]);
        element.insertBefore(char, cursor);
        await sleep(80);
    }

    await sleep(2000);
    await deleteWriter(element);
    if (isRunning) {
        currentIndex = (currentIndex + 1) % subtitles.length;
        typeWriter(element);
    }
}

async function deleteWriter(element) {
    const nodes = [...element.childNodes].filter(node => node.nodeType === Node.TEXT_NODE);
    const cursor = element.querySelector('.cursor');

    // 删除效果
    for (let i = nodes.length - 1; i >= 0; i--) {
        if (!isRunning) return;
        const chars = nodes[i].textContent.split('');
        while (chars.length > 0) {
            chars.pop();
            nodes[i].textContent = chars.join('');
            await sleep(50);
        }
        element.removeChild(nodes[i]);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    const subtitleElement = document.getElementById('subtitle');
    typeWriter(subtitleElement);

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

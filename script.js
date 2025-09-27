const heartButton = document.getElementById('heartButton');
const frame = document.getElementById('frame');
const typedText = document.getElementById('typedText');

const finalText = "Еще год - он позади,\n Но назад ты не гляди. \nБыли взлеты и падения, \nА сегодня - С Днем Рождения. \nКоль душой я обладаю, \nОт нее тебе желаю: \nБезграничный баланс карты, \nЧтоб не жить лишь до зарплаты. \nНервы - сталь, здоровья гору, \nДостиженья целей в пору. \nГолый факт - баланса нет, \nВсегда есть закат, рассвет, \nНу а ты лишь хорошеешь, \nСвоим ликом взгляд мой греешь. \nТвой сторонник, твой фанат, \nРядом быть я очень рад. \nВоздыхатель с томным взглядом. \nЧто вовеки будет рядом.";

heartButton.addEventListener('click', function() {
    // Анимация распыления сердца
    const heart = this.querySelector('.heart');
    const heartBefore = heart.querySelector(':before');
    const heartAfter = heart.querySelector(':after');
    
    heart.style.transform = 'rotate(45deg) scale(0.1)';
    heart.style.opacity = '0';
    
    // Прячем сердце, показываем рамку
    setTimeout(() => {
        this.classList.add('hidden');
        frame.classList.remove('hidden');
        frame.classList.add('visible');
        
        // Запускаем печать текста
        typeText(finalText, 100);
    }, 800);
});

function typeText(text, speed) {
    let i = 0;
    typedText.textContent = '';
    
    const typeInterval = setInterval(() => {
        if (i < text.length) {
            typedText.textContent += text.charAt(i);
            i++;
            
            // Автоподстройка размера рамки
            adjustFrameSize();
        } else {
            clearInterval(typeInterval);
        }
    }, speed);
}

function adjustFrameSize() {
    const textHeight = typedText.scrollHeight;
    const textWidth = typedText.scrollWidth;
    
    frame.style.width = (textWidth + 150) + 'px';
    frame.style.height = (textHeight + 80) + 'px';
}
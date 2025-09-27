const heartButton = document.getElementById('heartButton');
const frame = document.getElementById('frame');
const typedText = document.getElementById('typedText');
const afterwordBtn = document.getElementById('afterwordBtn');
const fireworksBtn = document.getElementById('fireworksBtn');

const finalText = "Еще год - он позади,\n Но назад ты не гляди. \nБыли взлеты и падения, \nА сегодня - С Днем Рождения. \nКоль душой я обладаю, \nОт нее тебе желаю: \nБезграничный баланс карты, \nЧтоб не жить лишь до зарплаты. \nНервы - сталь, здоровья гору, \nДостиженья целей в пору. \nГолый факт - баланса нет, \nВсегда есть закат, рассвет, \nНу а ты лишь хорошеешь, \nСвоим ликом взгляд мой греешь. \nТвой сторонник, твой фанат, \nРядом быть я очень рад. \nВоздыхатель с томным взглядом. \nЧто вовеки будет рядом.";

const afterwordText = "С Днем Рождения, чудо. \nГоворят, что лучший подарок, это подарок, сделанный своими руками. \nНу, так это или нет - судить тебе. \nЧтобы увеличить ценность подарка(надеюсь) и потому что я мазохист (несомненно) все, начиная с пустой белой страницы и заканчивая конечным результатом - делалось вручную. \nЧасть времени потрачена на вспоминание старых навыков, часть - на приобриотение новых, и часть - на саму работу. \nКраткая статистика: \n-выпито 5 литров энергетика \n-17 бессонных ночей \n-убито около 1 километра нервных окончаний \n-сломано три клавиатуры \n-приобритен нервный тик \nНу а делалось все для того, чтобы в очередной раз сказать, как сильно я тебя люблю и что ты невероятно ценный для меня человечек. \nГоржусь тобой персонально и нашей дружбой отдельно. \nПраздник у тебя, а подарок (ты) достался мне. \nP.S. Кто знает, может другой раз я психану и сделаю не сайт, а целое приложение?";

heartButton.addEventListener('click', function() {
    const heart = this.querySelector('.heart');
    heart.style.transform = 'rotate(45deg) scale(0.1)';
    heart.style.opacity = '0';
    
    setTimeout(() => {
        this.classList.add('hidden');
        frame.classList.remove('hidden');
        typeText(finalText, 50, false);
    }, 800);
});

afterwordBtn.addEventListener('click', function() {
    typedText.style.animation = 'fadeOut 0.5s forwards';
    setTimeout(() => {
        typedText.textContent = '';
        typedText.style.animation = '';
        this.style.display = 'none';
        typeText(afterwordText, 50, true);
    }, 500);
});

fireworksBtn.addEventListener('click', function() {
    createFireworks();
    this.style.display = 'none';
    afterwordBtn.style.display = 'none';
});

function typeText(text, speed, isAfterword) {
    let i = 0;
    typedText.textContent = '';
    
    const typeInterval = setInterval(() => {
        if (i < text.length) {
            typedText.textContent = text.substring(0, i + 1);
            i++;
        } else {
            clearInterval(typeInterval);
            setTimeout(() => {
                if (!isAfterword) {
                    afterwordBtn.style.display = 'block';
                } else {
                    fireworksBtn.style.display = 'block';
                }
            }, 1000);
        }
    }, speed);
}

function createFireworks() {
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            for (let j = 0; j < 5; j++) {
                const heart = document.createElement('div');
                heart.className = 'heart-firework';
                heart.textContent = '❤';
                heart.style.left = '50%';
                heart.style.top = '50%';
                heart.style.setProperty('--x', (Math.random() - 0.5) * 1000 + 'px');
                heart.style.setProperty('--y', (Math.random() - 0.5) * 1000 + 'px');
                heart.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
                heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
                heart.style.textShadow = `0 0 ${Math.random() * 30 + 10}px currentColor`;
                document.body.appendChild(heart);
                setTimeout(() => heart.remove(), 2000);
            }
        }, i * 50);
    }
    
    setTimeout(() => {
        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart-firework';
            heart.textContent = '❤';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.setProperty('--x', (Math.random() - 0.5) * 200 + 'px');
            heart.style.setProperty('--y', (Math.random() - 0.5) * 200 + 'px');
            heart.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
            heart.style.fontSize = (Math.random() * 40 + 10) + 'px';
            heart.style.animationDuration = (Math.random() * 2 + 1) + 's';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 3000);
        }
    }, 1500);
}
function createFireworks() {
    // Скрыть рамку и текст
    frame.classList.add('hidden');
    typedText.classList.add('hidden');
    
    // Фейерверк
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            for (let j = 0; j < 5; j++) {
                const heart = document.createElement('div');
                heart.className = 'heart-firework';
                heart.textContent = '❤';
                heart.style.left = '50%';
                heart.style.top = '50%';
                heart.style.setProperty('--x', (Math.random() - 0.5) * 1000 + 'px');
                heart.style.setProperty('--y', (Math.random() - 0.5) * 1000 + 'px');
                heart.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
                heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
                heart.style.textShadow = `0 0 ${Math.random() * 30 + 10}px currentColor`;
                document.body.appendChild(heart);
                setTimeout(() => heart.remove(), 2000);
            }
        }, i * 50);
    }
    
    // Финальный взрыв
    setTimeout(() => {
        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart-firework';
            heart.textContent = '❤';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.setProperty('--x', (Math.random() - 0.5) * 200 + 'px');
            heart.style.setProperty('--y', (Math.random() - 0.5) * 200 + 'px');
            heart.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
            heart.style.fontSize = (Math.random() * 40 + 10) + 'px';
            heart.style.animationDuration = (Math.random() * 2 + 1) + 's';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 3000);
        }
    }, 1500);
    setTimeout(() => {
        document.getElementById('feedback').classList.remove('hidden');
    }, 5000);
} // закрывающая скобка функции

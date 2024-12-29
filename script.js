 //Скролл
 document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); //

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//рассылка
document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('subscriber-email');
    const emailValue = emailInput.value;
    const confirmationMessage = document.getElementById('confirmation-message');

    //Проверка формата почты
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        alert('Пожалуйста, введите корректный адрес электронной почты в формате example@gmail.com.');
        return;
    }

    confirmationMessage.style.display = 'block';
    confirmationMessage.textContent = `Письмо с подтверждением было отправлено на ${emailValue}`;

});

//Обращение
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;

    const notification = document.getElementById("notification");
    notification.textContent = `Спасибо за ваше сообщение! Мы ответим вам на ${email}.`;
    notification.style.display = 'block';

    // Очистка формы
    this.reset();
});
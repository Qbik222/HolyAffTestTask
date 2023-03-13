// Створення змінних, які будуть зберігати значення вибраних полів
let gender, age, familySize, hasiPhoneXS;

// Отримання всіх елементів DOM для відповідних запитань і кнопок
const genderButtons = document.querySelectorAll('.survey_button.bq1');
const ageButtons = document.querySelectorAll('.survey_button.bq2');
const familySizeButtons = document.querySelectorAll('.survey_button.bq3');
const hasiPhoneXSButtons = document.querySelectorAll('.survey_button.bq4');
const modalButton = document.querySelector('#p_modal_button3');
const imgBeforeModalButton = document.querySelector('.div_img_gift');

// Додавання обробників подій на кнопки, які зберігають відповідні значення до змінних при кліці на них
genderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    gender = button.textContent.trim();
  });
});

ageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    age = button.textContent.trim();
  });
});

familySizeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    familySize = button.textContent.trim();
  });
});

hasiPhoneXSButtons.forEach((button) => {
  button.addEventListener('click', () => {
    hasiPhoneXS = button.textContent.trim() === 'Sim';
  });
});

// Функція, яка обробляє зібрані дані
function handleData() {
  const data = {
    gender,
    age,
    familySize,
    hasiPhoneXS,
  };
  imgBeforeModalButton.style.display = 'none';

  console.log(data); // Виведення об'єкту даних у консоль
  // Додаткова логіка обробки зібраних даних...
}

modalButton.addEventListener('click', () => {
  handleData();
});
// Отримуємо посилання на введення коментаря та кнопку подання коментаря
const commentInput = document.getElementById('comment-input');
const commentSubmit = document.getElementById('comment-submit');

// Слухаємо подію кліку кнопки подання коментаря
commentSubmit.addEventListener('click', () => {
  // Отримуємо значення введеного тексту коментаря
  const commentText = commentInput.value;

  // Створюємо новий елемент коментаря
  const newComment = document.createElement('div');
  newComment.classList.add('comments');
  newComment.innerHTML = `
    <div class="profile">
      <img src="./assets/images/anonymous-user.png" />
    </div>
    <div class="comment-content">
      <p class="name">
        <font style="vertical-align: inherit">
          <font style="vertical-align: inherit">Anonymous</font>
        </font>
      </p>
      <p>
        <font style="vertical-align: inherit">
          <font style="vertical-align: inherit">${commentText}</font>
        </font>
      </p>
    </div>
    <div class="clr"></div>
    <div class="comment-status">
      <span>
        <font style="vertical-align: inherit">
          <font style="vertical-align: inherit">Curte·comente</font>
        </font>
        <img src="./assets/images/like.png" width="15px" height="15px" />
        <font style="vertical-align: inherit">
          <font style="vertical-align: inherit">0</font>
        </font>
      </span>
      <small>
        <font style="vertical-align: inherit">
          <font style="vertical-align: inherit">·</font>
        </font>
        <u>
          <font style="vertical-align: inherit">
            <font style="vertical-align: inherit">Now</font>
          </font>
        </u>
      </small>
    </div>
  `;
  // Додаємо новий елемент коментаря до div з коментарями
  if (commentText.length > 0) {
    const commentsFace = document.querySelector('.comments_face');
    commentsFace.appendChild(newComment);
  } else {
    alert('cannot get the empty comment');
  }

  // Очищуємо введене поле коментаря
  commentInput.value = '';
});

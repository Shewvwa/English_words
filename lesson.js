"use strict"

// Ваши слова и переводы
const words = {
    "apple": "яблоко",
    "banana": "банан",
    // Добавьте больше слов
};

const question = document.getElementById("question");
const answerInput = document.getElementById("answer");
const submitButton = document.getElementById("submit");
const resultDiv = document.getElementById("result");

let currentWordIndex = 0;
const wordList = Object.keys(words);

function displayNextWord() {
    if (currentWordIndex < wordList.length) {
        const currentWord = wordList[currentWordIndex];
        question.textContent = `Переведи слово: ${currentWord}`;
        answerInput.value = "";
    } else {
        question.textContent = "Гуд";
        answerInput.style.display = "none";
        submitButton.style.display = "none";
    }
}

function checkAnswer() {
    const userAnswer = answerInput.value.toLowerCase();
    const currentWord = wordList[currentWordIndex];
    if (userAnswer === words[currentWord].toLowerCase()) {
        resultDiv.textContent = "Верно";
    } else {
        resultDiv.textContent = "Incorrect. The correct answer is: " + words[currentWord];
    }
    currentWordIndex++;
    displayNextWord();
}

submitButton.addEventListener("click", checkAnswer);

displayNextWord();

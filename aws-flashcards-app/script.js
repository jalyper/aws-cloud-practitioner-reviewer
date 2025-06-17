document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const startScreen = document.getElementById('start-screen');
    const quizContainer = document.getElementById('quiz-container');
    const startBtns = document.querySelectorAll('.start-btn');
    
    const questionEl = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');
    const explanationContainer = document.getElementById('explanation-container');
    const explanationEl = document.getElementById('explanation');
    const nextBtn = document.getElementById('next-btn');
    const questionProgressEl = document.getElementById('question-progress');
    const scoreEl = document.getElementById('score');
    const finalMessageEl = document.getElementById('final-message');
    const quizBody = document.querySelector('.quiz-body');

    // State
    let score = 0;
    let currentDeck = [];
    let currentIndex = 0;
    let answerSelected = false;

    const domainWeights = {
        "Technology": 0.34,
        "Security and Compliance": 0.30,
        "Cloud Concepts": 0.24,
        "Billing and Pricing": 0.12
    };

    function createWeightedDeck(totalQuestions) {
        let deck = [];

        // Group questions by domain
        const questionsByDomain = questions.reduce((acc, q) => {
            acc[q.domain] = acc[q.domain] || [];
            acc[q.domain].push(q);
            return acc;
        }, {});

        // Shuffle questions within each domain
        for (const domain in questionsByDomain) {
            questionsByDomain[domain].sort(() => Math.random() - 0.5);
        }

        // Populate the deck according to weights
        for (const domain in domainWeights) {
            const count = Math.round(totalQuestions * domainWeights[domain]);
            const domainQuestions = questionsByDomain[domain] || [];
            // Make sure we don't add more questions than available
            const questionsToAdd = domainQuestions.slice(0, count);
            deck = deck.concat(questionsToAdd);
        }
        
        // Adjust if rounding leads to a different total, ensuring no duplicates
        while (deck.length < totalQuestions && questions.length > deck.length) {
            let randomQuestion = questions[Math.floor(Math.random() * questions.length)];
            if (!deck.find(q => q.question === randomQuestion.question)) {
                deck.push(randomQuestion);
            }
        }
        
        deck = deck.slice(0, totalQuestions);
        // Final shuffle of the entire deck
        deck.sort(() => Math.random() - 0.5);
        return deck;
    }

    function showQuestion() {
        answerSelected = false;
        explanationContainer.style.display = 'none';
        nextBtn.style.display = 'none';
        optionsContainer.innerHTML = '';

        if (currentIndex >= currentDeck.length) {
            showFinalScore();
            return;
        }

        const card = currentDeck[currentIndex];
        questionEl.textContent = card.question;
        questionProgressEl.textContent = `Question ${currentIndex + 1} / ${currentDeck.length}`;

        // Shuffle options to make it more challenging
        const shuffledOptions = [...card.options].sort(() => Math.random() - 0.5);

        shuffledOptions.forEach(optionText => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.textContent = optionText;
            optionDiv.addEventListener('click', () => handleOptionClick(optionDiv, optionText, card.correctAnswer));
            optionsContainer.appendChild(optionDiv);
        });
    }

    function handleOptionClick(selectedDiv, selectedText, correctAnswer) {
        if (answerSelected) return;
        answerSelected = true;

        const allOptions = optionsContainer.querySelectorAll('.option');
        
        selectedDiv.classList.add('selected');

        if (selectedText === correctAnswer) {
            score++;
            scoreEl.textContent = score;
            selectedDiv.classList.add('correct');
        } else {
            selectedDiv.classList.add('incorrect');
            allOptions.forEach(opt => {
                if (opt.textContent === correctAnswer) {
                    opt.classList.add('correct');
                }
            });
        }
        
        explanationEl.innerHTML = currentDeck[currentIndex].explanation;
        explanationContainer.style.display = 'block';
        nextBtn.style.display = 'block';
    }

    function showFinalScore() {
        quizBody.style.display = 'none';
        explanationContainer.style.display = 'none';
        nextBtn.style.display = 'none';
        const finalScore = (score / currentDeck.length) * 100;
        finalMessageEl.textContent = `Quiz Complete! Your final score is ${finalScore.toFixed(1)}% (${score}/${currentDeck.length}).`;
        finalMessageEl.style.display = 'block';
    }

    function startQuiz(questionCount) {
        currentDeck = createWeightedDeck(questionCount);
        if (currentDeck.length < questionCount) {
            alert(`Warning: Not enough unique questions available. Starting quiz with ${currentDeck.length} questions.`);
        }
        scoreEl.textContent = score;

        startScreen.style.display = 'none';
        quizContainer.style.display = 'block';
        
        if (currentDeck.length > 0) {
            showQuestion();
        } else {
             questionEl.textContent = "Could not load questions.";
        }
    }

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        showQuestion();
    });

    startBtns.forEach(button => {
        button.addEventListener('click', () => {
            const questionCount = parseInt(button.dataset.count, 10);
            startQuiz(questionCount);
        });
    });
}); 
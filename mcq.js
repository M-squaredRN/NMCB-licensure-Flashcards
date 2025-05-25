const questions = [
  {
    question: "Which urinary symptom is most common during the first trimester of pregnancy?",
    options: ["Dysuria", "Frequency", "Incontinence", "Burning"],
    answer: "Frequency"
  },
  {
    question: "What causes heartburn and flatulence in the second trimester?",
    options: ["Increased uterine pressure", "Elevated HCG", "Decreased gastric acidity", "Fetal movement"],
    answer: "Decreased gastric acidity"
  },
  {
    question: "Where does chloasma typically appear?",
    options: ["Hands and feet", "Abdomen", "Cheeks, forehead, and nose", "Neck"],
    answer: "Cheeks, forehead, and nose"
  },
  {
    question: "What causes waddling in pregnant women?",
    options: ["High heels", "Uterine weight", "Relaxation of the pelvic joints", "Fluid retention"],
    answer: "Relaxation of the pelvic joints"
  },
  {
    question: "Average weight gain during pregnancy?",
    options: ["10-15 lb", "16-20 lb", "24-30 lb", "35-40 lb"],
    answer: "24-30 lb"
  },
  {
    question: "What kind of signs are cervical softening and uterine souffle?",
    options: ["Positive", "Presumptive", "Probable", "Diagnostic"],
    answer: "Probable"
  },
  {
    question: "Which is a presumptive sign of pregnancy?",
    options: ["Ballottement", "Nausea and vomiting", "Braxton Hicks", "Fetal movement by examiner"],
    answer: "Nausea and vomiting"
  }
];

let current = 0;

function loadQuestion(index) {
  const q = questions[index];
  document.getElementById("question-number").textContent = `Question ${index + 1} of ${questions.length}`;
  document.getElementById("question").textContent = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach(opt => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="option" value="${opt}"> ${opt}`;
    optionsDiv.appendChild(label);
  });

  document.getElementById("feedback").textContent = "";
  document.getElementById("next-btn").style.display = "none";
}

function submitAnswer() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) return alert("Please choose an answer!");

  const answer = selected.value;
  const correct = questions[current].answer;
  const feedback = document.getElementById("feedback");

  if (answer === correct) {
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = `Wrong. Correct Answer: ${correct}`;
    feedback.style.color = "red";
  }

  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion(current);
  } else {
    document.getElementById("quiz-box").innerHTML = "<h3>Quiz Completed!</h3>";
  }
}

document.addEventListener("DOMContentLoaded", () => loadQuestion(current));

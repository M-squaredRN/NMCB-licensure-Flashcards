const flashcards = [
  { question: "What is the normal range of respiration for an adult?", answer: "12–20 breaths per minute" },
  { question: "Which vitamin is essential for blood clotting?", answer: "Vitamin K" },
  { question: "What is the antidote for Heparin?", answer: "Protamine sulfate" },
  { question: "What is the first line treatment for dysentery?", answer: "Cotrimoxazole" },
  { question: "When is the best time to perform breast self-examination?", answer: "7 days after menstruation or just after menses" },
  { question: "What does a normal umbilical cord contain?", answer: "Two arteries and one vein" },
  { question: "Teaching for a patient taking doxycycline?", answer: "Take on an empty stomach with plenty of water" },
  { question: "When to use ELISA or Rapid HIV test in children?", answer: "After 18 months" },
  { question: "MDR TB is resistant to which drugs?", answer: "Rifampicin and Isoniazid" },
  { question: "Recommended contraceptive for HIV & TB treatment?", answer: "Barrier methods" }
];

let current = 0;

function loadCard(index) {
  document.getElementById("question").textContent = flashcards[index].question;
  document.getElementById("answer").textContent = flashcards[index].answer;
  document.getElementById("answer").classList.add("hidden");
}

function showAnswer() {
  document.getElementById("answer").classList.remove("hidden");
}

function nextCard() {
  current = (current + 1) % flashcards.length;
  loadCard(current);
}

function prevCard() {
  current = (current - 1 + flashcards.length) % flashcards.length;
  loadCard(current);
}

document.addEventListener("DOMContentLoaded", () => loadCard(current));

const flashcards = [
  { question: "Which criterion is most useful in assessing sperm adequacy for conception?", answer: "Sperm motility" },
  { question: "What is the most pertinent nursing diagnosis for a couple dealing with infertility?", answer: "Self-esteem disturbance related to infertility" },
  { question: "Which urinary symptom is most common during the first trimester of pregnancy?", answer: "Frequency" },
  { question: "What causes heartburn and flatulence in the second trimester?", answer: "Decreased gastric acidity" },
  { question: "Where does chloasma typically appear?", answer: "Cheeks, forehead, and nose" },
  { question: "What causes waddling in pregnant women?", answer: "Relaxation of the pelvic joints" },
  { question: "Average weight gain during pregnancy?", answer: "24 to 30 lb" },
  { question: "Cause of leg veins during pregnancy?", answer: "Pressure on blood vessels from the enlarging uterus" },
  { question: "What kind of signs are cervical softening and uterine souffle?", answer: "Probable signs" },
  { question: "Which is a presumptive sign of pregnancy?", answer: "Nausea and vomiting" }
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

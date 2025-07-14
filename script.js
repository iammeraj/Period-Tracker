
document.getElementById("cycleForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const lastPeriod = new Date(document.getElementById("lastPeriod").value);
  const cycleLength = parseInt(document.getElementById("cycleLength").value);

  const today = new Date();
  const daysPassed = Math.floor((today - lastPeriod) / (1000 * 60 * 60 * 24)) % cycleLength;

  let phase = "";
  let mood = "";

  if (daysPassed <= 4) {
    phase = "Menstrual Phase";
    mood = "You might feel low, tired, or sensitive. Rest is important.";
  } else if (daysPassed <= 13) {
    phase = "Follicular Phase";
    mood = "You're likely feeling energetic, confident, and more focused.";
  } else if (daysPassed === 14) {
    phase = "Ovulation Phase";
    mood = "You're at your peak! You're confident, attractive, and outgoing.";
  } else {
    phase = "Luteal Phase";
    mood = "Mood swings, irritability, or cravings may occur. Take it easy!";
  }

  document.getElementById("phase").textContent = phase;
  document.getElementById("mood").textContent = mood;
  document.getElementById("result").classList.remove("hidden");
});

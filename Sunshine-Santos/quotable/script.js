const btn = document.getElementById("btn");
const statusText = document.getElementById("status");
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");

async function loadQuote() {
  statusText.textContent = "Loading...";
  quoteText.textContent = "";
  quoteAuthor.textContent = "";

  try {
    const res = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache"   // avoid cached responses
    });

    if (!res.ok) {
      throw new Error("HTTP " + res.status);
    }

    const data = await res.json();
    // API shape: { slip: { id, advice } }
    const advice = data.slip?.advice ?? "No advice found.";

    quoteText.textContent = `"${advice}"`;
    quoteAuthor.textContent = "— Advice Slip API";

    statusText.textContent = "";
  } catch (err) {
    console.error("Fetch error:", err);
    statusText.textContent = "Unable to load quote.";
    quoteText.textContent = "Something went wrong.";
    quoteAuthor.textContent = "";
  }
}

// Load one quote when page opens
loadQuote();

// Load new one on button click
btn.addEventListener("click", loadQuote);

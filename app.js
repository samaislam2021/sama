const form = document.getElementById("portfolioForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  try {
    const response = await fetch("https://protfolio-backend-virid.vercel.app/api/portfolio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    alert("Submitted Successfully!");
    console.log(data);

  } catch (error) {
    console.error(error);
    alert("Submission Failed");
  }
});
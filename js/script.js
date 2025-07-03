const elements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contato");
  const agradecimento = document.getElementById("agradecimento");
  const fecharBtn = document.getElementById("fechar-agradecimento");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = new URLSearchParams(formData);

    try {
      await fetch("https://formsubmit.co/ajax/arthurcmattjie@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: data
      });

      form.reset();
      agradecimento.style.display = "block";
    } catch (error) {
      alert("Erro ao enviar. Tente novamente mais tarde.");
      console.error(error);
    }
  });

  fecharBtn.addEventListener("click", () => {
    agradecimento.style.display = "none";
  });
});

const form = document.getElementById("resumeForm");
const preview = document.getElementById("resumePreview");
const printBtn = document.getElementById("printBtn");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const education = document.getElementById("education").value;
  const skills = document.getElementById("skills").value;
  const experience = document.getElementById("experience").value;

  preview.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address}</p>

    <h3>Education</h3>
    <p>${education.replace(/\n/g, "<br>")}</p>

    <h3>Skills</h3>
    <p>${skills.replace(/\n/g, "<br>")}</p>

    <h3>Experience</h3>
    <p>${experience.replace(/\n/g, "<br>")}</p>
  `;

  printBtn.style.display = "block";
});

printBtn.addEventListener("click", function() {
  const printContent = preview.innerHTML;
  const originalContent = document.body.innerHTML;
  document.body.innerHTML = printContent;
  window.print();
  document.body.innerHTML = originalContent;
  location.reload(); // reload to reset
});

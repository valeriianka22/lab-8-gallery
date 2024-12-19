const STORAGE_KEY = "feedback-form-state";

let formData = {
  email: "",
  message: "",
};

const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;

document.addEventListener("DOMContentLoaded", () => {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";

    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
});

form.addEventListener("input", (event) => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Заповніть усі поля :)");
    return;
  }

  console.log(formData);

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData.email = "";
  formData.message = "";
});

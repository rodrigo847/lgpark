"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.getElementById("menu-principal");

if (menuToggle && navigation) {
  document.documentElement.classList.add("js-enabled");
  menuToggle.hidden = false;

  function closeMenu() {
    menuToggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  }

  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    navigation.classList.toggle("is-open", !expanded);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuToggle.focus();
    }
  });

  const mobileLayout = window.matchMedia("(max-width: 800px)");
  mobileLayout.addEventListener("change", closeMenu);
}

function localDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const currentYear = document.getElementById("current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());

const appointmentForm = document.getElementById("appointment-form");
const nameInput = document.getElementById("customer-name");
const dateInput = document.getElementById("preferred-date");
const formError = document.getElementById("form-error");

if (dateInput instanceof HTMLInputElement) {
  dateInput.min = localDateString(new Date());
  dateInput.addEventListener("focus", () => {
    dateInput.min = localDateString(new Date());
  });
}

if (nameInput instanceof HTMLInputElement) {
  nameInput.addEventListener("input", () => nameInput.setCustomValidity(""));
}

if (appointmentForm instanceof HTMLFormElement && nameInput instanceof HTMLInputElement &&
    dateInput instanceof HTMLInputElement && formError) {
  appointmentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formError.hidden = true;
    dateInput.min = localDateString(new Date());
    nameInput.setCustomValidity(nameInput.value.trim() ? "" : "Informe seu nome para continuar.");
    if (!appointmentForm.reportValidity()) return;

    const fields = new FormData(appointmentForm);
    const service = String(fields.get("servico") || "").trim();
    if (!service) {
      formError.textContent = "Selecione um serviço para preparar sua mensagem.";
      formError.hidden = false;
      return;
    }

    const lines = [
      "Olá, LG Park!",
      `Meu nome é ${nameInput.value.trim()}.`,
      `Gostaria de consultar: ${service}.`
    ];
    if (dateInput.value) {
      const [year, month, day] = dateInput.value.split("-");
      lines.push(`Data de preferência: ${day}/${month}/${year}.`);
    }
    const message = String(fields.get("mensagem") || "").trim();
    if (message) lines.push(`Observação: ${message}`);
    lines.push("Podem me informar a disponibilidade e os próximos passos?");

    const whatsappUrl = new URL(appointmentForm.action);
    whatsappUrl.search = new URLSearchParams({ text: lines.join("\n") }).toString();
    window.location.assign(whatsappUrl.href);
  });
  const submitButton = appointmentForm.querySelector('button[type="submit"]');
  if (submitButton instanceof HTMLButtonElement) submitButton.disabled = false;
}

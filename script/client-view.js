import { clients } from "./data.js";

const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

themeToggle?.addEventListener("click", () => {
  html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
});

const clientId = new URLSearchParams(window.location.search).get("id");
const client = clients.find((item) => item.id === clientId);

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value || "-";
}

if (!client) {
  setText("clientName", "Client not found");
  setText("clientStatus", "");
} else {
  setText("clientName", `${client.title} ${client.fullName}`);
  setText("clientCompany", client.companyName);
  setText("clientEmail", client.email);
  setText("clientMobile", client.mobile);
  setText("clientOfficePhone", client.officePhone);
  setText("clientWebsite", client.website);
  setText("clientAddress", client.address);
  setText("clientLocation", `${client.city}, ${client.state}`);
  setText("clientLanguage", client.language);
  setText("clientBalance", `${client.currency} ${client.balance.toLocaleString()}`);
  setText("clientStatus", client.status);
  setText("clientAvatar", `${client.title?.[0] ?? "C"}${client.fullName?.[0] ?? ""}`);
}

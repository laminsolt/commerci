import { clients } from "./data.js";

const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

themeToggle?.addEventListener("click", () => {
  html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
});

const tbody = document.getElementById("clientsTableBody");
let filtered = [...clients];
const filterButton = document.getElementById("filterBtn");
const filterPopup = document.getElementById("filterPopup");

filterButton?.addEventListener("click", () => {
  filterPopup?.classList.toggle("open");
});

document.addEventListener("click", (event) => {
  const filterWrap = document.querySelector(".filter-wrap");

  if (filterWrap && !filterWrap.contains(event.target)) {
    filterPopup?.classList.remove("open");
  }
});

function renderClients() {
  tbody.innerHTML = filtered
    .map(
      (c) => `
    <tr class="client-row" data-client-id="${c.id}">
      <td>${c.title + " " + c.fullName}</td>
      <td class="email-cell">${c.email}</td>
      <td class="phone-cell">${c.mobile}</td>
      <td>${c.status}</td>
      <td>
        <div class="actions-cell">
          <button class="btn-icon" title="Edit" onclick="handleEdit('${c.id}')">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="btn-icon danger" title="Delete" onclick="handleDelete('${c.id}')">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        </div>
      </td>
    </tr>
`,
    )
    .join("");
}

renderClients();

tbody.addEventListener("click", (event) => {
  if (event.target.closest("button, a")) return;

  const row = event.target.closest("[data-client-id]");
  if (row) {
    window.location.href = `client-view.html?id=${row.dataset.clientId}`;
  }
});

const search = document.getElementById("searchInput");

search.addEventListener("input", () => {
  const searchTerm = search.value.toLowerCase().trim();

  filtered = clients.filter(
    (c) =>
      `${c.title + " " + c.fullName}`.toLowerCase().includes(searchTerm) ||
      c.email.toLowerCase().includes(searchTerm) ||
      c.mobile.toLowerCase().includes(searchTerm) ||
      c.status.toLowerCase().includes(searchTerm),
  );

  renderClients();
});

const freset = document.querySelector(".filter-reset");
const checkboxes = document.querySelectorAll(
  ".filter-option input[type='checkbox']",
);

freset.addEventListener("click", () => {
  checkboxes.forEach((cb) => {
    cb.checked = false;
  });
  filtered = [...clients];
  renderClients();
});

const filterTable = document.querySelector(".filter-apply");

filterTable.addEventListener("click", () => {
  let filters = [];
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      filters.push(checkbox.value);
    }
  });
  filtered = clients.filter((client) => filters.includes(client.status));
  renderClients();
});

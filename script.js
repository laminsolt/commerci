import { invoices } from "./invoices-data.js";

const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

themeToggle.addEventListener("click", () => {
  html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
});

// ── Filter panel ─────────────────────────────────────────────
const filterToggle = document.getElementById("filterToggle");
const filterPanel  = document.getElementById("filterPanel");
let activeFilters  = { status: "all", customer: "all", dateFrom: "", dateTo: "" };

filterToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  filterPanel.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!filterPanel.contains(e.target) && !filterToggle.contains(e.target)) {
    filterPanel.classList.remove("active");
  }
});

document.querySelector(".apply-btn").addEventListener("click", () => {
  activeFilters.status   = document.getElementById("statusFilter").value;
  activeFilters.customer = document.getElementById("customerFilter").value;
  activeFilters.dateFrom = document.getElementById("dateFrom").value;
  activeFilters.dateTo   = document.getElementById("dateTo").value;
  filterPanel.classList.remove("active");
  renderTable();
});

document.getElementById("clearFilters").addEventListener("click", () => {
  activeFilters = { status: "all", customer: "all", dateFrom: "", dateTo: "" };
  document.getElementById("statusFilter").value   = "all";
  document.getElementById("customerFilter").value = "all";
  document.getElementById("dateFrom").value = "";
  document.getElementById("dateTo").value   = "";
  filterPanel.classList.remove("active");
  renderTable();
});

// ── Data ─────────────────────────────────────────────────────
function formatDisplay(dateStr) {
  const [y, m, d] = dateStr.split("-");
  return `${d}-${m}-${y}`;
}

function calculateTotals(list, status) {
  return "₦" + list
    .filter(inv => inv.status === status)
    .reduce((sum, inv) => sum + inv.total, 0)
    .toFixed(2);
}

// ── Tabs ─────────────────────────────────────────────────────
const tabs = document.querySelectorAll(".tab");
let activeTab = "all";

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    activeTab = tab.dataset.tab;
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderTable();
  });
});

// ── Sort ─────────────────────────────────────────────────────
const orderSelect = document.getElementById("change-order");
let order = "newest";

orderSelect.addEventListener("change", (e) => {
  order = e.target.value;
  renderTable();
});

// ── Search ────────────────────────────────────────────────────
document.getElementById("searchInput").addEventListener("input", renderTable);

// ── Render ────────────────────────────────────────────────────
const tableBody      = document.getElementById("invoiceTableBody");
const overdueAmount  = document.getElementById("overdue-amount");
const draftedTotals  = document.getElementById("drafted-totals");
const unpaidTotals   = document.getElementById("unpaid-totals");
const totalCount     = document.querySelector(".count.settled");
const unpaidCount    = document.querySelector(".count.unsettled");
const draftCount     = document.querySelector(".count.un-sent");

function renderTable() {
  const search = document.getElementById("searchInput").value.toLowerCase();

  const filtered = [...invoices]
    .filter(inv => activeTab === "all" || inv.status === activeTab)
    .filter(inv => activeFilters.status   === "all" || inv.status   === activeFilters.status)
    .filter(inv => activeFilters.customer === "all" || inv.customer === activeFilters.customer)
    .filter(inv => {
      if (activeFilters.dateFrom && inv.date < activeFilters.dateFrom) return false;
      if (activeFilters.dateTo   && inv.date > activeFilters.dateTo)   return false;
      return true;
    })
    .sort((a, b) => order === "newest" ? b.id - a.id : a.id - b.id)
    .filter(inv =>
      inv.id.toString().includes(search) ||
      inv.customer.toLowerCase().includes(search)
    );

  tableBody.innerHTML = filtered.length
    ? filtered.map(inv => `
        <tr data-id="${inv.id}">
          <td><span class="status ${inv.status}">${inv.status[0].toUpperCase() + inv.status.slice(1)}</span></td>
          <td>${formatDisplay(inv.date)}</td>
          <td>#${inv.id}</td>
          <td>${inv.customer}</td>
          <td>${inv.project}</td>
          <td>
            <div class="total-breakdown">
              <span class="total-main">Total: ₦${inv.total.toFixed(2)}</span>
              <span class="total-paid">Paid: ₦${inv.paid.toFixed(2)}</span>
              <span class="total-unpaid">Unpaid: ₦${inv.unpaid.toFixed(2)}</span>
            </div>
          </td>
          <td class="row-actions">
            <button class="chevron-btn" aria-label="Expand">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
            <button class="row-menu" aria-label="Options">⋮</button>
          </td>
        </tr>
      `).join("")
    : `<tr><td colspan="7" style="text-align:center;color:var(--text-3);padding:2rem">No invoices found</td></tr>`;

  overdueAmount.textContent = calculateTotals(invoices, "overdue");
  draftedTotals.textContent = calculateTotals(invoices, "draft");
  unpaidTotals.textContent  = calculateTotals(invoices, "unpaid");

  totalCount.textContent  = invoices.length;
  unpaidCount.textContent = invoices.filter(i => i.status === "unpaid").length;
  draftCount.textContent  = invoices.filter(i => i.status === "draft").length;
}

renderTable();

const detailPanel = document.getElementById("detailPanel");
const detailClose = document.getElementById("detailClose");

function openPanel(invoiceId) {
  const inv = invoices.find(invoice => invoice.id === invoiceId);
  if (!inv) return;

  document.getElementById("panel-number").textContent = "#" + inv.id;
  document.getElementById("panel-date").textContent = formatDisplay(inv.date);
  document.getElementById("panel-status").textContent = inv.status[0].toUpperCase() + inv.status.slice(1);
  document.getElementById("panel-status").className = "status " + inv.status;
  document.getElementById("panel-client").textContent = inv.customer;
  document.getElementById("panel-project").textContent = inv.project;
  document.getElementById("panel-total").textContent = "₦" + inv.total.toFixed(2);
  document.getElementById("panel-paid").textContent = "₦" + inv.paid.toFixed(2);
  document.getElementById("panel-unpaid").textContent = "₦" + inv.unpaid.toFixed(2);
  document.getElementById("panel-view-btn").href = `invoice-detail.html?id=${inv.id}`;

  detailPanel.classList.add("open");
}

window.openPanel = openPanel;

detailClose.addEventListener("click", () => {
  detailPanel.classList.remove("open");
});

tableBody.addEventListener("click", (e) => {
  const btn = e.target.closest(".chevron-btn");
  if (!btn) return;

  const row = btn.closest("tr");
  const id = Number(row.dataset.id);
  openPanel(id);
});

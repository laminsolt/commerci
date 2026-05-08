// ── Theme toggle ─────────────────────────────────────────────
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
const invoices = [
  { id: 53, customer: "Lamidi Airways", project: "Brand Design",    date: "2023-05-23", status: "overdue", total: 1698.34, paid: 0,       unpaid: 1698.34 },
  { id: 54, customer: "Just Toyeeb",    project: "Web Development", date: "2023-12-30", status: "paid",    total: 578.38,  paid: 578.38,  unpaid: 0       },
  { id: 55, customer: "Draco Malfoy",   project: "Logo Design",     date: "2026-03-09", status: "unpaid",  total: 878,     paid: 0,       unpaid: 878     },
  { id: 56, customer: "Lamin Solt",     project: "App Design",      date: "2023-07-24", status: "draft",   total: 1360.43, paid: 0,       unpaid: 1360.43 },
  { id: 57, customer: "Alade Godxila",  project: "SEO Audit",       date: "2023-03-22", status: "overdue", total: 1280,    paid: 0,       unpaid: 1280    },
  { id: 58, customer: "Godfather",      project: "Consulting",      date: "2023-05-23", status: "paid",    total: 1370,    paid: 1370,    unpaid: 0       },
];

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
        <tr>
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

const sidebarHTML = `
  <aside class="sidebar">
      <div class="sidebar-header">
        <div class="company-info">
          <div class="company-logo">F</div>
          <div>
            <p class="company-name">FLARES INC</p>
            <p class="company-sub">
              <span class="online-dot"></span>
              Al-Amin Ayomide Sol...
            </p>
          </div>
        </div>
        <button class="sidebar-collapse" id="sidebarCollapse">&lsaquo;</button>
      </div>

      <nav class="sidebar-nav">
        <div class="nav-group">
          <a href="#" class="nav-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
            <span>Dashboard</span>
            <svg class="nav-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>
          <div class="nav-submenu">
            <a href="dashboard.html" class="nav-subitem">Private Dashboard</a>
            <a href="advanced-dashboard.html" class="nav-subitem">Advanced Dashboard</a>
          </div>
        </div>

        <a href="#" class="nav-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
          <span>My Calendar</span>
        </a>

        <div class="nav-group">
          <a href="#" class="nav-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <span>Leads</span>
            <svg class="nav-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>
          <div class="nav-submenu">
            <a href="#" class="nav-subitem">Lead Contact</a>
            <a href="#" class="nav-subitem">Deals</a>
          </div>
        </div>

        <a href="clients.html" class="nav-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
          <span>Clients</span>
        </a>

        <div class="nav-group">
          <a href="#" class="nav-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            <span>HR</span>
            <svg class="nav-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>
          <div class="nav-submenu">
            <a href="#" class="nav-subitem">Employees</a>
            <a href="#" class="nav-subitem">Leaves</a>
            <a href="#" class="nav-subitem">Shift Roster</a>
            <a href="#" class="nav-subitem">Attendance</a>
            <a href="#" class="nav-subitem">Holiday</a>
            <a href="#" class="nav-subitem">Designation</a>
            <a href="#" class="nav-subitem">Department</a>
            <a href="#" class="nav-subitem">Appreciation</a>
          </div>
        </div>
        
        <div class="nav-group">
          <a href="#" class="nav-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            <span>Work</span>
            <svg class="nav-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>
          <div class="nav-submenu">
            <a href="#" class="nav-subitem">Contracts</a>
            <a href="#" class="nav-subitem">Projects</a>
            <a href="#" class="nav-subitem">Tasks</a>
            <a href="#" class="nav-subitem">TimeSheet</a>
          </div>
        </div>

        <div class="nav-group">
          <a href="#" class="nav-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <span>Finance</span>
            <svg class="nav-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>
          <div class="nav-submenu">
            <a href="#" class="nav-subitem">Proposal</a>
            <a href="#" class="nav-subitem">Estimates</a>
            <a href="invoice.html" class="nav-subitem">Invoices</a>
            <a href="#" class="nav-subitem">Credit Note</a>
            <a href="#" class="nav-subitem">Expenses</a>
          </div>
        </div>

        <a href="#" class="nav-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <span>Products</span>
        </a>
        <a href="#" class="nav-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/></svg>
          <span>Orders</span>
        </a>
        <a href="#" class="nav-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span>Tickets</span>
        </a>
        <a href="#" class="nav-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>
          <span>Events</span>
        </a>
        <a href="#" class="nav-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span>Messages</span>
        </a>
        <a href="#" class="nav-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
          <span>Notice Board</span>
        </a>
        <a href="#" class="nav-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          <span>Knowledge Base</span>
        </a>
        
        <div class="nav-group">
          <a href="#" class="nav-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
            <span>Reports</span>
            <svg class="nav-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>
          <div class="nav-submenu">
            <a href="#" class="nav-subitem">Task Reports</a>
            <a href="#" class="nav-subitem">Time Log Reports</a>
            <a href="#" class="nav-subitem">Weekly Timesheet</a>
            <a href="#" class="nav-subitem">Income VS Expenses</a>
            <a href="#" class="nav-subitem">Leave Report</a>
            <a href="#" class="nav-subitem">Attendance Report</a>
            <a href="#" class="nav-subitem">Expense Report</a>
            <a href="#" class="nav-subitem">Deal Report</a>
            <a href="#" class="nav-subitem">Sales Report</a>
          </div>
        </div>

        <a href="" class="nav-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          <span>Settings</span>
        </a>
      </nav>

      <button class="sidebar-footer-btn" id="sidebarFooterCollapse" aria-label="Collapse sidebar">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
          <polyline points="16 17 21 12 16 7"/>
          <line x1="21" y1="12" x2="9" y2="12"/>
        </svg>
      </button>
    </aside>
`;

document.getElementById("sidebar-mount").innerHTML = sidebarHTML;

const navGroups = document.querySelectorAll(".nav-group");
const allSubItems = document.querySelectorAll(".nav-subitem");

function clearActiveNavigation() {
  document
    .querySelectorAll(".nav-item--active, .nav-subitem--active")
    .forEach((item) => item.classList.remove("nav-item--active", "nav-subitem--active"));
}

function setActiveNavigation() {
  const currentPath = window.location.pathname;

  document.querySelectorAll(".nav-item, .nav-subitem").forEach((item) => {
    const href = item.getAttribute("href");
    if (!href || href === "#") return;

    const itemPath = new URL(href, window.location.href).pathname;
    if (itemPath !== currentPath) return;

    item.classList.add(item.classList.contains("nav-subitem") ? "nav-subitem--active" : "nav-item--active");
    item.closest(".nav-group")?.querySelector(":scope > .nav-item")?.classList.add("nav-item--active");
  });
}

setActiveNavigation();

navGroups.forEach((group) => {
  let header = group.querySelector(".nav-item");

  header.addEventListener("click", () => {
    const isOpen = group.classList.contains("open");

    navGroups.forEach((group) => group.classList.remove("open"));

    if (!isOpen) {
      group.classList.add("open");
    }
  });

  let navSubItem = group.querySelectorAll(".nav-subitem");
  navSubItem.forEach((navSubItem) => {
    navSubItem.addEventListener("click", (e) => {
      clearActiveNavigation();

      header.classList.add("nav-item--active");
      navSubItem.classList.add("nav-subitem--active");
    });
  });
});

function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const sidebarMount = document.getElementById("sidebar-mount");
  const isCollapsed = sidebar.classList.toggle("collapsed");

  if (sidebarMount) {
    const sidebarWidth = isCollapsed ? "64px" : "220px";
    sidebarMount.style.flexBasis = sidebarWidth;
    sidebarMount.style.width = sidebarWidth;
  }
}

document.getElementById("sidebarCollapse")?.addEventListener("click", toggleSidebar);
document.getElementById("sidebarFooterCollapse")?.addEventListener("click", toggleSidebar);

document.querySelector(".sidebar")?.addEventListener("click", (event) => {
  if (event.target.closest(".sidebar-nav, button, a")) return;
  toggleSidebar();
});

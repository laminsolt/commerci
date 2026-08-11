import { invoices } from "./data.js";

const params = new URLSearchParams(window.location.search);
const invoiceId = params.get("id");

const selectedInvoice = invoices.find(function (invoice) {
  return invoice.id === invoiceId;
});

if (!selectedInvoice) {
  document.querySelector(".invoice-doc").innerHTML = "Invoice not found";
}

function formatMoney(amount) {
  return "\u20a6" + amount.toFixed(2);
}

function formatDisplay(dateStr) {
  if (!dateStr) return "-";
  const [y, m, d] = dateStr.split("-");
  return `${d}-${m}-${y}`;
}

function renderInvoice() {
  document.getElementById("doc-number").textContent = selectedInvoice.number;
  document.getElementById("doc-project").textContent =
    selectedInvoice.items[0]?.description ?? "-";
  document.getElementById("doc-issued").textContent = formatDisplay(
    selectedInvoice.issuedDate,
  );
  document.getElementById("doc-status").textContent = selectedInvoice.status;
  document.getElementById("doc-client").textContent = selectedInvoice.customer;
  document.getElementById("doc-total").textContent = formatMoney(
    selectedInvoice.total,
  );
  document.getElementById("doc-paid").textContent = formatMoney(
    selectedInvoice.amountPaid,
  );
  document.getElementById("doc-unpaid").textContent = formatMoney(
    selectedInvoice.balance,
  );

  const itemsTableBody = document.getElementById("doc-items-body");

  itemsTableBody.innerHTML = "";

  selectedInvoice.items.forEach(function (item) {
    const lineTotal = item.total ?? item.quantity * item.unitPrice;

    itemsTableBody.innerHTML += `
      <tr>
        <td>${item.description}</td>
        <td>${item.quantity}</td>
        <td>${formatMoney(item.unitPrice)}</td>
        <td>${formatMoney(lineTotal)}</td>
      </tr>
    `;
  });
}

if (selectedInvoice) {
  renderInvoice();
}

document.getElementById("markPaidBtn").addEventListener("click", () => {
  if (!selectedInvoice) return;

  selectedInvoice.status = "paid";
  selectedInvoice.amountPaid = selectedInvoice.total;
  selectedInvoice.balance = 0;

  renderInvoice();
});

const printBtn = document.getElementById("printBtn");

printBtn.addEventListener("click", () => {
  window.print();
});

import { invoices } from "./invoices-data.js";

const params = new URLSearchParams(window.location.search);
const invoiceId = Number(params.get("id"));

const selectedInvoice = invoices.find(function(invoice) {
  return invoice.id === invoiceId;
});

if (!selectedInvoice) {
  document.querySelector(".invoice-doc").innerHTML = "Invoice not found";
}

function formatMoney(amount) {
  return "₦" + amount.toFixed(2);
}

function formatDisplay(dateStr) {
  const [y, m, d] = dateStr.split("-");
  return `${d}-${m}-${y}`;
}

function renderInvoice() {
  document.getElementById("doc-number").textContent = `Invoice #${selectedInvoice.id}`;
  document.getElementById("doc-project").textContent = selectedInvoice.project;
  document.getElementById("doc-issued").textContent = formatDisplay(selectedInvoice.date);
  document.getElementById("doc-status").textContent = selectedInvoice.status;
  document.getElementById("doc-client").textContent = selectedInvoice.customer;
  document.getElementById("doc-total").textContent = formatMoney(selectedInvoice.total);
  document.getElementById("doc-paid").textContent = formatMoney(selectedInvoice.paid);
  document.getElementById("doc-unpaid").textContent = formatMoney(selectedInvoice.unpaid);

  const itemsTableBody = document.getElementById("doc-items-body");

  itemsTableBody.innerHTML = "";

  selectedInvoice.items.forEach(function(item) {
    const lineTotal = item.qty * item.price;

    itemsTableBody.innerHTML += `
      <tr>
        <td>${item.description}</td>
        <td>${item.qty}</td>
        <td>${formatMoney(item.price)}</td>
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
  selectedInvoice.paid = selectedInvoice.total;
  selectedInvoice.unpaid = 0;

  renderInvoice();
});

const printBtn = document.getElementById("printBtn")

printBtn.addEventListener('click', ()=> {
    window.print();
});
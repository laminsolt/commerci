const accordions = document.querySelectorAll(".accordion");

accordions.forEach(accordion => {
  const header = accordion.querySelector(".accordion-header");
  
  header.addEventListener("click", () => {
    accordion.classList.toggle("open");
  });
});

const name = document.getElementById("myName");
const address = document.getElementById("myAddress");
const abn = document.getElementById("myABN");
const email = document.getElementById("myEmail");
const phone = document.getElementById("myPhone");
const website = document.getElementById("myWebsite");

const prevName = document.getElementById("prev-myName");
const prevAddress = document.getElementById("prev-myAddress");
const prevABN = document.getElementById("prev-myABN");
const prevEmail = document.getElementById("prev-myEmail");
const prevPhone = document.getElementById("prev-myPhone");
const prevWebsite = document.getElementById("prev-myWebsite");

name.addEventListener("input", () => { prevName.textContent = name.value; });
address.addEventListener("input", () => { prevAddress.textContent = address.value; });
abn.addEventListener("input", () => { prevABN.textContent = abn.value; });
website.addEventListener("input", () => { prevWebsite.textContent = website.value; });
email.addEventListener("input", () => { prevEmail.textContent = email.value; });
phone.addEventListener("input", () => { prevPhone.textContent = phone.value; });
website.addEventListener("input", () => { prevWebsite.textContent = website.value; });

const clientName = document.getElementById("clientName");
const clientAddress = document.getElementById("clientAddress");
const clientEmail = document.getElementById("clientEmail");
const clientPhone = document.getElementById("clientPhone");
const clientWebsite = document.getElementById("clientWebsite");

const prevClientName = document.getElementById("prev-clientName");
const prevClientAddress = document.getElementById("prev-clientAddress");
const prevClientEmail = document.getElementById("prev-clientEmail");
const prevClientPhone = document.getElementById("prev-clientPhone");
const prevClientWebsite = document.getElementById("prev-clientWebsite");

clientName.addEventListener("input", () => { prevClientName.textContent = clientName.value; });
clientAddress.addEventListener("input", () => { prevClientAddress.textContent = clientAddress.value; });
clientEmail.addEventListener("input", () => { prevClientEmail.textContent = clientEmail.value; });
clientPhone.addEventListener("input", () => { prevClientPhone.textContent = clientPhone.value; });
clientWebsite.addEventListener("input", () => { prevClientWebsite.textContent = clientWebsite.value; });

const invoiceNumber = document.getElementById("invoiceNumber");
const projectName = document.getElementById("projectName");
const issuedDate = document.getElementById("issuedDate");
const dueDate = document.getElementById("dueDate");

const prevInvoiceNumber = document.getElementById("prev-invoiceNumber");
const prevProjectName = document.getElementById("prev-projectName");
const prevIssuedDate = document.getElementById("prev-issuedDate");
const prevDueDate = document.getElementById("prev-dueDate");

invoiceNumber.addEventListener("input", () => { prevInvoiceNumber.textContent = invoiceNumber.value; });
projectName.addEventListener("input", () => { prevProjectName.textContent = projectName.value; });
issuedDate.addEventListener("input", () => { prevIssuedDate.textContent = issuedDate.value; });
dueDate.addEventListener("input", () => { prevDueDate.textContent = dueDate.value; });

let items = [];

const addItemBtn = document.getElementById("addItemBtn");

addItemBtn.addEventListener("click", () => {
  items.push({ description: "", quantity: 0, price: 0 });
  renderItems();
});

function renderItems() {
  const container = document.getElementById("lineItems");
  
  container.innerHTML = items.map((item, index) => {
    return `
      <div class="line-item-row">
        <input type="text" data-index="${index}" data-field="description" placeholder="Description" />
        <input type="number" data-index="${index}" data-field="units" placeholder="0" />
        <input type="number" data-index="${index}" data-field="price" placeholder="0.00" />
        <input type="number" data-index="${index}" data-field="gst" placeholder="0.00" />
        <button class="remove-item-btn" data-index="${index}">&times;</button>
      </div>
    `;
  }).join("");
}

document.getElementById("lineItems").addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-item-btn")) {
    const index = e.target.dataset.index;
    items.splice(index, 1);
    renderItems();
  }
});

document.getElementById("lineItems").addEventListener("input", (e) => {
  const index = e.target.dataset.index;
  const field = e.target.dataset.field;
  
  items[index][field] = e.target.value;
  
  updatePreview();
});

function updatePreview() {
  const previewContainer = document.getElementById("prev-lineItems");

  previewContainer.innerHTML = items.map(item => {
    const rowTotal = (item.units * item.price) + parseFloat(item.gst || 0);
    return `
      <tr>
        <td>${item.description || ""}</td>
        <td>${item.units || 0}</td>
        <td>&#8358;${parseFloat(item.price || 0).toFixed(2)}</td>
        <td>&#8358;${parseFloat(item.gst || 0).toFixed(2)}</td>
        <td>&#8358;${rowTotal.toFixed(2)}</td>
      </tr>
    `;
  }).join("");

  const grandTotal = items.reduce((sum, item) => {
    return sum + (item.units * item.price) + parseFloat(item.gst || 0);
  }, 0);

  document.getElementById("prev-total").textContent = "\u20a6" + grandTotal.toFixed(2);
}

const notes = document.getElementById("invoiceNote");
const prevNote = document.getElementById("prev-note");

notes.addEventListener("input", () => { prevNote.textContent = notes.value; });

const signature = document.getElementById("signatureName");
const prevSignature = document.getElementById("prev-signatureName");

signature.addEventListener("input", () => { prevSignature.textContent = signature.value; });

const gst = document.getElementById("gstNote");
const prevGst = document.getElementById("prev-gstNote");

gst.addEventListener("input", ()=> { prevGst.textContent = gst.value; });

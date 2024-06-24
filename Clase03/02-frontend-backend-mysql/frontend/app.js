const tbody = document.querySelector("tbody");
const inputName = document.querySelector("#inputName");
const inputEmail = document.querySelector("#inputEmail");
const btnAddCustomer = document.querySelector("button");

function generateRow() {
  return document.createElement("tr");
}

function generateCell(text) {
  const cell = document.createElement("td");
  cell.textContent = text;
  return cell;
}

function showCustomers(customers) {
  tbody.innerHTML = "";
  customers.forEach((customer) => {
    const tr = generateRow();
    const tdId = generateCell(customer.id);
    const tdName = generateCell(customer.name);
    const tdEmail = generateCell(customer.email);

    tr.append(tdId);
    tr.append(tdName);
    tr.append(tdEmail);

    tbody.append(tr);
  });
}

function fetchListCustomers() {
  fetch("http://localhost:5000/select")
    .then((res) => res.json())
    .then(showCustomers);
}

function getInputValues() {
  const name = inputName.value;
  const email = inputEmail.value;

  return { name, email };
}

function clearInputs() {
  inputName.value = "";
  inputEmail.value = "";
}

function addCustomer() {
  const { name, email } = getInputValues();

  clearInputs();
  fetch("http://localhost:5000/insert", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  }).then(() => {
    fetchListCustomers();
  });
}

fetchListCustomers();

btnAddCustomer.addEventListener("click", addCustomer);

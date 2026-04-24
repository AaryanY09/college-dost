function filterTable() {
  let textInput = document.getElementById("searchText").value.toLowerCase();  //👉 Gets what user typed 👉 Converts to lowercase → avoids case issues
  let yearInput = document.getElementById("searchYear").value;

  let rows = document.querySelectorAll("tbody tr");
// 👉 Selects ALL rows from table body
// 👉 Each row = one student
  rows.forEach(row => {
    let prn = row.children[0].innerText.toLowerCase();
    let name = row.children[1].innerText.toLowerCase();
    let year = row.children[2].innerText;
    //Extract data from each row
//     children[0] → PRN column
// children[1] → Name column
// children[2] → Year column

    let matchText = prn.includes(textInput) || name.includes(textInput);   //If typed text is found in PRN OR Name → TRUE
    let matchYear = yearInput === "" || year === yearInput;
// If "All Years" selected → show everything
// Otherwise → match exact year
    if (matchText && matchYear) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

// BOTH conditions must be true:
// ✔ text matches
// ✔ year matches

// 👉 If true → show row
// 👉 If false → hide row
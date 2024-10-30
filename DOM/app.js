const select = document.querySelector('#framework');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  for (let i = 0; i < select.options.length; i++) {
    const text = select.options[i].text;
    if (text.endsWith('js')) {
      select.remove(i);
      i--;
    }
  }
});

// function addOption() {
//     var select = document.getElementById("mySelect");
    
//     // Create a new option element
//     var option = document.createElement("option");
//     option.text = "New Option";
//     option.value = "3"; // Assign a value if needed
    
//     // Add the new option to the select element
//     select.add(option);
// }

// function removeOption() {
//     var select = document.getElementById("mySelect");
    
//     // Remove the last option (index -1) from the select element
//     select.remove(select.selectedIndex);
// }

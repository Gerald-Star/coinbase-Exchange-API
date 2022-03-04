const url = "https://api.coinbase.com/v2/currencies";

//fetch data

const fetchData = () => {
  fetch(url)
    .then((response) => {
      console.log("response :>> ", response);
      return response.json();
    })
    .then((result) => {
      displayTable(result.data); //should there be data here that I need to send in the called function
        generateSelectionOptions(result.data); //calling of functions //displayTable(result.data[o])
        onDropdownChange(result.data);
        
        
        
        
        // document
        //   .getElementById("search")
        //   .addEventListener("input", () => onFilterEvent(result.data));
          // .addEventListener("input", () => onSearchChange(result.data));
    });
};


fetchData();
//diplay data

const displayTable = (data) => {
  console.log("data :>> ", data);

  const tbody = document.getElementById("table-data");

  console.log("tbody", tbody);
  tbody.innerHTML = ""; //empty string is the factor to replace the rows to show.
  data.forEach((data) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    //td1.innerHTML = data.id + " " + data.name;
    td1.innerHTML = data.id;

    td2.innerHTML = data.name;

    td3.innerHTML = data.min_size;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tbody.appendChild(tr);
  });
};

//generate select

const generateSelectionOptions = (currencies) => {
  //calling of the functions here from the top.
  //       const  StateList  =  []                   //what functions should I use here for the return
  //        members.forEach(member => {
  //          stateList.push(member.state)
  // })
  //     console.log ('stateList', stateList)    //Hoe to access the specific key I want through loop

  const min_sizes = [];
  currencies.forEach((currency) => {
    if (!min_sizes.includes(currency.min_size)) {
      min_sizes.push(currency.min_size);
    }
  });
  console.log("min_sizes :>> ", min_sizes);

    
    //Create Event Listener function
  const currencySelect = document.getElementById("currency-select");
  // currencySelect.addEventListener("change", () => onDropdownChange(currencies));
  //currencySelect.addEventListener("change", () => onFilterEvent(currencies));
  
  min_sizes.forEach((min_size) => {
    const option = document.createElement("option");
    option.value = min_size;
    option.innerHTML = min_size;

    currencySelect.appendChild(option);
  });
};
 

 
const onDropdownChange = (currencies) => {
  console.log("dropdown function", currencies)
  const minSizeSelect = document.getElementById("currency-select")
  console.log("minSizeSelect :>> ", minSizeSelect);
  minSizeSelect.addEventListener("change", () => {
    console.log('first')
    onFilter(currencies)

  } )

  // const filteredCurrencies = currencies.filter((currency) => {
  //   return currency.min_size == minSizeSelect || minSizeSelect == "all";
  // });

  // console.log("filteredCurrencies :>> ", filteredCurrencies);
  // displayTable(filteredCurrencies);
};

const onFilter = (currencies) =>  {
  console.log(currencies)
const selectedValue = document.getElementById("currency-select").value;
console.log('selectedValue', selectedValue)

console.log(currencies)


//filter function
const filterValue = currencies.filter((currency) =>{

  return (
    selectedValue === "All Min Sizes" || selectedValue === currency.min_size
  
    )

})
console.log('filterValue', filterValue)

displayTable(filterValue)
}


// console.log('filterValue XXXXXXX:>> ' , filterValue);

  //what is the difference between this and other clo.









   //retrieve value of search input.

const onSearchChange = (currencies) => {
  const currencySearch = document.getElementById("search").value;
    
  console.log('currencySearch :>> ', currencySearch);

  const filteredCurrencies = currencies.filter(currency => {
     return currency.id == currencySearch.toUpperCase() ||
     currency.name.toLowerCase().includes(currencySearch.toLowerCase())

  })


//   const onFilterEvent = (currencies) => {
//     const filteredCurrencies = currencies.filter(currency => {

//       return currency.id && currency.name
//     })

//   console.log('filteredCurrencies :>> ', filteredCurrencies);
//   displayTable(filteredCurrencies)
// };
  

    
//     // retrieve value of search inpüt,.
//     var at = document.getElementById("email").value.indexOf("@");
// var age = document.getElementById("age").value;
// var fname = document.getElementById("fname").value;
// submitOK = "true";

        

// if (fname.length > 10) {
//   alert("The name may have no more than 10 characters");
//   submitOK = "false";
// }

// if (isNaN(age) || age < 1 || age > 100) {
//   alert("The age must be a number between 1 and 100");
//   submitOK = "false";
// }

    // filter array 

    // render filter list in table
// };
}


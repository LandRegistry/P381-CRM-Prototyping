
// The autoComplete.js Engine instance creator
const autoCompleteJS = new autoComplete({
    name: "food & drinks",
    data: {                             
        // Data src [Array, Function, Async] | (REQUIRED)
          src: async function () {
        
            // Loading placeholder text
        document.querySelector("#autoComplete").setAttribute("placeholder", "Loading...");
        
        // Fetch External Data Source
        const source = await fetch("/public/data/questions.json");
        const data = await source.json();
        
        // Post Loading placeholder text
        document.querySelector("#autoComplete").setAttribute("placeholder", autoCompleteJS.placeHolder);
        
        // Returns Fetched data
        return data; },
      key: ["words", "subject", "question"],
      results: (list) => {

        // Filter duplicates
        const filteredResults = Array.from(new Set(list.map((value) => value.match))).map((food) => {
          return list.find((value) => value.match === food);
        });
  
        return filteredResults;
      },
    },

    trigger: {
      event: ["input", "focus"],
    },

    placeHolder: "Keyword, Form, Document, Service etc...",
    searchEngine: "strict",
    highlight: true,
    threshold: 2,
    maxResults: 10,

    resultItem: {
      content: (data, element) => {
        // Prepare Value's Key
        const key = Object.keys(data.value).find((key) => data.value[key] === element.innerText);
        // Modify Results Item
        element.style = "display: flex; justify-content: space-between;";
        element.innerHTML = `<span style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
          ${element.innerHTML}</span>`;
      },
    },

    noResults: (dataFeedback, generateList) => {
      // Generate autoComplete List
      generateList(autoCompleteJS, dataFeedback, dataFeedback.results);
      // No Results List Item
      const result = document.createElement("li");
      result.setAttribute("class", "no_result");
      result.setAttribute("tabindex", "1");
      result.innerHTML = `<span style="display: flex; align-items: center; font-weight: 100; color: rgba(0,0,0,.8);">Found No Results for "${dataFeedback.query}"</span>`;
      document.querySelector(`#${autoCompleteJS.resultsList.idName}`).appendChild(result);
    },

    onSelection: (feedback) => {
      document.querySelector("#autoComplete").blur();
      // Prepare User's Selected Value
      const selection = feedback.selection.value[feedback.selection.key];
      // Render selected choice to selection div
      document.querySelector(".selection").innerHTML = selection;
      // Replace Input value with the selected value
      document.querySelector("#autoComplete").value = selection;
      // Console log autoComplete data feedback
      console.log(feedback);
    },
  });
  
  
  
  // Toggle event for search input
  // showing & hiding results list onfocus/blur
  ["focus", "blur"].forEach(function (eventType) {
    document.querySelector("#autoComplete").addEventListener(eventType, function () {
      // Hide results list & show other elements
      if (eventType === "blur") {
        action("dim");
      } else if (eventType === "focus") {
        // Show results list & hide other elements
        action("light");
      }
    });
  });
  
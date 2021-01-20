
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
      key: ["words", "question"],
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

    sort: (a, b) => {                    // Sort rendered results ascendingly | (Optional)
        if (a.match < b.match) return -1;
        if (a.match > b.match) return 1;
        return 0;
    },

    placeHolder: "Keyword, Form, Document, Service etc...",
    searchEngine: "loose",
    highlight: true,
    threshold: 2,
    maxResults: 5,

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
      result.innerHTML = `<span style="display: flex; align-items: center; font-weight: 100; color:#0b0c0c;">Found No Results for "${dataFeedback.query}"</span>`;
      document.querySelector(`#${autoCompleteJS.resultsList.idName}`).appendChild(result);
    },

    onSelection: (feedback) => {
      document.querySelector("#autoComplete").blur();
      // Prepare User's Selected Value
      const selection = feedback.selection.value[feedback.selection.key];
      // Render selected choice to selection div
    //   document.querySelector(".selection").innerHTML = selection;
      // Replace Input value with the selected value
      document.querySelector("#autoComplete").value = '';
      // Console log autoComplete data feedback
      console.log(feedback.selection.value);
      const html =`   <div id="card" class="card govuk-body">

      <div class="${feedback.selection.value.section_questionanswer}">
          <div class="govuk-heading-m cardtitles" style="margin-top:0px;">${feedback.selection.value.question}</div>
          <div class="answer"> ${feedback.selection.value.answer}</div>
      </div>
    
      <div class="${feedback.selection.value.section_downloads}">
          <div class="govuk-heading-m cardsubtitles">Documents</div>
          <div class="answer">${feedback.selection.value.text_downloads}</div>
      </div>  
    
      <div class="${feedback.selection.value.section_feesandaddress}">
          <div class="govuk-heading-m cardsubtitles">Fee and address</div>
          <div class="answer"> ${feedback.selection.value.text_feesandaddress}</div>
      </div>  
      
      <div class="${feedback.selection.value.section_moreinformation}">
          <div class="govuk-heading-m cardsubtitles">Further information</div>
          <div class="answer"> ${feedback.selection.value.text_moreinformation}</div>
      </div>   
    
    </div>
    `;
    document.querySelector(".selection").innerHTML = html;
    },

  });
  
  



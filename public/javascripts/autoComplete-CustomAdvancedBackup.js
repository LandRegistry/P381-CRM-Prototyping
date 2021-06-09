
// The autoComplete.js Engine instance creator
const autoCompleteJS = new autoComplete({
    name: "food & drinks",
    data: {                             
        // Data src [Array, Function, Async] | (REQUIRED)
          src: async function () {
        
            // Loading placeholder text
        document.querySelector("#autoComplete").setAttribute("placeholder", "Loading...");
        
        // Fetch External Data Source
        const source = await fetch("/public/data/questionsAdvanced.json");
        const data = await source.json();
        
        // Post Loading placeholder text
        document.querySelector("#autoComplete").setAttribute("placeholder", autoCompleteJS.placeHolder);
        
        // Returns Fetched data
        return data; },
      key: ["words","question"],
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
  
    query: {                             // Query Interceptor               | (Optional)
      manipulate: (query) => {
        return query.replace("postage", "postcode");
      }
  },
  
    sort: (a, b) => {                    // Sort rendered results ascendingly | (Optional)
        if (a.match < b.match) return -1;
        if (a.match > b.match) return 1;
        return 0;
    },
  
    placeHolder: "Keywords, Phrases, Forms, Documents, Service etc...",
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
      result.setAttribute("class", "no_result govuk-error-message");
      result.setAttribute("tabindex", "1");
      result.innerHTML = `<span style="display: flex; align-items: center;margin-bottom:0px;">No results found for "${dataFeedback.query}"</span>`;
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
  
      <div class="${feedback.selection.value.tag_definition}"  style="padding-top:0px !Important; border-top:0px !Important;padding-bottom:10px;">
          <span class="definitionTag">Definition</span>
      </div>
  
      <div class="${feedback.selection.value.section_questionanswer}" style="padding-top:0px !Important; border-top:0px !Important;">
          <div class="govuk-heading-m cardtitles" style="margin-top:0px;">${feedback.selection.value.question}</div>
          <div class="answer"> ${feedback.selection.value.answer}</div>
      </div>
    
      <div class="${feedback.selection.value.section_downloads}">
          <div class="govuk-heading-m cardsubtitlesMedium">Documents</div>
          <div class="answer">${feedback.selection.value.text_downloads}</div>
      </div>  
    
      <div class="${feedback.selection.value.section_informationOne}">
          <div class="govuk-heading-m cardsubtitlesMedium">${feedback.selection.value.title_informationOne}</div>
          <div class="answer"> ${feedback.selection.value.text_informationOne}</div>
      </div>  
  
      <div class="${feedback.selection.value.section_informationTwo}">
        <div class="govuk-heading-m cardsubtitlesMedium">${feedback.selection.value.title_informationTwo}</div>
        <div class="answer"> ${feedback.selection.value.text_informationTwo}</div>
      </div>  
  
      <div class="${feedback.selection.value.section_informationThree}">
        <div class="govuk-heading-m cardsubtitlesMedium">${feedback.selection.value.title_informationThree}</div>
        <div class="answer"> ${feedback.selection.value.text_informationThree}</div>
      </div>  
  
      </div>
  
      <div class="card2 govuk-body">
  
      <div class="as">
  
        <div id="helpfulQuestion">
            <div class="how-improve" style="display: inline-block;padding: 8px 20px 8px 0px;">Was this helpful?</div>
            <div class="button-group">
              <button style="min-width:100px;display: inline-block;position: relative;" class="govuk-button govuk-button--secondary" value="Show yesDiv" type="button" onclick="yesDiv()">Yes</button>
              <button style="min-width:100px;display: inline-block;position: relative;margin-left: 5px;" class="govuk-button govuk-button--secondary" value="Show noDiv" type="button" onclick="noDiv()">No</button>
            </div>
        </div>
  
        <div id="yesAnswer" style="display:none;">
            <div class="how-improve">Thanks for your feedback!</div>
        </div>
  
        <div id="noAnswer" style="display:none;">
            <div class="how-improve">How can we improve it?</div>
            <form data-stats-ve="20" style="margin-bottom:0px;">
              <div class="field">
                <textarea aria-label="How can we improve it?" name="article_feedback_comment" class="govuk-textarea" rows="5"></textarea>
              </div>
              <button class="submit-button govuk-button" type="button" value="Show submitFeedback" onclick="submitFeedback()">Submit<div class="submit-button-target"></div></button>
            </form>
        </div>
  
      </div>
  
  
    </div> 
       
    </div>
  
    `;
    document.querySelector(".selection").innerHTML = html;
    },
  
  });
  
  
  
  
  
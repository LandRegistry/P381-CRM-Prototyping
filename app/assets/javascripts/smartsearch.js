const countries = [
    {
        question: 'Have you viewed the register?',
        supportingInformation: 'Supporting information 1'
    },

    {
        question: 'Have you been worried about going to a GP or A&E in case you catch the coronavirus?',
        supportingInformation: 'Supporting information 2'
      },

    {
      question: 'Have you had your vaccination?',
      supportingInformation: 'Supporting information 3'
    },

    {
        question: 'Have you been to Armenia',
        supportingInformation: 'Supporting information 4'
    }

  ];
  
  const searchInput = document.querySelector('.search-input');
  const suggestionsPanel = document.querySelector('.suggestions');
  
  searchInput.addEventListener('keyup', function() {
    const input = searchInput.value;
    suggestionsPanel.innerHTML = '';
    const suggestions = countries.filter(function(country) {
      return country.question.toLowerCase().startsWith(input);
    });
    suggestions.forEach(function(suggested) {
      const div = document.createElement('div');
      div.innerHTML = suggested.question;
      suggestionsPanel.appendChild(div);
    });
    if (input === '') {
      suggestionsPanel.innerHTML = '';  
    }
  })
  
  
  
  
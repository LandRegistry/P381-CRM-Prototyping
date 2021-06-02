const express = require('express')
const router = express.Router()


// ContactformQA radio buttons for public or business
router.post('/UserResearch/ContactformQA/public-or-business-choice', function(req, res) {

    const introductionChoice = req.session.data['public-business']

    switch (introductionChoice) {
        case 'public-customer':
            res.redirect('/UserResearch/ContactformQA/Public/index');
            break;

        case 'business-customer':
            res.redirect('/UserResearch/ContactformQA/Business/index');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons on first public start page
router.post('/UserResearch/ContactformQA/Public/public-start-choice', function(req, res) {

    const publicChoice = req.session.data['public-start']

    switch (publicChoice) {
        case 'application-in-progress':
            res.redirect('/UserResearch/ContactformQA/Public/option1');
            break;

        case 'query-about-letter':
            res.redirect('/UserResearch/ContactformQA/Public/option2');
            break;

        case 'application-help':
            res.redirect('/UserResearch/ContactformQA/Public/option3');
            break;

        case 'information-about-land':
            res.redirect('/UserResearch/ContactformQA/Public/option4');
            break;

        case 'help-with-find-a-property':
            res.redirect('/UserResearch/ContactformQA/Public/option5');
            break;

        case 'help-with-search-land':
            res.redirect('/UserResearch/ContactformQA/Public/option6');
            break;

        case 'local-office-appointment':
            res.redirect('/UserResearch/ContactformQA/Public/option7');
            break;

        case 'help-with-digital-mortgage':
            res.redirect('/UserResearch/ContactformQA/Public/form4');
            break;

        case 'help-with-property-alert':
            res.redirect('/UserResearch/ContactformQA/Public/form4');
            break;

        case 'bankruptcy':
            res.redirect('/UserResearch/ContactformQA/Public/form4');
            break;

        case 'report-registration-fraud':
            res.redirect('/UserResearch/ContactformQA/Public/option11');
            break;

        case 'price-paid-information':
            res.redirect('/UserResearch/ContactformQA/Public/option12');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons Public/option1 "Your enquiry relates to an application in progress or completed"
router.post('/UserResearch/ContactformQA/Public/public-option1-choice', function(req, res) {

    const publicOption1Choice = req.session.data['public-option1']

    switch (publicOption1Choice) {
        case 'application-to-update':
            res.redirect('/UserResearch/ContactformQA/Public/option1-option1');
            break;

        case 'application-new-lease':
            res.redirect('/UserResearch/ContactformQA/Public/option1-option2');
            break;

        case 'application-transfer-part':
            res.redirect('/UserResearch/ContactformQA/Public/option1-option3');
            break;

        case 'application-first-registration':
            res.redirect('/UserResearch/ContactformQA/Public/option1-option4');
            break;

        case 'application-official-search':
            res.redirect('/UserResearch/ContactformQA/Public/option1-option5');
            break;

        case 'application-official-copies':
            res.redirect('/UserResearch/ContactformQA/Public/option1-option6');
            break;

        case 'application-official-copies-document':
            res.redirect('/UserResearch/ContactformQA/Public/option1-option7');
            break;

        case 'application-search-index-map':
            res.redirect('/UserResearch/ContactformQA/Public/option1-option8');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons Public/option1-option1 "Register change or create enquiry"
router.post('/UserResearch/ContactformQA/Public/public-option1-option1-choice', function(req, res) {

    const publicOption1Option1Choice = req.session.data['public-option1-option1']

    switch (publicOption1Option1Choice) {
        case 'whats-happening':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'need-more-time':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'expedite-my-application':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'cancel-my-application':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'i-have-a-question':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'i-have-responded':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'warning-of-cancellation':
            res.redirect('/UserResearch/ContactformQA/Public/option1-option1-reqnotreceived');
            break;

        case 'question-on-a-notice':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'incorrect-application':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'or-something-else':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons Public/option1-option2 "Register change or create enquiry"
router.post('/UserResearch/ContactformQA/Public/public-option1-option2-choice', function(req, res) {

    const publicOption1Option2Choice = req.session.data['public-option1-option2']

    switch (publicOption1Option2Choice) {
        case 'whats-happening':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'need-more-time':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'expedite-my-application':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'cancel-my-application':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'i-have-a-question':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'i-have-responded':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'warning-of-cancellation':
            res.redirect('/UserResearch/ContactformQA/Public/option1-option1-reqnotreceived');
            break;

        case 'question-on-a-notice':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'incorrect-application':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'or-something-else':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons Public/option1-option3 "Register change or create enquiry"
router.post('/UserResearch/ContactformQA/Public/public-option1-option3-choice', function(req, res) {

    const publicOption1Option3Choice = req.session.data['public-option1-option3']

    switch (publicOption1Option3Choice) {
        case 'whats-happening':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'need-more-time':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'expedite-my-application':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'cancel-my-application':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'i-have-a-question':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'i-have-responded':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'warning-of-cancellation':
            res.redirect('/UserResearch/ContactformQA/Public/option1-option1-reqnotreceived');
            break;

        case 'question-on-a-notice':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'incorrect-application':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'or-something-else':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons Public/option1-option4 "Register change or create enquiry"
router.post('/UserResearch/ContactformQA/Public/public-option1-option4-choice', function(req, res) {

    const publicOption1Option4Choice = req.session.data['public-option1-option4']

    switch (publicOption1Option4Choice) {
        case 'whats-happening':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'need-more-time':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'expedite-my-application':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'cancel-my-application':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'i-have-a-question':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'i-have-responded':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'warning-of-cancellation':
            res.redirect('/UserResearch/ContactformQA/Public/option1-option1-reqnotreceived');
            break;

        case 'question-on-a-notice':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'incorrect-application':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'or-something-else':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons Public/option1-option5 "Official Searches enquiry"
router.post('/UserResearch/ContactformQA/Public/public-option1-option5-choice', function(req, res) {

    const publicOption1Option5Choice = req.session.data['public-option1-option5']

    switch (publicOption1Option5Choice) {
        case 'whats-happening':
            res.redirect('/UserResearch/ContactformQA/Public/option1-option5-alloptions');
            break;

        case 'extend-priority-period':
            res.redirect('/UserResearch/ContactformQA/Public/option1-option5-alloptions');
            break;

        case 'withdraw-application':
            res.redirect('/UserResearch/ContactformQA/Public/option1-option5-alloptions');
            break;

        case 'incorrect-application':
            res.redirect('/UserResearch/ContactformQA/Public/option1-option5-alloptions');
            break;

        case 'i-have-a-question':
            res.redirect('/UserResearch/ContactformQA/Public/option1-option5-alloptions');
            break;

        case 'something-else':
            res.redirect('/UserResearch/ContactformQA/Public/option1-option5-alloptions');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons Public/option1-option5-alloptions "Find a Property - information held"
router.post('/UserResearch/ContactformQA/Public/public-option1-option5-alloptions-choice', function(req, res) {

    const publicOption1Option5alloptionsChoice = req.session.data['public-option1-option5-alloptions']

    switch (publicOption1Option5alloptionsChoice) {
        case 'whats-information':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'how-long-does-it-take':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'what-property-details':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'property-search-reveal':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'can-i-look-at':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'urgent-information':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'does-the-information-include':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons Public/option1-option6 "Official Copies enquiry"
router.post('/UserResearch/ContactformQA/Public/public-option1-option6-choice', function(req, res) {

    const publicOption1Option6Choice = req.session.data['public-option1-option6']

    switch (publicOption1Option6Choice) {
        case 'whats-happening':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'cancel-application':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'cheque-returned':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'wrong-document':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'document-not-received':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'cannot-open-print':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'require-single-plan':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'something-else-relating':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})



// Radio buttons Public/option1-option7 "Official Copies enquiry"
router.post('/UserResearch/ContactformQA/Public/public-option1-option7-choice', function(req, res) {

    const publicOption1Option7Choice = req.session.data['public-option1-option7']

    switch (publicOption1Option7Choice) {
        case 'whats-happening':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'cancel-application':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'cheque-returned':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'wrong-document':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'document-not-received':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'cannot-open-print':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'page-missing':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'black-and-white':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        case 'something-else-relating':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})



// Radio buttons Public/option1-option8 "Search of the Index Map enquiry"
router.post('/UserResearch/ContactformQA/Public/public-option1-option8-choice', function(req, res) {

    const publicOption1Option8Choice = req.session.data['public-option1-option8']

    switch (publicOption1Option8Choice) {
        case 'whats-happening':
            res.redirect('/UserResearch/ContactformQA/Public/form3');
            break;

        case 'cancel-application':
            res.redirect('/UserResearch/ContactformQA/Public/form4');
            break;

        case 'misplaced-result':
            res.redirect('/UserResearch/ContactformQA/Public/form3');
            break;

        case 'incorrect-application':
            res.redirect('/UserResearch/ContactformQA/Public/form4');
            break;

        case 'something-else':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})



// Radio buttons Public/option1-option1-reqnotreceived "Requisition not received"
router.post('/UserResearch/ContactformQA/Public/public-option1-option1-reqnotreceived-choice', function(req, res) {

    const publicOption1Option1ReqNotChoice = req.session.data['public-option1-option1-reqnotreceived']

    switch (publicOption1Option1ReqNotChoice) {
        case 'i-have-access':
            res.redirect('/UserResearch/ContactformQA/Public/form');
            break;

        case 'i-do-not-have-access':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})



// Radio buttons Public/option2 "Your enquiry is about a letter received from HM Land Registry"
router.post('/UserResearch/ContactformQA/Public/public-option2-choice', function(req, res) {

    const publicOption2Choice = req.session.data['public-option2']

    switch (publicOption2Choice) {
        case 'more-time-requisition':
            res.redirect('/UserResearch/ContactformQA/Public/form4');
            break;

        case 'more-time-notice':
            res.redirect('/UserResearch/ContactformQA/Public/form4');
            break;

        case 'no-document':
            res.redirect('/UserResearch/ContactformQA/Public/form4');
            break;

        case 'unclear-letter':
            res.redirect('/UserResearch/ContactformQA/Public/option2-option4');
            break;

        case 'object-to-application':
            res.redirect('/UserResearch/ContactformQA/Public/form3');
            break;

        case 'unbranded-envelope':
            res.redirect('/UserResearch/ContactformQA/Public/form3');
            break;

            default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons Public/option2-option4 "What does the letter header refer to?"
router.post('/UserResearch/ContactformQA/Public/public-option2-option4-choice', function(req, res) {

    const publicOption2option4Choice = req.session.data['public-option2-option4']

    switch (publicOption2option4Choice) {
        case 'a-notice':
            res.redirect('/UserResearch/ContactformQA/Public/option2-option4-option1');
            break;

        case 'requisition-letter':
            res.redirect('/UserResearch/ContactformQA/Public/form4');
            break;

        case 'bankruptcy-letter':
            res.redirect('/UserResearch/ContactformQA/Public/form4');
            break;

        case 'something-else':
            res.redirect('/UserResearch/ContactformQA/Public/form4');
            break;

            default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons Public/option2-option4-option1 "Does the notice give a deadline to reply?"
router.post('/UserResearch/ContactformQA/Public/public-option2-option4-option1-choice', function(req, res) {

    const publicOption2option4option1Choice = req.session.data['public-option2-option4-option1']

    switch (publicOption2option4option1Choice) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/form4');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/form4');
            break;

            default:
            //This is a catch all for none of the above
            break;
    }
})



// Radio buttons Public/option3 "What do you need help with?"
router.post('/UserResearch/ContactformQA/Public/public-option3-choice', function(req, res) {

    const publicOption3Choice = req.session.data['public-option3']

    switch (publicOption3Choice) {
        case 'update-contact-address':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option1');
            break;

        case 'change-name':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option2');
            break;

        case 'someone-has-died':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3');
            break;

        case 'updating-ownership':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option4');
            break;

        case 'registering-property':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option5');
            break;

        case 'interest-in-property':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option6');
            break;

        case 'registration-fees':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option7');
            break;

        case 'stamp-duty':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option8');
            break;

        case 'something-else':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option9');
            break;

            default:
            //This is a catch all for none of the above
            break;
    }
})



// Radio buttons Public/option3-option3-option1 "Bereavement guide - Registered with HMLR?"
router.post('/UserResearch/ContactformQA/Public/public-option3-option3-option1-choice', function(req, res) {

    const publicOption3Option3Option1Choice = req.session.data['public-option3-option3-option1']

    switch (publicOption3Option3Option1Choice) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons Public/option3-option3-option1-option1 "Bereavement guide - Transfer / assent or sale"
router.post('/UserResearch/ContactformQA/Public/public-option3-option3-option1-option1-choice', function(req, res) {

    const publicOption3Option3Option1Option1Choice = req.session.data['public-option3-option3-option1-option1']

    switch (publicOption3Option3Option1Option1Choice) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons Public/option3-option3-option1-option1-option1 "Bereavement guide - Joint ownership"
router.post('/UserResearch/ContactformQA/Public/public-option3-option3-option1-option1-option1-choice', function(req, res) {

    const publicOption3Option3Option1Option1Option1Choice = req.session.data['public-option3-option3-option1-option1-option1']

    switch (publicOption3Option3Option1Option1Option1Choice) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option1-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option1-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons Public/option3-option3-option1-option1-option1-option1 "Bereavement guide - Transfer to beneficiary"
router.post('/UserResearch/ContactformQA/Public/public-option3-option3-option1-option1-option1-option1-choice', function(req, res) {

    const publicOption3Option3Option1Option1Option1Option1Choice = req.session.data['public-option3-option3-option1-option1-option1-option1']

    switch (publicOption3Option3Option1Option1Option1Option1Choice) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option1-option1-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option1-option1-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons Public/option3-option3-option1-option1-option1-option1-option1 "Bereavement information"
router.post('/UserResearch/ContactformQA/Public/public-option3-option3-option1-option1-option1-option1-option1-choice', function(req, res) {

    const publicOption3Option3Option1Option1Option1Option1Option1Choice = req.session.data['public-option3-option3-option1-option1-option1-option1-option1']

    switch (publicOption3Option3Option1Option1Option1Option1Option1Choice) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/form5');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons Public/option3-option3-option1-option1-option1-option1 "Bereavement guide - Transfer to beneficiary"
router.post('/UserResearch/ContactformQA/Public/public-option3-option3-option1-option1-option1-option2-choice', function(req, res) {

    const publicOption3Option3Option1Option1Option1Option2Choice = req.session.data['public-option3-option3-option1-option1-option1-option2']

    switch (publicOption3Option3Option1Option1Option1Option2Choice) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option1-option1-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option1-option1-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons Public/option3-option3-option1-option1-option1-option2-option1 "Bereavement information"
router.post('/UserResearch/ContactformQA/Public/public-option3-option3-option1-option1-option1-option2-option1-choice', function(req, res) {

    const publicOption3Option3Option1Option1Option1Option2Option1Choice = req.session.data['public-option3-option3-option1-option1-option1-option2-option1']

    switch (publicOption3Option3Option1Option1Option1Option2Option1Choice) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/form5');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons Public/option3-option3-option1-option1-option1-option2-option2 "Bereavement information"
router.post('/UserResearch/ContactformQA/Public/public-option3-option3-option1-option1-option1-option2-option2-choice', function(req, res) {

    const publicOption3Option3Option1Option1Option1Option2Option2Choice = req.session.data['public-option3-option3-option1-option1-option1-option2-option2']

    switch (publicOption3Option3Option1Option1Option1Option2Option2Choice) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/form5');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons Public/option3-option3-option1-option1-option2 "Bereavement guide - Joint ownership"
router.post('/UserResearch/ContactformQA/Public/public-option3-option3-option1-option1-option2-choice', function(req, res) {

    const publicOption3Option3Option1Option1Option2Choice = req.session.data['public-option3-option3-option1-option1-option2']

    switch (publicOption3Option3Option1Option1Option2Choice) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option1-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option1-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons Public/option3-option3-option1-option1-option2-option1 "Bereavement information"
router.post('/UserResearch/ContactformQA/Public/public-option3-option3-option1-option1-option2-option1-choice', function(req, res) {

    const publicOption3Option3Option1Option1Option2Option1Choice = req.session.data['public-option3-option3-option1-option1-option2-option1']

    switch (publicOption3Option3Option1Option1Option2Option1Choice) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/form5');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons Public/option3-option3-option1-option1-option2-option2 "Bereavement guide - Relationship to deceased"
router.post('/UserResearch/ContactformQA/Public/public-option3-option3-option1-option1-option2-option2-choice', function(req, res) {

    const publicOption3Option3Option1Option1Option2Option2Choice = req.session.data['public-option3-option3-option1-option1-option2-option2']

    switch (publicOption3Option3Option1Option1Option2Option2Choice) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option1-option2-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option1-option2-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons Public/option3-option3-option1-option1-option2-option2-option2 "Bereavement information"
router.post('/UserResearch/ContactformQA/Public/public-option3-option3-option1-option1-option2-option2-option2-choice', function(req, res) {

    const publicOption3Option3Option1Option1Option2Option2Option2Choice = req.session.data['public-option3-option3-option1-option1-option2-option2-option2']

    switch (publicOption3Option3Option1Option1Option2Option2Option2Choice) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/form5');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons Public/option3-option3-option1-option2 "Bereavement guide - Joint ownership"
router.post('/UserResearch/ContactformQA/Public/public-option3-option3-option1-option2-choice', function(req, res) {

    const publicOption3Option3Option1Option2Choice = req.session.data['public-option3-option3-option1-option2']

    switch (publicOption3Option3Option1Option2Choice) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons Public/option3-option3-option1-option2-option1 "Bereavement guide - Transfer to beneficiary"
router.post('/UserResearch/ContactformQA/Public/public-option3-option3-option1-option2-option1-choice', function(req, res) {

    const publicOption3Option3Option1Option2Option1Choice = req.session.data['public-option3-option3-option1-option2-option1']

    switch (publicOption3Option3Option1Option2Option1Choice) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option2-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option2-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons Public/option3-option3-option1-option2-option1-option2 "Bereavement guide - Surviving owner intentions"
router.post('/UserResearch/ContactformQA/Public/public-option3-option3-option1-option2-option1-option2-choice', function(req, res) {

    const publicOption3Option3Option1Option2Option1Option2Choice = req.session.data['public-option3-option3-option1-option2-option1-option2']

    switch (publicOption3Option3Option1Option2Option1Option2Choice) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option2-option1-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option2-option1-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons Public/option3-option3-option1-option2-option1-option2-option1 "Bereavement information"
router.post('/UserResearch/ContactformQA/Public/public-option3-option3-option1-option2-option1-option2-option1-choice', function(req, res) {

    const publicOption3Option3Option1Option2Option1Option2Option1Choice = req.session.data['public-option3-option3-option1-option2-option1-option2-option1']

    switch (publicOption3Option3Option1Option2Option1Option2Option1Choice) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/form5');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons Public/option3-option3-option1-option2-option1-option2-option2 "Bereavement information"
router.post('/UserResearch/ContactformQA/Public/public-option3-option3-option1-option2-option1-option2-option2-choice', function(req, res) {

    const publicOption3Option3Option1Option2Option1Option2Option2Choice = req.session.data['public-option3-option3-option1-option2-option1-option2-option2']

    switch (publicOption3Option3Option1Option2Option1Option2Option2Choice) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/form5');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons Public/option3-option3-option1-option2-option1-option1 "Bereavement guide - Surviving owner intentions"
router.post('/UserResearch/ContactformQA/Public/public-option3-option3-option1-option2-option1-option1-choice', function(req, res) {

    const publicOption3Option3Option1Option2Option1Option1Choice = req.session.data['public-option3-option3-option1-option2-option1-option1']

    switch (publicOption3Option3Option1Option2Option1Option1Choice) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option2-option1-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option2-option1-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons Public/option3-option3-option1-option2-option1-option1-option1 "Bereavement information"
router.post('/UserResearch/ContactformQA/Public/public-option3-option3-option1-option2-option1-option1-option1-choice', function(req, res) {

    const publicOption3Option3Option1Option2Option1Option1Choice = req.session.data['public-option3-option3-option1-option2-option1-option1-option1']

    switch (publicOption3Option3Option1Option2Option1Option1Choice) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/form5');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons Public/option3-option3-option1-option2-option1-option1-option2 "Bereavement information"
router.post('/UserResearch/ContactformQA/Public/public-option3-option3-option1-option2-option1-option1-option2-choice', function(req, res) {

    const publicOption3Option3Option1Option2Option1Option2Choice = req.session.data['public-option3-option3-option1-option2-option1-option1-option2']

    switch (publicOption3Option3Option1Option2Option1Option2Choice) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/form5');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons Public/option3-option3-option1-option2-option2 "Bereavement guide - Transfer to beneficiary"
router.post('/UserResearch/ContactformQA/Public/public-option3-option3-option1-option2-option2-choice', function(req, res) {

    const publicOption3Option3Option1Option2Option2Choice = req.session.data['public-option3-option3-option1-option2-option2']

    switch (publicOption3Option3Option1Option2Option2Choice) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option2-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option2-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons Public/option3-option3-option1-option2-option2-option1 "Bereavement guide - Transfer"
router.post('/UserResearch/ContactformQA/Public/public-option3-option3-option1-option2-option2-option1-choice', function(req, res) {

    const publicOption3Option3Option1Option2Option2Option1Choice = req.session.data['public-option3-option3-option1-option2-option2-option1']

    switch (publicOption3Option3Option1Option2Option2Option1Choice) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option2-option2-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/option3-option3-option1-option2-option2-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons Public/option3-option3-option1-option2-option2-option1-option1 "Bereavement information"
router.post('/UserResearch/ContactformQA/Public/public-option3-option3-option1-option2-option2-option1-option1-choice', function(req, res) {

    const publicOption3Option3Option1Option2Option2Option1Option1Choice = req.session.data['public-option3-option3-option1-option2-option2-option1-option1']

    switch (publicOption3Option3Option1Option2Option2Option1Option1Choice) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/form5');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})



// Radio buttons Public/option3-option3-option1-option2-option2-option1-option2 "Bereavement information"
router.post('/UserResearch/ContactformQA/Public/public-option3-option3-option1-option2-option2-option1-option2-choice', function(req, res) {

    const publicOption3Option3Option1Option2Option2Option1Option2Choice = req.session.data['public-option3-option3-option1-option2-option2-option1-option2']

    switch (publicOption3Option3Option1Option2Option2Option1Option2Choice) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/form5');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})



// Radio buttons Public/option4 "Find a Property enquiry"
router.post('/UserResearch/ContactformQA/Public/public-option4-choice', function(req, res) {

    const publicOption4Choice = req.session.data['public-option4']

    switch (publicOption4Choice) {
        case 'learn-more':
            res.redirect('/UserResearch/ContactformQA/Public/option4-option1');
            break;

        case 'property-search-function':
            res.redirect('/UserResearch/ContactformQA/Public/option4-option2');
            break;

        case 'map-enquiry-function':
            res.redirect('/UserResearch/ContactformQA/Public/option4-option3');
            break;

        case 'costs-fees':
            res.redirect('/UserResearch/ContactformQA/Public/option4-option4');
            break;

        case 'i-have-a-problem':
            res.redirect('/UserResearch/ContactformQA/Public/option4-option5');
            break;

        case 'downloading-information':
            res.redirect('/UserResearch/ContactformQA/Public/option4-option6');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons Public/option4-option1 "Find a Property - information held"
router.post('/UserResearch/ContactformQA/Public/public-option4-option1-choice', function(req, res) {

    const publicOption4Option1Choice = req.session.data['public-option4-option1']

    switch (publicOption4Option1Choice) {
        case 'information-find-property':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'how-long-update':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'what-property-details':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'property-search-reveal':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'can-i-look':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'urgent-information':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'telephone-number':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})



// Radio buttons Public/option4-option2 "Find a Property - Property Search"
router.post('/UserResearch/ContactformQA/Public/public-option4-option2-choice', function(req, res) {

    const publicOption4Option2Choice = req.session.data['public-option4-option2']

    switch (publicOption4Option2Choice) {
        case 'property-search':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'several-email-addresses':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'pdf-software':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'make-an-enquiry':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'no-postal-address':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'shopping-basket':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'property-search-function':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})



// Radio buttons Public/option4-option3 "Find a Property - map enquiry"
router.post('/UserResearch/ContactformQA/Public/public-option4-option3-choice', function(req, res) {

    const publicOption4Option3Choice = req.session.data['public-option4-option3']

    switch (publicOption4Option3Choice) {
        case 'map-enquiry':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'cannot-use-tool':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'zoom-in':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'move-around-map':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'find-properties-button':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'button-isnt-working':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'which-information':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'radius-search':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'cant-locate':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'map-enquiry-function':
            res.redirect('/UserResearch/ContactformQA/Public/form2');
            break;


        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons Public/option4-option4 "Find a Property - fee enquiry"
router.post('/UserResearch/ContactformQA/Public/public-option4-option4-choice', function(req, res) {

    const publicOption4Option4Choice = req.session.data['public-option4-option4']

    switch (publicOption4Option4Choice) {
        case 'how-much':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'what-cards':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'refund':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'world-pay':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'vat-receipt':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'declining-my-cards':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'already-paid':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'do-i-get-charged':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'personal-information':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons Public/option4-option5 "Find a Property - map enquiry"
router.post('/UserResearch/ContactformQA/Public/public-option4-option5-choice', function(req, res) {

    const publicOption4Option5Choice = req.session.data['public-option4-option5']

    switch (publicOption4Option5Choice) {
        case 'how-much':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'what-cards':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'refund':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'world-pay':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'vat-receipt':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'declining-my-cards':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'already-paid':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'do-i-get-charged':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'personal-information':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})



// Radio buttons Public/option5 "Find a Property enquiry"
router.post('/UserResearch/ContactformQA/Public/public-option5-choice', function(req, res) {

    const publicOption5Choice = req.session.data['public-option5']

    switch (publicOption5Choice) {
        case 'find-a-property-service':
            res.redirect('/UserResearch/ContactformQA/Public/option5-option1');
            break;

        case 'property-search-function':
            res.redirect('/UserResearch/ContactformQA/Public/option5-option2');
            break;

        case 'map-enquiry-function':
            res.redirect('/UserResearch/ContactformQA/Public/option5-option3');
            break;

        case 'costs-fees':
            res.redirect('/UserResearch/ContactformQA/Public/option5-option4');
            break;

        case 'problem-setting-up':
            res.redirect('/UserResearch/ContactformQA/Public/option5-option5');
            break;

        case 'problem-downloading':
            res.redirect('/UserResearch/ContactformQA/Public/option5-option6');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons Public/option5-option1 "Find a Property - information held"
router.post('/UserResearch/ContactformQA/Public/public-option5-option1-choice', function(req, res) {

    const publicOption5Option1Choice = req.session.data['public-option5-option1']

    switch (publicOption5Option1Choice) {
        case 'what-information':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'how-long-update':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'what-property-details':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'property-search-information':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'can-i-look':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'urgent-information':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'telephone-number':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})




// Radio buttons Public/option5-option2 "Find a Property - Property Search"
router.post('/UserResearch/ContactformQA/Public/public-option5-option2-choice', function(req, res) {

    const publicOption5Option2Choice = req.session.data['public-option5-option2']

    switch (publicOption5Option2Choice) {
        case 'what-do-i-need':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'several-email-addresses':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'no-pdf-software':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'make-an-enquiry':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'what-about-land':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'need-information':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'something-else':
            res.redirect('/UserResearch/ContactformQA/Public/form7');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons Public/option5-option3 "Find a Property - map enquiry"
router.post('/UserResearch/ContactformQA/Public/public-option5-option3-choice', function(req, res) {

    const publicOption5Option3Choice = req.session.data['public-option5-option3']

    switch (publicOption5Option3Choice) {
        case 'help-me':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'cannot-use-tool':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'zoom-in':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'move-around':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'find-properties-button':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'button-not-working':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'which-information':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'radius-search':
                res.redirect('/UserResearch/ContactformQA/Public/form6');
                break;

        case 'cannot-locate':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'something-else':
                res.redirect('/UserResearch/ContactformQA/Public/form7');
                break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons Public/option5-option4 "Find a Property - fee enquiry"
router.post('/UserResearch/ContactformQA/Public/public-option5-option4-choice', function(req, res) {

    const publicOption5Option4Choice = req.session.data['public-option5-option4']

    switch (publicOption5Option4Choice) {
        case 'how-much-does-it':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'what-cards':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'refund':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'transaction-id':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'wordlpay':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'already-paid':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'charged-for-download':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'personal-information':
                res.redirect('/UserResearch/ContactformQA/Public/form6');
                break;


        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons Public/option5-option5 "Find a Property - fee enquiry"
router.post('/UserResearch/ContactformQA/Public/public-option5-option5-choice', function(req, res) {

    const publicOption5Option5Choice = req.session.data['public-option5-option5']

    switch (publicOption5Option5Choice) {
        case 'having-problems':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'activation-email':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'create-account':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'unable-to-login':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'remember-my-username':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'forgotten-my-password':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'activation-link':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'password-incorrectly':
                res.redirect('/UserResearch/ContactformQA/Public/form6');
                break;

        case 'message-account-deleted':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'username-not-acceptable':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'something-else':
                res.redirect('/UserResearch/ContactformQA/Public/form7');
                break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons Public/option5-option6 "Find a Property - download issues"
router.post('/UserResearch/ContactformQA/Public/public-option5-option6-choice', function(req, res) {

    const publicOption5Option6Choice = req.session.data['public-option6-option5']

    switch (publicOption5Option6Choice) {
        case 'trouble-printing':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'register-and-plan':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'not-received':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'failed-download':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'error-message':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'deleted-files':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'register-twice':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'bought-information':
                res.redirect('/UserResearch/ContactformQA/Public/form6');
                break;

        case 'bought-the-register':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'problem-with-pdf':
            res.redirect('/UserResearch/ContactformQA/Public/form6');
            break;

        case 'obtain-historical':
                res.redirect('/UserResearch/ContactformQA/Public/form6');
                break;

         case 'buy-a-copy':
                res.redirect('/UserResearch/ContactformQA/Public/form6');
                break;

         case 'something-else':
                res.redirect('/UserResearch/ContactformQA/Public/form7');
                break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2 "Bereavement guide - Registered with HMLR?"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-choice', function(req, res) {

    const bereavementChoice = req.session.data['bereavement-start-choice']

    switch (bereavementChoice) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option1 "Bereavement guide - Transfer / assent or sale"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option1-choice', function(req, res) {

    const bereavementChoiceOption1 = req.session.data['bereavement-start-option1-choice']

    switch (bereavementChoiceOption1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1 "Bereavement guide - Joint ownership"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option1-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option1 = req.session.data['bereavement-start-option1-option1-choice']

    switch (bereavementChoiceOption1Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option1-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option1-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option2 "Bereavement guide - Joint ownership"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option1-option2-choice', function(req, res) {

    const bereavementChoiceOption1Option2 = req.session.data['bereavement-start-option1-option2-choice']

    switch (bereavementChoiceOption1Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option1-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option1-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option1 "Bereavement guide - Transfer to beneficiary"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option1-option1-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option1 = req.session.data['bereavement-start-option1-option1-option1-choice']

    switch (bereavementChoiceOption1Option1Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option1-option1-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option1-option1-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option2 "Bereavement guide - Transfer to beneficiary"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option1-option1-option2-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option2 = req.session.data['bereavement-start-option1-option1-option2-choice']

    switch (bereavementChoiceOption1Option1Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option1-option1-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option1-option1-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option2-option2 "Bereavement guide - Relationship to deceased"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option1-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption1Option2Option2 = req.session.data['bereavement-start-option1-option2-option2-choice']

    switch (bereavementChoiceOption1Option2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option1-option2-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option1-option2-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option2-option2-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option1-option2-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option2Option2Option1 = req.session.data['bereavement-start-option1-option2-option2-option1-choice']

    switch (bereavementChoiceOption1Option2Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option2-option2-option2 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option1-option2-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption1Option2Option2Option2 = req.session.data['bereavement-start-option1-option2-option2-option2-choice']

    switch (bereavementChoiceOption1Option2Option2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option2-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option1-option1-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option2Option1 = req.session.data['bereavement-start-option1-option1-option2-option1-choice']

    switch (bereavementChoiceOption1Option1Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/form5');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option2-option2 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option1-option1-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option2Option2 = req.session.data['bereavement-start-option1-option1-option2-option2-choice']

    switch (bereavementChoiceOption1Option1Option2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option1-option1-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option1-option1-option1-option1-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option1Option1Option1 = req.session.data['bereavement-start-option1-option1-option1-option1-option1-choice']

    switch (bereavementChoiceOption1Option1Option1Option1Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option1-option1-option2 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option1-option1-option1-option1-option2-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option1Option1Option2 = req.session.data['bereavement-start-option1-option1-option1-option1-option2-choice']

    switch (bereavementChoiceOption1Option1Option1Option1Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option1-option2-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option1-option1-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option2Option1 = req.session.data['bereavement-start-option1-option1-option2-option1-choice']

    switch (bereavementChoiceOption1Option1Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option2-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option1-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option2Option1 = req.session.data['bereavement-start-option1-option2-option1-choice']

    switch (bereavementChoiceOption1Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})



// Radio buttons GuidedAssistance/Bereavement/page2-option2 "Bereavement guide - Joint Onwership"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option2-choice', function(req, res) {

    const bereavementChoiceOption2 = req.session.data['bereavement-start-option2-choice']

    switch (bereavementChoiceOption2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1 "Bereavement guide - Transfer to beneficiary"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option1 = req.session.data['bereavement-start-option2-option1-choice']

    switch (bereavementChoiceOption2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option2-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option2-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1-option1 "Bereavement guide - Transfer to beneficiary"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option2-option1-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option1Option1 = req.session.data['bereavement-start-option2-option1-option1-choice']

    switch (bereavementChoiceOption2Option1Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option2-option1-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option2-option1-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1-option1-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option2-option1-option1-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option1Option1Option1 = req.session.data['bereavement-start-option2-option1-option1-option1-choice']

    switch (bereavementChoiceOption2Option1Option1Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1-option1-option2 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option2-option1-option1-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option1Option1Option2 = req.session.data['bereavement-start-option2-option1-option1-option2-choice']

    switch (bereavementChoiceOption2Option1Option1Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1-option2 "Bereavement guide - Surviving owner intentions"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option2-option1-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option1Option2 = req.session.data['bereavement-start-option2-option1-option2-choice']

    switch (bereavementChoiceOption2Option1Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option2-option1-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option2-option1-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1-option2-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option2-option1-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option1Option2Option1 = req.session.data['bereavement-start-option2-option1-option2-option1-choice']

    switch (bereavementChoiceOption2Option1Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1-option2-option2 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option2-option1-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option1Option2Option2 = req.session.data['bereavement-start-option2-option1-option2-option2-choice']

    switch (bereavementChoiceOption2Option1Option2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2 "Bereavement guide - Transfer to beneficiary"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option2 = req.session.data['bereavement-start-option2-option2-choice']

    switch (bereavementChoiceOption2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option2-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option2-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2-option1 "Bereavement guide - Transfer"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option2-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option2Option1 = req.session.data['bereavement-start-option2-option2-option1-choice']

    switch (bereavementChoiceOption2Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option2-option2-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option2-option2-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2-option2 "Bereavement guide - Transfer"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option2-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option2Option2 = req.session.data['bereavement-start-option2-option2-option2-choice']

    switch (bereavementChoiceOption2Option2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option2-option2-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/page2-option2-option2-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2-option1-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option2-option2-option1-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option2Option1Option1 = req.session.data['bereavement-start-option2-option2-option1-option1-choice']

    switch (bereavementChoiceOption2Option2Option1Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2-option1-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option2-option2-option1-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option2Option1Option2 = req.session.data['bereavement-start-option2-option2-option1-option2-choice']

    switch (bereavementChoiceOption2Option2Option1Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2-option2-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option2-option2-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option2Option2Option1 = req.session.data['bereavement-start-option2-option2-option2-option1-choice']

    switch (bereavementChoiceOption2Option2Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2-option2-option2 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V1/bereavement-start-option2-option2-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option2Option2Option2 = req.session.data['bereavement-start-option2-option2-option2-option2-choice']

    switch (bereavementChoiceOption2Option2Option2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V1/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


















// Version 2 Bereavement below


// Radio buttons GuidedAssistance/Bereavement/page2 "Bereavement guide - Registered with HMLR?"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-choice', function(req, res) {

    const bereavementChoice = req.session.data['bereavement-start-choice']

    switch (bereavementChoice) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option1 "Bereavement guide - Transfer / assent or sale"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option1-choice', function(req, res) {

    const bereavementChoiceOption1 = req.session.data['bereavement-start-option1-choice']

    switch (bereavementChoiceOption1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1 "Bereavement guide - Joint ownership"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option1-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option1 = req.session.data['bereavement-start-option1-option1-choice']

    switch (bereavementChoiceOption1Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option1-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option1-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option2 "Bereavement guide - Joint ownership"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option1-option2-choice', function(req, res) {

    const bereavementChoiceOption1Option2 = req.session.data['bereavement-start-option1-option2-choice']

    switch (bereavementChoiceOption1Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option1-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option1-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option1 "Bereavement guide - Transfer to beneficiary"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option1-option1-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option1 = req.session.data['bereavement-start-option1-option1-option1-choice']

    switch (bereavementChoiceOption1Option1Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option1-option1-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option1-option1-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option2 "Bereavement guide - Transfer to beneficiary"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option1-option1-option2-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option2 = req.session.data['bereavement-start-option1-option1-option2-choice']

    switch (bereavementChoiceOption1Option1Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option1-option1-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option1-option1-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option2-option2 "Bereavement guide - Relationship to deceased"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option1-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption1Option2Option2 = req.session.data['bereavement-start-option1-option2-option2-choice']

    switch (bereavementChoiceOption1Option2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option1-option2-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option1-option2-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option2-option2-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option1-option2-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option2Option2Option1 = req.session.data['bereavement-start-option1-option2-option2-option1-choice']

    switch (bereavementChoiceOption1Option2Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option2-option2-option2 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option1-option2-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption1Option2Option2Option2 = req.session.data['bereavement-start-option1-option2-option2-option2-choice']

    switch (bereavementChoiceOption1Option2Option2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option2-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option1-option1-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option2Option1 = req.session.data['bereavement-start-option1-option1-option2-option1-choice']

    switch (bereavementChoiceOption1Option1Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/form5');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option2-option2 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option1-option1-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option2Option2 = req.session.data['bereavement-start-option1-option1-option2-option2-choice']

    switch (bereavementChoiceOption1Option1Option2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option1-option1-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option1-option1-option1-option1-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option1Option1Option1 = req.session.data['bereavement-start-option1-option1-option1-option1-option1-choice']

    switch (bereavementChoiceOption1Option1Option1Option1Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option1-option1-option2 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option1-option1-option1-option1-option2-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option1Option1Option2 = req.session.data['bereavement-start-option1-option1-option1-option1-option2-choice']

    switch (bereavementChoiceOption1Option1Option1Option1Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option1-option2-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option1-option1-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option2Option1 = req.session.data['bereavement-start-option1-option1-option2-option1-choice']

    switch (bereavementChoiceOption1Option1Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option2-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option1-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option2Option1 = req.session.data['bereavement-start-option1-option2-option1-choice']

    switch (bereavementChoiceOption1Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})



// Radio buttons GuidedAssistance/Bereavement/page2-option2 "Bereavement guide - Joint Onwership"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option2-choice', function(req, res) {

    const bereavementChoiceOption2 = req.session.data['bereavement-start-option2-choice']

    switch (bereavementChoiceOption2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1 "Bereavement guide - Transfer to beneficiary"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option1 = req.session.data['bereavement-start-option2-option1-choice']

    switch (bereavementChoiceOption2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option2-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option2-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1-option1 "Bereavement guide - Transfer to beneficiary"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option2-option1-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option1Option1 = req.session.data['bereavement-start-option2-option1-option1-choice']

    switch (bereavementChoiceOption2Option1Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option2-option1-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option2-option1-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1-option1-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option2-option1-option1-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option1Option1Option1 = req.session.data['bereavement-start-option2-option1-option1-option1-choice']

    switch (bereavementChoiceOption2Option1Option1Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1-option1-option2 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option2-option1-option1-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option1Option1Option2 = req.session.data['bereavement-start-option2-option1-option1-option2-choice']

    switch (bereavementChoiceOption2Option1Option1Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1-option2 "Bereavement guide - Surviving owner intentions"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option2-option1-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option1Option2 = req.session.data['bereavement-start-option2-option1-option2-choice']

    switch (bereavementChoiceOption2Option1Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option2-option1-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option2-option1-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1-option2-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option2-option1-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option1Option2Option1 = req.session.data['bereavement-start-option2-option1-option2-option1-choice']

    switch (bereavementChoiceOption2Option1Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1-option2-option2 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option2-option1-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option1Option2Option2 = req.session.data['bereavement-start-option2-option1-option2-option2-choice']

    switch (bereavementChoiceOption2Option1Option2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2 "Bereavement guide - Transfer to beneficiary"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option2 = req.session.data['bereavement-start-option2-option2-choice']

    switch (bereavementChoiceOption2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option2-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option2-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2-option1 "Bereavement guide - Transfer"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option2-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option2Option1 = req.session.data['bereavement-start-option2-option2-option1-choice']

    switch (bereavementChoiceOption2Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option2-option2-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option2-option2-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2-option2 "Bereavement guide - Transfer"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option2-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option2Option2 = req.session.data['bereavement-start-option2-option2-option2-choice']

    switch (bereavementChoiceOption2Option2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option2-option2-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/page2-option2-option2-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2-option1-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option2-option2-option1-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option2Option1Option1 = req.session.data['bereavement-start-option2-option2-option1-option1-choice']

    switch (bereavementChoiceOption2Option2Option1Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2-option1-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option2-option2-option1-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option2Option1Option2 = req.session.data['bereavement-start-option2-option2-option1-option2-choice']

    switch (bereavementChoiceOption2Option2Option1Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2-option2-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option2-option2-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option2Option2Option1 = req.session.data['bereavement-start-option2-option2-option2-option1-choice']

    switch (bereavementChoiceOption2Option2Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2-option2-option2 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V2/bereavement-start-option2-option2-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option2Option2Option2 = req.session.data['bereavement-start-option2-option2-option2-option2-choice']

    switch (bereavementChoiceOption2Option2Option2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V2/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})








//V4 version




// Radio buttons GuidedAssistance/Bereavement/page2 "Bereavement guide - Registered with HMLR?"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-choice', function(req, res) {

    const bereavementChoice = req.session.data['bereavement-start-choice']

    switch (bereavementChoice) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option1 "Bereavement guide - Transfer / assent or sale"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option1-choice', function(req, res) {

    const bereavementChoiceOption1 = req.session.data['bereavement-start-option1-choice']

    switch (bereavementChoiceOption1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1 "Bereavement guide - Joint ownership"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option1-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option1 = req.session.data['bereavement-start-option1-option1-choice']

    switch (bereavementChoiceOption1Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option1-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option1-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option2 "Bereavement guide - Joint ownership"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option1-option2-choice', function(req, res) {

    const bereavementChoiceOption1Option2 = req.session.data['bereavement-start-option1-option2-choice']

    switch (bereavementChoiceOption1Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option1-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option1-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option1 "Bereavement guide - Transfer to beneficiary"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option1-option1-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option1 = req.session.data['bereavement-start-option1-option1-option1-choice']

    switch (bereavementChoiceOption1Option1Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option1-option1-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option1-option1-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option2 "Bereavement guide - Transfer to beneficiary"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option1-option1-option2-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option2 = req.session.data['bereavement-start-option1-option1-option2-choice']

    switch (bereavementChoiceOption1Option1Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option1-option1-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option1-option1-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option2-option2 "Bereavement guide - Relationship to deceased"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option1-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption1Option2Option2 = req.session.data['bereavement-start-option1-option2-option2-choice']

    switch (bereavementChoiceOption1Option2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option1-option2-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option1-option2-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option2-option2-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option1-option2-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option2Option2Option1 = req.session.data['bereavement-start-option1-option2-option2-option1-choice']

    switch (bereavementChoiceOption1Option2Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option2-option2-option2 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option1-option2-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption1Option2Option2Option2 = req.session.data['bereavement-start-option1-option2-option2-option2-choice']

    switch (bereavementChoiceOption1Option2Option2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option2-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option1-option1-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option2Option1 = req.session.data['bereavement-start-option1-option1-option2-option1-choice']

    switch (bereavementChoiceOption1Option1Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/form5');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option2-option2 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option1-option1-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option2Option2 = req.session.data['bereavement-start-option1-option1-option2-option2-choice']

    switch (bereavementChoiceOption1Option1Option2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option1-option1-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option1-option1-option1-option1-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option1Option1Option1 = req.session.data['bereavement-start-option1-option1-option1-option1-option1-choice']

    switch (bereavementChoiceOption1Option1Option1Option1Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option1-option1-option2 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option1-option1-option1-option1-option2-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option1Option1Option2 = req.session.data['bereavement-start-option1-option1-option1-option1-option2-choice']

    switch (bereavementChoiceOption1Option1Option1Option1Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option1-option2-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option1-option1-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option2Option1 = req.session.data['bereavement-start-option1-option1-option2-option1-choice']

    switch (bereavementChoiceOption1Option1Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option2-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option1-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option2Option1 = req.session.data['bereavement-start-option1-option2-option1-choice']

    switch (bereavementChoiceOption1Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})



// Radio buttons GuidedAssistance/Bereavement/page2-option2 "Bereavement guide - Joint Onwership"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option2-choice', function(req, res) {

    const bereavementChoiceOption2 = req.session.data['bereavement-start-option2-choice']

    switch (bereavementChoiceOption2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1 "Bereavement guide - Transfer to beneficiary"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option1 = req.session.data['bereavement-start-option2-option1-choice']

    switch (bereavementChoiceOption2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option2-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option2-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1-option1 "Bereavement guide - Transfer to beneficiary"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option2-option1-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option1Option1 = req.session.data['bereavement-start-option2-option1-option1-choice']

    switch (bereavementChoiceOption2Option1Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option2-option1-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option2-option1-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1-option1-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option2-option1-option1-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option1Option1Option1 = req.session.data['bereavement-start-option2-option1-option1-option1-choice']

    switch (bereavementChoiceOption2Option1Option1Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1-option1-option2 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option2-option1-option1-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option1Option1Option2 = req.session.data['bereavement-start-option2-option1-option1-option2-choice']

    switch (bereavementChoiceOption2Option1Option1Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1-option2 "Bereavement guide - Surviving owner intentions"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option2-option1-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option1Option2 = req.session.data['bereavement-start-option2-option1-option2-choice']

    switch (bereavementChoiceOption2Option1Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option2-option1-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option2-option1-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1-option2-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option2-option1-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option1Option2Option1 = req.session.data['bereavement-start-option2-option1-option2-option1-choice']

    switch (bereavementChoiceOption2Option1Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1-option2-option2 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option2-option1-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option1Option2Option2 = req.session.data['bereavement-start-option2-option1-option2-option2-choice']

    switch (bereavementChoiceOption2Option1Option2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2 "Bereavement guide - Transfer to beneficiary"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option2 = req.session.data['bereavement-start-option2-option2-choice']

    switch (bereavementChoiceOption2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option2-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option2-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2-option1 "Bereavement guide - Transfer"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option2-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option2Option1 = req.session.data['bereavement-start-option2-option2-option1-choice']

    switch (bereavementChoiceOption2Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option2-option2-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option2-option2-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2-option2 "Bereavement guide - Transfer"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option2-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option2Option2 = req.session.data['bereavement-start-option2-option2-option2-choice']

    switch (bereavementChoiceOption2Option2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option2-option2-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/page2-option2-option2-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2-option1-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option2-option2-option1-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option2Option1Option1 = req.session.data['bereavement-start-option2-option2-option1-option1-choice']

    switch (bereavementChoiceOption2Option2Option1Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2-option1-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option2-option2-option1-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option2Option1Option2 = req.session.data['bereavement-start-option2-option2-option1-option2-choice']

    switch (bereavementChoiceOption2Option2Option1Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2-option2-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option2-option2-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option2Option2Option1 = req.session.data['bereavement-start-option2-option2-option2-option1-choice']

    switch (bereavementChoiceOption2Option2Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2-option2-option2 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V4/bereavement-start-option2-option2-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option2Option2Option2 = req.session.data['bereavement-start-option2-option2-option2-option2-choice']

    switch (bereavementChoiceOption2Option2Option2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V4/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})






// V6 bereavement



//V4 version




// Radio buttons GuidedAssistance/Bereavement/page2 "Bereavement guide - Registered with HMLR?"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-choice', function(req, res) {

    const bereavementChoice = req.session.data['bereavement-start-choice']

    switch (bereavementChoice) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option1 "Bereavement guide - Transfer / assent or sale"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option1-choice', function(req, res) {

    const bereavementChoiceOption1 = req.session.data['bereavement-start-option1-choice']

    switch (bereavementChoiceOption1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1 "Bereavement guide - Joint ownership"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option1-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option1 = req.session.data['bereavement-start-option1-option1-choice']

    switch (bereavementChoiceOption1Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option1-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option1-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option2 "Bereavement guide - Joint ownership"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option1-option2-choice', function(req, res) {

    const bereavementChoiceOption1Option2 = req.session.data['bereavement-start-option1-option2-choice']

    switch (bereavementChoiceOption1Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option1-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option1-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option1 "Bereavement guide - Transfer to beneficiary"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option1-option1-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option1 = req.session.data['bereavement-start-option1-option1-option1-choice']

    switch (bereavementChoiceOption1Option1Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option1-option1-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option1-option1-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option2 "Bereavement guide - Transfer to beneficiary"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option1-option1-option2-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option2 = req.session.data['bereavement-start-option1-option1-option2-choice']

    switch (bereavementChoiceOption1Option1Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option1-option1-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option1-option1-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option2-option2 "Bereavement guide - Relationship to deceased"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option1-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption1Option2Option2 = req.session.data['bereavement-start-option1-option2-option2-choice']

    switch (bereavementChoiceOption1Option2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option1-option2-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option1-option2-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option2-option2-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option1-option2-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option2Option2Option1 = req.session.data['bereavement-start-option1-option2-option2-option1-choice']

    switch (bereavementChoiceOption1Option2Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option2-option2-option2 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option1-option2-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption1Option2Option2Option2 = req.session.data['bereavement-start-option1-option2-option2-option2-choice']

    switch (bereavementChoiceOption1Option2Option2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option2-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option1-option1-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option2Option1 = req.session.data['bereavement-start-option1-option1-option2-option1-choice']

    switch (bereavementChoiceOption1Option1Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/ContactformQA/Public/form5');
            break;

        case 'no':
            res.redirect('/UserResearch/ContactformQA/Public/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option2-option2 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option1-option1-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option2Option2 = req.session.data['bereavement-start-option1-option1-option2-option2-choice']

    switch (bereavementChoiceOption1Option1Option2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option1-option1-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option1-option1-option1-option1-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option1Option1Option1 = req.session.data['bereavement-start-option1-option1-option1-option1-option1-choice']

    switch (bereavementChoiceOption1Option1Option1Option1Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option1-option1-option2 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option1-option1-option1-option1-option2-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option1Option1Option2 = req.session.data['bereavement-start-option1-option1-option1-option1-option2-choice']

    switch (bereavementChoiceOption1Option1Option1Option1Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option1-option1-option2-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option1-option1-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option1Option2Option1 = req.session.data['bereavement-start-option1-option1-option2-option1-choice']

    switch (bereavementChoiceOption1Option1Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option1-option2-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option1-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption1Option2Option1 = req.session.data['bereavement-start-option1-option2-option1-choice']

    switch (bereavementChoiceOption1Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})



// Radio buttons GuidedAssistance/Bereavement/page2-option2 "Bereavement guide - Joint Onwership"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option2-choice', function(req, res) {

    const bereavementChoiceOption2 = req.session.data['bereavement-start-option2-choice']

    switch (bereavementChoiceOption2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1 "Bereavement guide - Transfer to beneficiary"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option1 = req.session.data['bereavement-start-option2-option1-choice']

    switch (bereavementChoiceOption2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option2-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option2-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1-option1 "Bereavement guide - Transfer to beneficiary"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option2-option1-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option1Option1 = req.session.data['bereavement-start-option2-option1-option1-choice']

    switch (bereavementChoiceOption2Option1Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option2-option1-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option2-option1-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1-option1-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option2-option1-option1-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option1Option1Option1 = req.session.data['bereavement-start-option2-option1-option1-option1-choice']

    switch (bereavementChoiceOption2Option1Option1Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1-option1-option2 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option2-option1-option1-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option1Option1Option2 = req.session.data['bereavement-start-option2-option1-option1-option2-choice']

    switch (bereavementChoiceOption2Option1Option1Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1-option2 "Bereavement guide - Surviving owner intentions"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option2-option1-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option1Option2 = req.session.data['bereavement-start-option2-option1-option2-choice']

    switch (bereavementChoiceOption2Option1Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option2-option1-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option2-option1-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1-option2-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option2-option1-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option1Option2Option1 = req.session.data['bereavement-start-option2-option1-option2-option1-choice']

    switch (bereavementChoiceOption2Option1Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option2-option1-option2-option2 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option2-option1-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option1Option2Option2 = req.session.data['bereavement-start-option2-option1-option2-option2-choice']

    switch (bereavementChoiceOption2Option1Option2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2 "Bereavement guide - Transfer to beneficiary"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option2 = req.session.data['bereavement-start-option2-option2-choice']

    switch (bereavementChoiceOption2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option2-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option2-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2-option1 "Bereavement guide - Transfer"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option2-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option2Option1 = req.session.data['bereavement-start-option2-option2-option1-choice']

    switch (bereavementChoiceOption2Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option2-option2-option1-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option2-option2-option1-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2-option2 "Bereavement guide - Transfer"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option2-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option2Option2 = req.session.data['bereavement-start-option2-option2-option2-choice']

    switch (bereavementChoiceOption2Option2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option2-option2-option2-option1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/page2-option2-option2-option2-option2');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2-option1-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option2-option2-option1-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option2Option1Option1 = req.session.data['bereavement-start-option2-option2-option1-option1-choice']

    switch (bereavementChoiceOption2Option2Option1Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2-option1-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option2-option2-option1-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option2Option1Option2 = req.session.data['bereavement-start-option2-option2-option1-option2-choice']

    switch (bereavementChoiceOption2Option2Option1Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2-option2-option1 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option2-option2-option2-option1-choice', function(req, res) {

    const bereavementChoiceOption2Option2Option2Option1 = req.session.data['bereavement-start-option2-option2-option2-option1-choice']

    switch (bereavementChoiceOption2Option2Option2Option1) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// Radio buttons GuidedAssistance/Bereavement/page2-option2-option2-option2-option2 "Bereavement information"
router.post('/UserResearch/GuidedAssistance/Bereavement/V6/bereavement-start-option2-option2-option2-option2-choice', function(req, res) {

    const bereavementChoiceOption2Option2Option2Option2 = req.session.data['bereavement-start-option2-option2-option2-option2-choice']

    switch (bereavementChoiceOption2Option2Option2Option2) {
        case 'yes':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/form1');
            break;

        case 'no':
            res.redirect('/UserResearch/GuidedAssistance/Bereavement/V6/enquiry-complete');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})



// ContactformQA radio buttons for public or business
router.post('/UserResearch/PortalSignup/V1/businessaccountalreadyornot', function(req, res) {

    const alreadyornotChoice = req.session.data['alreadyornot']

    switch (alreadyornotChoice) {
        case 'yes':
            res.redirect('/UserResearch/PortalSignup/V1/organisationName');
            break;

        case 'no':
            res.redirect('/UserResearch/PortalSignup/V1/needNetworkServices');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// ContactformQA radio buttons for public or business
router.post('/UserResearch/PortalSignup/V1/whatdoyouwanttodo', function(req, res) {

    const whatdoyouwanttodoChoice = req.session.data['whatdoyouwanttodo']

    switch (whatdoyouwanttodoChoice) {
        case 'addAdministrator':
            res.redirect('/UserResearch/PortalSignup/V1/addAdministrator/');
            break;

        case 'addDeputyResponsible':
            res.redirect('/UserResearch/PortalSignup/V1/addDeputyResponsible/');
            break;

        case 'changeResponsible':
            res.redirect('/UserResearch/PortalSignup/V1/changeResponsible/');
            break;

        case 'changeBankDetails':
            res.redirect('/UserResearch/PortalSignup/V1/changeBankDetails/');
            break;

        case 'createVDD':
            res.redirect('/UserResearch/PortalSignup/V1/createVDD/');
            break;

        case 'applyNetworkServices':
            res.redirect('/UserResearch/PortalSignup/V1/applyNetworkServices/');
            break;

        case 'applyLenderServices':
            res.redirect('/UserResearch/PortalSignup/V1/applyLenderServices/');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// ContactformQA radio buttons for public or business
router.post('/UserResearch/PortalSignup/V2/businessaccountalreadyornot2', function(req, res) {

    const alreadyornotChoice2 = req.session.data['alreadyornot']

    switch (alreadyornotChoice2) {
        case 'yes':
            res.redirect('/UserResearch/PortalSignup/V2/2');
            break;

        case 'no':
            res.redirect('/UserResearch/PortalSignup/V2/2b');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// ContactformQA radio buttons for public or business
router.post('/UserResearch/PortalSignup/V3/whatdoyouwanttodoV2', function(req, res) {

    const whatdoyouwanttodoChoice2 = req.session.data['whatdoyouwanttodo']

    switch (whatdoyouwanttodoChoice2) {
        case 'addAdministrator':
            res.redirect('/UserResearch/PortalSignup/V1/addAdministrator/');
            break;

        case 'addDeputyResponsible':
            res.redirect('/UserResearch/PortalSignup/V1/addDeputyResponsible/');
            break;

        case 'changeResponsible':
            res.redirect('/UserResearch/PortalSignup/V1/changeResponsible/');
            break;

        case 'changeBankDetails':
            res.redirect('/UserResearch/PortalSignup/V1/changeBankDetails/');
            break;

        case 'applyNetworkServices':
            res.redirect('/UserResearch/PortalSignup/V1/applyNetworkServices/');
            break;

        case 'createVDD':
            res.redirect('/UserResearch/PortalSignup/V2/createVDD/');
            break;

        case 'applyLenderServices':
            res.redirect('/UserResearch/PortalSignup/V1/applyLenderServices/');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})



// ContactformQA radio buttons for public or business
router.post('/UserResearch/PortalSignup/V3/NewAccountPart1/responsible-person-options', function(req, res) {

    const responsiblepersonChoice = req.session.data['responsible-person']

    switch (responsiblepersonChoice) {
        case 'responsible-person-1':
            res.redirect('/UserResearch/PortalSignup/V3/NewAccountPart1/3d');
            break;

        case 'responsible-person-2':
            res.redirect('/UserResearch/PortalSignup/V3/NewAccountPart1/3c');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// ContactformQA radio buttons for public or business
router.post('/UserResearch/PortalSignup/V4/NewAccountPart1/responsible-person-options', function(req, res) {

    const responsiblepersonChoice = req.session.data['responsible-person']

    switch (responsiblepersonChoice) {
        case 'responsible-person-1':
            res.redirect('/UserResearch/PortalSignup/V4/NewAccountPart1/3d');
            break;

        case 'responsible-person-2':
            res.redirect('/UserResearch/PortalSignup/V4/NewAccountPart1/3c');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

router.post('/UserResearch/PortalSignup/V3/NewAccountPart2/vddnumber', function(req, res) {

    const vddnumberChoice= req.session.data['vddnumber']

    switch (vddnumberChoice) {
        case 'Yes':
            res.redirect('/UserResearch/PortalSignup/V3/NewAccountPart2/3a');
            break;

        case 'No':
            res.redirect('/UserResearch/PortalSignup/V3/NewAccountPart2/3b');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

router.post('/UserResearch/PortalSignup/V4/NewAccountPart2/vddnumber', function(req, res) {

    const vddnumberChoice= req.session.data['vddnumber']

    switch (vddnumberChoice) {
        case 'Yes':
            res.redirect('/UserResearch/PortalSignup/V4/NewAccountPart2/3a');
            break;

        case 'No':
            res.redirect('/UserResearch/PortalSignup/V4/NewAccountPart2/3b');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

router.post('/UserResearch/PortalSignup/V3/NewAccountPart2/termination', function(req, res) {

    const terminationChoice= req.session.data['termination']

    switch (terminationChoice) {
        case 'No':
            res.redirect('/UserResearch/PortalSignup/V3/NewAccountPart2/8');
            break;

        case 'Yes':
            res.redirect('/UserResearch/PortalSignup/V3/NewAccountPart2/9');
            break;

        default:
            //This is a catch all for none of the above
            break;
        }
    })

    router.post('/UserResearch/PortalSignup/V4/NewAccountPart2/termination', function(req, res) {

        const terminationChoice= req.session.data['termination']

        switch (terminationChoice) {
            case 'No':
                res.redirect('/UserResearch/PortalSignup/V4/NewAccountPart2/8');
                break;

            case 'Yes':
                res.redirect('/UserResearch/PortalSignup/V4/NewAccountPart2/9');
                break;

            default:
                //This is a catch all for none of the above
                break;
            }
        })



// ContactformQA radio buttons for public or business
router.post('/UserResearch/PortalSignup/V3/NewAccountPart1/query-contact-options', function(req, res) {

    const querycontactChoice = req.session.data['query-contact']

    switch (querycontactChoice) {
        case 'query-contact-1':
            res.redirect('/UserResearch/PortalSignup/V3/NewAccountPart1/index-5');
            break;

        case 'query-contact-2':
            res.redirect('/UserResearch/PortalSignup/V3/NewAccountPart1/index-5');
            break;

            case 'query-contact-3':
                res.redirect('/UserResearch/PortalSignup/V3/NewAccountPart1/4b');
                break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// ContactformQA radio buttons for public or business
router.post('/UserResearch/PortalSignup/V4/NewAccountPart1/query-contact-options', function(req, res) {

    const querycontactChoice = req.session.data['query-contact']

    switch (querycontactChoice) {
        case 'query-contact-1':
            res.redirect('/UserResearch/PortalSignup/V4/NewAccountPart1/index-5');
            break;

        case 'query-contact-2':
            res.redirect('/UserResearch/PortalSignup/V4/NewAccountPart1/index-5');
            break;

            case 'query-contact-3':
                res.redirect('/UserResearch/PortalSignup/V4/NewAccountPart1/4b');
                break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// ContactformQA radio buttons for public or business
router.post('/UserResearch/PortalSignup/V3/businessaccountalreadyornot2', function(req, res) {

    const alreadyornotChoice2 = req.session.data['alreadyornot']

    switch (alreadyornotChoice2) {
        case 'yes':
            res.redirect('/UserResearch/PortalSignup/V3/options');
            break;

        case 'no':
            res.redirect('/UserResearch/PortalSignup/V4/NewAccountPart1/');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// ContactformQA radio buttons for public or business
router.post('/UserResearch/PortalSignup/V4/businessaccountalreadyornot2', function(req, res) {

    const alreadyornotChoice2 = req.session.data['alreadyornot']

    switch (alreadyornotChoice2) {
        case 'yes':
            res.redirect('/UserResearch/PortalSignup/V4/options');
            break;

        case 'no':
            res.redirect('/UserResearch/PortalSignup/V4/NewAccountPart1/');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


// applyLenderServices radio buttons for legal entity
router.post('/UserResearch/PortalSignup/V1/applyLenderServices/legalentity', function(req, res) {

    const legalentityChoice= req.session.data['legalentity']

    switch (legalentityChoice) {
        case 'LimitedCompany':
            res.redirect('/UserResearch/PortalSignup/V1/applyLenderServices/3a');
            break;

        case 'SolePractitioner':
            res.redirect('/UserResearch/PortalSignup/V1/applyLenderServices/3b');
            break;

        case 'GovernmentDepartment':
            res.redirect('/UserResearch/PortalSignup/V1/applyLenderServices/3c');
            break;

        case 'PoliceServices':
            res.redirect('/UserResearch/PortalSignup/V1/applyLenderServices/3d');
            break;

        case 'LimitedPartnership':
            res.redirect('/UserResearch/PortalSignup/V1/applyLenderServices/3e');
            break;

        case 'Partnership':
            res.redirect('/UserResearch/PortalSignup/V1/applyLenderServices/3f');
            break;

        case 'LocalAuthority':
            res.redirect('/UserResearch/PortalSignup/V1/applyLenderServices/3g');
            break;

        case 'Other':
            res.redirect('/UserResearch/PortalSignup/V1/applyLenderServices/3h');
            break;



        default:
            //This is a catch all for none of the above
            break;
    }
})

// applyNetworkServices radio buttons for termination on 19a
router.post('/UserResearch/PortalSignup/V1/applyLenderServices/contact', function(req, res) {

    const contactChoice= req.session.data['contact']

    switch (contactChoice) {
        case 'Yes':
            res.redirect('/UserResearch/PortalSignup/V1/applyLenderServices/18');
            break;

        case 'No':
            res.redirect('/UserResearch/PortalSignup/V1/applyLenderServices/19');
            break;


        default:
            //This is a catch all for none of the above
            break;
    }
})



// applyNetworkServices radio buttons for legal entity
router.post('/UserResearch/PortalSignup/V1/applyNetworkServices/legalentity', function(req, res) {

    const legalentityChoice= req.session.data['legalentity']

    switch (legalentityChoice) {
        case 'LimitedCompany':
            res.redirect('/UserResearch/PortalSignup/V1/applyNetworkServices/3a');
            break;

        case 'SolePractitioner':
            res.redirect('/UserResearch/PortalSignup/V1/applyNetworkServices/3b');
            break;

        case 'GovernmentDepartment':
            res.redirect('/UserResearch/PortalSignup/V1/applyNetworkServices/3c');
            break;

        case 'PoliceServices':
            res.redirect('/UserResearch/PortalSignup/V1/applyNetworkServices/3d');
            break;

        case 'LimitedPartnership':
            res.redirect('/UserResearch/PortalSignup/V1/applyNetworkServices/3e');
            break;

        case 'Partnership':
            res.redirect('/UserResearch/PortalSignup/V1/applyNetworkServices/3f');
            break;

        case 'LocalAuthority':
            res.redirect('/UserResearch/PortalSignup/V1/applyNetworkServices/3g');
            break;

        case 'Other':
            res.redirect('/UserResearch/PortalSignup/V1/applyNetworkServices/3h');
            break;



        default:
            //This is a catch all for none of the above
            break;
    }
})

// applyNetworkServices radio buttons for regulated or licensed
router.post('/UserResearch/PortalSignup/V1/applyNetworkServices/regulatedorlicensed', function(req, res) {

    const regulatedorlicensedChoice= req.session.data['regulatedorlicensed']

    switch (regulatedorlicensedChoice) {
        case 'Yes':
            res.redirect('/UserResearch/PortalSignup/V1/applyNetworkServices/16a');
            break;

        case 'No':
            res.redirect('/UserResearch/PortalSignup/V1/applyNetworkServices/16b');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// applyNetworkServices radio buttons for does your organisaion employ an authorised person?
router.post('/UserResearch/PortalSignup/V1/applyNetworkServices/authorisedperson', function(req, res) {

    const authorisedpersonChoice= req.session.data['authorisedperson']

    switch (authorisedpersonChoice) {
        case 'Yes':
            res.redirect('/UserResearch/PortalSignup/V1/applyNetworkServices/17a');
            break;

        case 'No':
            res.redirect('/UserResearch/PortalSignup/V1/applyNetworkServices/17b');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// applyNetworkServices radio buttons for does your organisaion employ an authorised person?
router.post('/UserResearch/PortalSignup/V1/applyNetworkServices/insurancedetails', function(req, res) {

    const insurancedetailsChoice= req.session.data['insurancedetails']

    switch (insurancedetailsChoice) {
        case '1':
            res.redirect('/UserResearch/PortalSignup/V1/applyNetworkServices/19a');
            break;

        case '2':
            res.redirect('/UserResearch/PortalSignup/V1/applyNetworkServices/19b');
            break;

        case '3':
            res.redirect('/UserResearch/PortalSignup/V1/applyNetworkServices/20');
            break;

        case '4':
            res.redirect('/UserResearch/PortalSignup/V1/applyNetworkServices/19d');
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})

// applyNetworkServices radio buttons for termination on 19a
router.post('/UserResearch/PortalSignup/V1/applyNetworkServices/termination', function(req, res) {

    const terminationChoice= req.session.data['termination']

    switch (terminationChoice) {
        case 'No':
            res.redirect('/UserResearch/PortalSignup/V1/applyNetworkServices/20a');
            break;

        case 'Yes':
            res.redirect('/UserResearch/PortalSignup/V1/applyNetworkServices/20b');
            break;


        default:
            //This is a catch all for none of the above
            break;
    }
})

// applyNetworkServices radio buttons for termination on 20
router.post('/UserResearch/PortalSignup/V1/applyNetworkServices/termination03', function(req, res) {

    const termination03Choice= req.session.data['termination03']

    switch (termination03Choice) {
        case '1':
            res.redirect('/UserResearch/PortalSignup/V1/applyNetworkServices/20a');
            break;

        case '2':
            res.redirect('/UserResearch/PortalSignup/V1/applyNetworkServices/20b');
            break;


        default:
            //This is a catch all for none of the above
            break;
    }
})

// applyNetworkServices radio buttons for termination on 19a
router.post('/UserResearch/PortalSignup/V1/applyNetworkServices/contact', function(req, res) {

    const contactChoice= req.session.data['contact']

    switch (contactChoice) {
        case 'Yes':
            res.redirect('/UserResearch/PortalSignup/V1/applyNetworkServices/promo2');
            break;

        case 'No':
            res.redirect('/UserResearch/PortalSignup/V1/applyNetworkServices/22');
            break;


        default:
            //This is a catch all for none of the above
            break;
    }
})

router.post('/UserResearch/PortalSignup/V4/NewAccountPart1/businessaccountsolecontact', function(req, res) {

    const solecontactChoice = req.session.data['solecontact']

    switch (solecontactChoice) {
        case 'yes':
            res.redirect("/UserResearch/PortalSignup/V4/NewAccountPart1/index-0");
            break;

        case 'no':
            res.redirect("/UserResearch/PortalSignup/V3/NewAccountPart1/");
            break;

        default:
            //This is a catch all for none of the above
            break;
    }
})


module.exports = router

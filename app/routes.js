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
            res.redirect('/UserResearch/ContactformQA/Business/index');
            break;

        case 'application-help':
            res.redirect('/UserResearch/ContactformQA/Business/index');
            break;

        case 'information-about-land':
            res.redirect('/UserResearch/ContactformQA/Business/index');
            break;

        case 'help-with-find-a-property':
            res.redirect('/UserResearch/ContactformQA/Business/index');
            break;

        case 'help-with-search-land':
            res.redirect('/UserResearch/ContactformQA/Business/index');
            break;

        case 'local-office-appointment':
            res.redirect('/UserResearch/ContactformQA/Business/index');
            break;

        case 'help-with-digital-mortgage':
            res.redirect('/UserResearch/ContactformQA/Business/index');
            break;

        case 'help-with-property-alert':
            res.redirect('/UserResearch/ContactformQA/Business/index');
            break;

        case 'bankruptcy':
            res.redirect('/UserResearch/ContactformQA/Business/index');
            break;

        case 'report-registration-fraud':
            res.redirect('/UserResearch/ContactformQA/Business/index');
            break;

        case 'price-paid-information':
            res.redirect('/UserResearch/ContactformQA/Business/index');
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


module.exports = router
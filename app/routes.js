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

// Radio buttons on first public selection page
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




module.exports = router
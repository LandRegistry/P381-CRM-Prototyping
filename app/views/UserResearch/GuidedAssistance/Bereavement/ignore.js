
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
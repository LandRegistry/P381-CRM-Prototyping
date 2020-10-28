const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/UserResearch/ContactformQA/public-or-business-choice', function(req, res) {

    const introductionChoice = req.session.data['public-business']
// Add
switch(introductionChoice)
{
    case 'public-customer':
        res.redirect('/UserResearch/ContactformQA/Public/');
        break;

    case 'business-customer':
        res.redirect('/UserResearch/ContactformQA/Business/');
        break; 
        
    default:
    //This is a catch all for none of the above
        break;
}
 

})

module.exports = router
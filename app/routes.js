const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/UserResearch/ContactformQA/public-or-business-choice', function(req, res) {

    const introductionChoice = req.session.data['public-business']
// Add
switch(introductionChoice)
{
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

module.exports = router
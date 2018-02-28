var express = require('express');
var router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function (req, res, next) {

    var states = [
        { "code": "AL", "name": "Alabama (AL)" },
        { "code": "AK", "name": "Alaska (AK)" },
        { "code": "AZ", "name": "Arizona (AZ)" },
        { "code": "AR", "name": "Arkansas (AR)" },
        { "code": "AS", "name": "American Samoa (AS)" },
        { "code": "CA", "name": "California (CA)" },
        { "code": "CO", "name": "Colorado (CO)" },
        { "code": "CT", "name": "Connecticut (CT)" },
        { "code": "DE", "name": "Delaware (DE)" },
        { "code": "DC", "name": "District of Columbia (DC)" },
        { "code": "FL", "name": "Florida (FL)" },
        { "code": "GA", "name": "Georgia (GA)" },
        { "code": "GU", "name": "Guam (GU)" },
        { "code": "HI", "name": "Hawaii (HI)" },
        { "code": "ID", "name": "Idaho (ID)" },
        { "code": "IL", "name": "Illinois (IL)" },
        { "code": "IN", "name": "Indiana (IN)" },
        { "code": "IA", "name": "Iowa (IA)" },
        { "code": "KS", "name": "Kansas (KS)" },
        { "code": "KY", "name": "Kentucky (KY)" },
        { "code": "LA", "name": "Louisiana (LA)" },
        { "code": "ME", "name": "Maine (ME)" },
        { "code": "MD", "name": "Maryland (MD)" },
        { "code": "MA", "name": "Massachusetts (MA)" },
        { "code": "MI", "name": "Michigan (MI)" },
        { "code": "MN", "name": "Minnesota (MN)" },
        { "code": "MS", "name": "Mississippi (MS)" },
        { "code": "MO", "name": "Missouri (MO)" },
        { "code": "NV", "name": "Nevada (NV)" },
        { "code": "NH", "name": "New Hampshire (NH)" },
        { "code": "NJ", "name": "New Jersey (NJ)" },
        { "code": "NM", "name": "New Mexico (NM)" },
        { "code": "MNP", "name": "Northern Mariana Islands (MNP)" },
        { "code": "NY", "name": "New York (NY)" },
        { "code": "NC", "name": "North Carolina (NC)" },
        { "code": "ND", "name": "North Dakota (ND)" },
        { "code": "OH", "name": "Ohio (OH)" },
        { "code": "OK", "name": "Oklahoma (OK)" },
        { "code": "OR", "name": "Oregon (OR)" },
        { "code": "PA", "name": "Pennyslvania (PA)" },
        { "code": "PR", "name": "Puerto Rico (PR)" },
        { "code": "RI", "name": "Rhode Island (RI)" },
        { "code": "SC", "name": "South Carolina (SC)" },
        { "code": "SD", "name": "South Dakota (SD)" },
        { "code": "TN", "name": "Tennessee (TN)" },
        { "code": "TX", "name": "Texas (TX)" },
        { "code": "UT", "name": "Utah (UT)" },
        { "code": "VT", "name": "Vermont (VT)" },
        { "code": "VA", "name": "Virginia (VA)" },
        { "code": "VI", "name": "Virgin Islands (VI)" },
        { "code": "WA", "name": "Washington (WA)" },
        { "code": "WV", "name": "West Virginia (WV)" },
        { "code": "WI", "name": "Wisconsin (WI)" },
        { "code": "WY", "name": "Wyoming (WY)" },
        { "code": "GUAM", "name": "Guam (GU)" }
    ];

    res.json(states);

});

module.exports = router;

/**
 * Created by richardbrash on 10/21/15.
 */

function Config() {

    var self = this;

    self.programConfig = [

        { marriedFilingJointly: false, businessOwner: false, eval: "ti >= 200000", company: 'TSP', program: 'ELOS'},
        { marriedFilingJointly: false, businessOwner: false, eval: "ti < 200000", company: 'GLS', program: 'TaxPrep'},

        { marriedFilingJointly: true, businessOwner: false, eval: "ti >= 300000", company: 'TSP', program: 'ELOS'},
        { marriedFilingJointly: true, businessOwner: false, eval: "ti < 300000", company: 'GLS', program: 'TaxPrep'},
        
        { marriedFilingJointly: false, businessOwner: true, eval: "ti >= 200000", company: 'TSP', program: 'LOS'},
        { marriedFilingJointly: false, businessOwner: true, eval: "ti >= 150000 && ti < 200000", company: 'GLS', program: 'TaxSavings'},
        { marriedFilingJointly: false, businessOwner: true, eval: "ti < 150000", company: 'TSP', program: 'TaxAcademy'},

        { marriedFilingJointly: true, businessOwner: true, eval: "ti >= 300000", company: 'TSP', program: 'LOS'},
        { marriedFilingJointly: true, businessOwner: true, eval: "ti >= 150000 && ti < 300000", company: 'GLS', program: 'TaxSavings'},
        { marriedFilingJointly: true, businessOwner: true, eval: "ti < 150000", company: 'TSP', program: 'TaxAcademy'}
    ]

    self.infusionsoftConfigs = [
        {
            name: "TSP",
            AppName: "cj105",
            ApiKey: "8ffacc72cbdc34424bd6933cb71b7f4c",
        },
        {
            name: "GLS",
            AppName: "yl336",
            ApiKey: "34f9c614f0fea977700816fc0fb3f0c5",
        }
    ];


    self.ISConfig = function (name) {
        var config = null;

        for (var key in self.infusionsoftConfigs) {
            if (self.infusionsoftConfigs[key].name == name) {
                config = self.infusionsoftConfigs[key];
            }
        }

        return config;
    }


}

module.exports = new Config();
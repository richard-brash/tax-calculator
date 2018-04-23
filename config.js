/**
 * Created by richardbrash on 10/21/15.
 */

function Config() {

    var self = this;

    self.programConfig = [

        { marriedFilingJointly: false, businessOwner: false, eval: "ti >= 200000", company: 'TSP', program: 'ELOS' },
        { marriedFilingJointly: false, businessOwner: false, eval: "ti < 200000", company: 'GLS', program: 'TaxPrep' },

        { marriedFilingJointly: true, businessOwner: false, eval: "ti >= 300000", company: 'TSP', program: 'ELOS' },
        { marriedFilingJointly: true, businessOwner: false, eval: "ti < 300000", company: 'GLS', program: 'TaxPrep' },

        { marriedFilingJointly: false, businessOwner: true, eval: "ti >= 200000", company: 'TSP', program: 'LOS' },
        { marriedFilingJointly: false, businessOwner: true, eval: "ti >= 150000 && ti < 200000", company: 'GLS', program: 'TaxSavings' },
        { marriedFilingJointly: false, businessOwner: true, eval: "ti < 150000", company: 'TSP', program: 'TaxAcademy' },

        { marriedFilingJointly: true, businessOwner: true, eval: "ti >= 300000", company: 'TSP', program: 'LOS' },
        { marriedFilingJointly: true, businessOwner: true, eval: "ti >= 150000 && ti < 300000", company: 'GLS', program: 'TaxSavings' },
        { marriedFilingJointly: true, businessOwner: true, eval: "ti < 150000", company: 'TSP', program: 'TaxAcademy' }
    ]

    self.Brackets2018 = [
        { order: 1, MFJ: false, amount: 9525, rate: .1 },
        { order: 1, MFJ: true, amount: 19050, rate: .1 },

        { order: 2, MFJ: false, amount: 29175, rate: .12 },
        { order: 2, MFJ: true, amount: 58350, rate: .12 },

        { order: 3, MFJ: false, amount: 43800, rate: .22 },
        { order: 3, MFJ: true, amount: 87600, rate: .22 },

        { order: 4, MFJ: true, amount: 150000, rate: .24 },
        { order: 4, MFJ: false, amount: 75000, rate: .24 },

        { order: 5, MFJ: true, amount: 85000, rate: .32 },
        { order: 5, MFJ: false, amount: 42500, rate: .32 },

        { order: 6, MFJ: true, amount: 200000, rate: .35 },
        { order: 6, MFJ: false, amount: 300000, rate: .35 },

        { order: 7, MFJ: true, amount: 0, rate: .37 },
        { order: 7, MFJ: false, amount: 0, rate: .37 }
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
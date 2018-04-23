var Config = require('../config');
var SavingsData = require('../models/SavingsData');

function Calculator() {

    var self = this;

    self.calculate = function (data) {

        // program determines how we put them into Infusionsoft
        var program = {};

        var rates = Config.programConfig.filter(config => (
            (config.marriedFilingJointly == data._MarriedFilingJointly) &&
            (config.businessOwner == data._BusinessOwner)
        ));

        rates.forEach(rate => {
            var ti = data._TaxableIncome;
            if (eval(rate.eval)) {
                program = rate;
            }
        });


        //  Now we start the acutal tax saving calculations
        var original = new SavingsData();
        var lowEnd = new SavingsData();
        var highEnd = new SavingsData();

        original.AGI = data._TaxableIncome;
        lowEnd.AGI = data._TaxableIncome;
        highEnd.AGI = data._TaxableIncome;

        original.Scorecard = 0;
        lowEnd.Scorecard = self.scorecard(data, true);
        highEnd.Scorecard = self.scorecard(data, false);

        original.RevisedAGI = 0;
        lowEnd.RevisedAGI = lowEnd.AGI - lowEnd.Scorecard;
        highEnd.RevisedAGI = highEnd.AGI - highEnd.Scorecard;

        original.ItemizedDeductions = (program.marriedFilingJointly) ? 24000 : 12000;
        lowEnd.ItemizedDeductions = (program.marriedFilingJointly) ? 24000 : 12000;
        highEnd.ItemizedDeductions = (program.marriedFilingJointly) ? 24000 : 12000;

        original.GPP = 0;
        lowEnd.GPP = lowEnd.RevisedAGI * .3;
        highEnd.GPP = highEnd.RevisedAGI * .5;

        original.RevisedItemizedDeductions = 0;
        lowEnd.RevisedItemizedDeductions = lowEnd.ItemizedDeductions + lowEnd.GPP;
        highEnd.RevisedItemizedDeductions = highEnd.ItemizedDeductions + highEnd.GPP;

        original.TaxableIncome = original.AGI - original.ItemizedDeductions;
        lowEnd.TaxableIncome = lowEnd.RevisedAGI - lowEnd.RevisedItemizedDeductions;
        highEnd.TaxableIncome = highEnd.RevisedAGI - highEnd.RevisedItemizedDeductions;

        original.QBIDeduction = (!data._SoleOwner) ? 0 : self.qbi(original);
        lowEnd.QBIDeduction = (!data._SoleOwner) ? 0 : self.qbi(lowEnd);
        highEnd.QBIDeduction = (!data._SoleOwner) ? 0 : self.qbi(highEnd);

        original.RevisedTaxableIncome = original.TaxableIncome - original.QBIDeduction;
        lowEnd.RevisedTaxableIncome = lowEnd.TaxableIncome - lowEnd.QBIDeduction;
        highEnd.RevisedTaxableIncome = highEnd.TaxableIncome - highEnd.QBIDeduction;

        original.TaxForecast = self.taxForcast(original.RevisedTaxableIncome, program.marriedFilingJointly);
        lowEnd.TaxForecast = self.taxForcast(lowEnd.RevisedTaxableIncome, program.marriedFilingJointly);
        highEnd.TaxForecast = self.taxForcast(highEnd.RevisedTaxableIncome, program.marriedFilingJointly);

        lowEnd.AnnualSavings = original.TaxForecast - lowEnd.TaxForecast;
        lowEnd.GPPFunding = lowEnd.GPP / 4;
        lowEnd.AnnualFederalSavings = (lowEnd.AnnualSavings - lowEnd.GPPFunding) * (1-.05);

        highEnd.AnnualSavings = original.TaxForecast - highEnd.TaxForecast;
        highEnd.GPPFunding = highEnd.GPP / 4;
        highEnd.AnnualFederalSavings = (highEnd.AnnualSavings - highEnd.GPPFunding) * (1-.05);


        program.original = original;
        program.lowEnd = lowEnd;
        program.highEnd = highEnd;

        return program;

    }

    self.scorecard = function (data, low) {
        if (low) {
            return (data._BusinessOwner && data._SoleOwner) ? 15000 : 0;
        } else {
            var part1 = (data._BusinessOwner && data._SoleOwner) ? 15000 : 0;
            var part2 = (data._NumberOfChildren > 0) ? (data._NumberOfChildren - data._ChildrenWorkInBusiness) * 12000 : 0;
            var part3 = data._VacationAmount;
            var part4 = (data._HomeOffice == true) ? 2000 : 0;

            return part1 + part2 + part3 + part4;
        }
    }

    //IF(D10<315001,(D4*0.3)*0.2,0))
    self.qbi = function (scorecard) {
        if (scorecard.TaxableIncome < 315001) {
            return (scorecard.AGI * .3) * .2;
        } else {
            return 0;
        }
    }

    self.taxForcast = function (revisedTaxableIncome, mfj) {
        var calcs = [];

        var first = Config.Brackets2018.filter(bracket => bracket.order == 1 && bracket.MFJ == mfj)[0];
        var second = Config.Brackets2018.filter(bracket => bracket.order == 2 && bracket.MFJ == mfj)[0];
        var third = Config.Brackets2018.filter(bracket => bracket.order == 3 && bracket.MFJ == mfj)[0];
        var fourth = Config.Brackets2018.filter(bracket => bracket.order == 4 && bracket.MFJ == mfj)[0];
        var fifth = Config.Brackets2018.filter(bracket => bracket.order == 5 && bracket.MFJ == mfj)[0];
        var sixth = Config.Brackets2018.filter(bracket => bracket.order == 6 && bracket.MFJ == mfj)[0];
        var seventh = Config.Brackets2018.filter(bracket => bracket.order == 7 && bracket.MFJ == mfj)[0];

        // zero
        if (revisedTaxableIncome > first.amount) {
            calcs.push(first.amount);
        } else {
            calcs.push(revisedTaxableIncome);
        }

        // one
        if ((revisedTaxableIncome - first.amount) > second.amount) {
            calcs.push(second.amount);
        } else {
            calcs.push(revisedTaxableIncome - first.amount);
        }

        // two
        if ((revisedTaxableIncome - (calcs[0] + calcs[1])) > third.amount) {
            calcs.push(third.amount);
        } else {
            calcs.push(revisedTaxableIncome - (calcs[0] + calcs[1]));
        }

        // three
        if ((revisedTaxableIncome - (calcs[0] + calcs[1] + calcs[2])) > fourth.amount) {
            calcs.push(fourth.amount);
        } else {
            calcs.push(revisedTaxableIncome - (calcs[0] + calcs[1] + calcs[2]));
        }

        // four
        if ((revisedTaxableIncome - (calcs[0] + calcs[1] + calcs[2] + calcs[3])) > fifth.amount) {
            calcs.push(fifth.amount);
        } else {
            calcs.push(revisedTaxableIncome - (calcs[0] + calcs[1] + calcs[2] + calcs[3]));
        }

        // five
        if ((revisedTaxableIncome - (calcs[0] + calcs[1] + calcs[2] + calcs[3] + calcs[4])) > sixth.amount) {
            calcs.push(sixth.amount);
        } else {
            calcs.push(revisedTaxableIncome - (calcs[0] + calcs[1] + calcs[2] + calcs[3] + calcs[4]));
        }

        // remainder (six)
        if ((revisedTaxableIncome - (calcs[0] + calcs[1] + calcs[2] + calcs[3] + calcs[4] + calcs[5])) > 0) {
            calcs.push(revisedTaxableIncome - (calcs[0] + calcs[1] + calcs[2] + calcs[3] + calcs[4] + calcs[5]));
        } else {
            calcs.push(0);
        }

        var runningTotal = calcs[0] * first.rate;
        runningTotal += calcs[1] * second.rate;
        runningTotal += calcs[2] * third.rate;
        runningTotal += calcs[3] * fourth.rate;
        runningTotal += calcs[4] * fifth.rate;
        runningTotal += calcs[5] * sixth.rate;
        runningTotal += calcs[6] * seventh.rate;

        return runningTotal;
    }

}

module.exports = new Calculator();








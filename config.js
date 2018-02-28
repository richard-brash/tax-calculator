/**
 * Created by richardbrash on 10/21/15.
 */

function Config(){

    var self = this;

    self.infusionsoftConfigs = [
        {
            name:"TSP",
            AppName:"cj105",
            ApiKey:"8ffacc72cbdc34424bd6933cb71b7f4c",
        }


    ];


    self.ISConfig = function(name){
        var config = null;

        for(var key in self.infusionsoftConfigs){
            if(self.infusionsoftConfigs[key].name == name){
                config = self.infusionsoftConfigs[key];
            }
        }

        return config;
    }


}

module.exports = new Config();
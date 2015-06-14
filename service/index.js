'use strict';

var yeoman = require('yeoman-generator');
var _ = require('underscore.string');

var NovaGenerator = yeoman.generators.NamedBase.extend({

    initializing: function () {
        this.capName = _.capitalize(this.appname);
        this.camelName = _.capitalize(_.camelize(this.name, true));
        this.dashName = _.dasherize(_.decapitalize(this.name));
    },

    writing: function () {

        var basePath = 'client/services/' + this.dashName + '/' + this.dashName;

        this.template('service.ts', basePath + '.ts');

        var filters = this.config.get('filters');

        if (filters && filters.karma) {
            this.template('spec.js', basePath + '.spec.js');
        }

    }

});

module.exports = NovaGenerator;

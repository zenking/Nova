'use strict';

var yeoman = require('yeoman-generator');
var _ = require('underscore.string');

var NovaGenerator = yeoman.generators.NamedBase.extend({

    initializing: function () {
        this.dashName = _.dasherize(this.name);
        this.camelName = _.camelize(this.name);
    },

    writing: function () {

        var basePath = 'client/filters/' + this.dashName + '/' + this.dashName;

        this.template('filter.ts', basePath + '.ts');

        var filters = this.config.get('filters');

        if (filters && filters.karma) {
            this.template('filter.spec.js', basePath + '.spec.js');
        }

    }

});

module.exports = NovaGenerator;

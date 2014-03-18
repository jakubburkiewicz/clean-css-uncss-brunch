var uncss    = require('uncss'),
    cleancss = require('clean-css');

var extend = function(object, source) {
    var value;
    for (var key in source) {
        value = source[key];
        object[key] = (typeof value === 'object' && !(value instanceof RegExp)) ? (Array.isArray(value) ? value.slice() : extend({}, value)) : value;
    }
    return object;
};

function CleanUnCSSer(config) {
    if(config == null)
        config = {};

    var plugins = config.plugins;

    if(plugins == null)
        plugins = {};

    this.options = plugins.cleanuncss ? extend({}, plugins.cleanuncss) : {};
};

CleanUnCSSer.prototype.brunchPlugin = true;
CleanUnCSSer.prototype.type = 'stylesheet';
CleanUnCSSer.prototype.extension = 'css';

CleanUnCSSer.prototype.optimize = function(data, path, callback) {
    var self = this;

    if(this.options.uncss != null) {
        if(this.options.uncss.options == null)
            this.options.uncss.options = {};

        if(this.options.uncss.files == null)
            this.options.uncss.files = [];

        uncss(this.options.uncss.files, this.options.uncss.options, function(error, output) {
            if(self.options.cleancss != null) {
                try {
                    output = cleancss.process(output, self.options.cleancss);
                } catch(_error) {
                    error = "Clean CSS: CSS minify failed on " + path + ": " + _error;
                }
            }

            return process.nextTick(function() {
                return callback(error, output || data);
            });

        });
    } else {
        error = "CleanUnCSS: Configuration missed."

        return process.nextTick(function() {
            return callback(error, data);
        });
    }
};

module.exports = CleanUnCSSer;

var path = require('path');

module.exports = function (config) {

    config.set({
        basePath: 'src',
        frameworks: ['mocha', 'chai'],
        reporters: ['dots'],
        singleRun: true,
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['Firefox'],
        files: [
            'tests/index.js'
        ],
        autoWatch: true,
        preprocessors: {
            'tests/index.js': ['webpack']
        },
        webpack: {
            module: {
                loaders: [
                    {
                        test: /\.ts$/,
                        loaders: ['awesome-typescript-loader']
                    }
                ]
            }
        },
        webpackMiddleware: {
            stats: {
                color: true
            }
        }
    });

};

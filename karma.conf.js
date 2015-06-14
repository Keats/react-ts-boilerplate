var path = require('path');

module.exports = function (config) {

    config.set({
        singleRun: true,
        frameworks: ['mocha', 'chai'],
        reporters: ['dots'],
        browsers: ['PhantomJS'],
        files: [
            'src/tests/index.js'
        ],
        preprocessors: {
            'src/tests/index.js': ['webpack']
        },
        webpack: {
            noInfo: true,
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
            noInfo: true,
            stats: {
                color: true,
                chunkModules: false,
                modules: false
            }
        }
    });

};

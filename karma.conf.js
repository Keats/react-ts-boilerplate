var path = require('path');

module.exports = function (config) {
    config.set({
        basePath: 'src',
        singleRun: true,
        frameworks: ['mocha', 'chai'],
        reporters: ['dots'],
        browsers: ['Firefox'],
        files: [
            'tests/index.js'
        ],
        preprocessors: {
            'tests/index.js': ['webpack']
        },
        webpack: {
            resolve: {
                extensions: ['', '.js', '.ts']
            },
            module: {
                loaders: [
                    {
                        test: /\.ts$/,
                        exclude: 'node_modules',
                        loaders: ['awesome-typescript-loader']
                    }
                ]
            }
        },
        webpackMiddleware: {
            stats: {
                color: true,
                chunkModules: false,
                modules: false
            }
        }
    });

};

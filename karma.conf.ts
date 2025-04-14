import { Config } from 'karma';

module.exports = function (config: Config) {
    config.set({
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        files: [
            { pattern: './src/test.ts', watched: false }
        ],
        preprocessors: {
            './src/test.ts': ['@angular-devkit/build-angular']
        },
        reporters: ['progress', 'kjhtml', 'coverage'],
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-jasmine-html-reporter',
            'karma-coverage',
            '@angular-devkit/build-angular'
        ],
        coverageReporter: {
            dir: require('path').join(__dirname, './coverage/angular-task'),
            subdir: '.',
            reporters: [
                { type: 'html' },
                { type: 'text-summary' }
            ]
        },
        browsers: ['Chrome'],
        singleRun: false,
        restartOnFileChange: true
    });
};

const args = [

    // Flags
    '-w es6',
    '--no-verify',
    '--no-convert',
    '--no-beautify',
    '--no-comments',
    '--no-create',

    // Input/Output
    './src/openapi/model/*.proto',
    '-o',
    './src/openapi/model/index.js',
];

module.exports = {
    proto: {
        command: `pbjs -t static-module ${args.join(' ')}`,
    },
    uglify: {
        command: 'uglifyjs ./dist/release/openapi-client.js > ./dist/release/openapi-client.min.js',
    },
};

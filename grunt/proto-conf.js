const args = [
    'import_style=commonjs',
    // 'one_output_file_per_input_file=false',
    //'extension=jsx',
    'binary:.',
];

module.exports = {
    proto: {
        command: `protoc --js_out=${args.join(',')} ./src/openapi/model/*.proto`,
    },
    uglify: {
        command: 'uglifyjs ./dist/release/openapi-client.js > ./dist/release/openapi-client.min.js',
    },
};

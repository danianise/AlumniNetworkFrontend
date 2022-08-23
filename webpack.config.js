const path=require('path')

module.exports = {
    plugins: [
        new Dotenv({
          systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
        })
      ]
}
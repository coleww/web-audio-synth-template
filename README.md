# web-audio-synth-template

a template for building web audio synths in a browserify/npm fashion [based on this blog post](http://colewillsea.com/blog/publishing-synthesizers-to-npm.html)

index.js contains a lot of boilerplate commented out code that you can use to yr leisure. 
test.js contains a small test suite that tries to ensure that yr synth or FX is inter-operable with other web audio libraries.

If you don't like the choices I made in index.js, you can still just copy test.js into yr project and `npm install --save-dev tape`
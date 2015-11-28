// yr function should accept an audioContext, and optional params/opts
module.exports = function (ac, opts) {


  return {
    ac: ac,
    connect: function () {

    },
    // input: function () {
      // optional: returns the input node for web audio FX
    // },
    start: function (when) {

    },
    stop: function (when) {

    },
    // update: function (opts) {
      // optional: for performing high-level updates on the instrument.
    // },
    // import: function (opts) {
      // optional: sets opts data on all audioNodes at ac.currentTime
    // },
    // export: function () {
      // optional: returns JSON representation of the instruments current attributes, to be passed as opts to it's constructor or import function
    // },
    keys: function () {
      // returns an object of `{stringKey: audioNode}` for raw manipulation
    }
  }






}
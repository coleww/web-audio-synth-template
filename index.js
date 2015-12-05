

// yr function should accept an audioContext, and optional params/opts
module.exports = function (ac, opts) {
  // make some audioNodes, connect them, store them on the object
  var audioNodes = {
    source: ac.createOscillator()
  }

  // ...

  return {
    connect: function (input) {
      // // this function should call `connect` on yr output nodes with `input` as the arg
      // audioNodes.source.connect(input)
    },
    // input: function () {
      // // optional: returns the input node for web audio FX connections
      // return inputNode // ?
    // },
    start: function (when) {
      // //this function should call `start(when)` on yr source nodes. Probably oscillators/samplers i guess, and any LFO too!
      // audioNodes.source.start(when)
    },
    stop: function (when) {
      // // same thing as start but with `stop(when)`
      // audioNodes.source.stop(when)
    },
    // update: function (opts) {
    //   // optional: for performing high-level updates on the instrument.
    //   Object.keys(opts).forEach(function (k) {
    //     var v = opts[k]
    //     // ????
    //   })
    // },
    // import: function (opts) {
    //   // optional: sets opts data on all audioNodes at ac.currentTime
    //   Object.keys(opts).forEach(function (k) {
    //     var v = opts[k]
    //     // ????
    //   })
    // },
    // export: function () {
    //   // optional: returns object representation of the instruments current attributes, to be passed as opts to it's constructor or import function
    //   return {
    //     // ????
    //   }
    // },
    nodes: function () {
      // returns an object of `{stringKey: audioNode}` for raw manipulation
      return audioNodes
    }
  }
}

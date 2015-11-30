// // it would be kinda odd to make a module that loaded a buffer like this, but ok sure
// // helper for loading audio files into buffers
// var loadSample2Buff = require('load-sample-2-buff')
// // an immortal buffer player sampler thing
// var samplePlayer = require('@coleww/openmusic-sample-player')

// an immortal oscillator, can be start'ed over and over.
var oscillator = require('openmusic-oscillator')

// that one distortion curve that everyone copy pastes from stack overflow anyways
var makeDistortionCurve = require('make-distortion-curve')

// yr function should accept an audioContext, and optional params/opts
module.exports = function (ac, opts) {



    // var loadSample2Buff = require('load-sample-2-buff')

    // var SamplePlayer = require('openmusic-sample-player')

    // var audioContext = new AudioContext()
    // var player = SamplePlayer(audioContext)

    // loadSample2Buff(audioContext, './noise.ogg', function(buffer){
    //     player.buffer = buffer
    //     player.start()
    // })















// EXAMPLE of building each type of node
// as well as all of it's potential settings



// nodes.source = context.createOscillator()
//   nodes.filter = context.createBiquadFilter()
//   nodes.analyser = context.createAnalyser()
//   nodes.distortion = context.createWaveShaper()

//   nodes.lowFilter = context.createBiquadFilter()
//   nodes.volume = context.createGain()

//   nodes.source.connect(nodes.filter)
//   nodes.filter.connect(nodes.analyser)
//   nodes.analyser.connect(nodes.distortion)
//   nodes.distortion.connect(nodes.lowFilter)
//   nodes.lowFilter.connect(nodes.volume)

//   nodes.import = function(data){
//     data = data || {}
//     data.source = data.source || {}
//     data.distortion = data.distortion || {}
//     data.filter = data.filter || {}
//     data.lowFilter = data.lowFilter || {}
//     data.volume = data.volume || {}

//     this.source.type = data.source.type || 'square'
//     this.source.frequency.value = data.source.frequency || [100, 150, 200, 250, 50][Math.floor(Math.random() * 5)]
//     this.source.detune.value = data.source.detune || 0

//     this.distortion.curve = data.distortion.curve || makeDistortionCurve(100)

//     this.filter.Q.value = data.filter.Q || 25
//     this.filter.frequency.value = data.filter.frequency || 400
//     this.filter.type = data.filter.type || 'lowshelf'
//     this.filter.detune = data.filter.detune || 0

//     this.lowFilter.Q.value = data.lowFilter.Q || 25
//     this.lowFilter.frequency.value = data.lowFilter.frequency || 300
//     this.lowFilter.type = data.lowFilter.type || 'lowpass'
//     this.lowFilter.detune = data.lowFilter.detune || 0

//     this.volume.gain.value = data.volume.gain || 0.3





































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
    nodes: function () {
      // returns an object of `{stringKey: audioNode}` for raw manipulation
      return {}
    }
  }






}
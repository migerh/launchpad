const debug = require('debug');

const LaunchpadMidi = require('./LaunchpadMidi');

class LaunchpadBrowser extends LaunchpadMidi {
    constructor(input, output) {
        super(input, output)

        this._debug = debug('lp:launchpadMidi:Browser')

        this._input.onmidimessage = event => {
            this._handleMidiMessage(event.data)
        }
    }

    _send(order, note, velocity) {
        this._debug('sending', [order, note, velocity])
        this._output.send([order, note, velocity])
    }
}

module.exports = LaunchpadBrowser;
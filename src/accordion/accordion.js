import './accordion.scss';
import './sidebars.scss';
import Chords from './Chords';

export default {
  el: '#accordion',
  data: {
    chords: [ "m", "M", "dim", "aug", "m7", "M7", "D7", "m7b5",  "mM7", "dim7", "+M7", "+7",  "D7b5", "dimM7", "D6/5", "hd6/5", "+6/5" ],
    keys: [ "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B" ],
    chordPlayer: null,
    isLoaded: false,
    volume: 0.33,
    arpeggio: 0,
  },
  computed: {

  },
  methods: {
    playChord(key, chord) {
      let keyIndex = this.keys.indexOf(key);
      let chordIndex = this.chords.indexOf(chord);
      this.chordPlayer.playChord(keyIndex + 12, chordIndex, this.arpeggio, this.volume);
      console.log(`Playing: ${chord} in ${key}`);
    }
  },
  mounted() {
    this.chordPlayer = new Chords();
    this.chordPlayer.getPromises().then( () => {
      this.isLoaded = true;
      console.log("Locked and loaded");
    });
  }
};

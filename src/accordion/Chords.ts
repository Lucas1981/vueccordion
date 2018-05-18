import Sound from './Sound';
import chordIntervals from './chord-intervals.ts';

export default class Chords {

  private sound: Sound = null;

  constructor() {
    this.sound = new Sound();
  }

  public playChord(root: number, chord: number, speed: number, volume: number) {
    let intervals = chordIntervals[chord];
    for(let i = 0; i < intervals.length; i++) {
      setTimeout(() => {
        this.sound.playSound(root + intervals[i], volume);
      }, i * speed);
    }
  }

  public getPromises() {
    return this.sound.getPromises();
  }

}

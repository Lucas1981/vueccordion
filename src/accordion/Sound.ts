export default class Sound {

  private mySound: any[] = [];
  private promises: any[] = [];
  private audioChannels: any[] = [];
  private audioQueue: number = 0;

  constructor() {
    this.initiate();
  }

  private initiate() {
    for(let i = 0; i < 48; i++) {
      this.promises.push(new Promise( (resolve: Function, reject: Function) => {
        this.mySound[i] = new Audio();
        this.mySound[i].src = "audio/" + i.toString() + ".wav";
        this.mySound[i].preload = 'auto';
        this.mySound[i].load();
        this.mySound[i].addEventListener("loadeddata", () => {
          resolve();
        });
      }));
    }

    for(let i = 0; i < 32; i++) this.audioChannels[i] = new Audio();

  }

  public playSound(index: number, volume: number) {
    this.audioChannels[this.audioQueue].src = this.mySound[index].src
    this.audioChannels[this.audioQueue].load();
    this.audioChannels[this.audioQueue].volume = volume;
    this.audioChannels[this.audioQueue].play();

    this.audioQueue = (this.audioQueue + 1) % 31;

  }

  public getPromises() {
    return Promise.all(this.promises);
  }

}

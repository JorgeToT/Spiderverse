class Spiderman {
  constructor(name, age, actor, movies, studio) {
    this.name = "Spiderman Marvel";
    this.age = 25;
    this.actor = "Tom Holland";
    this.movies = 5;
    this.studio = "Marvel";
  }
  getInfo() {
    return "Hey, I'm " + this.actor + " from " + this.studio;
  }
}

module.exports = Spiderman;

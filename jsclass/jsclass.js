class Clothes {
    constructor (name, likes) {
        this._name = name;
        this._likes = likes;
        this._cost = 300;
    }



get name() {
    return this._name;
}

get likes() {
    return this._likes;
}

incrementLikes() {
    this._likes++;
}

price(num) {
    this._cost = num;
    console.log(`cost of the bag is ${this._cost}`); 

}


}

var MichaelKors = new Clothes("Michael Kors", 11);
console.log (MichaelKors.name);
console.log(MichaelKors.likes);
MichaelKors.incrementLikes();
console.log(MichaelKors.likes);
MichaelKors.price(50);


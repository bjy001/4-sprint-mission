class Product {
    #name;
    #description;
    #price;
    #tags;
    #images;
    #favoriteCount;

    constructor(name, description, price, tags, images, favoriteCount){
        this.#name = name;
        this.#description = description;
        this.#price = price;
        this.#tags = tags;
        this.#images = images;
        this.#favoriteCount = 0;
    };

    favorite() {
        this.favoriteCount = favoriteCount + 1;
    }

    //setter
    setName(name) {
        this.#name = name;
    }

    setDescription(description){
        this.#description;
    }

    setPrice(price){
        this.#price;
    }

    setTags(tags){
        this.#tags;
    }

    setImages(images){
        this.#images = images;
    }

    setFavoriteCount(favoriteCount){
        this.#favoriteCount = favoriteCount;
    }

    //getter
    getName(){
        return this.#name;
    }

    getDescription(){
        return this.#description;
    }

    getPrice(price){
        return this.#price;
    }

    getTags(){
        return this.#tags;
    }

    getImages(){
        return this.#images;
    }

    getFavoriteCount(){
        return this.#favoriteCount;
    }




}
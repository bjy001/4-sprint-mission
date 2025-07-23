class Product {
    name;
    description;
    price;
    tags;
    images;
    favoriteCount;

    constructor(name, description, price, tags, images, favoriteCount){
        this.name = name;
        this.description = description;
        this.price = price;
        this.tags = tags;
        this.images = images;
        this.favoriteCount = 0;
    };

    favorite() {
        this.favoriteCount = favoriteCount + 1;
    }


}
class Article {
    #title;
    #content;
    #writer;
    #likeCount;
    #createdAt;

    constructor(title,content,writer, createdAt){
        this.#title = title;
        this.#content = content;
        this.#writer = writer;
        this.#likeCount = 0;
        this.#createdAt;
    };

    like(){
        this.#likeCount = this.#likeCount + 1;
    }

    //setter
    setTitle(title){
        this.#title = title;
    }

    setContent(content){
        this.#content = content;
    }

    setWriter(writer){
        this.#writer = writer;
    }

    setLikeCount(likeCount){
        this.#likeCount = likeCount;
    }

    //getter
    getTitle(){
        return this.#title
    }

    getContent() {
        return this.#content;
    }
    
    getWriter() {
        return this.#writer
    }

    getLikeCount() {
        return this.#likeCount;
    }



}
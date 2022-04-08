class PostDto {

    constructor(text, image) {
      this.text = text;
      this.image = image;
    }
  
    print() {
      return this.text + ':' + this.image;
    }
  }
  
  module.exports = PostDto;
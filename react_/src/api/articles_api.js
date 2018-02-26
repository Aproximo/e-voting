import articles from "../json/articles";

const ArticlesAPI = {
    articles,
    all: function() { return this.articles},
    get: function(id) {
        const isArticle = p => p.number === id;
        return this.articles.find(isArticle)
    }
};

export default ArticlesAPI
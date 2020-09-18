define({ "api": [
  {
    "type": "delete",
    "url": "/delete-article",
    "title": "Deletes an Article",
    "version": "0.1.0",
    "name": "deleteArticle",
    "group": "Article",
    "description": "<p>Delete a single article stored in the db (CRUD Operation)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The article title</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The article's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Front-end / Back-end / Mixed (Both)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "summary",
            "description": "<p>The article's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>The Route of the image saved in the hosting</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Release date of the article</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[Array[string]]",
            "optional": false,
            "field": "tags",
            "description": "<p>2xN Matrix which have 2 Types of tags. Techonolgies[0] and Keywords[1] . Needed for aside and searchbar</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[String]",
            "optional": false,
            "field": "content",
            "description": "<p>An Array of paragraphs and routes of images to create an article</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "visits",
            "description": "<p>The number of article visits</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[Array[string]]",
            "optional": false,
            "field": "references",
            "description": "<p>2xN Matrix (N=Qty of references) which have Link[0] and Name[1] of the page references (String).</p>"
          }
        ]
      }
    },
    "filename": "routes/routes.js",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/article/:title",
    "title": "Gets a single article",
    "version": "0.1.0",
    "name": "getArticle",
    "group": "Article",
    "description": "<p>Gets a single article storeds in the DB based on title (to be showed in aweb4devs.com/articles/currentArticle)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The article title</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The article's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Front-end / Back-end / Mixed (Both)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "summary",
            "description": "<p>The article's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>The Route of the image saved in the hosting</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Release date of the article</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[Array[string]]",
            "optional": false,
            "field": "tags",
            "description": "<p>2xN Matrix which have 2 Types of tags. Techonolgies[0] and Keywords[1] . Needed for aside and searchbar</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[String]",
            "optional": false,
            "field": "content",
            "description": "<p>An Array of paragraphs and routes of images to create an article</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "visits",
            "description": "<p>The number of article visits</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[Array[string]]",
            "optional": false,
            "field": "references",
            "description": "<p>2xN Matrix (N=Qty of references) which have Link[0] and Name[1] of the page references (String).</p>"
          }
        ]
      }
    },
    "filename": "routes/routes.js",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/articles",
    "title": "Gets all the articles",
    "version": "0.1.0",
    "name": "getArticles",
    "group": "Article",
    "description": "<p>Gets all the articles storeds in the DB (to be showed in aweb4devs.com/articles)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The article's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "summary",
            "description": "<p>The article's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>The Route of the image saved in the hosting</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Release date of the article</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "visits",
            "description": "<p>The number of article visits</p>"
          }
        ]
      }
    },
    "filename": "routes/routes.js",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/article/aside/:asideArticles",
    "title": "Gets the Relationated Articles",
    "version": "0.1.0",
    "name": "getAsideArticles",
    "group": "Article",
    "description": "<p>Gets the Relationated Articles in the DB based on current tags array (to be showed in aweb4devs.com/articles/currentArticle)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asideArticles",
            "description": "<p>an array of technologies tags separated by &quot;+&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The article's title</p>"
          }
        ]
      }
    },
    "filename": "routes/routes.js",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/homepage/news/most-visited-articles",
    "title": "Gets the 5 most visited articles",
    "version": "0.1.0",
    "name": "getMostVisitedsArticles",
    "group": "Article",
    "description": "<p>Gets the 5 most visiteds articles based on the &quot;Visits&quot; keys storeds in the DB (to be showed in aweb4devs.com)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The article's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "summary",
            "description": "<p>The article's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>The Route of the image saved in the hosting</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Release date of the article</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "visits",
            "description": "<p>The number of article visits</p>"
          }
        ]
      }
    },
    "filename": "routes/routes.js",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/homepage/3articles",
    "title": "Gets 3 recents articles",
    "version": "0.1.0",
    "name": "getThreeArticles",
    "group": "Article",
    "description": "<p>Gets the 3 most recents articles storeds in the db (to be showed in aweb4devs.com)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The article's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "summary",
            "description": "<p>The article's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>The Route of the image saved in the hosting</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Release date of the article</p>"
          }
        ]
      }
    },
    "filename": "routes/routes.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/save-article",
    "title": "Saves an article in the db",
    "version": "0.1.0",
    "name": "saveArticle",
    "group": "Article",
    "description": "<p>Saves a new article in the db (CRUD Operation)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The article's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Front-end / Back-end / Mixed (Both)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "summary",
            "description": "<p>The article's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>The Route of the image saved in the hosting</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Release date of the article</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[Array[string]]",
            "optional": false,
            "field": "tags",
            "description": "<p>2xN Matrix which have 2 Types of tags. Techonolgies[0] and Keywords[1] . Needed for aside and searchbar</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[String]",
            "optional": false,
            "field": "content",
            "description": "<p>An Array of paragraphs and routes of images to create an article</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "visits",
            "description": "<p>The number of article visits</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[Array[string]]",
            "optional": false,
            "field": "references",
            "description": "<p>2xN Matrix (N=Qty of references) which have Link[0] and Name[1] of the page references (String).</p>"
          }
        ]
      }
    },
    "filename": "routes/routes.js",
    "groupTitle": "Article"
  },
  {
    "type": "put",
    "url": "/article/:title",
    "title": "Updates an article",
    "version": "0.1.0",
    "name": "updateArticle",
    "group": "Article",
    "description": "<p>Updates a single article stored in the DB (CRUD Operation)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The article title</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The article's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Front-end / Back-end / Mixed (Both)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "summary",
            "description": "<p>The article's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>The Route of the image saved in the hosting</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Release date of the article</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[Array[string]]",
            "optional": false,
            "field": "tags",
            "description": "<p>2xN Matrix which have 2 Types of tags. Techonolgies[0] and Keywords[1] . Needed for aside and searchbar</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[String]",
            "optional": false,
            "field": "content",
            "description": "<p>An Array of paragraphs and routes of images to create an article</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "visits",
            "description": "<p>The number of article visits</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[Array[string]]",
            "optional": false,
            "field": "references",
            "description": "<p>2xN Matrix (N=Qty of references) which have Link[0] and Name[1] of the page references (String).</p>"
          }
        ]
      }
    },
    "filename": "routes/routes.js",
    "groupTitle": "Article"
  }
] });

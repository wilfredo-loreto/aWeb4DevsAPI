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
            "description": "<p>The Name of the image saved in the hosting</p>"
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
            "type": "Array[String]",
            "optional": false,
            "field": "technologies",
            "description": "<p>An Array of technologies relationated with the current article</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[String]",
            "optional": false,
            "field": "tags",
            "description": "<p>an Array of tags for the searchbar</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "content",
            "description": "<p>an object with all the dynamic content of the article in order. (images, texts, subtitles, references and lists)</p>"
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
            "description": "<p>The Name of the image saved in the hosting</p>"
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
            "type": "Array[String]",
            "optional": false,
            "field": "technologies",
            "description": "<p>An Array of technologies relationated with the current article</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[String]",
            "optional": false,
            "field": "tags",
            "description": "<p>an Array of tags for the searchbar</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "content",
            "description": "<p>an object with all the dynamic content of the article in order. (images, texts, subtitles, references and lists)</p>"
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
    "url": "/articles",
    "title": "Gets every article",
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
            "description": "<p>image name saved in the hosting</p>"
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
    "description": "<p>Gets the Relationated Articles storeds in the DB</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The article's title</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array[String]",
            "optional": false,
            "field": "result",
            "description": "<p>an Array of related articles</p>"
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
            "description": "<p>The Name of the image saved in the hosting</p>"
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
    "url": "/homepage/news/3articles",
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
            "description": "<p>The Name of the image saved in the hosting</p>"
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
            "description": "<p>The Name of the image saved in the hosting</p>"
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
            "type": "Array[String]",
            "optional": false,
            "field": "technologies",
            "description": "<p>An Array of technologies relationated with the current article</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[String]",
            "optional": false,
            "field": "tags",
            "description": "<p>an Array of tags for the searchbar</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "content",
            "description": "<p>an object with all the dynamic content of the article in order. (images, texts, subtitles, references and lists)</p>"
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
    "url": "/search-articles/:keyword",
    "title": "Gets Results from searchbar",
    "version": "0.1.0",
    "name": "searchArticles",
    "group": "Article",
    "description": "<p>Search articles based on keywords (SearchBar)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>One or more keywords (separateds by &quot; &quot;)</p>"
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
            "field": "summary",
            "description": "<p>The article's summary</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[String]",
            "optional": false,
            "field": "tags",
            "description": "<p>An Array of tags for searchbar</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[String]",
            "optional": false,
            "field": "technologies",
            "description": "<p>An Array of relateds technologies</p>"
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
            "description": "<p>The Name of the image saved in the hosting</p>"
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
            "type": "Array[String]",
            "optional": false,
            "field": "technologies",
            "description": "<p>An Array of technologies relationated with the current article</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[String]",
            "optional": false,
            "field": "tags",
            "description": "<p>an Array of tags for the searchbar</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "content",
            "description": "<p>an object with all the dynamic content of the article in order. (images, texts, subtitles, references and lists)</p>"
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
    "type": "post",
    "url": "/hosting/save-images",
    "title": "Upload images to hosting",
    "version": "0.1.0",
    "name": "uploadImages",
    "description": "<p>Uploads an Array of images to the hosting asociating those images with the Document Title</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The Document's title</p>"
          },
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "images",
            "description": "<p>an Array of images in binary files</p>"
          }
        ]
      }
    },
    "filename": "routes/routes.js",
    "group": "E:\\OneDrive\\Escritorio\\aWeb4Devs Project\\api\\routes\\routes.js",
    "groupTitle": "E:\\OneDrive\\Escritorio\\aWeb4Devs Project\\api\\routes\\routes.js"
  },
  {
    "type": "get",
    "url": "/aside-techs/:type",
    "title": "Gets all tech Titles",
    "version": "0.1.0",
    "name": "asideTechs",
    "group": "Tech",
    "description": "<p>Gets all tech Titles to be showed in the aside based on type</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The tech type</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array[Object]",
            "optional": false,
            "field": "techs",
            "description": "<p>Object with: Tech Title, Tech Type and tech Parent (if empty, it's a parent).</p>"
          }
        ]
      }
    },
    "filename": "routes/routes.js",
    "groupTitle": "Tech"
  },
  {
    "type": "get",
    "url": "/homepage/carousel",
    "title": "Gets techs for carousel",
    "version": "0.1.0",
    "name": "carouselTechs",
    "group": "Tech",
    "description": "<p>Gets techs for carousel based on type</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The tech type</p>"
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
            "description": "<p>The tech's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>The Name of the image saved in the hosting</p>"
          }
        ]
      }
    },
    "filename": "routes/routes.js",
    "groupTitle": "Tech"
  },
  {
    "type": "delete",
    "url": "/delete-tech/:title",
    "title": "Delete an tech",
    "version": "0.1.0",
    "name": "deleteTech",
    "group": "Tech",
    "description": "<p>Deletes a tech stored in the DB (CRUD Operation)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The tech title</p>"
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
            "description": "<p>The tech's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The tech's type, Font-end / Back-end</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "summary",
            "description": "<p>The tech's summary</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Release date of the tech</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>The Name of the image saved in the hosting</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>The Name of the logo saved in the hosting</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[String]",
            "optional": false,
            "field": "tags",
            "description": "<p>An Array of tags for searchbar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parent",
            "description": "<p>The actual parent of the technology (if empty, it's a parent)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "content",
            "description": "<p>An object with all the dynamic content of the article in order. (images, texts, subtitles, references and lists)</p>"
          }
        ]
      }
    },
    "filename": "routes/routes.js",
    "groupTitle": "Tech"
  },
  {
    "type": "get",
    "url": "/tech/:title",
    "title": "Gets an Tech",
    "version": "0.1.0",
    "name": "getTech",
    "group": "Tech",
    "description": "<p>Gets an tech based on title</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The tech title</p>"
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
            "description": "<p>The tech's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The tech's type, Font-end / Back-end</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "summary",
            "description": "<p>The tech's summary</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Release date of the tech</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>The Name of the image saved in the hosting</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>The Name of the logo saved in the hosting</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[String]",
            "optional": false,
            "field": "tags",
            "description": "<p>An Array of tags for searchbar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parent",
            "description": "<p>The actual parent of the technology (if empty, it's a parent)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "content",
            "description": "<p>An object with all the dynamic content of the article in order. (images, texts, subtitles, references and lists)</p>"
          }
        ]
      }
    },
    "filename": "routes/routes.js",
    "groupTitle": "Tech"
  },
  {
    "type": "get",
    "url": "/techs/:type",
    "title": "Gets all the techs based on type",
    "version": "0.1.0",
    "name": "getTechs",
    "group": "Tech",
    "description": "<p>Gets all the techs based on type storeds in the DB (to be showed in aweb4devs.com/type)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The tech type</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array[string]",
            "optional": false,
            "field": "tags",
            "description": "<p>An Array of tags for searchbar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The tech's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "summary",
            "description": "<p>The tech's summary</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>The Name of the logo saved in the hosting</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parent",
            "description": "<p>The actual parent of the technology (if empty, it's a parent)</p>"
          }
        ]
      }
    },
    "filename": "routes/routes.js",
    "groupTitle": "Tech"
  },
  {
    "type": "get",
    "url": "/homepage/news/2techs",
    "title": "Gets 2 recents tech",
    "version": "0.1.0",
    "name": "getTwoTechs",
    "group": "Tech",
    "description": "<p>Gets the 2 most recents techs storeds in the db (to be showed in aweb4devs.com)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The tech title</p>"
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
            "description": "<p>The tech's title</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Release date of the tech</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>The Name of the image saved in the hosting</p>"
          }
        ]
      }
    },
    "filename": "routes/routes.js",
    "groupTitle": "Tech"
  },
  {
    "type": "post",
    "url": "/save-tech",
    "title": "Saves an tech in DB",
    "version": "0.1.0",
    "name": "saveTech",
    "group": "Tech",
    "description": "<p>Saves a new tech in the db (CRUD Operation)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The tech's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The tech's type, Font-end / Back-end</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "summary",
            "description": "<p>The tech's summary</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Release date of the tech</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>The Name of the image saved in the hosting</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>The Name of the logo saved in the hosting</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[String]",
            "optional": false,
            "field": "tags",
            "description": "<p>An Array of tags for searchbar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parent",
            "description": "<p>The actual parent of the technology (if empty, it's a parent)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "content",
            "description": "<p>An object with all the dynamic content of the article in order. (images, texts, subtitles, references and lists)</p>"
          }
        ]
      }
    },
    "filename": "routes/routes.js",
    "groupTitle": "Tech"
  },
  {
    "type": "get",
    "url": "/search-techs/:keyword",
    "title": "Gets Techs based on tags",
    "version": "0.1.0",
    "name": "searchTechs",
    "group": "Tech",
    "description": "<p>Search Techs based on keywords (Searchbar Results) Separateds by &quot; &quot;</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>The tech tag</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array[Object]",
            "optional": false,
            "field": "techs",
            "description": "<p>Object with: Array of related tags, Tech Title, Tech Type and tech Summary.</p>"
          }
        ]
      }
    },
    "filename": "routes/routes.js",
    "groupTitle": "Tech"
  },
  {
    "type": "put",
    "url": "/tech/:title",
    "title": "Update An tech",
    "version": "0.1.0",
    "name": "updateTech",
    "group": "Tech",
    "description": "<p>Updates a tech stored in the DB (CRUD Operation)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The tech title</p>"
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
            "description": "<p>The tech's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The tech's type, Font-end / Back-end</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "summary",
            "description": "<p>The tech's summary</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Release date of the tech</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>The Name of the image saved in the hosting</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>The Name of the logo saved in the hosting</p>"
          },
          {
            "group": "Success 200",
            "type": "Array[String]",
            "optional": false,
            "field": "tags",
            "description": "<p>An Array of tags for searchbar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parent",
            "description": "<p>The actual parent of the technology (if empty, it's a parent)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "content",
            "description": "<p>An object with all the dynamic content of the article in order. (images, texts, subtitles, references and lists)</p>"
          }
        ]
      }
    },
    "filename": "routes/routes.js",
    "groupTitle": "Tech"
  }
] });

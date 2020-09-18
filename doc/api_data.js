define({ "api": [
  {
    "type": "get",
    "url": "/articles",
    "title": "Get all the articles",
    "version": "0.1.0",
    "name": "getArticles",
    "group": "Article",
    "description": "<p>Get all the articles storeds in the DB (to be showed in aweb4devs.com/articles)</p>",
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
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>2xN Matrix which have 2 Types of tags. Techonolgies[0] and Keywords[1] . Needed for aside and searchbar</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "content",
            "description": "<p>An Array of paragraphs and images to create an article</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
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

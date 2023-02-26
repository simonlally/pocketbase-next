migrate((db) => {
  const collection = new Collection({
    "id": "mj95zl2x05ngrox",
    "created": "2023-02-26 00:02:56.073Z",
    "updated": "2023-02-26 00:02:56.073Z",
    "name": "tickets",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rzlm8hl2",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dnfy1zvr",
        "name": "body",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "cl1ef2uh",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("mj95zl2x05ngrox");

  return dao.deleteCollection(collection);
})

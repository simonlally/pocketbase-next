migrate((db) => {
  const collection = new Collection({
    "id": "ve2h38093zn8rc7",
    "created": "2023-02-26 00:00:29.138Z",
    "updated": "2023-02-26 00:00:29.138Z",
    "name": "tickets",
    "type": "auth",
    "system": false,
    "schema": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ve2h38093zn8rc7");

  return dao.deleteCollection(collection);
})

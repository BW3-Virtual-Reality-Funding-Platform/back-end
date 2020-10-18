# kickstarter clone

| Projects |                   |                                   |                                                                                             |
| -------- | ----------------- | --------------------------------- | ------------------------------------------------------------------------------------------- |
| Method   | Endpoint          | Description                       | Calls For                                                                                   |
| GET      | /api/projects     | Get a list of all projects        | n/a                                                                                         |
| POST     | /api/projects     | Add a new project                 |                                                                                             |
| PUT      | /api/projects/:id | Edit an existing projects details | - ID in the url - Title (string) - Description (string) - Will eventually require a user_id |
| DELETE   | /api/projects/:id | Delete a project listing          | - ID in the url - Title (string) - Description (string) - Will eventually require a user_id |

# kickstarter clone

URL: https://kick-starter-clone.herokuapp.com/

## PLEASE create your own user / project first, then test the other end points with that login information

| Users      |                |                                |                                                         |
| ---------- | -------------- | ------------------------------ | ------------------------------------------------------- |
| **Method** | **Endpoint**   | **Description**                | **Calls For**                                           |  |
| GET        | /api/users     | Get a list of all users        |                                                         |
| POST       | /api/users     | Add a new user                 |                                                         |
| PUT        | /api/users/:id | Edit an existing users details | - ID in the url - Username (string) - Password (string) |
| DELETE     | /api/users/:id | Delete a user                  | - ID in the url - Username (string) - Password (string) |

<br/>
<br/>

| User Seed Data |               |
| -------------- | ------------- |
| **Username**   | **Password**  |
| _April_        | _password_    |
| _David_        | _password123_ |
| _Juan_         | _pass_        |

<br/>
<br/>

| Projects   |                   |                                   |                                                                                             |
| ---------- | ----------------- | --------------------------------- | ------------------------------------------------------------------------------------------- |
| **Method** | **Endpoint**      | **Description**                   | **Calls For**                                                                               |
| GET        | /api/projects     | Get a list of all projects        | n/a                                                                                         |
| POST       | /api/projects     | Add a new project                 |                                                                                             |
| PUT        | /api/projects/:id | Edit an existing projects details | - ID in the url - Title (string) - Description (string) - Will eventually require a user_id |
| DELETE     | /api/projects/:id | Delete a project listing          | - ID in the url - Title (string) - Description (string) - Will eventually require a user_id |

<br/>
<br/>

| **Projects Seed Data**    |                          |             |
| ------------------------- | ------------------------ | ----------- |
| **Title**                 | **Description**          | **User_Id** |
| Save the dogs             | We want to save the dogs | 1           |
| Plant trees               | More trees, less waste   | 2           |
| Put David through college | He needs monies          | 3           |

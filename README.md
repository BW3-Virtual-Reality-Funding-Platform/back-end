# kickstarter clone

URL: https://kick-starter-clone.herokuapp.com/

## PLEASE create your own user / project first, then test the other end points with that login information

## Users has middleware in it that will check to see that you have a session cookie. So, it's important that you go through auth first. Login or register will give you that cookie.

| Users      |                |                                |                                                                   |
| ---------- | -------------- | ------------------------------ | ----------------------------------------------------------------- |
| **Method** | **Endpoint**   | **Description**                | **Calls For**                                                     |  |
| GET        | /api/users     | Get a list of all users        | n/a. For dev purposes. Will delete                                |
| PUT        | /api/users/:id | Edit an existing users details | - ID in the url <br/>- username (string)<br/> - password (string) |
| DELETE     | /api/users/:id | Delete a user                  | - ID in the url<br/> - username (string)<br/> - password (string) |

<br/>
<br/>

| Auth       |                    |                      |                                                                       |
| ---------- | ------------------ | -------------------- | --------------------------------------------------------------------- |
| **Method** | **Endpoint**       | **Description**      | **Calls For**                                                         |
| GET        | /api/auth/logout   | Logout & end session | n/a                                                                   |
| POST       | /api/auth/register | Add a new user       | - username (string)<br/> - OR email (string)<br/> - password (string) |
| POST       | /api/auth/login    | Login                | - username (string)<br/> - OR email (string)<br/> - password (string) |

<br/>
<br/>

| Users Seed Data |             |               |
| --------------- | ----------- | ------------- |
| "username"      | "password"  | "email"       |
| April           | password    | april@aol.com |
| David           | password123 | david@aol.com |
| Juan            | pass        | juan@aol.com  |

<br/>
<br/>

| Projects   |                   |                                   |                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ----------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Method** | **Endpoint**      | **Description**                   | **Calls For**                                                                                                                                                                                                                                                                                                                                                                         |
| GET        | /api/projects     | Get a list of all projects        | n/a                                                                                                                                                                                                                                                                                                                                                                                   |
| GET        | /api/projects/:id | Get a project by id               | id                                                                                                                                                                                                                                                                                                                                                                                    |
| POST       | /api/projects/add | Add a new project                 | - title (string, required)<br/> - description (string, required)<br/> - img_url (string, not required)<br/> - fund_date - this is the date the project will run until (date format is YYYY-MM-DD as string, required) <br/> - total_funded (integer, not required, defaults to 0) <br/> - funding_goal (integer, required) <br/> - user_id (integer, required) can use redux for this |
| PUT        | /api/projects/:id | Edit an existing projects details | - All optional. Will change edits. Will use session & used_id to verify the user created that specific post                                                                                                                                                                                                                                                                           |
| DELETE     | /api/projects/:id | Delete a project listing          | - ID in the url<br/> - Title (string)<br/> - Description (string)<br/> - Will eventually require a user_id                                                                                                                                                                                                                                                                            |

<br/>
<br/>

| Projects Seed Data        |                          |                                                                                     |              |                |                |           |
| ------------------------- | ------------------------ | ----------------------------------------------------------------------------------- | ------------ | -------------- | -------------- | --------- |
| "title"                   | "description"            | "img_url"                                                                           | "fund_date"  | "total_funded" | "funding_goal" | "user_id" |
| Save the dogs             | We want to save the dogs | "https://www.pexels.com/photo/two-yellow-labrador-retriever-puppies-1108099/"       | "2021-12-30" | 3000           | 15000          | 1         |
| Plant trees               | More trees, less waste   | "https://www.pexels.com/photo/palm-trees-under-blue-sky-3935703/"                   | "2021-06-10" | 1000           | 10000          | 2         |
| Put David through college | He needs monies          | "https://www.pexels.com/photo/accomplishment-ceremony-education-graduation-267885/" | "2020-12-03" | 100            | 5000           | 3         |

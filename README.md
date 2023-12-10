# Study With Me
![Study With Me Demo](https://raw.githubusercontent.com/PFA-Crew/Study-With-Me/dev/assets/Dec-06-2023%2011-13-25.gif)
Study With Me is a virtual study space and dashboard that provides users with common modules to help with studying, focusing, proper break practices, stress relief, and note-taking.

<div align="center" style="display: flex; justify-content: center; gap: 25px;">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white">
</div>

# Initial Setup
Study With Me requires a running MongoDB database to access the contents beyond the login screen, and for that, we recommend utilizing [MongoDB's Atlas service](https://www.mongodb.com/atlas/database). Deploying a shared cluster for testing purposes will allow you to choose the free tier labeled **M0 Sandbox**.

Ensure your IP address is whitelisted for database access with a database test account created before continuing.

After obtaining the connection string, you will need to create a `config.js` file with content that follows this format:
```js
module.exports = {
  MONGO_URI: 'PASTE_CONNECTION_STRING_HERE',
};
```
###### Do not forget to replace the <password> at the start of the connection string with the database user's password

# Installation
```sh
npm install
npm run dev
```

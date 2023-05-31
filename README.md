# Study With Me v2

> Study With Me is an all-in-one online dashboard, supporting a built-in web
> browser, native note-taking app, file explorer, a pomodoro timer, a
> customizable rubber ducky for rigorous debugging sessions, an interactive
> fidget spinner to help soothe the physical symtpoms of stress and anxiety, and
> so much more!

## Getting Started

### Prerequisites

### Installing

1. `npm install` - Initialize and install npm packages
2. `npm run prepare` - Initialize and prepare Husky scripts. Automatically sets
   `chmod ug+x` permissions on Husky scripts.

## Running the tests

- In non-"CI" (i.e. non-production) modes, pre-commit hooks act as a branch name
  linter and automatically formats all staged files with Prettier. Branch names
  must comform to the following regex:

```js
/^((bug|docs|fix|feat|merge|test|wip)\/[a-zA-Z0-9\-]+)$/;
```

### Break down into end to end tests

### And coding style tests

## Deployment

## Authors

- See also the list of [contributors](REPO-BASE-URL/contributors) who
  participated in this project.

## License

- This project is licensed under the MIT License.

## Acknowledgments

-

To add mongoDB, add a config.js in server folder and add a mondule.exports with
an object that has a MONGO_URI key linking to your database

TODO:

- Timer.jsx: Fix Pomodoro timer functionality ⏱️
- Notes/Notepad.jsx edit notes feature (there is already a update route in
  notesRouter.js with middleware)
- Notes/Notepad.jsx create more than one note at a time without it breaking 🔫
- ?.jsx/Desktop.jsx Unable to select/display notes after saving a new note 🙏
- Desktop.jsx: Can make cell populator code more DRY 🌵
- Desktop.jsx: Need to create button for closing out the Resource Iframe ❌
- Desktop.jsx: Stretch features - music player in cell 8, have Notepad to
  primarily be i Cell 5 but relocate to cell 6 when a Resource is opened. 🎶
- Ducky.jsx: ducky state from login to have that already set 🤙
- Ducky.jsx: Selecting the same position back-to-back **kills** the ducky D:
- Ducky.jsx: Stretch features - different method for Ducky customization, add
  hats, inspriational quacks 🦆
- App.jsx: Dropdown menu will not retain the selected position 😓
- App.jsx: cannot change back to Top Left without resetting 😤
- App.jsx: Ducky will overpower any existing widget in position (as it should?
  but maybe not?) 🤷‍♀️
- Feature to add resources

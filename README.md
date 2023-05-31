# Study With Me v2

> Study With Me is an all-in-one online dashboard, supporting a built-in web
> browser, native note-taking app, file explorer, a pomodoro timer, a
> customizable rubber ducky for rigorous debugging sessions, an interactive
> fidget spinner to help soothe the physical symtpoms of stress and anxiety, and
> so much more!

HUSKY HUSKY HUSKY HUSKY HUSKY HUSKY HUSKY HUSKY HUSKY HUSKY HUSKY HUSKY HUSKY
HUSKY HUSKY HUSKY HUSKY HUSKY HUSKY HUSKY
<https://www.gitkraken.com/blog/husky-git-hooks>
<https://www.freecodecamp.org/news/how-to-add-commit-hooks-to-git-with-husky-to-automate-code-tasks/>
<https://typicode.github.io/husky/> HUSKY HUSKY HUSKY HUSKY HUSKY HUSKY HUSKY
HUSKY HUSKY HUSKY HUSKY HUSKY HUSKY HUSKY HUSKY HUSKY HUSKY HUSKY HUSKY HUSKY
HUSKY

## Getting Started

-

### Prerequisites

-

### Installing

-

## Running the tests

-

### Break down into end to end tests

-

### And coding style tests

-

## Deployment

-

## Built With

- [Resource Name](Resource URL) - Resource description

## Contributing

- Please read [CONTRIBUTING.md](#) for details on our code of conduct, and the
  process for submitting pull requests.

## Versioning

-

## Authors

- **Connor Dillon** - _Developer_ - [connoro7](https://github.com/connoro7)
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

```js
- GET
  - 200 OK

- PUT (create or overwrite, idempotently)
  - 201 Created
  - 204 No Content

- POST (create or overwrite, not idempotently)
  - 201 Created
  - 204 No Content

- DELETE
  - 202 Accepted   (recieved, pending)
  - 204 No Content (done, no further info)
  - 200 OK         (done, with response message)

- PATCH (modify, (is or is not) idempotent)
  - 200 OK         (done, with response)
  - 204 No Content (done, no response)
  - Notes:
    - server must advertise PATCH support
    - EXPLICIT: add PATCH to
      - Allow https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Allow
    - or -
      - ACAM (if CORS) headers  https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Patch
    - IMPLICIT: Accept-Patch header
```

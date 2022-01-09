# Travel Journal

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It's a part of [Scrimba](https://scrimba.com/) React course. I build the project based on their Figma file.

## Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/)
- modules.css - For styles

## Problems and Solutions that I faced

- I had a hard time to export default a data file. It turn out that **unnamed** export default is [not allowed](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md). To solve this issue I need to give a name.

```js
//before
export default []

//after
const Data = []

export default Data
```

- I faced this problem that caused me two days. I typed `maps()`. No wonder that my data didn't run at all. It's tricky because one word can cause errors. To fixed this, I change to `map()`.
- Images were stretching everytime I changed the screen size. It turn out that I need to set a `max-width:100%` to my global css file.

## Lessons that I Learned

- Rendering components works on React if every file have a name to be export.
- Be wary of typos. One word can cause errors.
- Set a `max-width` to a global css file for images.

## Author

Tasha Syarifah

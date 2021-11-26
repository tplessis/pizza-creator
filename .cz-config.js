'use strict';

module.exports = {

  types: [
    {value: 'feat',        name: 'feat:       🌟   A new feature.'},
    {value: 'fix',         name: 'fix:        🐞   A bug fix.'},
    {value: 'refactor',    name: 'refactor:   🎨   A code change that neither fixes a bug nor adds a feature like cleanup.'},
    {value: 'docs',        name: 'docs:       📚   Documentation only changes.'},
    {value: 'test',        name: 'test:       ✅   Adding missing tests'},
    {value: 'chore',       name: 'chore:      🔩   Changes to the build process or auxiliary tools\n                  and libraries such as documentation generation.'},
    {value: 'revert',      name: 'revert:     ⏪   Revert to a commit.'}
  ],

  scopes: [
    {name: 'pizza-viewer'},
    {name: 'pizza-form'},
    {name: 'cart'},
    {name: 'ui'},
    {name: 'core'}
  ],

  // limit subject length
  subjectLimit: 100

};

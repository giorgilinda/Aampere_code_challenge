// FIXME: re-introduce the no-warn-ignored
module.exports = {
//  '*': ['eslint --fix --no-warn-ignored'],
  '**/*.ts?(x)': () => 'npm run check-types',
};

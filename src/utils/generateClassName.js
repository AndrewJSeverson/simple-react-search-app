/**
 * Taken from Material UI's code.
 * Needed to override the production JSS class name otherwise pages conflict.
 */

let ruleCounter = 0;
const seed = '';
const seedPrefix = '';
const disableGlobal = false;
const pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected'];
const productionPrefix = 'jss';

const hasSymbol = typeof Symbol === 'function' && Symbol.for;

const nested = hasSymbol
  ? Symbol.for('mui.nested')
  : '__THEME_NESTED__';

export default (rule, styleSheet) => {
  ruleCounter += 1;

  const { name } = styleSheet.options; // Is a global static MUI style?

  if (name && name.indexOf('Mui') === 0 && !styleSheet.options.link && !disableGlobal) {
    // We can use a shorthand class name, we never use the keys to style the components.
    if (pseudoClasses.indexOf(rule.key) !== -1) {
      return 'Mui-'.concat(rule.key);
    }

    const prefix = ''.concat(seedPrefix).concat(name, '-').concat(rule.key);

    if (!styleSheet.options.theme[nested.default] || seed !== '') {
      return prefix;
    }

    return ''.concat(prefix, '-').concat(ruleCounter);
  }

  if (process.env.NODE_ENV === 'production') {
    return ''.concat(seedPrefix).concat(productionPrefix, '-').concat(rule.key, '-').concat(ruleCounter);
  }

  const suffix = ''.concat(rule.key, '-').concat(ruleCounter); // Help with debuggability.

  if (styleSheet.options.classNamePrefix) {
    return ''.concat(seedPrefix).concat(styleSheet.options.classNamePrefix, '-').concat(suffix);
  }

  return ''.concat(seedPrefix).concat(suffix);
};

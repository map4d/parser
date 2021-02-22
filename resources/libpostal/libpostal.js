const _ = require('lodash')
const fs = require('fs')
const path = require('path')
const pluralize = require('pluralize')
const dictPath = path.join(__dirname, `./dictionaries`)
const allLanguages = fs.readdirSync(dictPath).filter(p => !p.includes('.'))

function load (index, langs, filename, options) {
  const add = _add(index, options)
  _remove(index, options)

  langs.forEach(lang => {
    let filepath = path.join(dictPath, lang, filename)
    if (!fs.existsSync(filepath)) { return }
    let dict = fs.readFileSync(filepath, 'utf8')
    dict.split('\n').forEach(row => {
      let indices = row.split('|')
      indices.forEach(add.bind(null, lang, indices[0]))
    }, this)
  }, this)
}

function _normalize (cell, options) {
  let value = cell.trim()
  if (options && options.replace) {
    value = value.replace(options.replace[0], options.replace[1])
  }
  if (options && options.minlength) {
    if (value.length < options.minlength) { return '' }
  }
  if (options && options.lowercase) {
    value = value.toLowerCase()
  }
  return value
}

function _add (index, options) {
  return (lang, original, cell) => {
    const value = _normalize(cell, options)
    if (value && value.length) {
      index[value] = index[value] || { langs: {} }
      index[value].langs[lang] = true
      index[value].original = original
    }
  }
}

function _remove (index, options) {
  return cell => {
    const value = _normalize(cell, options)
    if (value && value.length) {
      delete index[value]
    }
  }
}

// This functionality is only currently available for English
// see: https://github.com/plurals/pluralize
// @todo: find similar libraries which cover other languages
function generatePlurals (index) {
  _.forEach(index, (i, cell) => {
    if (_.get(index[cell], 'langs.en', false)) {
      const plural = pluralize(cell)
      _.set(index, `${plural}.langs.en`, true)
    }
  })
}

module.exports.load = load
module.exports.languages = allLanguages
module.exports.generatePlurals = generatePlurals

const SectionClassifier = require('./super/SectionClassifier')
const AdjacentClassification = require('../classification/AdjacentClassification')

// find two adjacent words
// {housenumber} {street}
// @todo: expand the scheme internationally and make this
// functionality more generic

class AdjacencyClassifier extends SectionClassifier {
  each (section, utils) {
    let children = section.graph.findAll('child')
    children.forEach((_, cc) => {
      // skip last element
      if (cc >= section.graph.length('child') - 1) { return }

      if (
        (
          children[cc + 0].classifications.hasOwnProperty('HouseNumberClassification')
        ) &&
        (
          children[cc + 1].classifications.hasOwnProperty('StreetClassification') ||
          utils.findPhrasesContaining(children[cc + 1]).some(
            p => p.classifications.hasOwnProperty('StreetClassification')
          )
        )
      ) {
        // every child must be part of the set above
        // and must not omit any children
        let matches = section.graph.findAll('phrase').filter(p => {
          let ch = p.graph.findAll('child')
          return (
            ch.length === 2 &&
            ch[cc + 0] === children[cc + 0] &&
            ch[cc + 1] === children[cc + 1]
          )
        })

        if (matches.length) {
          // classify all matches
          matches.forEach(m => m.classify(new AdjacentClassification(1.0)))
        }
      }
    }, this)
  }
}

module.exports = AdjacencyClassifier

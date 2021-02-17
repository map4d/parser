const PhraseClassifier = require('./super/PhraseClassifier')
const HouseNumberClassification = require('../classification/HouseNumberClassification')

// copied from: https://github.com/mapbox/carmen/blob/5489f0e67a4f31280ae1b9d091952c97280b83e7/lib/text-processing/termops.js#L269-L290

class HouseNumberClassifier extends PhraseClassifier {
  each (span) {
    // skip spans which do not contain numbers
    if (!span.contains.numerals) { return }

    // do not classify tokens if they already have a 'StreetComponentClassification' or 'AdministrativeComponentClassification'
    // in viet nam, we have some street/ administrative which has the number in it eg: duong 29 thang 3, duong so 1, quan 1, phuong 12...
    if (span.classifications.hasOwnProperty('StreetComponentClassification') || span.classifications.hasOwnProperty('AdministrativeComponentClassification') || (
      span.graph.length('child') > 0 &&
          (span.graph.findOne('child').classifications.hasOwnProperty('StreetComponentClassification') ||
              span.graph.findOne('child').classifications.hasOwnProperty('AdministrativeComponentClassification'))
    )
    ) { return }

    if (
      /^\d{1,5}[a-zA-Z]?$/.test(span.body) || // 10 or 10a Style
        /^(\d{1,5})-(\d{1,5})[a-zA-Z]?$/.test(span.body) || // 10-19 or 10-19a Style
        /^(\d{1,5})[a-zA-Z]?\/(\d{1,5})$/.test(span.body) || // 1/135 or 1b/135 Style
        /^(\d{1,5})(\/(\d{1,5}))*$/.test(span.body) || // 1/2/3/4/5  Style
        /^([KkHh]){1}(\d{1,5})(\/(\d{1,5}))*$/.test(span.body) || // k448 or h18/10 Style
        /^(ngo|ngach|so|kiet|hem)\s(\d{1,5})$/.test(span.body) // ngo 1 or so 1 Style
    ) {
      let confidence = 1

      // it's possible to have 5 digit housenumbers
      // but they are fairly uncommon
      if (/^\d{5}/.test(span.norm)) {
        confidence = 0.2
      } else if (/^\d{4}/.test(span.norm)) {
        confidence = 0.9
      }

      span.classify(new HouseNumberClassification(confidence))
    }
  }
}

module.exports = HouseNumberClassifier

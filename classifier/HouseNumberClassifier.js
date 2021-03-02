const PhraseClassifier = require('./super/PhraseClassifier')
const HouseNumberClassification = require('../classification/HouseNumberClassification')
const HouseNumberComponentClassification = require('../classification/HouseNumberComponentClassification')

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
      /^\d{1,5}[a-zA-Z/]?$/.test(span.body) || // 10 or 10a Style
        /^(\d{1,5})-(\d{1,5})[a-zA-Z]?$/.test(span.body) || // 10-19 or 10-19a Style
        /^(\d{1,5})[a-zA-Z]?\/(\d{1,5})$/.test(span.body) || // 1/135 or 1b/135 Style
        /^(\d{1,5})(\/(\d{1,5}))*$/.test(span.body) // 1/2/3/4/5  Style
    ) {
      if (this.isSpanValid(span)) {
        span.classify(new HouseNumberClassification(1.0))
      }
    } else if (/^([KkHh]){1}(\d{1,5})(\/(\d{1,5}))*$/.test(span.body) || // k448 or h18/10 Style
        /^(ngo|ngach|so|kiet|hem)\s(\d{1,5})(\/(\d{1,5}))*$/.test(span.body) // ngo 1 or so 1 Style
    ) {
      if (this.isSpanValid(span)) {
        span.classify(new HouseNumberClassification(1.0))
        span.classify(new HouseNumberComponentClassification())
      }
    }
  }

  isSpanValid (span) {
    let child = span.graph.findOne('child:first')
    let last = span.graph.findOne('child:last')
    let isValid = !last.classifications.hasOwnProperty('ExclusionClassification')

    while (isValid && child !== last && child) {
      isValid = !child.classifications.hasOwnProperty('ExclusionClassification')

      child = child.graph.findOne('next')
    }

    return isValid
  }
}

module.exports = HouseNumberClassifier

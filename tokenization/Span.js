const Graph = require('./Graph')

class Span {
  constructor (body, start) {
    this.start = start || 0
    this.setBody(body)
    this.classifications = {}

    // graph
    this.graph = new Graph()
  }

  // update the token body
  setBody (body) {
    this.body = body || ''
    this.norm = this.body.toLowerCase() // normalized body
    this.end = this.start + this.body.length

    // convenience booleans to avoid computing these in every classifier
    this.contains = {
      numerals: /\d/.test(this.body),
      final: {
        period: (this.body.slice(-1) === '.')
      }
    }
  }

  // return true if Span ranges overlap
  intersects (span) {
    return this.start < span.end && this.end > span.start
  }

  // return true if $this totally covers the target Span
  covers (span) {
    return this.start <= span.start && this.end >= span.end
  }

  // returns the distance between two Spans
  // todo: use graph to find prev and next spans for a more accurate result
  // todo: or base 'distance' on word distance (slop) rather than characters
  distance (span) {
    if (this.intersects(span)) { return 0 }
    if (this.end < span.start) { return span.start - this.end } // $this is left
    return this.start - span.end // $this is right
  }

  // add a classification for this span
  classify (classification) {
    this.classifications[classification.constructor.name] = classification
    return this
  }

  // set the child Spans for a subset of this Span
  setChildren (spans) {
    spans.forEach(c => this.graph.add('child', c), this)
    return this
  }

  // set phrases of the children of this Span
  setPhrases (phrases) {
    phrases.forEach(p => this.graph.add('phrase', p), this)
    return this
  }
}

module.exports = Span

class AdministrativeFilter {
  solve (tokenizer) {
    tokenizer.solution = tokenizer.solution.filter(s => {
      let administratives = s.pair.filter(p => {
        return p.classification.constructor.name === 'AdministrativeClassification'
      })

      if (administratives.length === 0) {
        return true
      }

      let lastAdministrative = administratives[administratives.length - 1]
      let next = lastAdministrative.span.graph.findOne('child:last').graph.findOne('next')
      if (next !== null) {
        // Administrative should be in the last
        return false
      }

      let nextPreviousAdministrativeToken = null

      for (const administrative of administratives) {
        if (nextPreviousAdministrativeToken !== null && nextPreviousAdministrativeToken.start !== administrative.span.start) {
          return false
        }

        nextPreviousAdministrativeToken = administrative.span.graph.findOne('child:last').graph.findOne('next')
      }

      return true
    })

    tokenizer.solution.forEach((s) => {
      let administrativeParent = {}
      let skip = false
      s.pair = s.pair.reverse().filter((p) => {
        if (
          p.classification.constructor.name !== 'AdministrativeClassification'
        ) {
          return true
        }

        if (skip) {
          return false
        }
        let metaData = p.classification.meta
        let originalName = metaData.original

        if (metaData.level === 1) {
          if (!administrativeParent.level1) {
            administrativeParent.level1 = {}
            administrativeParent.level1[originalName] = originalName
            return true
          }

          skip = !(originalName in administrativeParent.level1)
          return !skip
        } else if (metaData.level === 2) {
          if (
            administrativeParent.level1 &&
            !Object.keys(administrativeParent.level1).some(function (
              administrativeLevel1
            ) {
              return administrativeLevel1 in metaData.parentLevel1
            })
          ) {
            skip = true
            return false
          }

          if (!administrativeParent.level1) {
            administrativeParent.level1 = metaData.parentLevel1
          }

          if (!administrativeParent.level2) {
            administrativeParent.level2 = {}
            administrativeParent.level2[originalName] = originalName
            return true
          }

          skip = !(originalName in administrativeParent.level2)
          return !skip
        } else {
          // level3
          if (
            administrativeParent.level1 &&
            !Object.keys(administrativeParent.level1).some(function (
              administrativeLevel1
            ) {
              return administrativeLevel1 in metaData.parentLevel1
            })
          ) {
            skip = true
            return false
          }

          if (
            administrativeParent.level2 &&
            !Object.keys(administrativeParent.level2).some(function (
              administrativeLevel2
            ) {
              return administrativeLevel2 in metaData.parentLevel2
            })
          ) {
            skip = true
            return false
          }

          if (!administrativeParent.level1) {
            administrativeParent.level1 = metaData.parentLevel1
          }

          if (!administrativeParent.level2) {
            administrativeParent.level2 = metaData.parentLevel2
          }

          return true
        }
      })
    })
  }
}

module.exports = AdministrativeFilter

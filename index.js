function calculateScore(player) {
  let score = 0

  switch (player.position) {
    case 'QB':
      const qbPassing = {
        ...player,
        passingScores: function () {
          return (this.stats.passing.yards / (25 * 1)) + (this.stats.passing.touchdowns * 6) + (this.stats.passing.interceptions * -3)
        }
      }
      const qbRushing = {
        ...player,
        rushingScore: function () {
          return (this.stats.rushing.yards / 10 * 1) + (this.stats.rushing.touchdowns * 6) + (this.stats.rushing.fumbles * -3)
        }
      }
      const qbScore = qbPassing.passingScores() + qbRushing.rushingScore()

      score += qbScore

      return score
      break
    case 'RB':
      const rbRushing = {
        ...player,
        rushingScore: function () {
          return (this.stats.rushing.yards / 10 * 1) + (this.stats.rushing.touchdowns * 6) + (this.stats.rushing.fumbles * -3)
        }
      }
      const rbReceiving = {
        ...player,
        receivingScore: function () {
          return (this.stats.receiving.receptions * 1) + (this.stats.receiving.yards / 10 * 1) + (this.stats.receiving.touchdowns * 6) + (this.stats.receiving.fumbles * -3)
        }
      }
      const rbKickreturn = {
        ...player,
        kickreturnScore: function () {
          return (this.stats.return.kickreturn.yards / 15 * 1) + (this.stats.return.kickreturn.touchdowns * 6) + (this.stats.return.kickreturn.fumbles * -3)
        }
      }
      const rbPuntreturn = {
        ...player,
        puntreturnScore: function () {
          return (this.stats.return.puntreturn.yards / 15 * 1) + (this.stats.return.puntreturn.touchdowns * 6) + (this.stats.return.puntreturn.fumbles * -3)
        }
      }
      const rbScore = rbRushing.rushingScore() + rbReceiving.receivingScore() + rbKickreturn.kickreturnScore() + rbPuntreturn.puntreturnScore()

      score += rbScore

      return score
      break
    case 'WR':
      const wrRushing = {
        ...player,
        rushingScore: function () {
          return (this.stats.rushing.yards / 10 * 1) + (this.stats.rushing.touchdowns * 6) + (this.stats.rushing.fumbles * -3)
        }
      }
      const wrReceiving = {
        ...player,
        receivingScore: function () {
          return (this.stats.receiving.receptions * 1) + (this.stats.receiving.yards / 10 * 1) + (this.stats.receiving.touchdowns * 6) + (this.stats.receiving.fumbles * -3)
        }
      }
      const wrKickreturn = {
        ...player,
        kickreturnScore: function () {
          return (this.stats.return.kickreturn.yards / 15 * 1) + (this.stats.return.kickreturn.touchdowns * 6) + (this.stats.return.kickreturn.fumbles * -3)
        }
      }
      const wrPuntreturn = {
        ...player,
        puntreturnScore: function () {
          return (this.stats.return.puntreturn.yards / 15 * 1) + (this.stats.return.puntreturn.touchdowns * 6) + (this.stats.return.puntreturn.fumbles * -3)
        }
      }
      const wrScore = wrRushing.rushingScore() + wrReceiving.receivingScore() + wrKickreturn.kickreturnScore() + wrPuntreturn.puntreturnScore()

      score += wrScore

      return score
      break
    case 'TE':
      const teReceiving = {
        ...player,
        receivingScore: function () {
          return (this.stats.receiving.receptions * 1) + (this.stats.receiving.yards / 10 * 1) + (this.stats.receiving.touchdowns * 6) + (this.stats.receiving.fumbles * -3)
        }
      }
      const teScore = teReceiving.receivingScore()

      score += teScore

      return score
      break
    default:
      break
  }

  return score
}
module.exports = calculateScore

const Octo = require('octokat')
const gh = new Octo({
  token: process.env.NODE_GITHUB_ISSUE_BOT
})
const path = require('path')
const Promise = require('bluebird')
const readFile = Promise.promisify(require('fs').readFile)

module.exports = function createIssue (issue) {
  readFile(path.join(__dirname, issue.template), 'utf8').then((data) => {
    data = data.replace(/HASH/, issue.hash)
    data = data.replace(/DOMAIN/, issue.domain)
    return gh.repos(issue.repo).issues.create({title: issue.title, body: data})
  }).then((res) => res)
}

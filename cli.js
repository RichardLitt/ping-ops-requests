#!/usr/bin/env node
'use strict'

const createIssue = require('./')
var argv = require('minimist')(process.argv.slice(2), {
  alias: {
    d: 'domain', // domain name
    h: 'hash'  // Hash to pin
  }
})

if (argv['test']) {
  createIssue({
    title: `Please pin this hash`,
    template: 'templates/issue.md',
    repo: 'RichardLitt/ping-ops-requests',
    hash: argv['h'],
    domain: argv['d']
  })
} else if (argv['h'] && argv['d']) {
  createIssue({
    title: `Please pin this hash`,
    template: 'templates/issue.md',
    repo: 'ipfs/ops-requests',
    hash: argv['h'],
    domain: argv['d']
  })
} else {
  console.log('Insuffienct arguments supplied.')
  console.log('Please provide: domain, hash')
  process.exit(1)
}

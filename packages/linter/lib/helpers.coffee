{Range} = require('atom')
XRegExp = require('xregexp').XRegExp
path = require 'path'
child_process = require 'child_process'

Helpers = module.exports =
  validateMessages: (results) ->
    if (not results) or results.constructor.name isnt 'Array'
      throw new Error "Got invalid response from Linter, Type: #{typeof results}"
    for result in results
      unless result.type
        throw new Error "Missing type field on Linter Response, Got: #{Object.keys(result)}"
      result.range = Range.fromObject result.range if result.range?
      result.class = result.type.toLowerCase().replace(' ', '-')
      Helpers.validateMessages(result.trace) if result.trace
    return # Explicit return to return undefined
  validateLinter: (linter) ->
    unless linter.grammarScopes instanceof Array
      throw new Error("grammarScopes is not an Array. Got: #{linter.grammarScopes})")
    unless linter.lint?
      throw new Error("Missing linter.lint")
    if typeof linter.lint isnt 'function'
      throw new Error("linter.lint isn't a function")
    return true

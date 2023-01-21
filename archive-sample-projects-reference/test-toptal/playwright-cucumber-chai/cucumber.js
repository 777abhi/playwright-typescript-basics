const common = `
    --require setup/assertions.js
    --require setup/hooks.js
    --require step-def/**/*.step.js
`

module.exports = {
    default:`${common} feature/**/`
}
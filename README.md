# clean-css-uncss-brunch

Adds [clean-css](https://github.com/GoalSmashers/clean-css) and [UnCSS](https://github.com/giakki/uncss) support for Brunch. 

## Why have two things in one plugin?

In this case we have two build steps that should be always executed one after the other. 
I couldn't find a way to queue two plugins which would both relate to CSS processing, so I decided to queue these processes in one plugin.

## Need only clean-css or UnCSS - not both in one plugin?

Check out these repos:
- [clean-css-brunch](https://github.com/brunch/clean-css-brunch)
- [uncss-brunch](https://github.com/jakubburkiewicz/uncss-brunch)

## Usage

### Installation

Install the plugin via npm with `npm install --save clean-css-uncss-brunch`

Or add it to `package.json` dependencies:
`"clean-css-uncss-brunch":"1.0.0"`

### Config

To specify options, use `config.plugins.cleanuncss` object in Brunch config file. Follow standard brunch conventions. 

Example:

    plugins:
        cleanuncss:
            uncss:
                options:
                    csspath: '../styles'
                    htmlroot: 'build'
                files: ['index.html', 'about.html']
            cleancss:
                keepSpecialComments: 0
                removeEmpty: true

## Warning

This plugin is created to use both clean-css and UnCSS.
Technically, UnCSS is base for both processes - if you don't set options for UnCSS, nothing will happen (actually, you will see error in your console/terminal and no data will be processed). If you want, you can decide to omit clean-css options. But then you'll have something that you can achieve easier by just downloading [uncss-brunch](https://github.com/jakubburkiewicz/uncss-brunch) plugin.

# clean-css-uncss-brunch

Adds [clean-css](https://github.com/brunch/clean-css-brunch) and [UnCSS](https://github.com/giakki/uncss) support for Brunch

## Why two proceses in one plugin?

In this case we have two processes excuted on the same. I have not seen a possibility to queue two plugins wchich will do the same, so I queue these processes in one plugin.

## Need for clean-css or UnCSS - not both in one plugin?

Check:
- [clean-css-brunch](https://github.com/brunch/clean-css-brunch)
- [uncss-brunch](https://github.com/jakubburkiewicz/uncss-brunch)

## Usage

### Install

Install the plugin via npm with `npm install --save clean-css-uncss-brunch`

Or add it to package.json dependencies:
`"clean-css-uncss-brunch":"1.0.0"`

### Config

To specify options, use `config.plugins.cleanuncss` object in Brunch config file.
You can use all standard options for clean-css and UnCSS.

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

Plugin is created to use both clean-css and UnCSS.
Technically, UnCSS is base for both processes - if you don't set options for UnCSS, nothing will happen (actually, you will see error in your console/terminal, but no data will be processed). If you want, you can to not set clean-css options. But then you'll have just [uncss-brunch](https://github.com/jakubburkiewicz/uncss-brunch)-like plugin.

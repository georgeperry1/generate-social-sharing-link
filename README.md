# Generate Social Sharing Link CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/generate-social-sharing-link.svg)](https://npmjs.org/package/generate-social-sharing-link)
[![Downloads/week](https://img.shields.io/npm/dw/generate-social-sharing-link.svg)](https://npmjs.org/package/generate-social-sharing-link)
[![License](https://img.shields.io/npm/l/generate-social-sharing-link.svg)](https://github.com/georgeperry1/generate-social-sharing-link/blob/master/package.json)

This is a CLI for generating URLs for sharing content on social media. If you need to add social media sharing links to your website, you can easily generate them though this simple command line tool. Currently supports: 

- Facebook
- Twitter
- LinkedIn

# Menu
<!-- toc -->
* [How it works](#howitworks)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

<!-- howitworks -->
# How it works
If you have a piece of content that you want to allow users of your website to share on social media, e.g. https://towardsdatascience.com/hidden-features-of-chrome-devtools-33d9de390dc0

## Step 1:
Run 
```
$ npm install -g generate-social-sharing-link
```

## Step 2:
- Select a social media platform
- Enter the URL of content you want to share
- Enter any supporting text (only Twitter supports this currently)

![CLI example](https://github.com/georgeperry1/generate-social-sharing-link/raw/main/assets/example.png "CLI example")

## Step 3:
Generate URL: https://twitter.com/intent/tweet?text=This%20is%20a%20great%20article%20https%3A%2F%2Ftowardsdatascience.com%2Fhidden-features-of-chrome-devtools-33d9de390dc0

![Twitter result](https://github.com/georgeperry1/generate-social-sharing-link/raw/main/assets/result.png "Twitter result")
<!-- howitworksstop -->


# Usage
<!-- usage -->
```sh-session
$ npm install -g generate-social-sharing-link
```
<!-- usagestop -->
# Commands
<!-- commands -->

## Generate Link:
```sh-session
  $ generate-social-sharing-link generate-link
```

_See code: [src/commands/generate-link.ts](https://github.com/georgeperry1/generate-social-sharing-link/blob/v0.0.0/src/commands/generate-link.ts)_

## Help:

display help for generate-social-sharing-link

```
USAGE
  $ generate-social-sharing-link help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- commandsstop -->

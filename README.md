# :octocat: Github
This repository is a model for any new Antistatique repository.

## Import issue labels

To import all the model's labels to your repository :

1. Go to the **labels page** (`https://github.com/antistatique/REPO_NAME/labels`)
2. Remove the default labels
3. Open your web **console** (cmd+alt+j on Chrome)
4. **Paste** the content of [`scripts/labels.js`](https://raw.githubusercontent.com/antistatique/github/master/scripts/labels.js) 
5. Tada !

## Import issues/PR templates

Simply add the full `.github` directory to your project.

## Update labels script

To update the labels based on this repo labels :

1. Go to https://api.github.com/repos/antistatique/github/labels
2. Copy and update `scripts/labels.js`
# :octocat: Github
This repository is the centralized Antistatique's Github configuration.

## Import issue labels

⚠️ Since October 2019, Github introduced a [new settings](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/managing-default-labels-for-repositories-in-your-organization) for organisations label management. Every new Antistatique repository will benefit from our [default labels](https://github.com/organizations/antistatique/settings/labels).


To import manually all the model's labels to your repository :

1. Go to the **labels page** (`https://github.com/antistatique/REPO_NAME/labels`)
2. Remove the default labels
3. Open your web **console** (cmd+alt+j on Chrome)
4. **Paste** the content of [`scripts/labels.js`](https://raw.githubusercontent.com/antistatique/github/master/scripts/labels.js) 
5. Tada !

## Update the labels
1. Go to Antistatique [labels settings](https://github.com/organizations/antistatique/settings/labels) and update the list.
2. Go to the [labels management](https://github.com/antistatique/.github/labels) of this repo and do the same updates.
3. Go to https://api.github.com/repos/antistatique/github/labels
4. Copy and update `scripts/labels.js`

**⚠️ Antistatique settings and antistatique/.github labels must always stay the same.**

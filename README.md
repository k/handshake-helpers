# Handshake Helper Scripts

This is a collection of helper scripts to do various tasks utilizing the handshake blockchain

## Setup

[Install yarn](https://classic.yarnpkg.com/en/docs/install)
```
yarn
```

## Create Authoritative Nameserver Entries

Edit `./auth-ns-entries.js` with your domain and ip and run:
```
node auth-ns-entries.js
```

Copy the hex code output and put it in the [Namebase domain manager](https://www.namebase.io/domain-manager) advanced settings for your domain.
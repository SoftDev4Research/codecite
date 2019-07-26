/*
In order for this to work you MUST set a token. You probably want to set
an organisation and tags as well to suit you.
=================================

1. Get a token.

Where do tokens come from?
See here: https://github.com/blog/1509-personal-api-tokens
Note: you only need public_repo permissions for this tiny app to work.

=================================

2. Set env vars.

To set the vars on a Mac or Linux environment, run something like this in your terminal,
but replace everything after the = sign with your own content. No spaces allowed.

EXPORT CODE_CITE_ACCESS_TOKEN=1234356647856878

optional - set the port this app is served on, e.g.:
EXPORT CODE_CITE_PORT=3333

=================================
3. If the env vars aren't playing nice....

If you prefer, you _can_ set them simply by editing this file, e.g. for const token = `PUT YOUR TOKEN HERE` - but don't commit it to git, please! :)
*/

const token = process.env.CODE_CITE_ACCESS_TOKEN;

const settings = {
  "access_token": token
}

module.exports = settings;

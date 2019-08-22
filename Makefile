.PHONY: install-linter, lint

.ONESHELL:
SHELL = /bin/sh
install-linter:
	npm install -g markdownlint-cli

.ONESHELL:
SHELL = /bin/sh
lint:
	markdownlint .

.ONESHELL:
SHELL = /bin/sh
hugo:
	hugo server -D --ignoreCache --noHTTPCache --verboseLog --verbose
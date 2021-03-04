#!/bin/bash

bundle exec jekyll build

diff -u <(cat _site/index.html) <(echo "Hello" | md5sum | cut -f 1 -d' ')

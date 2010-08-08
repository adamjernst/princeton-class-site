#!/bin/bash

rsync -rz --delete --exclude=*.pyc --exclude=push.sh --exclude=cms.sqlite \
	--exclude=apache --exclude=.git* -e ssh \
	. aernst@princeton09.com:/var/www/Princeton/2010

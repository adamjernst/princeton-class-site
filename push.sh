#!/bin/bash

rsync -rzt --delete --exclude=*.pyc --exclude=push.sh --exclude=cms.sqlite \
	--exclude=apache --exclude=.git* -e ssh \
	. aernst@princeton2010.org:/var/www/Princeton/2010

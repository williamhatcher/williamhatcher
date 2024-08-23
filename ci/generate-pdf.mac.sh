#!/bin/sh
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
		 --headless \
                 --disable-gpu \
                 --disable-software-rasterizer \
                 --disable-dev-shm-usage \
                 --no-sandbox \
                 --print-to-pdf="$CI_PROJECT_DIR/dist/William Hatcher - Résumé.pdf" \
                 --hide-scrollbars \
                 file://$CI_PROJECT_DIR/dist/index.html

#! /bin/env bash

set -euo pipefail

rm -rfv \
   skel/.github/workflows/chromatic.yml \
   skel/.github/workflows/test.yml \
   skel/.storybook/ \
   skel/apps/
#!/bin/bash
# https://github.com/unlimitedbacon/stl-thumb
SCRIPTPATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
STLPATH=$(realpath "$SCRIPTPATH/../site/public/3d/")

if [ "$1" == "-f" ]; then
  FORCE=1
else
  FORCE=0
fi

for stl in $(find $STLPATH -type f -print)
do
  IMG=`echo "$stl" | sed -e 's/public/public\/images/g' -e 's/stl/png/g'`

  if [[ -f $IMG && "$FORCE" -eq 0 ]]; then
    continue
  fi

  IMGPATH=`echo "$IMG" | sed -e 's/\(.*\)\/.*/\1/gm'`
  mkdir -p "$IMGPATH"
  stl-thumb "$stl" "$IMG" > /dev/null 2>&1
  echo $IMG
done
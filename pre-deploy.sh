#!/bin/bash

# ===== REMOVE CURRENT DIST FOLDER =====
rm -rf dist

# ===== BUILD REACT =====
# Build the react app using parcel
npm run build
echo "Build successful."


# ===== COPY RUN FILES FOR APPS SCRIPT =====
src_dir="apps-script"
dst_dir="dist"

# Check if both directories exist (this check is redundant but added for safety)
if [ ! -d "$src_dir" ]; then
    echo "Error: Source directory 'apps-script' does not exist"
    exit 1
fi

if [ ! -d "$dst_dir" ]; then
    echo "Error: Destination directory 'build' does not exist"
    exit 1
fi

# Copy FILES
cp -R "$src_dir"/* "$dst_dir"

echo "Files copied successfully from '$src_dir' to '$dst_dir'."
#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Define the main input CSS file
INPUT_CSS="./css/input.css"

# Clean and create the output directory
OUTPUT_DIR="dist/css"
rm -rf $OUTPUT_DIR
mkdir -p $OUTPUT_DIR

# --- Process Root HTML Files ---
echo "Processing root HTML files..."
for file in *.html; do
  if [ -f "$file" ]; then
    filename=$(basename "$file" .html)
    output_file="$OUTPUT_DIR/$filename.css"
    echo "  - Generating CSS for $file -> $output_file"
    npx @tailwindcss/cli -i $INPUT_CSS --content "$file" -o "$output_file" --minify
  fi
done

# --- Process Component JS Files ---
echo "Processing component JS files..."
find components -name "*.js" | while read -r file; do
  relative_path=${file%.js} # remove .js extension
  output_file="$OUTPUT_DIR/$relative_path.css"
  output_dir_for_file=$(dirname "$output_file")

  mkdir -p "$output_dir_for_file"
  echo "  - Generating CSS for $file -> $output_file"
  npx @tailwindcss/cli -i $INPUT_CSS --content "$file" -o "$output_file" --minify
done

echo "✅ CSS build complete."

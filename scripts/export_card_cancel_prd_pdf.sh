#!/usr/bin/env bash
# 从 卡片注销_PRD.md 生成 卡片注销_PRD.pdf（需本机 Google Chrome）
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
python3 scripts/md_to_html_prd.py "卡片注销_PRD.md" "_卡片注销_PRD_export.html"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
HTML="file://${ROOT}/_卡片注销_PRD_export.html"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="${ROOT}/卡片注销_PRD.pdf" "$HTML"
echo "Wrote ${ROOT}/卡片注销_PRD.pdf"

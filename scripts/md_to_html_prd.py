#!/usr/bin/env python3
"""Minimal Markdown → HTML for Wanli PRD export (tables, headers, images, inline HTML)."""
import html
import re
import sys
from pathlib import Path


def inline(text: str) -> str:
    text = html.escape(text)
    text = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", text)
    text = re.sub(r"`([^`]+)`", r"<code>\1</code>", text)
    return text


def convert(md: str) -> str:
    lines = md.splitlines()
    out: list[str] = []
    i = 0
    in_style = False
    in_ul = False

    def close_ul():
        nonlocal in_ul
        if in_ul:
            out.append("</ul>")
            in_ul = False

    while i < len(lines):
        line = lines[i]

        if line.strip().startswith("<style"):
            close_ul()
            block = [line]
            i += 1
            while i < len(lines) and "</style>" not in lines[i]:
                block.append(lines[i])
                i += 1
            if i < len(lines):
                block.append(lines[i])
            out.extend(block)
            i += 1
            continue

        if line.strip().startswith("<") and not line.strip().startswith("|"):
            close_ul()
            out.append(line)
            i += 1
            continue

        if line.startswith("|"):
            close_ul()
            rows: list[list[str]] = []
            while i < len(lines) and lines[i].startswith("|"):
                row = [c.strip() for c in lines[i].strip().strip("|").split("|")]
                rows.append(row)
                i += 1
            if len(rows) >= 2 and all(re.match(r"^:?-+:?$", c.replace(" ", "")) or c.replace("-", "") == "" for c in rows[1]):
                rows = [rows[0]] + rows[2:]
            if rows:
                out.append("<table>")
                def cell_html(c: str) -> str:
                    return c if "<" in c else inline(c)

                out.append("<thead><tr>" + "".join(f"<th>{cell_html(c)}</th>" for c in rows[0]) + "</tr></thead>")
                if len(rows) > 1:
                    out.append("<tbody>")
                    for row in rows[1:]:
                        cells = row + [""] * (len(rows[0]) - len(row))

                        def cell_html(c: str) -> str:
                            return c if "<" in c else inline(c)

                        out.append(
                            "<tr>"
                            + "".join(f"<td>{cell_html(c)}</td>" for c in cells[: len(rows[0])])
                            + "</tr>"
                        )
                    out.append("</tbody>")
                out.append("</table>")
            continue

        m = re.match(r"^(#{1,3})\s+(.+)$", line)
        if m:
            close_ul()
            level = len(m.group(1))
            out.append(f"<h{level}>{inline(m.group(2))}</h{level}>")
            i += 1
            continue

        m = re.match(r"^!\[(.*?)\]\((.*?)\)$", line.strip())
        if m:
            close_ul()
            alt, src = m.group(1), m.group(2)
            out.append(f'<p><img src="{html.escape(src, quote=True)}" alt="{html.escape(alt)}" /></p>')
            i += 1
            continue

        if line.startswith("- "):
            if not in_ul:
                out.append("<ul>")
                in_ul = True
            out.append(f"<li>{inline(line[2:])}</li>")
            i += 1
            continue

        if not line.strip():
            close_ul()
            i += 1
            continue

        close_ul()
        out.append(f"<p>{inline(line)}</p>")
        i += 1

    close_ul()
    return "\n".join(out)


def main():
    src = Path(sys.argv[1])
    dst = Path(sys.argv[2])
    md = src.read_text(encoding="utf-8")
    body = convert(md)
    doc = f"""<!DOCTYPE html>
<html lang="zh-CN"><head><meta charset="utf-8"><title>{html.escape(src.stem)}</title>
<style>
body {{ font-family: -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif; font-size: 14px; line-height: 1.65; max-width: 920px; margin: 20px auto; padding: 0 20px; color: #111; }}
table {{ border-collapse: collapse; width: 100%; margin: 12px 0; font-size: 13px; }}
th, td {{ border: 1px solid #ccc; padding: 6px 8px; text-align: left; vertical-align: top; }}
th {{ background: #f5f5f5; }}
img {{ max-width: 100%; height: auto; }}
h1 {{ font-size: 22px; border-bottom: 1px solid #ddd; padding-bottom: 8px; }}
h2 {{ font-size: 18px; margin-top: 22px; }}
h3 {{ font-size: 16px; margin-top: 16px; }}
code {{ background: #f4f4f4; padding: 1px 4px; border-radius: 3px; }}
</style>
</head><body>
{body}
</body></html>"""
    dst.write_text(doc, encoding="utf-8")


if __name__ == "__main__":
    main()

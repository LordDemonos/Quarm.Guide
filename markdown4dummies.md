| Symbol/Command | Description | Example |
|-----------------|--------------|---------|
| `# Heading 1` | Creates a top-level heading | `# This is a Heading 1` |
| `## Heading 2` | Creates a second-level heading | `## This is a Heading 2` |  
| `### Heading 3` | Creates a third-level heading | `### This is a Heading 3` |
| `**bold**` | Bolds text | `**This text is bold**` |
| `*italic*` | Italicizes text | `*This text is italic*` |
| `***bold_and_italic***` | Bolds and italicizes text | `***This text is bold and italic***` |
| `> Blockquote` | Creates a blockquote | `> This is a blockquote` |
| `1. Ordered List` | Creates an ordered list | `1. First item`<br>`2. Second item` |
| `- Unordered List` | Creates an unordered list | `- First item`<br>`- Second item` |
| `[Link Text](https://example.com)` | Creates a hyperlink | `[Google](https://google.com)` |
| `` `code` `` | Formats inline code | `This is `inline code`` |
| ````````language`<br>`code block`<br>````````| Creates a code block 
| ````````python`<br>`print("Hello, World!")`<br>`````````|

Most Markdown renderers will treat ##### and ###### as the 5th and 6th heading levels respectively, even though I didn't list them explicitly in the table.
As for other nuances, here are a few more things to keep in mind:

Horizontal Rules: You can create horizontal rules using --- or *** on a line by themselves, as shown in the table. Some renderers also support ___ for horizontal rules.
Ordered Lists: For ordered lists, while you can start the numbering from any number (e.g., 5. First item), the rendered list will always start from 1. Similarly, you don't need to update the numbers sequentially for every item, as Markdown will handle the numbering automatically.
Code Blocks: For code blocks, you can optionally specify the language after the opening triple backticks (e.g., ```````python`). This can enable syntax highlighting for that language in some Markdown renderers.
Escaping Characters: If you need to use any of the Markdown syntax characters literally (e.g., # for a heading), you can escape them by prefixing a backslash (e.g., \#).
Links and Images: For links and images, you can also use a reference-style syntax instead of inline. This can be useful for reusing the same link or image multiple times in your document.

As for images, you can insert them using the ![Alt Text](/path/to/image.jpg) syntax. Here are some examples:

To insert an image from the /img/ folder in your repository: ![My Image](/img/image.jpg)
To insert an image from a subfolder like /img/step1/: ![Step 1 Image](/img/step1/step1.png)

You can also align images using HTML tags:

To align an image to the left: <img src="/img/image.jpg" align="left">
To align an image to the right: <img src="/img/image.jpg" align="right">

For styling images, you can use HTML attributes like width, height, and style:

To set the width and height: <img src="/img/image.jpg" width="200" height="100">
To add a border: <img src="/img/image.jpg" style="border: 1px solid black;">


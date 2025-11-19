# QnDHTML: Usage & Examples

### Parameters

| Parameter  | Type                | Description                                   |
| ---------- | ------------------- | --------------------------------------------- |
| ?html=     | URI Encoded HTML    | Renders From URI Encoded HTML.                |
| ?base64=   | Base64 Encoded HTML | Renders From Base64 Encoded HTML.             |
| ?url=      | URL                 | Renders From An External URL's Raw Content.   |
| &settings= | JSON                | (optional) Controls The Page Title & Favicon. |

## Examples:
<details>
  <summary>?html= Example</summary>

  # ?html Example

> [!IMPORTANT]  
    > The ?html= argument must be URI encoded, otherwise it may become broken.

> [!TIP]
> If your html contains many special characters or long scripts, use ?base64= instead.
   
   This [URL](https://galaxygaming2000.github.io/QnDHTML/?html=%3C!DOCTYPE%20html%3E%0A%3Chtml%3E%0A%3Chead%3E%0A%20%20%3Cstyle%3E%0A%20%20%20%20body%20%7B%0A%20%20%20%20%20%20background-color%3A%20%23222%3B%0A%20%20%20%20%20%20color%3A%20%23eee%3B%0A%20%20%20%20%20%20font-family%3A%20sans-serif%3B%0A%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20flex-direction%3A%20column%3B%0A%20%20%20%20%20%20justify-content%3A%20center%3B%0A%20%20%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20%20%20height%3A%20100vh%3B%0A%20%20%20%20%20%20margin%3A%200%3B%0A%20%20%20%20%7D%0A%20%20%20%20h1%20%7B%0A%20%20%20%20%20%20color%3A%20%234caf50%3B%0A%20%20%20%20%7D%0A%20%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%20%3Ch1%3EHello%20World!%3C%2Fh1%3E%0A%20%20%3Cp%3EThis%20page%20has%20been%20rendered%20by%20QnDHTML%20Via%20A%20URL!%3C%2Fp%3E%0A%20%20%3Cbutton%20id%3D%22clickMe%22%3EClick%20Me!%3C%2Fbutton%3E%0A%20%20%3Cscript%3E%0A%20%20%20%20document.getElementById(%27clickMe%27).addEventListener(%27click%27%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20alert(%27Scripts%20work%20as%20well!%27)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%3C%2Fscript%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E%0A) Will Bring You to a page which has basic styling as well as a basic script.

   ```https://galaxygaming2000.github.io/QnDHTML/?html=%3C!DOCTYPE%20html%3E%0A%3Chtml%3E%0A%3Chead%3E%0A%20%20%3Cstyle%3E%0A%20%20%20%20body%20%7B%0A%20%20%20%20%20%20background-color%3A%20%23222%3B%0A%20%20%20%20%20%20color%3A%20%23eee%3B%0A%20%20%20%20%20%20font-family%3A%20sans-serif%3B%0A%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20flex-direction%3A%20column%3B%0A%20%20%20%20%20%20justify-content%3A%20center%3B%0A%20%20%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20%20%20height%3A%20100vh%3B%0A%20%20%20%20%20%20margin%3A%200%3B%0A%20%20%20%20%7D%0A%20%20%20%20h1%20%7B%0A%20%20%20%20%20%20color%3A%20%234caf50%3B%0A%20%20%20%20%7D%0A%20%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%20%3Ch1%3EHello%20World!%3C%2Fh1%3E%0A%20%20%3Cp%3EThis%20page%20has%20been%20rendered%20by%20QnDHTML%20Via%20A%20URL!%3C%2Fp%3E%0A%20%20%3Cbutton%20id%3D%22clickMe%22%3EClick%20Me!%3C%2Fbutton%3E%0A%20%20%3Cscript%3E%0A%20%20%20%20document.getElementById(%27clickMe%27).addEventListener(%27click%27%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20alert(%27Scripts%20work%20as%20well!%27)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%3C%2Fscript%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E%0A```

   ## URI Encoding?
   In Order to have the browser to be able to parse it correctly, the url must be encoded. **while the browser may be able to do this itself**, it can slip up and incorrectly encode it.

   ### How do I Encode The HTML?
   You can use https://galaxygaming2000.github.io/QnDHTML/encode/.   
</details>

<details>
  <summary>?base64= Example</summary>

  # ?base64 Example
   
   This [URL](https://galaxygaming2000.github.io/QnDHTML/?base64=PCFET0NUWVBFIGh0bWw+CjxodG1sPgo8aGVhZD4KICA8c3R5bGU+CiAgICBib2R5IHsKICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjsKICAgICAgY29sb3I6ICNlZWU7CiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgaGVpZ2h0OiAxMDB2aDsKICAgICAgbWFyZ2luOiAwOwogICAgfQogICAgaDEgewogICAgICBjb2xvcjogIzRjYWY1MDsKICAgIH0KICA8L3N0eWxlPgo8L2hlYWQ+Cjxib2R5PgogIDxoMT5IZWxsbyBXb3JsZCE8L2gxPgogIDxwPlRoaXMgcGFnZSBoYXMgYmVlbiByZW5kZXJlZCBieSBRbkRIVE1MIFZpYSBBIFVSTCE8L3A+CiAgPGJ1dHRvbiBpZD0iY2xpY2tNZSI+Q2xpY2sgTWUhPC9idXR0b24+CiAgPHNjcmlwdD4KICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGlja01lJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7CiAgICAgIGFsZXJ0KCdTY3JpcHRzIHdvcmsgYXN3ZWxsIScpOwogICAgfSk7CiAgPC9zY3JpcHQ+CjwvYm9keT4KPC9odG1sPg==) Will Bring You to a page which has basic styling as well as a basic script.

   ```https://galaxygaming2000.github.io/QnDHTML/?base64=PCFET0NUWVBFIGh0bWw+CjxodG1sPgo8aGVhZD4KICA8c3R5bGU+CiAgICBib2R5IHsKICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjsKICAgICAgY29sb3I6ICNlZWU7CiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgaGVpZ2h0OiAxMDB2aDsKICAgICAgbWFyZ2luOiAwOwogICAgfQogICAgaDEgewogICAgICBjb2xvcjogIzRjYWY1MDsKICAgIH0KICA8L3N0eWxlPgo8L2hlYWQ+Cjxib2R5PgogIDxoMT5IZWxsbyBXb3JsZCE8L2gxPgogIDxwPlRoaXMgcGFnZSBoYXMgYmVlbiByZW5kZXJlZCBieSBRbkRIVE1MIFZpYSBBIFVSTCE8L3A+CiAgPGJ1dHRvbiBpZD0iY2xpY2tNZSI+Q2xpY2sgTWUhPC9idXR0b24+CiAgPHNjcmlwdD4KICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGlja01lJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7CiAgICAgIGFsZXJ0KCdTY3JpcHRzIHdvcmsgYXN3ZWxsIScpOwogICAgfSk7CiAgPC9zY3JpcHQ+CjwvYm9keT4KPC9odG1sPg==```

   ### How do I Encode The HTML?
   You can use https://galaxygaming2000.github.io/QnDHTML/encode/.   
</details>

<details>
  <summary>?url= Example</summary>

  # ?url Example
   
   > [!WARNING]  
> The provided URL must allow cross origin requests, otherwise it will fail to fetch.

> [!CAUTION]
> Only use ?url= on sites you know you can trust, it can copy script elements that can run within the renderer. (Depending on your browser)

?url will request the page content from the provided url, if its raw content like a text file, it will use that as the input, if not, it will use the pages html.

   ```https://galaxygaming2000.github.io/QnDHTML/?url=example.com (this doesnt function due to the above.)```
</details>

<details>
  <summary>&settings= Example</summary>

  # &settings= Example
   
   > [!Note]  
> Settings are completely optional, it is not required for the html to render.

The settings provide 2 values:
The Page Title & The Page Favicon URL.

Like The ?html encoding, it must be a URI encoded json object.

Settings can be appended to any valid url, just add &settings=[json] to the end of the url.

Heres an example of a valid &settings=

   ```&settings=%7B%22title%22%3A%22TitleHere%22%2C%22favicon%22%3A%22https://example.com/favicon.ico%22%7D```

   its not that readable. to create one with ease you can use https://galaxygaming2000.github.io/QnDHTML/encode/.
</details>


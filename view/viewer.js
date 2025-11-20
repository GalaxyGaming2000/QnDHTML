const version = "V2.0.0";
let params = new URLSearchParams(document.location.search);

function ProvideMessage(message) {
    const elemPre = document.createElement("pre")
    elemPre.style.cssText = "word-wrap:break-word;white-space:pre-wrap;";
    elemPre.textContent = message

    document.body.appendChild(elemPre);
}

function normalizeUrl(url) {
    if (!url) return null;
    url = url.trim();
    if (!/^https?:\/\//i.test(url)) {
        url = "https://" + url;
    }
    return url;
}

function safeUrlDecode(input) {
    let prev = input, next;
    while (true) {
        try { next = decodeURIComponent(prev); }
        catch { break; }
        if (next === prev) break;
        prev = next;
    }
    return prev;
}

function b64DecodeUnicode(str) {
    str = safeUrlDecode(str);
    str = str.replace(/ /g, '+');
    str = str.replace(/\s/g, '');
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

async function DecodeParams(params)
{
    const encoded_html = params.get("html")
    const encoded_url = params.get("url")
    const encoded_base64 = params.get("base64")

    const param_count = [encoded_html, encoded_url, encoded_base64].filter(Boolean).length;

    if (param_count === 0) {
        ProvideMessage("No valid parameter was given.\nSee: https://galaxygaming2000.github.io/QnDHTML/docs/usage");
        return null
    } else if (param_count > 1) {
        ProvideMessage(`Too many parameters. (Expected 1, got: ${param_count})\nSee: https://galaxygaming2000.github.io/QnDHTML/docs/usage`);
    } else {
        if (encoded_html) {
            try {
                const html = decodeURIComponent(encoded_html)
                return html
            }
            catch (e) {
                ProvideMessage(`Failed To Decode HTML: ${e}`)
                return null
            }
        }
        else if (encoded_url) {
            try {
                let url = decodeURIComponent(encoded_url)
                url = normalizeUrl(url)
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
                }

                const html = await response.text();
                return html
            } catch (e) {
                ProvideMessage(`Failed To Fetch From URL: ${e}\nCheck the URL and make sure it allows cross-origin requests.`)
                return null
            }
        } else if (encoded_base64) {
            try {
                const html = b64DecodeUnicode(encoded_base64)
                return html
            }
            catch (e) {
                ProvideMessage(`Failed To Decode Base64: ${e}`)
                return null
            }
        } else {
            ProvideMessage(`An unknown parameter was given.\nSee: https://galaxygaming2000.github.io/QnDHTML/docs/usage`)
            return null
        }
    }

}

function DoSettingsThings(params) {
    const encoded_settings = params.get("settings")
    let settings = {};
    if (encoded_settings) {
        try {
            settings = JSON.parse(decodeURIComponent(encoded_settings));
        } catch (e) {
            ProvideMessage(`Failed to decode settings: ${e}`);
        }
    }

    if (settings.title) document.title = settings.title;

    if (settings.favicon) {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement("link");
            link.rel = "icon";
            document.head.appendChild(link);
        }
        link.href = settings.favicon;
    }
}

function DisplayHTML(html) {
    const elemiframe = document.createElement("iframe");
    elemiframe.style.cssText = `position:fixed;top:0;left:0;width:100%;height:100%;border:none;margin:0;padding:0;z-index:9999;`;

    elemiframe.srcdoc = html;
    document.body.appendChild(elemiframe);

    console.log("This page was rendered by QnDHTML - https://github.com/GalaxyGaming2000/QnDHTML");
}

async function main() {
    ProvideMessage(`QnDHTML - ${version} - https://github.com/GalaxyGaming2000/QnDHTML`)

    const html = await DecodeParams(params)
    DoSettingsThings(params)

    if (!html || html.trim() === "") {
    return;
    }

    DisplayHTML(html);
}

main();
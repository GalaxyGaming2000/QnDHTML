const encoding_method = document.getElementById("method");
const html_method_menu = document.getElementById("encode-html");
const settings_method_menu = document.getElementById("encode-settings");
const encodebtn = document.getElementById("encode-btn")

const htmltextbox = document.getElementById("html")
const pagetitle = document.getElementById("title")
const iconurl = document.getElementById("iconurl")

const results_block = document.getElementById("resultsblock")
const results_text = document.getElementById("result")
const link = document.getElementById("link")

encoding_method.addEventListener("change", function () {
    if (this.value === "uri" || this.value === "base64") {
        html_method_menu.style.display = "block"
        settings_method_menu.style.display = "none"
    } else if (this.value === "options") {
        html_method_menu.style.display = "none"
        settings_method_menu.style.display = "block"
    } else {
        html_method_menu.style.display = "none"
        settings_method_menu.style.display = "none"
    }
    results_block.style.display = "none"
});

function OutputResults(str) {
    results_text.textContent = str
    results_block.style.display = "block"
}

function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
        }));
}

function Encode() {
    if (encoding_method.value === "uri") {
        try {
            OutputResults("?html=" + encodeURIComponent(htmltextbox.value))
        }
        catch (e) {
            OutputResults(`Failed To Encode: ${e}`)
        }

    } else if (encoding_method.value === "base64") {
        try {
            OutputResults("?base64=" + b64EncodeUnicode(htmltextbox.value))
        }
        catch (e) {
            OutputResults(`Failed To Encode: ${e}`)
        }
    } else if (encoding_method.value === "options") {
        try {
            const json = { title: pagetitle.value, favicon: iconurl.value }
            OutputResults("&settings=" + encodeURIComponent(JSON.stringify(json, null, 2)))
        }
        catch (e) {
            OutputResults(`Failed To Encode: ${e}`)
        }
    } else {
        OutputResults("Failed: you are using an unknown encoding method.")
    }
}

encodebtn.addEventListener("click", Encode);

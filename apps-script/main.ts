// @ts-ignore
function doGet() {
    return HtmlService
        .createTemplateFromFile("index")
        .evaluate()
        .addMetaTag("viewport", "width=device-width, initial-scale=1.0")
        .addMetaTag("theme-color", "#000000")
        .addMetaTag("PersonalWebsite", "Personal Website")
}

// @ts-ignore
function callServerFunction() {
    return "Some content from the server!";
}

// @ts-ignore
function callServerFunctionWithParam(paramValue: str) {
    return "Some content with specified param " + paramValue + "!";
}
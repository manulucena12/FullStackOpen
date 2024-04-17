sequenceDiagram
    participant browser
    participant server

    *Initial load*
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document, CSS file, JavaScript file
    deactivate server
    *These requests won't be required in normal situation*

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "Hello SPA", "date": "2023-1-1" }, ... ]
    deactivate server
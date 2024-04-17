sequenceDiagram
	participant server
    participant human
    participant browser
    participan formulary
  

	human->>formulary: *click, type "Hi Helsinki, click save*
	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/new_note
	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
	activate server
	server-->browser: Status Code HTTP 302
	deactivate server

	server->>browser: GET https://studies.cs.helsinki.fi/exampleapp/location
	*PAGE RELOAD*
	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
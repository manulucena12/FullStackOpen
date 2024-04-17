sequenceDiagram
	participant server
    participant human
    participant browser
    participan formulary
  

	human->>formulary: *click, type "Hi Helsinki, click save*
	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/new_note_spa
	activate server
	server-->browser: Status Code HTTP 201
	deactivate server
    *No more HTTP request sent*
##0.4: New note diagram

```mermaid

sequenceDiagram

    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note right of browser: The Form tag has attributes action and method, which define that submitting the form is done as an HTTP POST request to the address new_note.
    server-->>browser: URL redirect: /exampleapp/notes
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    Note right of browser: So, at regular interval, the browser sends HTTP GET request to the server.

```
##  0.6: New note in Single page app diagram

```mermaid

sequenceDiagram

    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: application/json
    deactivate server


    Note right of browser: The server tells the browser the content-type of its request. The browser uses this information to render the content correctly.


```
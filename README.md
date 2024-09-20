# Tauri + React + Typescript
This repo has two branches the `qr-code` and the `events` branch. which contain the two demo's I wanted to show during our lunch & learn
 
## Recommended IDE Setup
- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

# QR-Code demo:
The QR code that is generated is bogus and isn't really scanable, It is only used to indicate that we can use a tauri command that uses a external library or tool which than can use in our frontend.
<img width="1095" alt="Screenshot 2024-09-20 at 13 25 05" src="https://github.com/user-attachments/assets/1c274fca-7060-43f9-a978-ac93963b3e54">

# Events demo:
This demo is to indicate we can send events from our rust layer to use on the frontend. This can for example be used for long running processes.
In this case we use it to update a timer...
<img width="964" alt="Screenshot 2024-09-20 at 13 30 56" src="https://github.com/user-attachments/assets/71dde76e-27be-4a04-881f-b94530113f34">

// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::thread;
use std::time::Duration;

#[tauri::command]
fn initiate_timer_event(window: tauri::Window) {
    // Spawn a new thread to avoid blocking the main thread
    thread::spawn(move || {
        // Start a countdown from 10
        let mut count = 10;
        while count > 0 {
            window
                .emit("timer-tick", count)
                .unwrap();

            // Wait for 1 second
            thread::sleep(Duration::from_secs(1));

            print!("Countdown: {}\n", count);
            count -= 1;
        }
        window
            .emit("timer-finished", "Timer has completed")
            .unwrap();
    });
}

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}


fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, initiate_timer_event])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod command;

fn main() {
    std::env::set_var("RUST_LOG", log::Level::Trace.to_string());
    env_logger::init();

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![command::x_get_api])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

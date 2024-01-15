use crate::controllers::settings_controller;
use log::{debug, info};
use serde_json::Value;
use tauri::command;

#[command]
pub fn get_settings(app: tauri::AppHandle) -> Value {
    settings_controller::load(app)
}

#[command]
pub async fn update_settings(app: tauri::AppHandle, settings: Value) -> bool {
    settings_controller::update(app, settings)
}

#[command]
pub fn validate_system_current_password(current_password: &str) -> bool {
    debug!("{}", current_password);
    true
}

#[command]
pub fn update_system_password(
    current_password: &str,
    new_password: &str,
    confirm_password: &str,
) -> bool {
    if validate_system_current_password(current_password) == false {
        unreachable!();
    }

    info!("{}", current_password);
    info!("{}", new_password);
    info!("{}", confirm_password);

    true
}

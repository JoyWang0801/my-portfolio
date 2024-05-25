import "./App.css";
import "./assets/splatoon3-fonts-main/Decrypted/AsiaKCUBE-R.ttf";
import "./assets/splatoon3-fonts-main/Decrypted/BlitzBold.otf";

export default function App() {
  return (
    <div>
      <img
        class="chat-notification-logo"
        src={require("./assets/images/ink-shape.png")}
        alt="Ink shape"
      />
      <div class="chat-notification">
        <div class="chat-notification-logo-wrapper"></div>
        <div class="chat-notification-content">
          <h4 class="chat-notification-title">ChitChat</h4>
          <p class="chat-notification-message">You have a new message!</p>
        </div>
      </div>
    </div>
  );
}

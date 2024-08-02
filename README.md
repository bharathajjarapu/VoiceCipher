# VoiceCipher 🎙️
Local Speech transcription using Tiny Whisper model

Welcome to **VoiceCipher**, a static web application that uses [transformer.js](https://cdn.jsdelivr.net/npm/@xenova/transformers) to run the Tiny Whisper model directly through JS on the user's local machine to transcribe audio to English only.

## Features 🌟

- **User-Friendly Interface**: Clean and intuitive design for a seamless experience. 🎨
- **Flexible Input Options**: Transcribe from URLs, file uploads, or direct recordings. 🔗📁🎤
- **Speech-to-Text Transcription**: Convert your voice recordings into text using state-of-the-art ML models. 🧠

## Getting Started 🚀

To get started with VoiceCipher, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/bharathajjarapu/voicecipher.git
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd voicecipher
   ```

3. **Go Live or Run the HTML File**
   Simply open `index.html` in your browser to launch the application. 🌐

## Usage 🛠️

1. **Choose Your Input Method**:
   - **From URL**: Enter the URL of the audio file. 🌐
   - **From File**: Upload an audio file from your computer. 📁
   - **Record**: Record audio directly through your microphone. 🎤

2. **Transcribe**: Click the "Transcribe" button to start converting your audio into text. ✏️

3. **View Results**: The transcription will appear in the text area below the buttons. Note that it is currently limited to 20 seconds for most devices; improvements are planned. ⏱️

## How It Works 🔍

VoiceCipher uses **[transformers.js](https://cdn.jsdelivr.net/npm/@xenova/transformers)** to run the Whisper model for speech-to-text conversion. Here's a brief explanation:

- **Transformer.js**: This library is used to interface with the Whisper model, enabling speech recognition directly in the browser. 📊
- **Static Execution**: Unlike many ML models that rely on WebAssembly for execution, Whisper runs statically without WebAssembly. This approach simplifies deployment and ensures compatibility across different environments. ⚙️

## Dependencies 📦

- [Bootstrap](https://getbootstrap.com/) for styling. 🎨
- [Xenova Transformers](https://cdn.jsdelivr.net/npm/@xenova/transformers) for speech recognition. 🧠

## Future Ideas 🚧

1. Adding support for audio clips longer than 20 seconds for all devices.
2. Adding a multilingual model to transcribe various languages, like Telugu. 🌍

## License 📝

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact 📫

For any questions or contributions, please contact [bharathajjarapu@duck.com](mailto:bharathajjarapu@duck.com).

Made using [Transformer.js](https://github.com/xenova/transformers.js) 🚀

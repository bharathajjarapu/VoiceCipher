# VoiceCipher
Local Speech transcription using Tiny Whisper model

Welcome to **VoiceCipher**, a cutting-edge project leveraging machine learning to transcribe your voice recordings with ease! Whether you're a student looking to transcribe lecture notes or a developer experimenting with speech-to-text technology, VoiceCipher has you covered.

## Features

- **User-Friendly Interface**: Clean and intuitive design for a seamless experience.
- **Flexible Input Options**: Transcribe from URLs, file uploads, or direct recordings.
- **Speech-to-Text Transcription**: Convert your voice recordings into text using state-of-the-art ML models.

## Getting Started

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
   Simply open `index.html` in your browser to launch the application.

## Usage

1. **Choose Your Input Method**:
   - **From URL**: Enter the URL of the audio file.
   - **From File**: Upload an audio file from your computer.
   - **Record**: Record audio directly through your microphone.

2. **Transcribe**: Click the "Transcribe" button to start converting your audio into text.

3. **View Results**: The transcription will appear in the text area below the buttons. But right now it is limited to 20 Seconds, I will look forward to add the implementation to work it out.

## How It Works

VoiceCipher uses **[transformers.js](https://cdn.jsdelivr.net/npm/@xenova/transformers)** to run the Whisper model for speech-to-text conversion. Here's a brief explanation:

- **Transformer.js**: This library is used to interface with the Whisper model, enabling speech recognition directly in the browser. 
- **Static Execution**: Unlike many ML models that rely on WebAssembly for execution, Whisper runs statically without WebAssembly. This approach simplifies deployment and ensures compatibility across different environments. ⚙️

## Dependencies

- [Bootstrap](https://getbootstrap.com/) for styling.
- [Xenova Transformers](https://cdn.jsdelivr.net/npm/@xenova/transformers) for speech recognition. 🧠

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or contributions, please contact [your-email@example.com](mailto:your-email@example.com).

Made using [Transformer.js](https://github.com/xenova/transformers.js)

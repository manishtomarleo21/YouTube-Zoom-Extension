
# 🎥 YouTube Zoom Extension

Enhance your YouTube experience with smooth zoom and pan controls. This Chrome extension allows you to zoom in and out on YouTube videos, and even pan the video while zoomed in, all with simple keyboard and mouse gestures. 🎬🔍

## Features ✨

- **Zoom In/Out**: Hold `Ctrl` and use the mouse wheel or trackpad to zoom in and out of YouTube videos. 🔍
- **Pan Video**: While zoomed in, hold `Ctrl` and click + drag to pan the video, allowing you to explore off-screen areas. 🖱️
- **Fullscreen Support**: Zooming and panning work even in fullscreen mode. 📺
- **Customizable Sensitivity**: Adjust the zoom sensitivity for a smoother experience. ⚙️

## Installation 🚀

### Using Chrome:

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/youtube-zoom-extension.git
   ```

2. Go to `chrome://extensions/` in your Chrome browser. 🌐

3. Enable **Developer mode** by toggling the switch in the top-right corner. ⚙️

4. Click **Load unpacked** and select the `dist` folder from the cloned repository. 📂

5. Once loaded, the extension will automatically be active on YouTube. ✅

## Usage 🔧

- To **zoom in** or **zoom out** on the video, hold the `Ctrl` key and scroll the mouse wheel (or use trackpad gestures). 🖱️🔍
- To **pan** the video, hold `Ctrl` and **left-click and drag** the video to move around. 🖱️💨
- The **zoom level** is limited between `0.5x` and `3x` for a smooth experience. 📏

## Configuration ⚙️

You can customize the zoom sensitivity by adjusting the `zoomStep` variable in the `contentScript.js` file. The default step is set to `0.05`, which you can modify to make zooming faster or slower. ⚡

```javascript
const zoomStep = 0.05; // Modify this value to change zoom sensitivity
```

## Icons 🖼️

The extension uses custom icons to represent it in the browser toolbar, Chrome extensions page, and the Web Store. 📸

## Contributing 💡

Feel free to fork the repository and submit pull requests for improvements or new features. If you find any bugs, please open an issue in the GitHub repository. 🐛

### Steps to Contribute:

1. Fork the repository. 🍴
2. Clone your fork to your local machine. 💻
3. Create a new branch for your changes. 🌿
4. Make the necessary changes and commit them. ✍️
5. Push the changes to your fork. ⬆️
6. Create a pull request with a description of your changes. 🔄

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 📃

## Acknowledgments 🙏

- Special thanks to YouTube for providing the platform for this extension! 🎉
- Thank you to the open-source community for inspiring the development of this extension. 🌍

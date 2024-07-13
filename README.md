

https://github.com/user-attachments/assets/c7b1e3ad-7f79-4cb0-9b5c-7cd43473cb2c

# parallax-starry-sky
A responsive parallax scrolling effect with a starry sky background, including interactive elements and zoom controls. Ideal for demonstrating parallax effects and interactive UI components.

# Parallax Starry Sky

A responsive parallax scrolling effect with a starry sky background, including interactive elements and zoom controls. This project is ideal for demonstrating parallax effects and interactive UI components.

## Features

- **Parallax Scrolling**: Multi-layered background that moves at different speeds to create a depth effect.
- **Interactive Elements**: Clickable points that display information in a card.
- **Zoom Controls**: Buttons to zoom in and out of the view.
- **Position Controls**: Sliders to move horizontally and vertically.

## Demo

Check out the live demo on [CodePen](https://codepen.io/ogerly/pen/yLdNvWv).

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/parallax-starry-sky.git
    cd parallax-starry-sky
    ```

2. Open `index.html` in your browser.

## Usage

### HTML Structure

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parallax Sternenhimmel</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="controls.css">
</head>
<body>
    <div class="scroll-container" id="scroll-container">
        <div class="parallax-layer" id="layer1">
            <img src="star_bg3.png" alt="Hintergrund 1" class="bg-image">
        </div>
        <div class="parallax-layer" id="layer2">
            <img src="star_bg2.png" alt="Hintergrund 2" class="bg-image">
        </div>
        <div class="parallax-layer" id="layer3">
            <img src="star_bg1.png" alt="Hintergrund 3" class="bg-image">
        </div>
        <div class="interactive-layer" id="interactive-layer">
            <!-- Template Card -->
            <div class="card" id="template-card" style="display: none;">
                <div class="card-content"></div>
            </div>
        </div>
    </div>
    <div class="controls" id="controls">
        <div class="position-info" id="position-info"></div>
        <div class="control-sliders">
            <input type="range" id="horizontal-slider" min="-50" max="50" step="1" value="0">
            <input type="range" id="vertical-slider" min="-50" max="50" step="1" value="0" orient="vertical">
            <div class="zoom-control">
                <button class="zoom-button" data-zoom="0.5">--</button>
                <button class="zoom-button" data-zoom="0.8">-</button>
                <button class="zoom-button" data-zoom="1">o</button>
                <button class="zoom-button" data-zoom="1.3">+</button>
                <button class="zoom-button" data-zoom="1.6">++</button>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
    <script src="controls.js"></script>
</body>
</html>

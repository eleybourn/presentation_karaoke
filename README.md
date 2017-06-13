# Presentation Karaoke
2 minutes, random topic, random slides --- GO!

*This is a fork and adaptation of:*
https://github.com/eleybourn/presentation_karaoke

## Demo
You can see a working demo of this version on:
https://regl.io/presentation_karaoke

The original version by @eleybourn can be seen in action here:
http://theagiledirector.com/presentation-karaoke

## How to run
It is designed to be downloaded and run directly on your local computer.
It's pure HTML and Javascript[2], so nothing to install.

1. **Download the application** 
2. **Run `index.html`**
3. **Select a topic set**
4. **Press "Go"**

## How to play
1. **Press "Play"**<br>You can press "New Topic" if you want to pick another random topic
2. **Start talking.**<br>The slides will auto-advance after 10 seconds
3. **Be funny**
4. **Don't read the slides**<br>Use them as a prompt only
5. **Tell a story**
6. **Be funny**
7. **Stop talking after 2 minutes**
8. **Next person**

## Topics
You can add/change topics in the `/config/topics.js` file.

## Slides
You can add/change slides in the `/config/slides.js` file.

## Configuration
You can configure a number of properties in the `/config/config.js` file:
- **duration**<br>
	Duration of presentation in seconds<br>
	*Default: 120*
- **slide_interval**<br>
	Length between transitions in milliseconds<br>
    *Default: 1000*
- **transition**<br>
	0 (None), 1 (Fade), 2 (Slide Top), 3 (Slide Right), 4 (Slide Bottom), 5 (Slide Left), 6 (Carousel Right), 7 (Carousel Left)<br>
	*Default: 1*
- **transition_speed**<br>
	Speed of transition in milliseconds<br>
	*Default: 500*
- **language**<br>
	The language to use.<br>
	Currently only available in EN ()English) and NL (Dutch)<br>
    *Default: EN*
- **custom_translation**<br>
	Here you can override the translation of the strings.<br>
	See the `js/translations.js` file to see what strings you can translate.

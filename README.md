# Presentation Karaoke
1 minute, random topic, random slides --- GO!

Wikipedia describes presentation karaoke as "an improvisational activity in which a participant must deliver a presentation based on a set of slides that they have never seen before."[1] What it doesn't say is that it is absolutely hilarious and fun to play.

It's designed to be downloaded and run locally, but you can also try it out here: http://theagiledirector.com/presentation-karaoke/

## How to run
1. Download the application - it is designed to be downloaded and run directly on your local computer. 
2. Run "index.html" - it's pure HTML and Javascript[2], so nothing to install. 
3. Select a topic set. You can change or add topics to the potential list (a must if you select Freeform)
4. Select a duration. Default is 2 minutes (120 seconds) - 1 minute (60 seconds) is faster and better for novice presenters. 
5. Press "Go" - I'm assuming I don't need to tell you to plug it into a projector or go fullscreen :-)

## How to play
1. Press Play (you can press "New Topic" if you want to pick another random topic)
2. Start talking. The slides will auto-advance after 10 seconds
3. Be funny
4. Don't read the slides, use them as a prompt only
5. Tell a story
6. Be funny
7. Stop talking after 2 minutes (or however long was set)
8. Next person

## Todo
While this application is ready to use right now, there are a few things left to do. 

1. Validate the license on the images in the slides_unval directory. Any images that are not public domain, creative commons or free to use need to be deleted and replaced. 
2. Add more topic sets. Currently only "Agile" and "Freeform"
3. Testing on different browsers and systems (so far only tested on Chrome). 

If you want to help me and add new slides, because of the limitation of Javascript, you need to add the slides then edit js/pk.js to add each file to the list of potential slides. If anyone knows a better way, please feel free to issue a pull request (maybe some sort of autogenerating batch file). e.g.

```javascript
{image : './slides/1-1260977459Qiyi.jpg', title : 'junge Frau Musikhören mit Kopfhörern  - Image Credit: Petr Kratochvil (public domain)', url : 'http://www.publicdomainpictures.net/view-image.php?image=4860&picture=musik-horen&large=1'},
```
 
[1] https://en.wikipedia.org/wiki/Powerpoint-Karaoke
[2] Application based on jquery and the supersized jquery library (http://buildinternet.com/project/supersized/) 

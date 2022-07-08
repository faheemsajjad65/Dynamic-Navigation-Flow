# Skoove Coding Challenge

## The following rules apply:

Please read the [root readme file](https://github.com/Learnfield-GmbH/CodingChallenge/blob/master/README.md).

## The exercise

The application is able to load data from a server and playback the associated audio content.

### The application

1. Fetch the content of the manifest file<sup>1</sup> and show it in a scrollable list. (support reloading the manifest file)
2. Upon clicking on one of the list entries, the application shall navigate to a new screen
3. This new screen displays the content of the selected element. Additionally it shows:
   - A play button on top of the cover image which starts / stops the playback of the associated audio file
   - Audio playback control (load, play, pause and seek)
   - A position slider which updates its position depending on the position of the currently playing audio. It should also be able to control the current audio position with this slider<sup>2</sup>
   - The current play time and the audio duration<sup>2</sup> 

### Footnotes

<sup>1</sup>You can find the [manifest file here](data/manifest.json)

<sup>2</sup>Update the value at an appropriate frequency

### User Interface Mockup
![Simple audio player mockup][Simple audio player mockup]

[Simple audio player mockup]: mockup.jpg

# Skoove Coding Challange

## The following rules apply:

Please read the [root readme file](https://github.com/Learnfield-GmbH/CodingChallenge/blob/master/README.md).

## The exercise

Given this existing React Native application which we are providing, you would need to implement the Tracking SDKs of :
1. Mixpanel
2. AppsFlyer

it is suggested to use an existing module which is officially supported by those tools 

## Introduction to the App Functionality
This is a simple React Native application that allows navigation to 3 screens.
Screen number 1: Is the main screen and it loads an experiment
Screen number 2: Can be "Screen A" or "Screen B" this depends based on the previously loaded experiment
Screen number 3: Displayed after you have interacted with Screen nº2 and returned to the app

### Goal
of this exercise is create an interface layer between the App and the 3rd party Tracking Services. 

Interface should support for the following methods:
- SDK Initialisation
- Event Tracking
- Time Tracking
- Properties Tracking
  - user properts and/or super properties

And allow you to have different implementation of each function in the different tracking services.

To speed up things we provide below are the urls that will give tou the information about [Time tracking methods](https://developer.mixpanel.com/docs/react-native#timing-events) and the concept of [Super properties](https://help.mixpanel.com/hc/en-us/articles/360001355266-Event-Properties#super-properties-for-events).


| Tracking Platform  |  Question to Answer |  
|:-:|:-:|:-:|:-:|:-:|
|  Mixpanel |  How much time users spent on each view |   
|  Mixpanel |  What is the conversion rate to “Screen F” of the different experiment variants (A and B) | 
|  Mixpanel |  Which is the percentage of each selected option on the “Screen A” or “Screen B”  |  
|  AppsFlyer |  New Installations  |  
|  AppsFlyer |  Launches  |   
|  AppsFlyer |  How many users reach "Screen F"  |   



### Tips

- Track the experiment variant as a super (event) property, once, when the experiment is loaded
- Track all the page visits suggestion Event: "Visited Page", Property: "Page Name"
- Track all the button clicks Event: "Clicked Button", Properties: "Page Name", "Button Name" https://en.wikipedia.org/wiki/Flute


### Results

of this exercise should be delivered in two ways:
1. a GitHub branch with your implementation
2. a set of visual reports to the tracking tools
    - for Mixpanel please use your name and create a Dashboard which will be a collection of reports that answer the above questions
    - for Appsflyer you can use the installation event in a report and do a breakdown that will show the acquired users from the 2 campaigns mentioned above.

## Access to the Tracking Tools

- **Mixpanel**: by this time you should have already received an invitation to it. The project that you will be working with has the name ["Coding Challenge"](
https://eu.mixpanel.com/report/2384517). The keys that you will need for development are:
    - Project Token: `37375703bbc312770decb39d2194a4ac`
    - Api Secret: `370434c4457820412dc709e5c34e76ba`

- **AppsFlyer**: likewise you should have already received an invitation to it. The project that you will be working with has the name ["SkooveDevelop"](
https://hq1.appsflyer.com/unified-ltv/dashboard/id1430088267). The keys that you will need for development are:
    - Development Key: `nVxwjFVbTkzsgjosRnYMGZ`
    - App ID: `1430088267`


## Run instructions

 
- Android:
  * Have an Android emulator running (quickest way to get started), or a device connected.
  * `cd tracking\ implementation/ && npx react-native run-android`

- iOS:
  * `cd tracking\ implementation/ && npx react-native run-ios` ***or*** open `tracking\ implementation/ios/skoovesCodingChallenge.xcworkspace` in Xcode ***or*** run `xed -b ios`
  * Click on the Run button


## Troubleshooting
- Make sure the packager is running
- Make sure you have installed all the node modules
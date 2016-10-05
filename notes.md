# From Sublime Text to VSCode
## Intro (2 min - 12:32)
* slides
* app layout
    * different scopes
        * Explorer view - simple view for your files
            * Project focus
        * Find
            * find + replace
        * Git integration
        * Debug
        * Extensions
* actions
* goto anywhere
    * `(greet:20)`
    * `@returnGreeting`
* Terminal integration

## Dev & Debugging (6 min - 12:38)
* development
    * introduce basic app - run in terminal
    * show dir structure
    * introduce `.vscode` dir
        * settings: great for saving workspace settings
        * tasks: establish tasks vscode can run `>Tasks: run task`
        * try running test now.
* debugging
    * debug: why doesn't returnGreeting
        * first time debugging, so we haven't set up a debug launch profile
        * node, it's easy! - change index to app
    * start debugging
        * get :3000/ (no query)
        * why didn't it work?
        * add breakpoint
        * inspect vars
        * `undefined` vs ""

## Best practices, refactoring (6 min - 12:44)
* best practices
    * formatting your code for VSCode
        * documenting functions: 
            * greetings / STATIC_GREETINGS
            * greetings / returnGreeting 
    * refactoring with confidence
        * refactor greetings / static greetings to uppercase
        * refactor greetings / SAILOR to a better name
        * refactor returnGreeting / name var to something else
            * unrelated name should not change
    * git integration

## Fun stuff and close (6 min - 12:50)
* fun stuff
    * markdown preview
    * user config
    * personalization
        * themes
        * icons
    * Extension source
* Slides
    * Chrome Debugger
    * Questions
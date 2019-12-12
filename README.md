# Automation tests for getting started with Cypress

This is the cypress script written in JS to have a jump start to directly getting started with Cypress. It has logging and reporting all set up along with way to make a database connection as well in the browser

## Installation

Clone this repository
 
```bash
https://github.com/gurjeetbains/cypressstarter.git
```
Install the dependencies using  
 
```bash
npm install
```

Open the test runner using below command the runner will open click on any test to run  
 
```bash
npm run openrunner
```
Run Headless  
 
```bash
npm run cypressheadless
```
Run Headed  
 
```bash
npm run cypress
```

## Classification getting covered

This will test the blow classifications for 
```json
{
    "SDU BMDU": ["Classification: COMPLEX -- Complex build complete, no further consent required","Classification: COMPLEX -- Complex build complete"],
    "SDU BROW": ["Classification: SIMPLE -- Complex build complete, no further consent required","Classification: COMPLEX -- Complex build complete"],
    "SDU BROP": ["Classification: SIMPLE -- Complex build complete, no further consent required","Classification: COMPLEX -- Complex build complete"],
    "SDU BROE": ["Classification: SIMPLE -- Complex build complete, network built to ETP, no further consent required","Classification: COMPLEX -- Complex build complete, network built to ETP"],
    "SDU PALI": ["Classification: COMPLEX","Classification: COMPLEX"],
    "SDU PALI": ["Classification: SIMPLE","Classification: SIMPLE"],
    "MDU BMDU": ["Classification: COMPLEX -- Complex build complete, no further consent required","Classification: COMPLEX -- Complex build complete"],
    "MDU BROW": ["Classification: COMPLEX","Classification: COMPLEX"],
    "MDU BROP": ["Classification: COMPLEX","Classification: COMPLEX"],
    "MDU BROE": ["Classification: COMPLEX","Classification: COMPLEX"],
    "MDU PALI": ["Classification: COMPLEX","Classification: COMPLEX"],
    "MDU PALI": ["Classification: COMPLEX","Classification: COMPLEX"],
     "GREENFIELDS": ["Classification: GREENFIELDS", "Classification: GREENFIELDS"],
    "NBAP": ["Classification: MANUAL -- NBAP", "Classification: MANUAL -- NBAP"],
    "BUSINESS": ["Classification: MANUAL -- This is not a residential connection", "Classification: MANUAL -- This is not a residential connection"]
}
```

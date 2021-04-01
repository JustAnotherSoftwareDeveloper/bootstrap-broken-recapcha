# Bootstrap Broke nRecaptcha

## About

This repo was created for my own sanity. When we were using Recaptcha on Mobile Safari, all we got was a white screen. This was true even when we removed all styling in the page. Eventually, I found a styling applied by bootstrap that was causing this issue. I created this repo with the most minimal case to see if bootstrap was indeed the cause. 

## Components 

### Broken Bootstrap component (/broken)

This is the base case with bootstrap and nothing else. This should be broken.

### Fixed Bootstrap Component (/fixed)

This is a page with the css fix applied. It should work

## Results

Both pages work. The error must have been caused by extra styling we were appyling to bootstrap of style tags I missed. I'm leaving this up here on the off chance someone runs into the same problem. 
You can test this extension by visiting any page that contains a link with a rel attribute of 'canonical'.  [Pictures on Flickr](http://www.flickr.com/photos/chrisjroos/3977571976/), for example.

## display-canonical-url.user.js

This is a rewrite of the script described in [this tripwolf post](http://www.tripwolf.com/en/blog/2009/03/17/offtopic-canonical-a-powerful-seo-concept/).

It's currently hosted on [userscripts.org](http://userscripts.org/scripts/show/54133).

## canonical-link-javascript-example.html

I used this file to help me understand the difference between using Element#getAttribute('href') and Element#href.  Using Element#html is favourable because it respects the href of a base element if it's been set.

## display-canonical-urls.user.js

This has been on my desktop for over a year and I've finally got around to looking at it.  It's based on the original script but displays all canonical links on the page.  It does this by adding a little red box to the top left hand corner of the page.  Hovering over this box will reveal a list of links that were found in the page.  I never got around to pushing this to userscripts but it does work.

## History

* 16th Sep 2011 - Moved the code to github.

* 21st Jul 2009 - Some amendments.

* 8th Jul 2009 - First version on googlecode.
This is a rewrite of the script described in [this tripwolf post](http://www.tripwolf.com/en/blog/2009/03/17/offtopic-canonical-a-powerful-seo-concept/).

It's currently hosted on [userscripts.org](http://userscripts.org/scripts/show/54133).

I used the canonical-link-javascript-example.html file to help me understand the difference between using Element#getAttribute('href') and Element#href.  Using Element#html is favourable because it respects the href of a base element if it's been set.
(function() {
  var linksShown = function() {
    return document.getElementById('canonicalLinks').style.display == 'block';
  }

  var linksHidden = function() {
    var displayStyle = document.getElementById('canonicalLinks').style.display;
    return displayStyle == '' || displayStyle == 'none';
  }

  var showLinks = function() {
    if (linksHidden()) {
      console.log('showing links');
      document.getElementById('canonicalLinks').style.display = 'block';
    }
  }

  var hideLinks = function() {
    if (linksShown()) {
      console.log('hiding links');
      document.getElementById('canonicalLinks').style.display = 'none';
    }
  }

  var head = document.getElementsByTagName('head')[0];
  var linkElements = head.getElementsByTagName('link');
  var relCanonicalLinkElements = [];
  var revCanonicalLinkElements = [];

  for (var i = 0; i < linkElements.length; i++) {
    var link = linkElements[i];
    if (/canonical/i.test(link.rel)) {
      relCanonicalLinkElements.push(link.href);
    } else if (/canonical/i.test(link.rev)) {
      revCanonicalLinkElements.push(link.href);
    }
  }

  if ((relCanonicalLinkElements.length + revCanonicalLinkElements.length) > 0) {
    var canonicalToolbox = document.createElement('span');
    canonicalToolbox.id = 'canonicalToolbox';
    canonicalToolbox.style.backgroundColor = '#f00';
    canonicalToolbox.style.padding = '0';
    canonicalToolbox.style.position = 'fixed';
    canonicalToolbox.style.top = '5px';
    canonicalToolbox.style.left = '5px';
    canonicalToolbox.style.width = '15px';
    canonicalToolbox.style.opacity = '0.2';
    canonicalToolbox.style.cursor = 'pointer';
    canonicalToolbox.appendChild(document.createTextNode('.'));
    document.body.appendChild(canonicalToolbox);
  
    var canonicalLinks = document.createElement('ul');
    canonicalLinks.id = 'canonicalLinks';
    canonicalLinks.style.backgroundColor = '#ff0';
    canonicalLinks.style.display = 'none';
    canonicalLinks.style.position = 'fixed';
    canonicalLinks.style.top = '5px';
    canonicalLinks.style.left = '20px';
    canonicalLinks.style.margin = '0';
    canonicalLinks.style.listStyleType = 'none';
    canonicalLinks.style.padding = '3px 10px';
    canonicalLinks.style.zIndex = '999'; 
  
    for (var i = 0; i < relCanonicalLinkElements.length; i++) {
      var li = document.createElement('li');
      li.style.textAlign = 'left';
      var a = document.createElement('a');
      a.href = relCanonicalLinkElements[i];
      a.appendChild(document.createTextNode(relCanonicalLinkElements[i]));
      li.appendChild(document.createTextNode('(rel) '));
      li.appendChild(a);
      canonicalLinks.appendChild(li);
    }
    for (var i = 0; i < revCanonicalLinkElements.length; i++) {
      var li = document.createElement('li');
      li.style.textAlign = 'left';
      var a = document.createElement('a');
      a.href = revCanonicalLinkElements[i];
      a.appendChild(document.createTextNode(revCanonicalLinkElements[i]));
      li.appendChild(document.createTextNode('(rev) '));
      li.appendChild(a);
      canonicalLinks.appendChild(li);
    }
    document.body.appendChild(canonicalLinks);
  
    canonicalToolbox.addEventListener('mouseover', showLinks, false);
    canonicalToolbox.addEventListener('mouseout', hideLinks, false);
  
    canonicalLinks.addEventListener('mouseover', showLinks, false);
    canonicalLinks.addEventListener('mouseout', hideLinks, false);
  }
})()
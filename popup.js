document.addEventListener('DOMContentLoaded', function() {
    const checkPageButton = document.getElementById('grabURL');
    checkPageButton.addEventListener('click', function() {
  
      chrome.tabs.getSelected(null, function(tab) {
        
        // CREATE FORM
        let form = document.createElement('form');
        form.action = 'http://localhost:3000/wishlist';
        form.method = 'post';
        // CREATE HIDDEN URL INPUT FIELD
        let url = document.createElement('input');
        url.type = 'hidden';
        url.name = 'url';
        // GRAB URL VALUE
        url.value = tab.url;
        // CREATE HIDDEN TITLE INPUT FIELD
        let title = document.createElement('input');
        title.type = 'hidden';
        title.name = 'title';
        // GRAB PAGE TITLE
        title.value = tab.title;
        // CREATE HIDDEN IMAGE FIELD
        // let image = document.createElement('img');
        // image.type = 'hidden';
        // image.name = 'image_url';
        // GRAB IMAGE_URL
        // image.value = document.querySelector("meta[property='og:image']").getAttribute("content");
        // CREATE HIDDEN OCCASION FIELD
        let occasion = document.createElement('input');
        occasion.type = 'hidden';
        occasion.name = 'occasion';
        occasion.value = "Main"
        // APPEND URL AND TITLE TO FORM
        form.append(url, title, occasion);
        // APPEND FORM TO DOCUMENT
        document.body.appendChild(form);
        // CALL SUBMIT ON FORM
        form.submit();
      });
    }, false);
  }, false);


// GRAB OG:IMAGE STUFF...

// let imageURL = document.createElement('input');
        // imageURL.type = 'hidden';
        // imageURL.name = "image_url"
        // imageURL.value = "NEED TO FIGURE THIS OUT!!!";
                    // let test = document.createElement('input');
                    // test.type = 'hidden';
                    // test.name = "test_attribute";
                    // test.value = document.querySelector("#")
// let value = document.querySelector("[property~=og:image][content]").content;
// tab.querySelector("meta[property='og:image']").getAttribute("content");
// let value = tab.querySelector('meta[property="og:image"]')['content'];
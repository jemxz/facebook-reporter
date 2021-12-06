module.exports = async function createPosts(page){
    const queryParm1 = "False Information"
    const queryParm2 = "Politics"
    const queryParm3 = "I'm concerned about this post."

    array = [
        "https://m.facebook.com/story.php?story_fbid=10161621612151509&id=5550296508&__tn__=-R",
        "https://m.facebook.com/story.php?story_fbid=10161621572926509&id=5550296508&__tn__=-R"
    ]

    for (let i = 0; i < array.length; i++) {
        try {
            await page.goto(array[i])
        } catch (error) {
            console.log(error);
        }
        ////////////////////////// TOP RIGHT HUMBURGER DROP DOWN CLICKER /////////////////////
        try {
            await page.click('._4s19.sec')      
        } catch (error) {
         console.log(error.message);   
        }
        await page.waitFor(2000)
       
        ////////////////////////// REPORT POST CLICKER /////////////////////////////
        try {
            page.evaluate(query=> {
                const elements =  [...document.querySelectorAll('._56bz._54k8._55i1._58a0.touchable._53n6._53l_')];
                console.log(elements.length);
                const targetElement = elements.find(e=>e.innerText.includes(query));
                targetElement.click()
            }, queryParm3)
              
          } catch (error) {
              console.log(error);
          }
          await page.waitForNavigation();
          await page.waitFor(2000)
    
        ////////////////////////// FALSE INFORMATION CLICKER /////////////////////////////  
        try {
            page.evaluate(query=> {
                const elements =  [...document.querySelectorAll('._4qnz')];
                console.log(elements.length);
                const targetElement = elements.find(e=>e.innerText.includes(query));
                targetElement.click()
            }, queryParm1)
              console.log("stage 1 complete");
          } catch (error) {
              console.log(error);
          }
          await page.waitForNavigation();
          await page.waitFor(2000)
    
          ////////////////////////// POLITICS CLICKER /////////////////////////////////
          try {
            page.evaluate(query=> {
                const elements =  [...document.querySelectorAll('._4qnz')];
                console.log(elements.length);
                const targetElement = elements.find(e=>e.innerText.includes(query));
                targetElement.click()
            }, queryParm2)
            console.log("stage 2 complete");
              
          } catch (error) {
            console.log(error);
          }
          await page.waitForNavigation();
          await page.waitFor(2000)
    
          ////////////////////////// SUBMIT CLICKER /////////////////////////////////
          try {
              page.click('._54k8._52jg._56bs._26vk._56b_._6afu._56bu')
              console.log("reporting done");
          } catch (error) {
              console.log(error);
          }
        
    }
    
}



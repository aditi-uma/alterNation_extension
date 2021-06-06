var contextMenus = {};

contextMenus.createID = 
    chrome.contextMenus.create(
        {"title":"Look up Green Alternatives",
        "contexts" : ["page"]
        },
        function (){
            if(chrome.runtime.lastError){
                console.error(chrome.runtime.lastError.message);
            }
        }
    );

chrome.contextMenus.onClicked.addListener(contextMenuHandler);


function contextMenuHandler(info, tab){

    if(info.menuItemId===contextMenus.createID){
        chrome.tabs.executeScript({
            file: 'js/liftamazondata.js'
          });
          }
}




// this section is for future develepment of the code: I will generate the dom elements based on a object with type text data. It will make the code reusable for other text typing countes, ie. twitter or facebook.

const textTypes = [
    {
        textType: post,
        maxLength:2200,
        displayer: postDisplayer, 
    },
    {
        textType: hashtags,
        maxLength:30,
        displayer: hashtagsDisplayer, 
    },
    {
        textType: direct,
        maxLength:1000,
        displayer: directDisplayer, 
    },
    {
        textType:captionTruncation,
        maxLength:150,
        displayer: captionTruncationDisplayer, 
    }, 
    {
        textType:bio,
        maxLength:150,
        displayer: bioDisplayer, 
    },
    {
        textType:username,
        maxLength:30,
        displayer: usernameDisplayer, 
    },
    {
        textType:profileName,
        maxLength:30,
        displayer: profileNameDisplayer, 
    },
]
module.exports = {
    
    browsers: ['chrome', 'firefox'],

   
    include: ['C:\Users\F1sta\Assignment_Intershala\Login.test.js'], 

 
    concurrency: 2, 



    
    reporter: [
        'spec', 
        {
            name: 'html',
            output: './reports/report.html', 
        },
    ],

    
    test: {
        pageLoadTimeout: 15000, // Set the timeout for page loads (in milliseconds)
        selectorTimeout: 5000, // Set the timeout for waiting for selectors (in milliseconds)
        speed: 1, 
    },
};

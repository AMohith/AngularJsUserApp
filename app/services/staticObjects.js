app.service('staticObjects', function(){
    var countries =  {
        'India': {
            'Andhra Pradesh': ['Vijayawada','Kadapa','Kurnool','Vizag'],
            'Maharashtra': ['Pune', 'Mumbai', 'Nagpur', 'Akola'],
            'Rajasthan': ['Jaipur', 'Ajmer', 'Jodhpur']
        },  
        'USA': {
            'Pennsylvania': ['Philadelphia','Pittsburgh','Gettysburg'],
            'California': ['San Francisco', 'San Diego','San Jose','Oakland'],
            'Illinois': ['Chicago','Aurora'],
            'Maryland': ['Baltimore','Columbia','Annapolis']
        },
        'Canada':{
            'New Brunswick':['Bathurst','Campbellton','Edmundston','Miramichi'],
            'Manitoba' : ['Brandon','Selkirk','Steinbach'],
            'Ontario':['Toronto','Ottawa']
        },
        'Australia': {
            'New South Wales': ['Sydney'],
            'Victoria': ['Melbourne']
        }
    };

    var regEx = {
        name: /^[a-zA-Z ]{3,35}$/,
        emailId: /^[a-zA-Z0-9._&%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        phoneNumber: /^(?!0+$)\d{10}$/,
        password: /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{5,16}$/,
        addressLine: /^[a-zA-Z0-9-:';,./_@& ]{5,100}$/,
        postalCode: /^(?!0+$)\d{6}$/
    };
    
    this.getCountries = function(){
        return countries;
    }

    this.getRegEx = function(){
        return regEx;
    }
});

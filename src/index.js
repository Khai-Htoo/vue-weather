Vue.createApp({
    data() {
        return {
        API_KEY : "243e499099e8448046bae401797a71b7",
        BASE_URl : "https://api.openweathermap.org/data/2.5/",
        searchQuery: "Yangon",
            errorMsg: 'Please enter a valid location or country',
            isError : true,
        weather : {}
       }
    },
   
    methods: {
        async getWeather() {
            const response = await fetch(`${this.BASE_URl}weather?q=${this.searchQuery}&units=metric&appid=${this.API_KEY}`);
            if (response.status === 200) {
                const data = await response.json()
                this.weather = data
                console.log(data);
                   this.isError = true;
            } else {
                this.isError = false;
            }
        },
        getCurrentDate() {
            const currentDate = new Date();
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Auguest', 'September', 'October', 'November', 'December']
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] 
            
            let date = currentDate.getDate();
            let month = months[currentDate.getMonth()];
            let year = currentDate.getFullYear();
            let day = days[currentDate.getDay()];

            return `${date}-${month}-${year} (${day})`
        }
    },
     mounted() {
       this.getWeather() 
    },
}).mount('#app')
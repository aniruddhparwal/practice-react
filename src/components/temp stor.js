const apiCall = async () => {
    // prevent refresh when form is submitted
    // e.preventDefault();
    console.log("apicalllati", lati)
    console.log("apicalllon", lon)
    // const restList = ''
    // const API_KEY = "c648acd3649fb8a0ce09c3ff9a096d4a";
    // const url = `https://maps.googleapis.com/maps/api/place/details/json?location=${lati},${lon}&fields=name,rating &key=AIzaSyAlELmqkRobpn26ReMLLTirp7GHsaW8vy0`;
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lati},${lon}&radius=1500&type=restaurant&key=AIzaSyAlELmqkRobpn26ReMLLTirp7GHsaW8vy0`
    // const url = `${"https://cors-anywhere.herokuapp.com/"}https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lati},${lon}&radius=1500&type=restaurant&key=AIzaSyAlELmqkRobpn26ReMLLTirp7GHsaW8vy0`;
    const request = await axios.get(url).catch((error) => {
        // setError("Error fetching weather information");
        console.log("erre", error)
    });

    const response = request;
    // console.log("apicallresponse", response);
    if (response && response.status !== 200) {
        setError("Error fetching weather information");
    }
    if (response) {
        console.log("Reesponse recived", response)
        console.log("Result Array", response.data.results)
        // restresult = response.data.results;
        if (setFlag) {
            // restresult = response.data.results
            // setRestresult(response.data.results)
            // setRestresult(response.data.results)
            console.log("Result restresut", restresult)

        }

        setFlag = false
        // console.log("Result restresut", restresult)
        // console.log("rest type", restresult.typeof)

    }
    // setRestresult(response.data.results)
};


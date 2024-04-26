function getBotResponse(input) {
    //rock paper scissors

    if (input == "citi") {

        return "Proceed to link http://localhost:8000/company8 ";
    }else if (input == "7.0") {
        return "Not eligible for the company";
        else if (input == "9.9") {
            return "Not eligible for the company";
     else if (input == "db") {
        return "Proceed to link http://localhost:8000/company5";
    } else if (input == "microsoft") {
        return "Proceed to link http://localhost:8000/company7";
    }else if (input == "de shaw") {
        return "Proceed to link http://localhost:8000/company9";
    }else if (input == "flipkart") {
        return "Proceed to link http://localhost:8000/company6";
    }else if (input == "amazon") {
        return "Proceed to link http://localhost:8000/company3";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}

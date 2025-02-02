// Health & Wellness tips and Motivational Messages
const healthTips = [
    "Drink plenty of water throughout the day to stay hydrated.",
    "Make sure to get at least 7-8 hours of sleep every night.",
    "Include a balanced diet with fruits, vegetables, and lean proteins.",
    "Exercise regularly, aim for 30 minutes a day at least 3-5 times a week.",
    "Take short breaks during work or study to improve focus and reduce stress.",
    "Practice mindfulness or meditation to relieve stress and anxiety.",
    "Avoid processed foods and try cooking with whole, natural ingredients.",
    "Make sure to get a good amount of fiber in your diet, such as from oats or vegetables.",
    "Spend time outdoors for fresh air and vitamin D from the sun."
];

const motivationalMessages = [
    "Believe in yourself! Every step you take brings you closer to your goal.",
    "Small changes lead to big results. Keep going!",
    "Your health is your wealth. Invest in yourself.",
    "The journey to a healthier life begins with one step. Keep moving forward.",
    "You are capable of achieving anything. Keep pushing towards your goals!"
];

// Function to get a random tip or motivation
function getRandomResponse() {
    return (Math.random() > 0.5)
        ? healthTips[Math.floor(Math.random() * healthTips.length)]
        : motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
}

// Function to generate and display a tip/message when the button is clicked
function generateTip() {

        const chatbox = document.getElementById('chatbox');
    
        // Clear the chatbox content before adding the new tip
        chatbox.innerHTML = ""; // This is the key change!
    
        const randomResponse = getRandomResponse();
    
        const botMessageDiv = document.createElement('div');
        botMessageDiv.classList.add('bot-message');
        botMessageDiv.textContent = randomResponse;
        chatbox.appendChild(botMessageDiv);
    
        chatbox.scrollTop = chatbox.scrollHeight;
    }

// Add event listener to the button
const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', generateTip);


// *** REMOVE or COMMENT OUT the Input Box Code ***
/*
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

if (userInput && sendButton) {
    // ... (All input box code should be removed or commented out)
}
*/
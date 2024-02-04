const axios = require('axios');

module.exports.config = {
  name: 'ai',
  version: '1.0.0',
};

module.exports.run = async function ({api, event, args }) {
  
  const input = args.join(' ');
  
  if (!input) {
    api.sendMessage(
      `Please provide a question or statement after 'ai'. For example: 'ai What is the capital of France?'`,
      event.threadID,
      event.messageID
    );
    return;
  }

  api.sendMessage(`🔍 "${input}"`, event.threadID, event.messageID);

  try {
    const { data } = await axios.get(`https://openaikey.onrender.com/api?prompt=${encodeURIComponent(input)}`);
    const response = data.response;

    api.sendMessage(`${response}\nThe bot was created on https://kazuma-4caz.onrender.com/, event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while processing your request.', event.threadID, event.messageID);
  }
};




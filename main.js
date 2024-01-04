document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('submitBtn').addEventListener('click', async function () {
    const textToRead = document.getElementById('textToRead').value;

    const url = 'https://bionic-reading1.p.rapidapi.com/convert';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '1ff401a9bamsh72d0a99108d5169p197c8ejsn91b77591a042',
        'X-RapidAPI-Host': 'bionic-reading1.p.rapidapi.com'
      },
      body: new URLSearchParams({
        content: textToRead,
        response_type: 'html',
        request_type: 'html',
        fixation: '1',
        saccade: '10'
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();

      
      document.getElementById('bionicOutput').innerHTML = result;
    } catch (error) {
      console.error(error);
    }
  });
});

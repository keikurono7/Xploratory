const apiKey = 'Yoft5DfNGxkJKY0gf0oUNF1oUkSdHaW1McPdEPk4';

async function getData(apiKey) {
    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
  
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null; // Or handle the error differently (e.g., throw, display an error message)
    }
  }

  getData(apiKey)
      .then(data => {
        if (data) {
          const titleElement = document.getElementById('apod-title');
          const explanationElement = document.getElementById('apod-explanation');
          const imageElement = document.getElementById('apod-image');
          titleElement.textContent = data.title;
          explanationElement.textContent = data.explanation;
          imageElement.src =data.url;
        } else {
          console.error('Failed to retrieve data from NASA APOD.');
        }
      })
      .catch(error => {
        console.error('An unexpected error occurred:', error);
      });
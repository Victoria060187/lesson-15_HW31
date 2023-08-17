const options = [
    { emoji: '😃', count: 0 },
    { emoji: '😄', count: 0 },
    { emoji: '😊', count: 0 },
    { emoji: '😐', count: 0 },
    { emoji: '😕', count: 0 }
  ];
  
  function vote(index) {
    options[index].count++;
    updateResults();
  }
  
  function updateResults() {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
  
    for (let i = 0; i < options.length; i++) {
      const emojiElement = document.createElement('div');
      emojiElement.classList.add('emoji');
      emojiElement.textContent = options[i].emoji;
  
      const voteCount = document.createElement('span');
      voteCount.classList.add('vote-count');
      voteCount.textContent = options[i].count;
      emojiElement.appendChild(voteCount);
  
      emojiElement.addEventListener('click', () => vote(i));
      resultsContainer.appendChild(emojiElement);
    }
  }
  
  window.onload = updateResults;
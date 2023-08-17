const options = [
    { emoji: '😃', count: 0 },
    { emoji: '😄', count: 0 },
    { emoji: '😊', count: 0 },
    { emoji: '😐', count: 0 },
    { emoji: '😕', count: 0 }
  ];
  
  document.addEventListener('DOMContentLoaded', function () {
    const resultsContainer = document.getElementById('results');
  
    resultsContainer.addEventListener('click', function (event) {
      const emojiElement = event.target.closest('.emoji');
      if (!emojiElement) return;
  
      const index = parseInt(emojiElement.getAttribute('data-index'));
      if (isNaN(index)) return;
  
      vote(index);
    });
  
    function vote(index) {
      options[index].count++;
      updateResults();
    }
  
    function updateResults() {
      resultsContainer.innerHTML = '';
  
      for (let i = 0; i < options.length; i++) {
        const emojiElement = document.createElement('div');
        emojiElement.classList.add('emoji');
        emojiElement.setAttribute('data-index', i);
        emojiElement.textContent = options[i].emoji;
  
        const voteCount = document.createElement('span');
        voteCount.classList.add('vote-count');
        voteCount.textContent = options[i].count;
        emojiElement.appendChild(voteCount);
  
        resultsContainer.appendChild(emojiElement);
      }
    }
  
    updateResults();
  });
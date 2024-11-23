// 时间更新逻辑
function fetchTimeFromAPI() {
    fetch('https://worldtimeapi.org/api/ip')
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch time');
            return response.json();
        })
        .then(data => {
            const currentTime = new Date(data.datetime);
            updateClock(currentTime);
        })
        .catch(error => {
            console.error('Error fetching time:', error);
            document.getElementById('time').textContent = '时间加载失败';
        });
}

function updateClock(currentTime) {
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    const dateString = currentTime.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    });

    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('date').textContent = dateString;

    setTimeout(() => updateClock(new Date(currentTime.getTime() + 1000)), 1000);
}

// 名言更新逻辑
function fetchQuote() {
    fetch('https://v1.jinrishici.com/all.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch quote');
            return response.json();
        })
        .then(data => {
            document.getElementById('quote').textContent = data.content;
            document.getElementById('quote-author').textContent = `——${data.author}《${data.origin}》`;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            document.getElementById('quote').textContent = '名言加载失败';
        });
}

// 图片详情逻辑
function fetchImageDetails() {
    fetch('https://api.vvhan.com/api/bing?type=json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch image details');
            return response.json();
        })
        .then(data => {
            const imageInfo = document.getElementById('image-info');
            imageInfo.innerHTML = `
                <img src="images/picture_2.svg" alt="图片图标">
                <span>${data.data.title}</span>
            `;
        })
        .catch(error => {
            console.error('Error fetching image details:', error);
        });
}

// 初始化
window.onload = function () {
    fetchTimeFromAPI();
    fetchQuote();
    fetchImageDetails();
};

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

let timeUpdateInterval;

function updateClock(currentTime) {
    clearInterval(timeUpdateInterval); // 清除之前的定时器，避免重复更新

    function refreshTime() {
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

        currentTime = new Date(currentTime.getTime() + 1000); // 增加1秒
    }

    refreshTime();
    timeUpdateInterval = setInterval(refreshTime, 1000); // 设置新的定时器
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

// 随机每日一图
function randomDailyImage() {
    fetch('https://api.vvhan.com/api/bing?type=json&rand=sj')
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch random image');
            return response.json();
        })
        .then(data => {
            document.querySelector('.background').style.backgroundImage = `url(${data.data.url})`;
            alert('已切换至随机每日一图！');
        })
        .catch(error => {
            console.error('Error fetching random image:', error);
            alert('加载失败，请稍后再试！');
        });
}

// 今日每日一图
function todayDailyImage() {
    fetch('https://api.vvhan.com/api/bing?type=json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch today image');
            return response.json();
        })
        .then(data => {
            document.querySelector('.background').style.backgroundImage = `url(${data.data.url})`;
            alert('已切换至今天每日一图！');
        })
        .catch(error => {
            console.error('Error fetching today image:', error);
            alert('加载失败，请稍后再试！');
        });
}

// 图片详情逻辑
function fetchImageDetails() {
    const imageInfo = document.getElementById('image-info');
    imageInfo.innerHTML = `<span>加载中...</span>`;
    fetch('https://api.vvhan.com/api/bing?type=json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch image details');
            return response.json();
        })
        .then(data => {
            imageInfo.innerHTML = `
                <img src="images/picture_2.svg" alt="图片图标">
                <span>${data.data.title}</span>
            `;
        })
        .catch(error => {
            console.error('Error fetching image details:', error);
            imageInfo.innerHTML = `<span>加载失败，请稍后再试</span>`;
        });
}

// 更新时间按钮绑定点击事件
document.getElementById('refresh-time').addEventListener('click', () => {
    fetchTimeFromAPI();
    alert('时间已更新！');
});

// 初始化
window.onload = function () {
    fetchTimeFromAPI();
    fetchQuote();
    fetchImageDetails();
    document.getElementById('refresh-image').addEventListener('click', randomDailyImage);
    document.getElementById('today-image').addEventListener('click', todayDailyImage);
};

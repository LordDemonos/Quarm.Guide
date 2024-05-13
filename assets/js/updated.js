async function fetchLastCommitDate() {
    const repo = 'LordDemonos/Quarm.Guide';
    const cacheKey = 'lastCommitDate';
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
        const { lastFetched, date } = JSON.parse(cachedData);
        const hoursSinceLastFetch = (new Date() - new Date(lastFetched)) / (1000 * 60 * 60);

        if (hoursSinceLastFetch < 24) {
            return new Date(date).toLocaleDateString();
        }
    }

    const response = await fetch(`https://api.github.com/repos/${repo}/commits`);
    const commits = await response.json();
    const lastCommitDate = new Date(commits[0].commit.committer.date);

    // Update cache
    localStorage.setItem(cacheKey, JSON.stringify({
        lastFetched: new Date(),
        date: lastCommitDate
    }));

    return lastCommitDate.toLocaleDateString();
}

async function updateLastCommitDate() {
    const date = await fetchLastCommitDate();
    document.getElementById('updateDate').textContent = date;
}

document.addEventListener('DOMContentLoaded', updateLastCommitDate);


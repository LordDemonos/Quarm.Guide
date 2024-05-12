async function fetchLastCommitDate() {
    const repo = 'LordDemonos/Quarm.Guide';
    const cacheKey = 'lastCommitDate';
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
        const { lastFetched, date } = JSON.parse(cachedData);
        const hoursSinceLastFetch = (new Date() - new Date(lastFetched)) / (1000 * 60 * 60);
        console.log("Cached data found, hours since last fetch:", hoursSinceLastFetch);

        if (hoursSinceLastFetch < 24) {
            console.log("Using cached date:", new Date(date).toLocaleDateString());
            return new Date(date).toLocaleDateString(); // Return cached date if less than 24 hours have passed
        }
    }

    console.log("Fetching new commit data from GitHub...");
    // Fetch new data if not cached or cache is older than 24 hours
    const response = await fetch(`https://api.github.com/repos/${repo}/commits`);
    const commits = await response.json();
    const lastCommitDate = new Date(commits[0].commit.committer.date);
    console.log("New commit date fetched:", lastCommitDate);

    // Update cache
    localStorage.setItem(cacheKey, JSON.stringify({
        lastFetched: new Date(),
        date: lastCommitDate
    }));

    return lastCommitDate.toLocaleDateString(); // Formats the date
}

async function updateLastCommitDate() {
    const date = await fetchLastCommitDate();
    document.getElementById('updateDate').textContent = date;
}

// Call the function when the page has loaded
document.addEventListener('DOMContentLoaded', updateLastCommitDate);


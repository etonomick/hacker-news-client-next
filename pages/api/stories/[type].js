export default async function handler(req, res) {

    const { type } = req.query

    let ids = await fetch(`https://hacker-news.firebaseio.com/v0/${type}stories.json?print=pretty`).then(res => res.json())
    ids = ids.slice(0, 10)

    let stories = []
    for (const id of ids) {
        const story = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then(res => res.json())
        stories.push(story)
    }

    res.status(200).json(stories)

}
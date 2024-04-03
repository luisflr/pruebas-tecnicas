const readRepo = async (urlOfRepo) => {
  const response = await fetch(urlOfRepo)
  const data = await response.json()
  for( let i = 0; i < 10; i++) {
    console.log({
      commit: `Commit numero ${i + 1}`,
      Hash: data[i].sha,
      Autor: data[i].commit.author.name,
      Message: data[i].commit.message,
      Date: data[i].commit.committer.date
    })
  }
}
readRepo('https://api.github.com/repos/mouredev/hello-git/commits?per_page=10')

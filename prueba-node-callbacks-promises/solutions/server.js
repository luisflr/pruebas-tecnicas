import express from 'express'

export const app = express()

app.use(express.json())

const listItems = [
  {
    id: 1,
    content: 'Item 1'
  }
]

// Obtener todos los elementos
app.get('/items', (req, res) => {
  return res.json(listItems)
})

// Obtener elemento por id
app.get('/items/:id', (req, res) => {
  const { id } = req.params
  const foundItem = listItems.find(item => item.id === Number(id))
  return res.json(foundItem)
})


// Añadir un nuevo elemento
app.post('/items', (req, res) => {
  const { content } = req.body
  const newId = listItems.length + 1
  const newItem = {
    id: newId,
    content
  }
  listItems.push(newItem)
  return res.json(newItem)
})


app.put('/items/:id', (req, res) => {
  const { id } = req.params
  const { content } = req.body
  const foundItem = listItems.find(item => item.id === Number(id))
  foundItem.content = content
  return res.json(foundItem)
})

app.delete('/items/:id', (req, res) => {
  const { id } = req.params
  const indexOfItem = listItems.findIndex(item => item.id === Number(id))
  listItems.splice(indexOfItem, 1)
  return res.json(listItems)
})

export const server = app.listen(process.env.PORT ?? 3000, () => {
  console.log(`server is listening on port ${process.env.PORT ?? 3000}`)
})
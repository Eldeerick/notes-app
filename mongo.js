const mongoose = require('mongoose')

if ( process.argv.length < 3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://elderick:${password}@phonebook-yajra.mongodb.net/note-app?retryWrites=true&w=majority`

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note ({
  content: 'HTML is Easy',
  date: new Date(),
  important: true,
})

note.save().then(() => {
  console.log('note saved!')
  mongoose.connection.close()
})
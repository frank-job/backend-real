import express from 'express';
const NODE_ENV = 'production'
import { fileURLToPath } from 'url';
import path from 'path';
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Tell Express where to find your templates
app.set('views', path.join(__dirname, 'src/views'));
// app.get('/',(req, res)=>{
//     res.send("hello Frank")
// })

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'src/views/home.html'));
// });
app.get('/', async (req, res) => {
    const title = 'Home';
    res.render('home', { title });
});


app.listen(port, ()=>{
     console.log(`Server is running at http://127.0.0.1:${port}`);
     console.log(`Environment: ${NODE_ENV}`);
})
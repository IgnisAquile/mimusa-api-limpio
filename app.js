const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Ruta para obtener datos de ejemplo (sin Firestore por ahora)
app.get('/memoria', (req, res) => {
    const memoria = [
        {
            id: '1',
            tipo_interaccion: 'memoria_creativa',
            contenido: 'Ejemplo de memoria creativa',
            fecha_creacion: new Date()
        },
        {
            id: '2',
            tipo_interaccion: 'inspiracion_narrativa',
            contenido: 'Ejemplo de inspiración narrativa',
            fecha_creacion: new Date()
        }
    ];
    res.status(200).json(memoria);
});

// Ruta para agregar nuevos datos de ejemplo
app.post('/memoria', (req, res) => {
    const nuevaEntrada = req.body;
    res.status(201).send(`Nueva entrada añadida: ${JSON.stringify(nuevaEntrada)}`);
});

app.listen(port, () => {
    console.log(`API ejecutándose en http://localhost:${port}`);
});

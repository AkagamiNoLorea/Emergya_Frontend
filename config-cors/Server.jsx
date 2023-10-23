import express from 'express';
// eslint-disable-next-line no-undef
import cors from 'cors';

const app = express();

// Configura CORS para permitir todas las peticiones de cualquier origen
app.use(cors());

// Tus rutas y middleware van aquí
// app.use('/api', ...);

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});

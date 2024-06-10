const express = require('express');
const app = express();
const PORT = 3000;

// Хранилище соответствия ключевых слов и URL
const keywordURLMap = {
    'keyword1': ['http://example1.com', 'http://example2.com'],
    'keyword2': ['http://test1.com']
};

app.use(express.json());

// Эндпоинт для обработки запросов ключевых слов
app.get('/api/keywords/:keyword', (req, res) => {
    const keyword = req.params.keyword;
    if (keyword in keywordURLMap) {
        res.json(keywordURLMap[keyword]);
    } else {
        res.status(404).json({ error: 'Keyword not found' });
    }
});

// Эндпоинт для скачивания контента
app.get('/api/download/:url', (req, res) => {
    const url = req.params.url;
    // Здесь можно добавить логику для скачивания контента
    // и передачи статуса загрузки обратно клиенту
    res.json({ message: 'Content downloaded successfully' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

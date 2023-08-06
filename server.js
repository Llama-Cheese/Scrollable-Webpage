const express = require('express');
const app = express();
const path = require('path');
const loremIpsum = require('lorem-ipsum').loremIpsum;  // Import loremIpsum function
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/getItems', (req, res) => {
    const items = generateItems(20);
    res.json(items);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

function generateItems(count) {
    const items = [];
    for (let i = 1; i <= count; i++) {
        const item = {
            id: i,
            text: loremIpsum({ count: 1, units: 'sentences' }),  // Use loremIpsum function
        };
        items.push(item);
    }
    return items;
}

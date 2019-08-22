const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const fs = require('fs');
const app = express();


app.use(cors());

app.listen(4000, () => {
    console.log('Server Works !!! At port 4000');
});

app.get('/download', (req,res) => {
        let URL = req.query.URL;
        console.log("url", URL);
        //res.header('Content-Disposition', 'attachment');
        ytdl(URL).pipe(fs.createWriteStream('video.flv'));
});
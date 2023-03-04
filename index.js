const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://animekompi.net/';

axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const anime = $('.bs');
        const animeList = [];

        anime.each(function () {
            const title = $(this).find('a').attr('title');
            const link = $(this).find('a').attr('href');
            const image = $(this).find('img').attr('data-lazy-src');
            const subtitle = $(this).find('.sb').text();
            const status = $(this).find('.epx').text();

            animeList.push({
                title,
                link,
                image,
                subtitle,
                status

            });
        });

        console.log(animeList);
    })
    .catch(console.error);


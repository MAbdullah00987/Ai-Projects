const scrape = require('website-scraper').default;

const options = {
  urls: ['https://heynesh.com/'],
  directory: './heynesh-clone-site',
  sources: [
    {selector: 'img', attr: 'src'},
    {selector: 'link[rel="stylesheet"]', attr: 'href'},
    {selector: 'script', attr: 'src'}
  ]
};

scrape(options).then((result) => {
    console.log("Scraping complete!");
}).catch((err) => {
    console.error("Error:", err);
});

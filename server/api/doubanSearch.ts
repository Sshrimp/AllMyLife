import cheerio from 'cheerio';
import puppeteer from 'puppeteer';
import { CheerioCrawler, Dataset } from 'crawlee';
import { gotScraping } from 'got-scraping';

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const fileName = query.fileName
  let encode;
  if (typeof fileName === 'string') {
    console.log(fileName, 'fileName')
    encode = encodeURIComponent(fileName)
  }
  if(!encode) {
   throw new Error('NO FileName')
  }

  if (encode) {
    const { body } = await gotScraping({ url: `https://www.douban.com/search?cat=1002&q=${encode}` });
    // console.log(body, typeof body, 'bodyyy')

    // 现在可以使用类似 jQuery 的语法来查询和操作 DOM
    // const results = $('.item-root');
    // const data = results.map((i, el) => {
    //   const title = $(el).find('.title').text().trim();
    //   const link = $(el).find('.title a').attr('href');
    //   return { title, link };
    // }).get();
    // console.log(data, results, 'data array')
    //   const loadBody = cheerio.load(body);
    //   const imgUrl = loadBody('.item-root').find('img').attr('src')
    //   console.log(imgUrl, 'imgUrl')
    // // 使用parseFromString方法解析字符串
    return body;
  }
  // const data: any[] = []


  // const browser = await puppeteer.launch();
  // const page = await browser.newPage();
  // await page.goto(`https://movie.douban.com/subject_search?search_text=123`);
  // // await page.goto(`https://www.baidu.com`);
  // // const content = await page.$$eval('div', (el) => {console.log(el); return el;});
  // await page.waitForSelector('.item-root');
  //   // Get the "viewport" of the page, as reported by the page.
  //   const dimensions = await page.evaluate(() => {
  //     console.log(document.querySelectorAll('.item-root'), 'document.documentElement')
  //     return {
  //       ele: document.querySelectorAll('.item-root'),
  //       width: document.documentElement.clientWidth,
  //       height: document.documentElement.clientHeight,
  //       deviceScaleFactor: window.devicePixelRatio
  //     };
  //   });
  // // console.log(content, 'content')
  // await browser.close();
  // // .then(response => response.json())

  // return dimensions;
})

// 不必导入RequestQueue



import { Article } from '../model/article'

export const MOCK_ARTICLES: Article[] = [
  new Article(
    '1',  // id
    'assets/articles/mock/placeholder-image600x300.jpg', // main image
    'Mock-up Article #1', // title

    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +  // contents.
    'Aenean placerat elit diam, eget sodales ipsum tristique in.' +
    'Vestibulum eu lobortis risus. Vestibulum ante ipsum primis in faucibus orci luctus' +
    ' et ultrices posuere cubilia Curae; Nunc pulvinar velit nec suscipit tincidunt.',

    'Hans-Christiaan Braun', // author
    1512936509695 , // date (in milliseconds)
    ['1', '2']  // categories (as id's)
  ),
  new Article(
    '2',
    'assets/articles/mock/placeholder-image600x300.jpg',
    'Mock-up Article #2',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
    'Aenean placerat elit diam, eget sodales ipsum tristique in.' +
    'Vestibulum eu lobortis risus. Vestibulum ante ipsum primis in faucibus orci luctus' +
    ' et ultrices posuere cubilia Curae; Nunc pulvinar velit nec suscipit tincidunt.',
    'Hans-Christiaan Braun',
    1512936509695 ,
    ['1']
  ),
  new Article(
    '3',
    'assets/articles/mock/placeholder-image600x300.jpg',
    'Mock-up Article #3',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
    'Aenean placerat elit diam, eget sodales ipsum tristique in.' +
    'Vestibulum eu lobortis risus. Vestibulum ante ipsum primis in faucibus orci luctus' +
    ' et ultrices posuere cubilia Curae; Nunc pulvinar velit nec suscipit tincidunt.',
    'Hans-Christiaan Braun',
    1512936509695 ,
    ['2']
  )
];  
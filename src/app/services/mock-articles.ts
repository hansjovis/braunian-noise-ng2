import { ArticlePreview } from '../model/article-preview'

export const MOCK_ARTICLES: ArticlePreview[] = [
  new ArticlePreview(
    '1',  // id
    null, // main image
    'Mock-up Article #1', // title

    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +  // contents.
    'Aenean placerat elit diam, eget sodales ipsum tristique in.' +
    'Vestibulum eu lobortis risus. Vestibulum ante ipsum primis in faucibus orci luctus' +
    ' et ultrices posuere cubilia Curae; Nunc pulvinar velit nec suscipit tincidunt.',

    'Hans-Christiaan Braun', // author
    1512936509695 , // date (in milliseconds)
    ['1', '2']  // categories (as id's)
  ),
  new ArticlePreview(
    '2',
    null,
    'Mock-up Article #2',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
    'Aenean placerat elit diam, eget sodales ipsum tristique in.' +
    'Vestibulum eu lobortis risus. Vestibulum ante ipsum primis in faucibus orci luctus' +
    ' et ultrices posuere cubilia Curae; Nunc pulvinar velit nec suscipit tincidunt.',
    'Hans-Christiaan Braun',
    1512936509695 ,
    ['1']
  ),
  new ArticlePreview(
    '3',
    null,
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
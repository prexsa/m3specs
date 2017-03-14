import React from 'react';
import { Grid, Header, Image, Item, List } from 'semantic-ui-react';

const PressReviews = (props) => {
  const articles = props.editorials;
  if(!articles) {
    return <div>Articles Loading...</div>;
  }

  const articlesArray = articles.articles;
  let articless = articlesArray.map((article) => {
    console.log('article: ', article)
    const title = article.title;
    const summary = article.summary;
    const link = article.link.href;
    const author = article.authors[0].name;
    const modelStyle = article.style.submodel.body;

    return (
      <Grid.Row key={article.publishedDate}>
        <Grid.Column width={3}>
          <Header as='h4' color='blue' textAlign='center'>Editorial Reviews</Header>
        </Grid.Column>
        <Grid.Column width={13}>
          <a href={link} target='_blank'>
            <Header as='h4' color='blue'>{title} ({modelStyle})</Header>
            <List.Description>Author: {author}</List.Description>
          </a>
          <div>{summary}</div>
        </Grid.Column>
      </Grid.Row>
    )
  })

  return (
    <div className='margin-top'>
      <Header as='h1' size='huge' color='black' textAlign='center' dividing={true}>EDITORIALS</Header>
        <Grid>
          {articless}
        </Grid>
    </div>
  )
}

export default PressReviews;
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Articles from './Articles'
import Article from './Article'

const ArticleRoutes = () => (
    <Switch>
        <Route exact path='/articles' component={Articles}/>
        <Route path='/article/:id' component={Article}/>
    </Switch>
)


export default ArticleRoutes